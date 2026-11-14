(() => {
  "use strict";

  const STUDY_TAGS = [
    {
      id: "Visual",
      key: "1",
      color: "#0a84ff",
      desc: "Art assets, sprites, textures, portraits, illustrations, or video frames"
    },
    {
      id: "Audio",
      key: "2",
      color: "#bf5af2",
      desc: "Voice acting, narration, sound effects, or music"
    },
    {
      id: "Text",
      key: "3",
      color: "#64d2ff",
      desc: "Dialogue, lore, descriptions, writing, or translations"
    },
    {
      id: "Code",
      key: "4",
      color: "#30d158",
      desc: "Source code, scripts, or shaders generated with AI"
    },
    {
      id: "Prototyping",
      key: "5",
      color: "#ffd60a",
      desc: "Placeholder, brainstorm, or pre-production concept assets"
    },
    {
      id: "Live_Generated",
      key: "6",
      color: "#ff9f0a",
      desc: "Content generated dynamically in-game while playing"
    },
    {
      id: "Marketing",
      key: "7",
      color: "#ff375f",
      desc: "Store page art, capsule images, trailers, or promo materials"
    },
    {
      id: "External_Ai_service",
      key: "8",
      color: "#5e5ce6",
      desc: "Connects to an external AI API/service (OpenAI, Claude, Gemini, etc.)"
    },
    {
      id: "Declares_No_Ai",
      key: "9",
      color: "#8e8e93",
      desc: "Explicitly states the game contains no AI-generated content"
    },
    {
      id: "Unspecified",
      key: "0",
      color: "#ff453a",
      desc: "Mentions AI use without specifying where or how it was used"
    }
  ];

  const state = {
    filename: "steam_games_ai_disclosure_sample_300.csv",
    headers: [],
    rows: [], // array of row objects keyed by header name
    newline: "\r\n",
    colMap: {
      appid: "appid",
      name: "name",
      disclosure: "ai_disclosure",
      manualTags: "ai_tags_manual"
    },
    currentIndex: 0,
    filterStatus: "all", // all | untagged | tagged
    filterTag: "",
    searchQuery: "",
    dirty: false,
    saveMode: "browser", // server | fs-handle | browser
    fileHandle: null,
    serverAvailable: false,
    customTags: []
  };

  // DOM References
  const el = {
    fileNameBadge: document.getElementById("file-name-badge"),
    saveModeBadge: document.getElementById("save-mode-badge"),
    dirtyIndicator: document.getElementById("dirty-indicator"),
    progressLabel: document.getElementById("progress-label"),
    progressPct: document.getElementById("progress-pct"),
    progressFill: document.getElementById("progress-fill"),
    progressTrack: document.querySelector(".progress-track"),
    btnSummary: document.getElementById("btn-summary"),
    btnOpenCsv: document.getElementById("btn-open-csv"),
    fileInputFallback: document.getElementById("file-input-fallback"),
    btnDownloadCsv: document.getElementById("btn-download-csv"),
    btnSaveCsv: document.getElementById("btn-save-csv"),
    searchInput: document.getElementById("search-input"),
    filterTabs: Array.from(document.querySelectorAll(".filter-tab")),
    countAll: document.getElementById("count-all"),
    countUntagged: document.getElementById("count-untagged"),
    countTagged: document.getElementById("count-tagged"),
    tagFilterSelect: document.getElementById("tag-filter-select"),
    queueList: document.getElementById("queue-list"),
    emptyState: document.getElementById("empty-state"),
    btnResetFilters: document.getElementById("btn-reset-filters"),
    editorContent: document.getElementById("editor-content"),
    entryPosition: document.getElementById("entry-position"),
    copyAppidBtn: document.getElementById("copy-appid-btn"),
    gameAppid: document.getElementById("game-appid"),
    steamLink: document.getElementById("steam-link"),
    gameName: document.getElementById("game-name"),
    gameExtraMeta: document.getElementById("game-extra-meta"),
    btnPrev: document.getElementById("btn-prev"),
    btnNext: document.getElementById("btn-next"),
    btnNextUntagged: document.getElementById("btn-next-untagged"),
    disclosureStats: document.getElementById("disclosure-stats"),
    disclosureBody: document.getElementById("disclosure-body"),
    tagGrid: document.getElementById("tag-grid"),
    btnClearTags: document.getElementById("btn-clear-tags"),
    customTagForm: document.getElementById("custom-tag-form"),
    customTagInput: document.getElementById("custom-tag-input"),
    csvValueOutput: document.getElementById("csv-value-output"),
    summaryModal: document.getElementById("summary-modal"),
    summaryModalSub: document.getElementById("summary-modal-sub"),
    summaryStatsGrid: document.getElementById("summary-stats-grid"),
    summaryTableBody: document.getElementById("summary-table-body"),
    btnCloseModal: document.getElementById("btn-close-modal"),
    toast: document.getElementById("toast")
  };

  let toastTimer = null;
  function showToast(message, kind = "info") {
    el.toast.textContent = message;
    el.toast.className = `toast ${kind}`;
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      el.toast.classList.add("hidden");
    }, 2800);
  }

  // =========================================================================
  // RFC 4180 CSV Parser & Serializer
  // =========================================================================
  function parseCSV(rawText) {
    let text = rawText;
    if (text.charCodeAt(0) === 0xfeff) {
      text = text.slice(1);
    }
    const newline = text.includes("\r\n") ? "\r\n" : "\n";

    const rows = [];
    let row = [];
    let field = "";
    let inQuotes = false;

    for (let i = 0; i < text.length; i++) {
      const ch = text[i];

      if (inQuotes) {
        if (ch === '"') {
          if (i + 1 < text.length && text[i + 1] === '"') {
            field += '"';
            i++;
          } else {
            inQuotes = false;
          }
        } else {
          field += ch;
        }
      } else {
        if (ch === '"') {
          inQuotes = true;
        } else if (ch === ",") {
          row.push(field);
          field = "";
        } else if (ch === "\r") {
          if (i + 1 < text.length && text[i + 1] === "\n") {
            i++;
          }
          row.push(field);
          rows.push(row);
          row = [];
          field = "";
        } else if (ch === "\n") {
          row.push(field);
          rows.push(row);
          row = [];
          field = "";
        } else {
          field += ch;
        }
      }
    }

    if (field.length > 0 || row.length > 0) {
      row.push(field);
      rows.push(row);
    }

    // Remove trailing completely empty row if file ended with newline
    while (rows.length > 0 && rows[rows.length - 1].length === 1 && rows[rows.length - 1][0] === "") {
      rows.pop();
    }

    if (rows.length === 0) {
      throw new Error("CSV file is empty.");
    }

    const headers = rows[0].map((h) => h.trim());
    const dataRows = [];
    for (let r = 1; r < rows.length; r++) {
      const values = rows[r];
      const obj = {};
      for (let c = 0; c < headers.length; c++) {
        obj[headers[c]] = values[c] !== undefined ? values[c] : "";
      }
      dataRows.push(obj);
    }

    return { headers, rows: dataRows, newline };
  }

  function escapeCsvField(value) {
    const str = value == null ? "" : String(value);
    if (/[",\r\n]/.test(str)) {
      return `"${str.replace(/"/g, '""')}"`;
    }
    return str;
  }

  function serializeCSV() {
    const nl = state.newline || "\r\n";
    const lines = [state.headers.map(escapeCsvField).join(",")];
    for (const row of state.rows) {
      const line = state.headers.map((h) => escapeCsvField(row[h] ?? "")).join(",");
      lines.push(line);
    }
    return lines.join(nl) + nl;
  }

  // =========================================================================
  // Column Mapping & Tag Helpers
  // =========================================================================
  function detectColumns(headers) {
    const findHeader = (candidates) => {
      for (const cand of candidates) {
        const exact = headers.find((h) => h === cand);
        if (exact) return exact;
      }
      const lowerMap = new Map(headers.map((h) => [h.toLowerCase(), h]));
      for (const cand of candidates) {
        const match = lowerMap.get(cand.toLowerCase());
        if (match) return match;
      }
      return null;
    };

    const appid = findHeader(["appid", "app_id", "steam_appid", "id"]) || headers[0];
    const name = findHeader(["name", "game_name", "title"]) || headers[1] || headers[0];
    const disclosure =
      findHeader(["ai_disclosure", "disclosure", "ai_disclosure_text"]) || headers[2] || headers[0];
    let manualTags = findHeader(["ai_tags_manual"]);

    if (!manualTags) {
      manualTags = "ai_tags_manual";
      headers.push(manualTags);
      for (const row of state.rows) {
        row[manualTags] = "";
      }
    }

    return { appid, name, disclosure, manualTags };
  }

  function parseTagList(raw) {
    if (!raw) return [];
    return raw
      .split("|")
      .map((s) => s.trim())
      .filter(Boolean);
  }

  function getRowTags(row) {
    return parseTagList(row[state.colMap.manualTags]);
  }

  function setRowTags(row, tags) {
    const unique = [];
    const seen = new Set();
    for (const t of tags) {
      const clean = t.trim();
      if (clean && !seen.has(clean)) {
        seen.add(clean);
        unique.push(clean);
      }
    }
    row[state.colMap.manualTags] = unique.join("|");
  }

  function isRowTagged(row) {
    return getRowTags(row).length > 0;
  }

  function storageKey() {
    return `manual-ai-tagger::${state.filename}::${state.rows.length}`;
  }

  function saveLocalBackup() {
    try {
      const payload = {};
      state.rows.forEach((row, idx) => {
        const val = row[state.colMap.manualTags] || "";
        if (val) {
          payload[idx] = val;
        }
      });
      localStorage.setItem(storageKey(), JSON.stringify(payload));
    } catch {
      // Ignore quota errors
    }
  }

  function restoreLocalBackupIfNeeded() {
    try {
      const raw = localStorage.getItem(storageKey());
      if (!raw) return 0;
      const saved = JSON.parse(raw);
      let restoredCount = 0;
      for (const [idxStr, val] of Object.entries(saved)) {
        const idx = Number(idxStr);
        if (
          Number.isInteger(idx) &&
          idx >= 0 &&
          idx < state.rows.length &&
          !state.rows[idx][state.colMap.manualTags] &&
          typeof val === "string" &&
          val.trim()
        ) {
          state.rows[idx][state.colMap.manualTags] = val.trim();
          restoredCount++;
        }
      }
      return restoredCount;
    } catch {
      return 0;
    }
  }

  // =========================================================================
  // Loading CSV Data
  // =========================================================================
  function loadCsvText(csvText, filename, mode, fileHandle = null) {
    const parsed = parseCSV(csvText);
    state.filename = filename;
    state.headers = parsed.headers;
    state.rows = parsed.rows;
    state.newline = parsed.newline;
    state.colMap = detectColumns(state.headers);
    state.saveMode = mode;
    state.fileHandle = fileHandle;
    state.dirty = false;

    const restored = restoreLocalBackupIfNeeded();
    if (restored > 0) {
      state.dirty = true;
      showToast(`Restored ${restored} locally saved tags for ${filename}.`, "info");
    }

    // Collect any non-standard tags already present in the CSV
    const standardIds = new Set(STUDY_TAGS.map((t) => t.id));
    const extras = new Set();
    for (const r of state.rows) {
      for (const t of getRowTags(r)) {
        if (!standardIds.has(t)) extras.add(t);
      }
    }
    state.customTags = Array.from(extras);

    // Jump to first untagged entry if any, else index 0
    const firstUntagged = state.rows.findIndex((r) => !isRowTagged(r));
    state.currentIndex = firstUntagged >= 0 ? firstUntagged : 0;

    populateTagFilterDropdown();
    renderAll();
  }

  async function init() {
    // 1. Check if local Python server is running
    try {
      const healthRes = await fetch("/api/health", { cache: "no-store" });
      if (healthRes.ok) {
        const info = await healthRes.json();
        if (info.ok && info.defaultFile) {
          state.serverAvailable = true;
          const csvRes = await fetch(`/api/csv?file=${encodeURIComponent(info.defaultFile)}`, {
            cache: "no-store"
          });
          if (csvRes.ok) {
            const text = await csvRes.text();
            loadCsvText(text, info.defaultFile, "server");
            return;
          }
        }
      }
    } catch {
      // Not running via server.py; continue to static/fallback checks
    }

    // 2. Try relative static fetch (works if served via python -m http.server, etc.)
    if (window.location.protocol.startsWith("http")) {
      try {
        const res = await fetch("./steam_games_ai_disclosure_sample_300.csv", { cache: "no-store" });
        if (res.ok) {
          const text = await res.text();
          loadCsvText(text, "steam_games_ai_disclosure_sample_300.csv", "browser");
          return;
        }
      } catch {
        // Fall through to embedded default
      }
    }

    // 3. Embedded fallback for direct file:// opening
    if (typeof window.DEFAULT_CSV_TEXT === "string") {
      loadCsvText(
        window.DEFAULT_CSV_TEXT,
        window.DEFAULT_CSV_FILENAME || "steam_games_ai_disclosure_sample_150.csv",
        "browser"
      );
      return;
    }

    showToast("Could not load default CSV. Click 'Open CSV' to load one.", "error");
  }

  // =========================================================================
  // Filtering & Navigation
  // =========================================================================
  function getFilteredIndices() {
    const q = state.searchQuery.trim().toLowerCase();
    const out = [];
    for (let i = 0; i < state.rows.length; i++) {
      const row = state.rows[i];
      const tags = getRowTags(row);
      const tagged = tags.length > 0;

      if (state.filterStatus === "tagged" && !tagged) continue;
      if (state.filterStatus === "untagged" && tagged) continue;
      if (state.filterTag && !tags.includes(state.filterTag)) continue;

      if (q) {
        const appid = String(row[state.colMap.appid] || "").toLowerCase();
        const name = String(row[state.colMap.name] || "").toLowerCase();
        const disc = String(row[state.colMap.disclosure] || "").toLowerCase();
        if (!appid.includes(q) && !name.includes(q) && !disc.includes(q)) continue;
      }

      out.push(i);
    }
    return out;
  }

  function moveRelative(delta) {
    const visible = getFilteredIndices();
    if (visible.length === 0) return;
    const pos = visible.indexOf(state.currentIndex);
    if (pos === -1) {
      state.currentIndex = visible[0];
    } else {
      const nextPos = Math.max(0, Math.min(visible.length - 1, pos + delta));
      state.currentIndex = visible[nextPos];
    }
    renderEditorAndQueueSelection();
  }

  function jumpNextUntagged() {
    const n = state.rows.length;
    if (n === 0) return;
    for (let offset = 1; offset <= n; offset++) {
      const idx = (state.currentIndex + offset) % n;
      if (!isRowTagged(state.rows[idx])) {
        state.currentIndex = idx;
        renderEditorAndQueueSelection();
        return;
      }
    }
    showToast("All entries in this CSV are tagged!", "success");
  }

  // =========================================================================
  // Tag Mutation & Saving
  // =========================================================================
  function onTagsChanged() {
    state.dirty = true;
    saveLocalBackup();
    renderProgress();
    renderTagButtons();
    renderCsvPreview();
    updateCurrentQueueItem();
    updateHeaderBadges();
  }

  function toggleTag(tagId) {
    const row = state.rows[state.currentIndex];
    if (!row) return;
    const tags = getRowTags(row);
    const idx = tags.indexOf(tagId);
    if (idx >= 0) {
      tags.splice(idx, 1);
    } else {
      tags.push(tagId);
    }
    setRowTags(row, tags);
    onTagsChanged();
  }

  function clearCurrentTags() {
    const row = state.rows[state.currentIndex];
    if (!row) return;
    if (getRowTags(row).length === 0) return;
    setRowTags(row, []);
    onTagsChanged();
  }

  function downloadCsvFile() {
    const csvContent = serializeCSV();
    const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = state.filename || "steam_games_ai_disclosure_sample_150.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
    state.dirty = false;
    updateHeaderBadges();
    showToast(`Exported ${state.filename} with ai_tags_manual column.`, "success");
  }

  async function saveToTarget({ quiet = false } = {}) {
    const csvContent = serializeCSV();

    if (state.saveMode === "server" && state.serverAvailable) {
      try {
        const res = await fetch("/api/save", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ filename: state.filename, content: csvContent })
        });
        const data = await res.json();
        if (!res.ok || !data.ok) {
          throw new Error(data.error || "Server save failed");
        }
        state.dirty = false;
        saveLocalBackup();
        updateHeaderBadges();
        if (!quiet) showToast(`Saved directly into ${state.filename}`, "success");
        return;
      } catch (err) {
        showToast(`Save error: ${err.message}`, "error");
        return;
      }
    }

    if (state.saveMode === "fs-handle" && state.fileHandle) {
      try {
        const perm = await state.fileHandle.requestPermission({ mode: "readwrite" });
        if (perm !== "granted") {
          throw new Error("Write permission denied");
        }
        const writable = await state.fileHandle.createWritable();
        await writable.write(csvContent);
        await writable.close();
        state.dirty = false;
        saveLocalBackup();
        updateHeaderBadges();
        if (!quiet) showToast(`Saved directly into ${state.filename}`, "success");
        return;
      } catch (err) {
        showToast(`Could not overwrite file directly (${err.message}). Downloading instead.`, "error");
      }
    }

    // Fallback: download with exact same filename
    downloadCsvFile();
  }

  async function openCsvPicker() {
    if (typeof window.showOpenFilePicker === "function") {
      try {
        const [handle] = await window.showOpenFilePicker({
          types: [
            {
              description: "CSV Files",
              accept: { "text/csv": [".csv"] }
            }
          ],
          multiple: false
        });
        const file = await handle.getFile();
        const text = await file.text();
        loadCsvText(text, file.name, "fs-handle", handle);
        showToast(`Loaded ${file.name} (direct save enabled)`, "success");
        return;
      } catch (err) {
        if (err && err.name === "AbortError") return;
      }
    }
    el.fileInputFallback.click();
  }

  // =========================================================================
  // Rendering
  // =========================================================================
  function updateHeaderBadges() {
    el.fileNameBadge.textContent = state.filename;
    if (state.saveMode === "server") {
      el.saveModeBadge.textContent = "Direct Disk Save (Local Server)";
      el.saveModeBadge.classList.remove("browser-only");
      el.btnSaveCsv.textContent = "Save to CSV";
    } else if (state.saveMode === "fs-handle") {
      el.saveModeBadge.textContent = "Direct Save (Linked File)";
      el.saveModeBadge.classList.remove("browser-only");
      el.btnSaveCsv.textContent = "Save to CSV";
    } else {
      el.saveModeBadge.textContent = "Browser Mode (Export CSV)";
      el.saveModeBadge.classList.add("browser-only");
      el.btnSaveCsv.textContent = "Export to CSV";
    }

    el.dirtyIndicator.classList.toggle("hidden", !state.dirty);
  }

  function renderProgress() {
    const total = state.rows.length;
    let taggedCount = 0;
    for (const r of state.rows) {
      if (isRowTagged(r)) taggedCount++;
    }
    const untaggedCount = total - taggedCount;
    const pct = total > 0 ? Math.round((taggedCount / total) * 100) : 0;

    el.progressLabel.textContent = `${taggedCount} / ${total} tagged`;
    el.progressPct.textContent = `${pct}%`;
    el.progressFill.style.width = `${pct}%`;
    el.progressTrack.setAttribute("aria-valuenow", String(pct));

    el.countAll.textContent = String(total);
    el.countUntagged.textContent = String(untaggedCount);
    el.countTagged.textContent = String(taggedCount);
  }

  function populateTagFilterDropdown() {
    const current = state.filterTag;
    const allTagIds = [...STUDY_TAGS.map((t) => t.id), ...state.customTags];
    el.tagFilterSelect.innerHTML = `<option value="">Filter by assigned tag: Any</option>`;
    for (const id of allTagIds) {
      const opt = document.createElement("option");
      opt.value = id;
      opt.textContent = `Tag: ${id}`;
      el.tagFilterSelect.appendChild(opt);
    }
    el.tagFilterSelect.value = current;
  }

  function renderQueue() {
    const visible = getFilteredIndices();
    el.queueList.innerHTML = "";

    const fragment = document.createDocumentFragment();
    for (const idx of visible) {
      const row = state.rows[idx];
      const tags = getRowTags(row);
      const item = document.createElement("button");
      item.type = "button";
      item.className = `queue-item${idx === state.currentIndex ? " active" : ""}`;
      item.dataset.index = String(idx);

      const top = document.createElement("div");
      top.className = "queue-item-top";

      const idSpan = document.createElement("span");
      idSpan.className = "queue-item-id";
      idSpan.textContent = `#${idx + 1} · ${row[state.colMap.appid] || "—"}`;

      const dot = document.createElement("span");
      dot.className = `status-dot${tags.length > 0 ? " tagged" : ""}`;

      top.appendChild(idSpan);
      top.appendChild(dot);

      const nameDiv = document.createElement("div");
      nameDiv.className = "queue-item-name";
      nameDiv.textContent = row[state.colMap.name] || "(Unnamed)";

      item.appendChild(top);
      item.appendChild(nameDiv);

      if (tags.length > 0) {
        const tagsDiv = document.createElement("div");
        tagsDiv.className = "queue-item-tags";
        tagsDiv.textContent = tags.join(" | ");
        item.appendChild(tagsDiv);
      }

      item.addEventListener("click", () => {
        state.currentIndex = idx;
        renderEditorAndQueueSelection();
      });

      fragment.appendChild(item);
    }

    el.queueList.appendChild(fragment);

    const hasVisible = visible.length > 0;
    el.emptyState.classList.toggle("hidden", hasVisible);
    el.editorContent.classList.toggle("hidden", !hasVisible);
  }

  function updateCurrentQueueItem() {
    const row = state.rows[state.currentIndex];
    const item = el.queueList.querySelector(`.queue-item[data-index="${state.currentIndex}"]`);
    if (!row || !item) return;

    const tags = getRowTags(row);
    const dot = item.querySelector(".status-dot");
    if (dot) {
      dot.className = `status-dot${tags.length > 0 ? " tagged" : ""}`;
    }

    let tagsDiv = item.querySelector(".queue-item-tags");
    if (tags.length > 0) {
      if (!tagsDiv) {
        tagsDiv = document.createElement("div");
        tagsDiv.className = "queue-item-tags";
        item.appendChild(tagsDiv);
      }
      tagsDiv.textContent = tags.join(" | ");
    } else if (tagsDiv) {
      tagsDiv.remove();
    }
  }

  function renderDisclosureText(text) {
    el.disclosureBody.textContent = text || "(No AI disclosure text)";
  }

  function renderTagButtons() {
    const row = state.rows[state.currentIndex];
    const selected = new Set(row ? getRowTags(row) : []);
    el.tagGrid.innerHTML = "";

    const allTags = [
      ...STUDY_TAGS,
      ...state.customTags.map((id) => ({
        id,
        key: "",
        color: "#64d2ff",
        desc: "Custom tag"
      }))
    ];

    for (const tag of allTags) {
      const btn = document.createElement("button");
      btn.type = "button";
      btn.className = `tag-btn${selected.has(tag.id) ? " selected" : ""}`;
      btn.style.setProperty("--tag-color", tag.color);

      const top = document.createElement("div");
      top.className = "tag-btn-top";

      const nameWrap = document.createElement("span");
      nameWrap.className = "tag-name-wrap";

      const swatch = document.createElement("span");
      swatch.className = "tag-swatch";

      const label = document.createElement("span");
      label.textContent = tag.id;

      nameWrap.appendChild(swatch);
      nameWrap.appendChild(label);
      top.appendChild(nameWrap);

      if (tag.key) {
        const kbd = document.createElement("span");
        kbd.className = "tag-kbd";
        kbd.textContent = tag.key;
        top.appendChild(kbd);
      }

      const desc = document.createElement("div");
      desc.className = "tag-desc";
      desc.textContent = tag.desc;

      btn.appendChild(top);
      btn.appendChild(desc);
      btn.addEventListener("click", () => toggleTag(tag.id));
      el.tagGrid.appendChild(btn);
    }
  }

  function renderCsvPreview() {
    const row = state.rows[state.currentIndex];
    const val = row ? row[state.colMap.manualTags] || "" : "";
    el.csvValueOutput.textContent = val || "(empty)";
  }

  function renderEditor() {
    const row = state.rows[state.currentIndex];
    if (!row) return;

    const appid = String(row[state.colMap.appid] || "").trim();
    const name = String(row[state.colMap.name] || "").trim();
    const disclosure = String(row[state.colMap.disclosure] || "").trim();

    el.entryPosition.textContent = `#${state.currentIndex + 1} of ${state.rows.length}`;
    el.gameAppid.textContent = appid || "—";
    el.steamLink.href = appid ? `https://store.steampowered.com/app/${encodeURIComponent(appid)}/` : "#";
    el.gameName.textContent = name || "(Unnamed Game)";

    // Extra metadata chips if present in CSV
    el.gameExtraMeta.innerHTML = "";
    const metaFields = [
      ["release_date", "Release"],
      ["review_count", "Reviews"],
      ["review_desc", "Rating"],
      ["base_price_usd", "Price USD"],
      ["mature_content", "Mature"]
    ];
    for (const [col, label] of metaFields) {
      if (row[col] !== undefined && row[col] !== "") {
        const chip = document.createElement("span");
        chip.className = "meta-chip";
        chip.textContent = `${label}: ${col === "base_price_usd" ? `$${row[col]}` : row[col]}`;
        el.gameExtraMeta.appendChild(chip);
      }
    }

    const words = disclosure ? disclosure.split(/\s+/).length : 0;
    el.disclosureStats.textContent = `${words} words · ${disclosure.length} chars`;
    renderDisclosureText(disclosure);

    const visible = getFilteredIndices();
    const pos = visible.indexOf(state.currentIndex);
    el.btnPrev.disabled = pos <= 0;
    el.btnNext.disabled = pos === -1 || pos >= visible.length - 1;

    renderTagButtons();
    renderCsvPreview();
  }

  function renderEditorAndQueueSelection() {
    const prevActive = el.queueList.querySelector(".queue-item.active");
    if (prevActive) prevActive.classList.remove("active");
    const nextActive = el.queueList.querySelector(`.queue-item[data-index="${state.currentIndex}"]`);
    if (nextActive) {
      nextActive.classList.add("active");
      nextActive.scrollIntoView({ block: "nearest" });
    }
    renderEditor();
  }

  function renderAll() {
    updateHeaderBadges();
    renderProgress();
    renderQueue();
    renderEditor();
  }

  // =========================================================================
  // Summary Modal
  // =========================================================================
  function openSummaryModal() {
    const counts = new Map();
    for (const t of STUDY_TAGS) counts.set(t.id, 0);
    let taggedRows = 0;

    for (const row of state.rows) {
      const tags = getRowTags(row);
      if (tags.length > 0) taggedRows++;
      for (const t of tags) {
        counts.set(t, (counts.get(t) || 0) + 1);
      }
    }

    el.summaryModalSub.textContent = `${taggedRows} of ${state.rows.length} entries tagged (${state.filename})`;
    el.summaryStatsGrid.innerHTML = "";
    for (const [tag, count] of counts.entries()) {
      const box = document.createElement("div");
      box.className = "stat-box";
      box.innerHTML = `<div class="stat-box-label"></div><div class="stat-box-val"></div>`;
      box.querySelector(".stat-box-label").textContent = tag;
      box.querySelector(".stat-box-val").textContent = String(count);
      el.summaryStatsGrid.appendChild(box);
    }

    el.summaryTableBody.innerHTML = "";
    const frag = document.createDocumentFragment();
    state.rows.forEach((row, idx) => {
      const tr = document.createElement("tr");
      const disc = String(row[state.colMap.disclosure] || "");
      const preview = disc.length > 140 ? `${disc.slice(0, 140)}…` : disc;

      const tdIdx = document.createElement("td");
      tdIdx.textContent = String(idx + 1);
      const tdId = document.createElement("td");
      tdId.textContent = row[state.colMap.appid] || "";
      const tdName = document.createElement("td");
      tdName.textContent = row[state.colMap.name] || "";
      const tdDisc = document.createElement("td");
      tdDisc.textContent = preview;
      const tdTags = document.createElement("td");
      tdTags.textContent = row[state.colMap.manualTags] || "—";

      tr.append(tdIdx, tdId, tdName, tdDisc, tdTags);
      tr.addEventListener("click", () => {
        state.currentIndex = idx;
        state.filterStatus = "all";
        state.filterTag = "";
        state.searchQuery = "";
        el.searchInput.value = "";
        el.tagFilterSelect.value = "";
        el.filterTabs.forEach((b) => b.classList.toggle("active", b.dataset.filter === "all"));
        el.summaryModal.classList.add("hidden");
        renderAll();
      });
      frag.appendChild(tr);
    });
    el.summaryTableBody.appendChild(frag);
    el.summaryModal.classList.remove("hidden");
  }

  // =========================================================================
  // Event Listeners & Keyboard Shortcuts
  // =========================================================================
  el.searchInput.addEventListener("input", (e) => {
    state.searchQuery = e.target.value;
    const visible = getFilteredIndices();
    if (visible.length > 0 && !visible.includes(state.currentIndex)) {
      state.currentIndex = visible[0];
    }
    renderQueue();
    renderEditor();
  });

  el.filterTabs.forEach((tab) => {
    tab.addEventListener("click", () => {
      state.filterStatus = tab.dataset.filter;
      el.filterTabs.forEach((b) => b.classList.toggle("active", b === tab));
      const visible = getFilteredIndices();
      if (visible.length > 0 && !visible.includes(state.currentIndex)) {
        state.currentIndex = visible[0];
      }
      renderQueue();
      renderEditor();
    });
  });

  el.tagFilterSelect.addEventListener("change", (e) => {
    state.filterTag = e.target.value;
    const visible = getFilteredIndices();
    if (visible.length > 0 && !visible.includes(state.currentIndex)) {
      state.currentIndex = visible[0];
    }
    renderQueue();
    renderEditor();
  });

  el.btnResetFilters.addEventListener("click", () => {
    state.filterStatus = "all";
    state.filterTag = "";
    state.searchQuery = "";
    el.searchInput.value = "";
    el.tagFilterSelect.value = "";
    el.filterTabs.forEach((b) => b.classList.toggle("active", b.dataset.filter === "all"));
    if (state.rows.length > 0) state.currentIndex = 0;
    renderAll();
  });

  el.btnPrev.addEventListener("click", () => moveRelative(-1));
  el.btnNext.addEventListener("click", () => moveRelative(1));
  el.btnNextUntagged.addEventListener("click", jumpNextUntagged);
  el.btnClearTags.addEventListener("click", clearCurrentTags);

  el.copyAppidBtn.addEventListener("click", async () => {
    const id = el.gameAppid.textContent;
    if (!id || id === "—") return;
    try {
      await navigator.clipboard.writeText(id);
      showToast(`Copied AppId ${id}`, "info");
    } catch {
      showToast(`AppId: ${id}`, "info");
    }
  });

  el.customTagForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const raw = el.customTagInput.value.trim().replace(/\|/g, "_");
    if (!raw) return;
    const standardIds = new Set(STUDY_TAGS.map((t) => t.id));
    if (!standardIds.has(raw) && !state.customTags.includes(raw)) {
      state.customTags.push(raw);
      populateTagFilterDropdown();
    }
    const row = state.rows[state.currentIndex];
    if (row) {
      const tags = getRowTags(row);
      if (!tags.includes(raw)) {
        tags.push(raw);
        setRowTags(row, tags);
        onTagsChanged();
      }
    }
    el.customTagInput.value = "";
  });

  el.btnSaveCsv.addEventListener("click", () => saveToTarget({ quiet: false }));
  el.btnDownloadCsv.addEventListener("click", downloadCsvFile);
  el.btnOpenCsv.addEventListener("click", openCsvPicker);

  el.fileInputFallback.addEventListener("change", async (e) => {
    const file = e.target.files && e.target.files[0];
    if (!file) return;
    const text = await file.text();
    loadCsvText(text, file.name, "browser");
    showToast(`Loaded ${file.name}`, "success");
    e.target.value = "";
  });

  // Drag & Drop CSV loading
  window.addEventListener("dragover", (e) => e.preventDefault());
  window.addEventListener("drop", async (e) => {
    e.preventDefault();
    const file = e.dataTransfer && e.dataTransfer.files && e.dataTransfer.files[0];
    if (!file || !file.name.toLowerCase().endsWith(".csv")) return;
    const text = await file.text();
    loadCsvText(text, file.name, "browser");
    showToast(`Loaded ${file.name}`, "success");
  });

  el.btnSummary.addEventListener("click", openSummaryModal);
  el.btnCloseModal.addEventListener("click", () => el.summaryModal.classList.add("hidden"));
  el.summaryModal.addEventListener("click", (e) => {
    if (e.target === el.summaryModal) el.summaryModal.classList.add("hidden");
  });

  // Keyboard shortcuts
  window.addEventListener("keydown", (e) => {
    if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "s") {
      e.preventDefault();
      saveToTarget({ quiet: false });
      return;
    }

    if (e.key === "Escape" && !el.summaryModal.classList.contains("hidden")) {
      el.summaryModal.classList.add("hidden");
      return;
    }

    const activeTag = document.activeElement ? document.activeElement.tagName : "";
    if (activeTag === "INPUT" || activeTag === "TEXTAREA" || activeTag === "SELECT") {
      return;
    }

    const tagByKey = STUDY_TAGS.find((t) => t.key === e.key);
    if (tagByKey) {
      e.preventDefault();
      toggleTag(tagByKey.id);
      return;
    }

    if (e.key === "ArrowLeft" || e.key.toLowerCase() === "k") {
      e.preventDefault();
      moveRelative(-1);
    } else if (e.key === "ArrowRight" || e.key.toLowerCase() === "j") {
      e.preventDefault();
      moveRelative(1);
    } else if (e.key === "Enter" || e.key.toLowerCase() === "n") {
      e.preventDefault();
      jumpNextUntagged();
    } else if (e.key.toLowerCase() === "c") {
      e.preventDefault();
      clearCurrentTags();
    } else if (e.key === "/") {
      e.preventDefault();
      el.searchInput.focus();
    }
  });

  window.addEventListener("beforeunload", (e) => {
    if (state.dirty) {
      e.preventDefault();
      e.returnValue = "";
    }
  });

  init();
})();
