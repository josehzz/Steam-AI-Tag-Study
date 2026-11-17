# Steam AI Tag Study

An interactive data study analyzing the relevance and impact of the Steam AI disclosure tag across 63,798 games released between January 1, 2024 and November 6, 2026.

## Live Site

Hosted via GitHub Pages at: https://josehzz.github.io/Steam-AI-Tag-Study/

## Article Overview

Read a full written overview of the study and key findings on Medium:
- [Nearly Half of New Steam Releases Now Disclose AI (Medium)](https://medium.com/@josehzz112/nearly-half-of-new-steam-releases-now-disclose-ai-b25a482e7378)

## Dataset

Download the full 63,798-game dataset (including Steam metadata, review metrics, disclosure text, and LLM-classified `ai_tags`) on Kaggle:
- [Steam Games Jan 2024 – Nov 2026 with AI Tags (Kaggle)](https://www.kaggle.com/datasets/josehzz/steam-games-jan2024-nov2026-with-ai-tags/data)

## Manual AI Disclosure Tagger

To audit and validate the LLM classification against human ground truth, this repository includes a lightweight manual tagging web tool:
- [Manual AI Disclosure Tagger](Manual%20AI%20Disclosure%20Tagging/index.html)

### How to Use It
1. **Run locally with direct CSV saving (recommended):**
   - Double-click `Manual AI Disclosure Tagging/Launch Tagger.command` (macOS) or run `python3 server.py` inside the `Manual AI Disclosure Tagging/` folder, then open the printed `http://127.0.0.1:8765/` URL.
   - This automatically loads `steam_games_ai_disclosure_sample_300.csv` and lets **Save to CSV** write directly to disk.
2. **Or open directly in your browser:**
   - Open [Manual AI Disclosure Tagging/index.html](Manual%20AI%20Disclosure%20Tagging/index.html) directly (or via GitHub Pages). It loads the built-in 300-game sample automatically, or you can click **Open CSV** to load any `.csv` file with `appid`, `name`, and `ai_disclosure` columns, and click **Download CSV** when finished.
3. **Tagging controls & shortcuts:**
   - Press **`1`–`9`** and **`0`** (or click tag pills) to toggle one or more of the 10 AI disclosure tags (`ai_tags_manual`).
   - Press **`←` / `→`** (or **`K` / `J`**) to move between entries, **`Enter` / `N`** to jump to the next untagged entry, **`C`** to clear tags, **`/`** to search, and **`Cmd/Ctrl + S`** to save.
   - Click **Summary & Table** in the top bar to view tag counts and exportable progress.

## License

The project files (`index.html`, `styles.css`, `app.js`, `study_data_extended.js`, and associated site assets) are licensed under the **MIT License** — see [LICENSE](LICENSE) for full terms.
