/*
 * Copyright (c) 2026 Jose Hernandez (josehzz)
 * Licensed under the MIT License. See LICENSE for full terms.
 */
// Exact aggregated dataset from steam_games_ai_tagged.csv (63,798 games released Jan 1, 2024 – Nov 2, 2026)
const INTRO_QUESTIONS = [
  {
    num: "01",
    color: "cyan",
    question: "What?",
    answer: "A study of how relevant is the AI tag for steam games (plus some extras for fun)"
  },
  {
    num: "02",
    color: "purple",
    question: "Who?",
    answer: "I'm Jose a Game Developer, Data Analyst and a Human from Venezuela"
  },
  {
    num: "03",
    color: "orange",
    question: "Why?",
    answer: "I and many other game developers feel overwhelmed by how much polarization AI technology is causing"
  },
  {
    num: "04",
    color: "green",
    question: "How?",
    answer: "I scrapped data from Steam and used some beautiful mathematics and graphics to understand ugly spreadsheets of data"
  },
  {
    num: "05",
    color: "yellow",
    question: "When?",
    answer: "Data collected is from public games released on steam from Jan-01-2024 up to Nov-02-2026"
  },
  {
    num: "06",
    color: "red",
    question: "Why? (again)",
    answer: "I choose that date because Steam implemented the AI disclosure tag on Jan-2024, and I'm trying to build my portfolio with a fun data visualization project"
  }
];

const STUDY_DATA = {
  overall: {
    total: 63798,
    disclosedTotal: 17014,
    counts: { FALSE: 48470, TRUE: 15218, MAYBE: 110 },
    avgScore: { FALSE: 81.6, TRUE: 76.6, MAYBE: 76.2 },
    medianReviews: { FALSE: 10, TRUE: 3, MAYBE: 5 },
    tagCounts: {
      Visual: 12006,
      Marketing: 4735,
      Audio: 4368,
      Text: 4055,
      Code: 1977,
      Prototyping: 616,
      Live_Generated: 375,
      Unspecified: 207,
      External_Ai_service: 197,
      Declares_No_Ai: 116
    },
    topGames: {
      TRUE: [
        { name: "ARC Raiders", appid: "1808500", reviews: 204642, score: 81.0, ai_tags: "Unspecified", desc: "Very Positive" },
        { name: "Where Winds Meet", appid: "3564740", reviews: 65041, score: 86.0, ai_tags: "Audio|Text|Live_Generated", desc: "Very Positive" },
        { name: "Crimson Desert Enhanced", appid: "3321460", reviews: 64035, score: 86.0, ai_tags: "Visual", desc: "Very Positive" },
        { name: "Dark and Darker", appid: "2016590", reviews: 50408, score: 62.0, ai_tags: "Visual", desc: "Mixed" }
      ],
      FALSE: [
        { name: "HELLDIVERS™ 2", appid: "553850", reviews: 642580, score: 79.0, ai_tags: "", desc: "Mostly Positive" },
        { name: "Marvel Rivals", appid: "2767030", reviews: 307049, score: 75.0, ai_tags: "", desc: "Mostly Positive" },
        { name: "Valheim", appid: "892970", reviews: 267852, score: 94.0, ai_tags: "", desc: "Very Positive" },
        { name: "Schedule I", appid: "3164500", reviews: 204584, score: 97.0, ai_tags: "", desc: "Overwhelmingly Positive" }
      ],
      MAYBE: [
        { name: "Sudden Attack Zero Point", appid: "3576070", reviews: 1792, score: 31.0, ai_tags: "Prototyping", desc: "Mostly Negative" },
        { name: "HexBreaker Ⅱ", appid: "3399780", reviews: 1063, score: 64.0, ai_tags: "Prototyping", desc: "Mixed" },
        { name: "Wet Wealth", appid: "4293850", reviews: 813, score: 70.0, ai_tags: "Prototyping|Marketing", desc: "Mostly Positive" },
        { name: "Terra Firma", appid: "1482770", reviews: 608, score: 93.0, ai_tags: "Prototyping", desc: "Very Positive" }
      ]
    }
  },
  tiers: [
    {
      id: "0",
      shortLabel: "0",
      fullLabel: "0 Reviews (No Traction)",
      counts: { FALSE: 6341, TRUE: 3521, MAYBE: 25 },
      total: 9887,
      avgScore: { FALSE: 0.0, TRUE: 0.0, MAYBE: 0.0 },
      tagCounts: {
        Visual: 2818, Marketing: 1344, Audio: 1072, Text: 1041, Code: 628,
        Prototyping: 128, Live_Generated: 52, Unspecified: 52, External_Ai_service: 19, Declares_No_Ai: 17
      },
      insight: "In the 0-review tier (9,887 games), AI-used games reach their highest concentration at 35.61%—nearly 1.5× their overall dataset average (23.85%).",
      topGames: {
        TRUE: [
          { name: "Sea and Adventure", appid: "2724020", reviews: 0, score: 0.0, ai_tags: "Visual", desc: "0 user reviews" },
          { name: "Sergei and the Tax Return", appid: "2727420", reviews: 0, score: 0.0, ai_tags: "Visual", desc: "0 user reviews" },
          { name: "Survive In Strange World", appid: "2780760", reviews: 0, score: 0.0, ai_tags: "Visual", desc: "0 user reviews" },
          { name: "Exotic Fighter", appid: "2737430", reviews: 0, score: 0.0, ai_tags: "Visual", desc: "0 user reviews" }
        ],
        FALSE: [
          { name: "XiJiang Shipyard", appid: "2690180", reviews: 0, score: 0.0, ai_tags: "", desc: "0 user reviews" },
          { name: "Whispering Breeze", appid: "2732670", reviews: 0, score: 0.0, ai_tags: "", desc: "0 user reviews" },
          { name: "Merge Circus", appid: "2739500", reviews: 0, score: 0.0, ai_tags: "", desc: "0 user reviews" },
          { name: "地城冒险岛", appid: "2410910", reviews: 0, score: 0.0, ai_tags: "", desc: "0 user reviews" }
        ],
        MAYBE: [
          { name: "SpaceFire Fury", appid: "3043920", reviews: 0, score: 0.0, ai_tags: "Prototyping", desc: "0 user reviews" },
          { name: "Halfling", appid: "3075510", reviews: 0, score: 0.0, ai_tags: "Prototyping|Marketing", desc: "0 user reviews" },
          { name: "Escape Of The Cat-Aslyum", appid: "3182180", reviews: 0, score: 0.0, ai_tags: "Prototyping", desc: "0 user reviews" },
          { name: "Space Corps®", appid: "3296050", reviews: 0, score: 0.0, ai_tags: "Prototyping|Marketing", desc: "0 user reviews" }
        ]
      }
    },
    {
      id: "1–9",
      shortLabel: "1–9",
      fullLabel: "1–9 Reviews (Below Steam Discovery Queue Threshold)",
      counts: { FALSE: 17353, TRUE: 6504, MAYBE: 43 },
      total: 23900,
      avgScore: { FALSE: 0.0, TRUE: 0.0, MAYBE: 0.0 },
      tagCounts: {
        Visual: 5186, Marketing: 2001, Audio: 1901, Text: 1742, Code: 897,
        Prototyping: 237, Live_Generated: 166, External_Ai_service: 84, Unspecified: 81, Declares_No_Ai: 39
      },
      insight: "The largest volume bucket on Steam (23,900 games). 27.21% use in-game AI (6,504 games). Combined with the 0-review bucket, 65.88% of all AI-used games never reach 10 reviews.",
      topGames: {
        TRUE: [
          { name: "EcoGenesis", appid: "2788330", reviews: 9, score: 0.0, ai_tags: "Visual", desc: "9 user reviews" },
          { name: "LetMeOut", appid: "2604230", reviews: 9, score: 0.0, ai_tags: "Visual", desc: "9 user reviews" },
          { name: "Verbal Verdict", appid: "2778780", reviews: 9, score: 0.0, ai_tags: "Text|Live_Generated", desc: "9 user reviews" },
          { name: "Commute", appid: "2820880", reviews: 9, score: 0.0, ai_tags: "Visual", desc: "9 user reviews" }
        ],
        FALSE: [
          { name: "Guts 'n Grunts", appid: "2266600", reviews: 9, score: 0.0, ai_tags: "", desc: "9 user reviews" },
          { name: "I commissioned some cats 9", appid: "2635730", reviews: 9, score: 0.0, ai_tags: "", desc: "9 user reviews" },
          { name: "Boaty Tanks 2", appid: "2433710", reviews: 9, score: 0.0, ai_tags: "", desc: "9 user reviews" },
          { name: "勇者の伝説の勇者", appid: "2719580", reviews: 9, score: 0.0, ai_tags: "", desc: "9 user reviews" }
        ],
        MAYBE: [
          { name: "Forge Cat", appid: "4741570", reviews: 9, score: 0.0, ai_tags: "Prototyping|Marketing", desc: "9 user reviews" },
          { name: "Gekko Episode of Yurihime", appid: "3175700", reviews: 8, score: 0.0, ai_tags: "Prototyping", desc: "8 user reviews" },
          { name: "Core Miners", appid: "2644280", reviews: 8, score: 0.0, ai_tags: "Prototyping|Marketing", desc: "8 user reviews" },
          { name: "grave desecrator", appid: "2689950", reviews: 7, score: 0.0, ai_tags: "Prototyping|Marketing", desc: "7 user reviews" }
        ]
      }
    },
    {
      id: "10–49",
      shortLabel: "10–49",
      fullLabel: "10–49 Reviews (Crossed 10-Review Threshold)",
      counts: { FALSE: 13036, TRUE: 3214, MAYBE: 21 },
      total: 16271,
      avgScore: { FALSE: 81.6, TRUE: 76.9, MAYBE: 74.3 },
      tagCounts: {
        Visual: 2494, Audio: 861, Marketing: 851, Text: 802, Code: 348,
        Prototyping: 113, Live_Generated: 88, External_Ai_service: 49, Unspecified: 37, Declares_No_Ai: 23
      },
      insight: "Once games cross Steam's 10-review rating threshold (16,271 games), the AI-used share drops below 20% (19.75%), and non-AI games average a 4.7-point higher positive review score (81.6% vs 76.9%).",
      topGames: {
        TRUE: [
          { name: "RINO RUSH", appid: "4486610", reviews: 49, score: 100.0, ai_tags: "Visual|Audio|Text", desc: "Positive" },
          { name: "Forest Asylum 2", appid: "3727830", reviews: 49, score: 97.0, ai_tags: "Visual|Audio", desc: "Positive" },
          { name: "NeverCOM", appid: "4359350", reviews: 49, score: 95.0, ai_tags: "Visual|Marketing", desc: "Positive" },
          { name: "The Shu legend", appid: "4710650", reviews: 49, score: 95.0, ai_tags: "Text", desc: "Positive" }
        ],
        FALSE: [
          { name: "Void Wizard", appid: "2717810", reviews: 49, score: 100.0, ai_tags: "", desc: "Positive" },
          { name: "Parts of the Elephant", appid: "2930550", reviews: 49, score: 100.0, ai_tags: "", desc: "Positive" },
          { name: "RunMan: Race Around the World", appid: "2466160", reviews: 49, score: 100.0, ai_tags: "", desc: "Positive" },
          { name: "The Unlife of Gorlak", appid: "2643830", reviews: 49, score: 100.0, ai_tags: "", desc: "Positive" }
        ],
        MAYBE: [
          { name: "Island of Forbidden Desires", appid: "5220650", reviews: 47, score: 74.0, ai_tags: "Prototyping|Marketing", desc: "Mostly Positive" },
          { name: "Cloud Cats` Land", appid: "3239500", reviews: 46, score: 97.0, ai_tags: "Prototyping", desc: "Positive" },
          { name: "The Last Flight", appid: "3906460", reviews: 44, score: 63.0, ai_tags: "Prototyping", desc: "Mixed" },
          { name: "Loverse 🔞[ADULT NSFW]", appid: "2520930", reviews: 39, score: 79.0, ai_tags: "Prototyping", desc: "Mostly Positive" }
        ]
      }
    },
    {
      id: "50–199",
      shortLabel: "50–199",
      fullLabel: "50–199 Reviews (Solid Indie Traction)",
      counts: { FALSE: 6189, TRUE: 1152, MAYBE: 10 },
      total: 7351,
      avgScore: { FALSE: 81.1, TRUE: 75.3, MAYBE: 83.7 },
      tagCounts: {
        Visual: 906, Marketing: 359, Audio: 285, Text: 251, Prototyping: 81,
        Code: 61, Live_Generated: 31, Declares_No_Ai: 26, External_Ai_service: 25, Unspecified: 21
      },
      insight: "In the 50–199 review tier (7,351 games), AI-used games represent 15.67% (1,152 games), while 84.19% do not use in-game AI.",
      topGames: {
        TRUE: [
          { name: "Unclean Water", appid: "4328400", reviews: 198, score: 82.0, ai_tags: "Text", desc: "Very Positive" },
          { name: "RogueJack21", appid: "3446840", reviews: 198, score: 67.0, ai_tags: "Text", desc: "Mixed" },
          { name: "No Mana, Just Dice", appid: "4270800", reviews: 197, score: 87.0, ai_tags: "Visual|Audio", desc: "Very Positive" },
          { name: "Cam Master: Private Desires", appid: "4293350", reviews: 197, score: 72.0, ai_tags: "Visual", desc: "Mostly Positive" }
        ],
        FALSE: [
          { name: "This Winter of Ours", appid: "3813140", reviews: 199, score: 98.0, ai_tags: "", desc: "Very Positive" },
          { name: "Blue Sign", appid: "4911340", reviews: 199, score: 94.0, ai_tags: "", desc: "Very Positive" },
          { name: "Graces: Posthumous Wish", appid: "2899980", reviews: 199, score: 93.0, ai_tags: "", desc: "Very Positive" },
          { name: "Outside the Blocks", appid: "2350220", reviews: 199, score: 86.0, ai_tags: "", desc: "Very Positive" }
        ],
        MAYBE: [
          { name: "极乐不羡仙", appid: "3436770", reviews: 164, score: 65.0, ai_tags: "Prototyping", desc: "Mixed" },
          { name: "Midnight Monitor: Aldercourt", appid: "2843540", reviews: 121, score: 91.0, ai_tags: "Prototyping", desc: "Very Positive" },
          { name: "Abyss Horde", appid: "4331130", reviews: 101, score: 86.0, ai_tags: "Prototyping", desc: "Very Positive" },
          { name: "Pass Tiger Cage", appid: "3771660", reviews: 92, score: 67.0, ai_tags: "Prototyping", desc: "Mixed" }
        ]
      }
    },
    {
      id: "200–999",
      shortLabel: "200–999",
      fullLabel: "200–999 Reviews (Established Commercial Hit)",
      counts: { FALSE: 3643, TRUE: 627, MAYBE: 9 },
      total: 4279,
      avgScore: { FALSE: 82.1, TRUE: 78.6, MAYBE: 79.4 },
      tagCounts: {
        Visual: 461, Audio: 188, Text: 165, Marketing: 148, Prototyping: 47,
        Code: 32, Live_Generated: 30, External_Ai_service: 15, Unspecified: 9, Declares_No_Ai: 7
      },
      insight: "Among established hits with 200–999 reviews (4,279 games), 14.65% (627 games) use in-game AI and 85.14% (3,643 games) do not.",
      topGames: {
        TRUE: [
          { name: "Succubus Successor: Delilah's Juicy Journey", appid: "3628950", reviews: 997, score: 90.0, ai_tags: "Visual|Text", desc: "Very Positive" },
          { name: "Organized Inside", appid: "3609750", reviews: 995, score: 94.0, ai_tags: "Audio|Text", desc: "Very Positive" },
          { name: "Superhero Simulator", appid: "3531260", reviews: 992, score: 72.0, ai_tags: "Audio", desc: "Mostly Positive" },
          { name: "R.I.P. - Reincarnation Insurance Program", appid: "3985950", reviews: 985, score: 81.0, ai_tags: "Visual|Marketing", desc: "Very Positive" }
        ],
        FALSE: [
          { name: "Satellite Odyssey: Prologue", appid: "2579270", reviews: 997, score: 92.0, ai_tags: "", desc: "Very Positive" },
          { name: "Town of Sins", appid: "2449710", reviews: 997, score: 61.0, ai_tags: "", desc: "Mixed" },
          { name: "Iron Meat", appid: "1157740", reviews: 996, score: 96.0, ai_tags: "", desc: "Overwhelmingly Positive" },
          { name: "Game of Fate: Chasing Through Time", appid: "2963550", reviews: 996, score: 88.0, ai_tags: "", desc: "Very Positive" }
        ],
        MAYBE: [
          { name: "Wet Wealth", appid: "4293850", reviews: 813, score: 70.0, ai_tags: "Prototyping|Marketing", desc: "Mostly Positive" },
          { name: "Terra Firma", appid: "1482770", reviews: 608, score: 93.0, ai_tags: "Prototyping", desc: "Very Positive" },
          { name: "Archons", appid: "2779570", reviews: 438, score: 92.0, ai_tags: "Prototyping", desc: "Very Positive" },
          { name: "The Dream Globe", appid: "3820130", reviews: 381, score: 94.0, ai_tags: "Prototyping|Marketing", desc: "Very Positive" }
        ]
      }
    },
    {
      id: "1,000+",
      shortLabel: "1,000+",
      fullLabel: "1,000+ Reviews (Breakout & Major Releases)",
      counts: { FALSE: 1908, TRUE: 200, MAYBE: 2 },
      total: 2110,
      avgScore: { FALSE: 84.5, TRUE: 78.9, MAYBE: 47.5 },
      tagCounts: {
        Visual: 141, Audio: 61, Text: 54, Marketing: 32, Code: 11,
        Prototyping: 10, Live_Generated: 8, Unspecified: 7, External_Ai_service: 5, Declares_No_Ai: 4
      },
      insight: "In the top tier of 1,000+ review games (2,110 games), only 9.48% (200 games) use in-game AI while 90.43% (1,908 games) do not.",
      topGames: {
        TRUE: [
          { name: "ARC Raiders", appid: "1808500", reviews: 204642, score: 81.0, ai_tags: "Unspecified", desc: "Very Positive" },
          { name: "Where Winds Meet", appid: "3564740", reviews: 65041, score: 86.0, ai_tags: "Audio|Text|Live_Generated", desc: "Very Positive" },
          { name: "Crimson Desert Enhanced", appid: "3321460", reviews: 64035, score: 86.0, ai_tags: "Visual", desc: "Very Positive" },
          { name: "Dark and Darker", appid: "2016590", reviews: 50408, score: 62.0, ai_tags: "Visual", desc: "Mixed" }
        ],
        FALSE: [
          { name: "HELLDIVERS™ 2", appid: "553850", reviews: 642580, score: 79.0, ai_tags: "", desc: "Mostly Positive" },
          { name: "Marvel Rivals", appid: "2767030", reviews: 307049, score: 75.0, ai_tags: "", desc: "Mostly Positive" },
          { name: "Valheim", appid: "892970", reviews: 267852, score: 94.0, ai_tags: "", desc: "Very Positive" },
          { name: "Schedule I", appid: "3164500", reviews: 204584, score: 97.0, ai_tags: "", desc: "Overwhelmingly Positive" }
        ],
        MAYBE: [
          { name: "Sudden Attack Zero Point", appid: "3576070", reviews: 1792, score: 31.0, ai_tags: "Prototyping", desc: "Mostly Negative" },
          { name: "HexBreaker Ⅱ", appid: "3399780", reviews: 1063, score: 64.0, ai_tags: "Prototyping", desc: "Mixed" }
        ]
      }
    }
  ]
};

// Global State
let chartMode = "percentage"; // "percentage" | "count"
let visibleSeries = { FALSE: true, TRUE: true, MAYBE: true };
let selectedTierId = null; // null = All Tiers overview
let activeQuestionIndex = 0;

// Format helpers
const fmtInt = (n) => Number(n).toLocaleString("en-US");
const fmtPct = (n) => `${n.toFixed(2)}%`;

/* =========================================================
   1. TOPBAR NAVIGATION + UNFOLDING SUBNAV BAR
   ========================================================= */
function updateTopbarSubnavDrawer(sectionName) {
  const drawer = document.getElementById("topbar-subnav-drawer");
  if (!drawer) return;

  const subnavs = drawer.querySelectorAll(".section-subnav");
  let hasSubnav = false;

  subnavs.forEach((nav) => {
    const isMatch = nav.getAttribute("data-for-section") === sectionName;
    nav.classList.toggle("active", isMatch);
    if (isMatch) {
      hasSubnav = true;
      nav.classList.remove("is-animating");
      void nav.offsetWidth;
      nav.classList.add("is-animating");
    }
  });

  drawer.classList.toggle("is-open", hasSubnav);
  drawer.setAttribute("aria-hidden", hasSubnav ? "false" : "true");
}

function initTopbarNavigation() {
  const navButtons = document.querySelectorAll(".topbar-nav .nav-btn");
  const sections = document.querySelectorAll(".tab-section");

  const initialBtn = document.querySelector(".topbar-nav .nav-btn.active");
  updateTopbarSubnavDrawer(initialBtn ? initialBtn.getAttribute("data-section") : "intro");

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-section");

      navButtons.forEach((b) => b.classList.toggle("active", b === btn));
      sections.forEach((sec) => {
        sec.classList.toggle("active", sec.id === `section-${target}`);
      });

      updateTopbarSubnavDrawer(target);

      if (window.scrollY > 40) {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }

      if (target === "intro") {
        selectIntroQuestion(0, false); // Don't trigger drop when merely switching tabs
      } else if (target === "relevant") {
        const activeSub = document.querySelector("#section-relevant .relevant-subview.active");
        if (activeSub && activeSub.id === "subview-review-velocity") renderReviewVelocity();
        else if (activeSub && activeSub.id === "subview-similarity") initSimilarityView();
        else if (activeSub && activeSub.id === "subview-over-time") renderOverTimeChart();
        else if (activeSub && activeSub.id === "subview-price-stratified") renderPriceStratified();
        else renderStackedBarChart();
      } else if (target === "more-info") {
        const activeSub = document.querySelector("#section-more-info .more-subview.active");
        if (activeSub && activeSub.id === "subview-more-vis-aud") renderFunVisAud();
        else if (activeSub && activeSub.id === "subview-more-ai-usage") renderAiUsagePie();
        else if (activeSub && activeSub.id === "subview-more-best-tags") renderBestPerformingTags();
        else if (activeSub && activeSub.id === "subview-more-cost-vs") renderFunCostVs();
        else renderBestAiGames();
      } else if (target === "for-fun") {
        const activeSub = document.querySelector("#section-for-fun .fun-subview.active");
        if (activeSub && activeSub.id === "subview-fun-word-ai") renderFunWordAi();
        else renderFunFoot();
      } else if (target === "boring-stuff") {
        const activeSub = document.querySelector("#section-boring-stuff .boring-subview.active");
        if (activeSub && activeSub.id === "subview-boring-trending") renderBoringTrending();
        else if (activeSub && activeSub.id === "subview-boring-cost") renderBoringCost();
        else renderBoringBestTags();
      }
    });
  });
}

/* =========================================================
   2. INTRO QUESTION BUTTONS & ANSWER REVEAL PANEL
   ========================================================= */
function selectIntroQuestion(index, animate = true) {
  activeQuestionIndex = index;
  const qData = INTRO_QUESTIONS[index] || INTRO_QUESTIONS[0];
  const buttons = document.querySelectorAll("#intro-questions-list .intro-q-btn");

  buttons.forEach((btn, idx) => {
    const active = idx === index;
    btn.classList.toggle("active", active);
    btn.setAttribute("aria-selected", active ? "true" : "false");
  });

  const panel = document.getElementById("intro-answer-panel");
  const inner = document.getElementById("intro-answer-inner");
  const heading = document.getElementById("intro-answer-heading");
  const text = document.getElementById("intro-answer-text");
  const imageEl = document.getElementById("intro-answer-image");
  const imageFrame = document.getElementById("intro-answer-image-frame");
  const activeBtn = buttons[index];
  const assignedImage = (activeBtn && activeBtn.getAttribute("data-image")) || "";
  const assignedAlt = (activeBtn && activeBtn.getAttribute("data-image-alt")) || qData.question;

  if (panel && heading && text) {
    panel.setAttribute("data-color", qData.color);
    heading.textContent = qData.question;
    text.textContent = qData.answer;

    if (imageEl && imageFrame) {
      if (assignedImage) {
        imageEl.src = assignedImage;
        imageEl.alt = assignedAlt;
        imageFrame.hidden = false;
      } else {
        imageEl.removeAttribute("src");
        imageEl.alt = "";
        imageFrame.hidden = true;
      }
    }

    if (inner && animate) {
      inner.classList.remove("is-animating");
      void inner.offsetWidth;
      inner.classList.add("is-animating");
    }
  }
}

function initIntroQuestions() {
  const buttons = document.querySelectorAll("#intro-questions-list .intro-q-btn");
  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const idx = parseInt(btn.getAttribute("data-q-index"), 10) || 0;
      selectIntroQuestion(idx, true);
    });
    btn.addEventListener("keydown", (e) => {
      if (e.key === "ArrowDown" || e.key === "ArrowUp") {
        e.preventDefault();
        const dir = e.key === "ArrowDown" ? 1 : -1;
        const nextIdx = (activeQuestionIndex + dir + INTRO_QUESTIONS.length) % INTRO_QUESTIONS.length;
        selectIntroQuestion(nextIdx, true);
        if (buttons[nextIdx]) buttons[nextIdx].focus();
      }
    });
  });
  // Select Question 01 on load
  selectIntroQuestion(0, false);
}

/* =========================================================
   4. DATA TAB OVERALL STATS POPULATION
   ========================================================= */
function renderDataTabStats() {
  const container = document.getElementById("data-overall-tag-bars");
  if (!container) return;

  const entries = Object.entries(STUDY_DATA.overall.tagCounts).sort((a, b) => b[1] - a[1]);
  const maxVal = Math.max(...entries.map((e) => e[1]), 1);
  const discTotal = STUDY_DATA.overall.disclosedTotal;

  container.innerHTML = entries
    .map(([tag, count]) => {
      const w = ((count / maxVal) * 100).toFixed(1);
      const pct = ((count / discTotal) * 100).toFixed(1);
      return `
        <div class="tag-bar-row">
          <span class="tag-bar-name">${tag}</span>
          <div class="tag-bar-track">
            <div class="tag-bar-fill" style="width: ${w}%;"></div>
          </div>
          <span class="tag-bar-count" title="${pct}% of disclosed games">${fmtInt(count)}</span>
        </div>
      `;
    })
    .join("");
}

/* =========================================================
   4B. SECOND-BAR NAVIGATION INSIDE "DATA"
   ========================================================= */
function initDataSubnav() {
  const subBtns = document.querySelectorAll('#topbar-subnav-drawer .section-subnav[data-for-section="data"] .subnav-btn');
  const subviews = document.querySelectorAll("#section-data .data-subview");

  subBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-datasubview");
      subBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("active", active);
        b.setAttribute("aria-selected", active ? "true" : "false");
      });
      subviews.forEach((sv) => {
        sv.classList.toggle("active", sv.id === `subview-${target}`);
      });
      if (window.scrollY > 40) window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });
}

/* =========================================================
   5. SECOND-BAR NAVIGATION INSIDE "IS IT RELEVANT?"
   ========================================================= */
function initRelevantSubnav() {
  const subBtns = document.querySelectorAll('#topbar-subnav-drawer .section-subnav[data-for-section="relevant"] .subnav-btn');
  const subviews = document.querySelectorAll("#section-relevant .relevant-subview");

  subBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-subview");
      subBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("active", active);
        b.setAttribute("aria-selected", active ? "true" : "false");
      });
      subviews.forEach((sv) => {
        sv.classList.toggle("active", sv.id === `subview-${target}`);
      });
      if (window.scrollY > 40) window.scrollTo({ top: 0, behavior: "smooth" });

      if (target === "review-count") renderStackedBarChart();
      else if (target === "review-velocity") renderReviewVelocity();
      else if (target === "similarity") initSimilarityView();
      else if (target === "over-time") renderOverTimeChart();
      else if (target === "price-stratified") renderPriceStratified();
    });
  });
}

/* =========================================================
   6. INTERACTIVE STACKED BAR CHART + RIGHT INSPECTOR
   ========================================================= */
function renderStackedBarChart() {
  const container = document.getElementById("stacked-bar-chart");
  const yAxis = document.getElementById("y-axis-labels");
  const yUnit = document.getElementById("stacked-y-unit");
  if (!container || !yAxis) return;

  const activeTotals = STUDY_DATA.tiers.map((tier) => {
    return (
      (visibleSeries.FALSE ? tier.counts.FALSE : 0) +
      (visibleSeries.TRUE ? tier.counts.TRUE : 0) +
      (visibleSeries.MAYBE ? tier.counts.MAYBE : 0)
    );
  });
  const maxCount = Math.max(...activeTotals, 1);
  const niceMaxCount = Math.ceil(maxCount / 5000) * 5000;

  if (yUnit) {
    yUnit.textContent = chartMode === "percentage" ? "Share (%)" : "Games (#)";
  }

  if (chartMode === "percentage") {
    yAxis.innerHTML = `
      <span>100%</span>
      <span>75%</span>
      <span>50%</span>
      <span>25%</span>
      <span>0%</span>
    `;
  } else {
    yAxis.innerHTML = `
      <span>${fmtInt(niceMaxCount)}</span>
      <span>${fmtInt(Math.round(niceMaxCount * 0.75))}</span>
      <span>${fmtInt(Math.round(niceMaxCount * 0.5))}</span>
      <span>${fmtInt(Math.round(niceMaxCount * 0.25))}</span>
      <span>0</span>
    `;
  }

  container.innerHTML = "";

  STUDY_DATA.tiers.forEach((tier) => {
    const fVal = visibleSeries.FALSE ? tier.counts.FALSE : 0;
    const tVal = visibleSeries.TRUE ? tier.counts.TRUE : 0;
    const mVal = visibleSeries.MAYBE ? tier.counts.MAYBE : 0;
    const visTotal = fVal + tVal + mVal;

    const stackHeightPct =
      chartMode === "percentage"
        ? visTotal > 0 ? 100 : 0
        : (visTotal / niceMaxCount) * 100;

    const fPct = visTotal > 0 ? (fVal / visTotal) * 100 : 0;
    const tPct = visTotal > 0 ? (tVal / visTotal) * 100 : 0;
    const mPct = visTotal > 0 ? (mVal / visTotal) * 100 : 0;

    const col = document.createElement("div");
    col.className = `bar-column${selectedTierId === tier.id ? " selected" : ""}`;
    col.setAttribute("data-tier", tier.id);

    const clampedH = visTotal > 0 ? Math.max(stackHeightPct, 2) : 0;
    const topLabelText =
      chartMode === "percentage"
        ? visibleSeries.TRUE && visTotal > 0
          ? `${tPct.toFixed(1)}% AI`
          : `${fmtInt(visTotal)}`
        : `${fmtInt(visTotal)}`;

    const showTrueInline = tPct > 11 && clampedH > 18;
    const showFalseInline = fPct > 16 && clampedH > 22;

    col.innerHTML = `
      <div class="bar-top-value" style="bottom: calc(${clampedH.toFixed(2)}% + 6px);">${topLabelText}</div>
      <div class="bar-stack" style="height: ${clampedH.toFixed(2)}%;">
        <div class="bar-segment seg-false" style="height: ${fPct}%;">
          ${showFalseInline && chartMode === "percentage" ? `<span class="seg-inline-label">${fPct.toFixed(0)}%</span>` : ""}
        </div>
        <div class="bar-segment seg-maybe" style="height: ${mPct}%;"></div>
        <div class="bar-segment seg-true" style="height: ${tPct}%;">
          ${showTrueInline ? `<span class="seg-inline-label" style="color:#111318;">${tPct.toFixed(1)}%</span>` : ""}
        </div>
      </div>
      <div class="bar-x-label">${tier.shortLabel}</div>
    `;

    col.addEventListener("mouseenter", (e) => showTooltip(e, tier));
    col.addEventListener("mousemove", (e) => moveTooltip(e));
    col.addEventListener("mouseleave", () => hideTooltip());
    col.addEventListener("click", () => {
      selectedTierId = selectedTierId === tier.id ? null : tier.id;
      renderStackedBarChart();
      renderInspector();
    });

    container.appendChild(col);
  });
}

function showTooltip(event, tier) {
  const tooltip = document.getElementById("chart-tooltip");
  if (!tooltip) return;

  const tot = tier.total;
  const fPct = ((tier.counts.FALSE / tot) * 100).toFixed(2);
  const tPct = ((tier.counts.TRUE / tot) * 100).toFixed(2);
  const mPct = ((tier.counts.MAYBE / tot) * 100).toFixed(2);

  tooltip.innerHTML = `
    <div class="tooltip-title">${tier.fullLabel}</div>
    <div class="tooltip-row">
      <span>Total Games:</span>
      <strong>${fmtInt(tot)}</strong>
    </div>
    <div class="tooltip-row" style="color: var(--apple-orange, #ff9f0a);">
      <span>ai_used = TRUE:</span>
      <strong>${fmtInt(tier.counts.TRUE)} (${tPct}%)</strong>
    </div>
    <div class="tooltip-row" style="color: var(--apple-blue, #0a84ff);">
      <span>ai_used = FALSE:</span>
      <strong>${fmtInt(tier.counts.FALSE)} (${fPct}%)</strong>
    </div>
    <div class="tooltip-row" style="color: var(--apple-yellow, #ffd60a);">
      <span>ai_used = MAYBE:</span>
      <strong>${fmtInt(tier.counts.MAYBE)} (${mPct}%)</strong>
    </div>
  `;
  tooltip.classList.remove("hidden");
  moveTooltip(event);
}

function moveTooltip(event) {
  const tooltip = document.getElementById("chart-tooltip");
  if (!tooltip || tooltip.classList.contains("hidden")) return;
  const pad = 16;
  let x = event.clientX + pad;
  let y = event.clientY + pad;
  const rect = tooltip.getBoundingClientRect();
  if (x + rect.width > window.innerWidth - 12) {
    x = event.clientX - rect.width - pad;
  }
  if (y + rect.height > window.innerHeight - 12) {
    y = event.clientY - rect.height - pad;
  }
  x = Math.max(12, Math.min(x, window.innerWidth - rect.width - 12));
  y = Math.max(12, Math.min(y, window.innerHeight - rect.height - 12));
  tooltip.style.left = `${x}px`;
  tooltip.style.top = `${y}px`;
}

function hideTooltip() {
  const tooltip = document.getElementById("chart-tooltip");
  if (tooltip) tooltip.classList.add("hidden");
}

function renderInspector() {
  const tier = selectedTierId
    ? STUDY_DATA.tiers.find((t) => t.id === selectedTierId)
    : null;

  const title = document.getElementById("inspector-title");
  const resetBtn = document.getElementById("reset-tier-btn");
  const insight = document.getElementById("inspector-insight");
  const kpiContainer = document.getElementById("inspector-kpis");
  const tagCaption = document.getElementById("tag-breakdown-caption");
  const tagBars = document.getElementById("inspector-tag-bars");

  const source = tier || STUDY_DATA.overall;
  const tot = source.total;
  const tCnt = source.counts.TRUE;
  const fCnt = source.counts.FALSE;
  const mCnt = source.counts.MAYBE;

  if (tier) {
    title.textContent = `${tier.fullLabel} — ${fmtInt(tot)} Games`;
    resetBtn.classList.remove("hidden");
    insight.textContent = tier.insight;
    tagCaption.textContent = `Within ${tier.shortLabel} review tier`;
  } else {
    title.textContent = "All Games Overview (63,798 Games)";
    resetBtn.classList.add("hidden");
    insight.innerHTML =
      "Across all 63,798 Steam releases since Jan 2024, <strong>23.85%</strong> use AI in-game (<code>ai_used = TRUE</code>). As review counts climb, the share of AI-tagged games steadily drops from <strong>35.61%</strong> (at 0 reviews) down to <strong>9.48%</strong> (at 1,000+ reviews).";
    tagCaption.textContent = "Across all 63,798 games";
  }

  const scoreSubTrue =
    source.avgScore.TRUE > 0
      ? `Avg Score: ${source.avgScore.TRUE}%`
      : "Unscored (<10 reviews)";
  const scoreSubFalse =
    source.avgScore.FALSE > 0
      ? `Avg Score: ${source.avgScore.FALSE}%`
      : "Unscored (<10 reviews)";

  kpiContainer.innerHTML = `
    <div class="kpi-box kpi-true">
      <div class="kpi-label">In-Game AI</div>
      <div class="kpi-value">${fmtInt(tCnt)} <small>(${fmtPct((tCnt / tot) * 100)})</small></div>
      <div class="kpi-sub">${scoreSubTrue}</div>
    </div>
    <div class="kpi-box kpi-false">
      <div class="kpi-label">No AI Used</div>
      <div class="kpi-value">${fmtInt(fCnt)} <small>(${fmtPct((fCnt / tot) * 100)})</small></div>
      <div class="kpi-sub">${scoreSubFalse}</div>
    </div>
    <div class="kpi-box kpi-maybe">
      <div class="kpi-label">May Have Used AI</div>
      <div class="kpi-value">${fmtInt(mCnt)} <small>(${fmtPct((mCnt / tot) * 100)})</small></div>
      <div class="kpi-sub">Sample too small</div>
    </div>
  `;

  const entries = Object.entries(source.tagCounts).sort((a, b) => b[1] - a[1]);
  const maxTagVal = Math.max(...entries.map((e) => e[1]), 1);
  tagBars.innerHTML = entries
    .map(([tag, count]) => {
      const w = ((count / maxTagVal) * 100).toFixed(1);
      return `
        <div class="tag-bar-row">
          <span class="tag-bar-name">${tag}</span>
          <div class="tag-bar-track">
            <div class="tag-bar-fill" style="width: ${w}%;"></div>
          </div>
          <span class="tag-bar-count">${fmtInt(count)}</span>
        </div>
      `;
    })
    .join("");
}

function initChartControls() {
  const modeBtns = document.querySelectorAll("#review-count-mode-toggle .mode-btn");
  modeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      chartMode = btn.getAttribute("data-mode");
      modeBtns.forEach((b) => b.classList.toggle("active", b === btn));
      renderStackedBarChart();
    });
  });

  const legendBtns = document.querySelectorAll("#chart-legend .legend-item");
  legendBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const s = btn.getAttribute("data-series");
      const activeCount = Object.values(visibleSeries).filter(Boolean).length;
      if (visibleSeries[s] && activeCount <= 1) return;
      visibleSeries[s] = !visibleSeries[s];
      btn.classList.toggle("muted", !visibleSeries[s]);
      renderStackedBarChart();
    });
  });

  const resetBtn = document.getElementById("reset-tier-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      selectedTierId = null;
      renderStackedBarChart();
      renderInspector();
    });
  }
}

/* =========================================================
   7. REVIEW VELOCITY SUBVIEW (Time vs Milestone Achievement)
   ========================================================= */
let velAiFilter = "VS";
let velMilestoneFilter = "10";

function initReviewVelocityView() {
  const aiPills = document.querySelectorAll("#vel-ai-filter .mini-pill");
  const mPills = document.querySelectorAll("#vel-milestone-pills .milestone-pill");

  const syncPills = () => {
    aiPills.forEach((p) => p.classList.toggle("active", p.getAttribute("data-ai") === velAiFilter));
    mPills.forEach((p) => p.classList.toggle("active", p.getAttribute("data-milestone") === velMilestoneFilter));
  };

  aiPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      velAiFilter = pill.getAttribute("data-ai");
      if (velAiFilter === "VS" && velMilestoneFilter === "all") {
        velMilestoneFilter = "10";
      }
      syncPills();
      renderReviewVelocity();
    });
  });

  mPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      velMilestoneFilter = pill.getAttribute("data-milestone");
      if (velMilestoneFilter === "all" && velAiFilter === "VS") {
        velAiFilter = "ALL";
      }
      syncPills();
      renderReviewVelocity();
    });
  });

  syncPills();
  renderReviewVelocity();
}

function renderReviewVelocity() {
  const container = document.getElementById("velocity-chart-container");
  const legendEl = document.getElementById("vel-chart-legend");
  if (!container || !window.STUDY_DATA_EXTENDED) return;

  const milestones = [
    { id: 1, label: "1 Review", color: "#64d2ff" },
    { id: 10, label: "10 Reviews", color: "#30d158" },
    { id: 50, label: "50 Reviews", color: "#ffd60a" },
    { id: 200, label: "200 Reviews", color: "#ff9f0a" },
    { id: 1000, label: "1,000 Reviews", color: "#bf5af2" }
  ];

  const isCompare = velAiFilter === "VS";
  const scrapeDateMs = Date.UTC(2026, 10, 2); // Nov 2, 2026

  let seriesList = [];
  let baseData = [];

  if (isCompare) {
    const mId = velMilestoneFilter === "all" ? "10" : velMilestoneFilter;
    const mObj = milestones.find((m) => String(m.id) === String(mId)) || milestones[1];
    const falseData = window.STUDY_DATA_EXTENDED.velocity.FALSE || [];
    const trueData = window.STUDY_DATA_EXTENDED.velocity.TRUE || [];
    baseData = falseData;
    seriesList = [
      { key: "FALSE", label: `Non-AI (FALSE) — ${mObj.label}`, color: "#0a84ff", rows: falseData, m: mObj },
      { key: "TRUE", label: `In-Game AI (TRUE) — ${mObj.label}`, color: "#ff9f0a", rows: trueData, m: mObj }
    ];
  } else {
    baseData = window.STUDY_DATA_EXTENDED.velocity[velAiFilter] || [];
    const activeMilestones = milestones.filter(
      (m) => velMilestoneFilter === "all" || velMilestoneFilter == m.id
    );
    seriesList = activeMilestones.map((m) => ({
      key: m.id,
      label: m.label,
      color: m.color,
      rows: baseData,
      m
    }));
  }

  if (legendEl) {
    const swatches = seriesList
      .map((s) => `<span class="legend-item active" style="cursor:default;padding:4px 10px;"><span class="legend-swatch" style="background:${s.color};"></span><span class="legend-label">${s.label}</span></span>`)
      .join("");
    legendEl.innerHTML = `${swatches}<span class="legend-item active" style="cursor:default;padding:4px 10px;"><span class="evt-line-swatch" style="border-top-color:rgba(235,235,245,0.45);"></span><span class="legend-label">Max Age at Scrape (Nov '26) &mdash; newer cohorts have less time elapsed</span></span>`;
  }

  const w = 760;
  const h = 360;
  const padL = 64;
  const padR = 26;
  const padT = 26;
  const padB = 48;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  let maxDays = 400;
  seriesList.forEach((s) => {
    s.rows.forEach((row) => {
      const val = row[`m${s.m.id}_days`];
      if (val && val > maxDays) maxDays = val;
    });
  });
  maxDays = Math.ceil(maxDays / 100) * 100;

  const numPoints = baseData.length;
  const xStep = numPoints > 1 ? plotW / (numPoints - 1) : plotW;

  let svg = `<svg viewBox="0 0 ${w} ${h}">`;
  svg += `<defs>
    <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="2" flood-opacity="0.28"/>
    </filter>
    <clipPath id="vel-plot-clip">
      <rect x="${padL}" y="${padT}" width="${plotW}" height="${plotH}" />
    </clipPath>
  </defs>`;

  // Y Axis Title
  svg += `<text x="16" y="${padT + plotH / 2}" fill="rgba(235,235,245,0.72)" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle" transform="rotate(-90 16 ${padT + plotH / 2})">Avg Days Since Release</text>`;

  // Y Gridlines and labels
  const yTicks = 5;
  for (let i = 0; i <= yTicks; i++) {
    const val = Math.round((maxDays / yTicks) * i);
    const yPos = padT + plotH - (val / maxDays) * plotH;
    svg += `<line x1="${padL}" y1="${yPos}" x2="${w - padR}" y2="${yPos}" stroke="rgba(255,255,255,0.09)" stroke-dasharray="3,3" />`;
    svg += `<text x="${padL - 8}" y="${yPos + 4}" fill="rgba(235,235,245,0.72)" font-family="ui-monospace, monospace" font-size="11" text-anchor="end">${val}d</text>`;
  }

  // X Axis Baseline & Labels
  svg += `<line x1="${padL}" y1="${padT + plotH}" x2="${w - padR}" y2="${padT + plotH}" stroke="rgba(255,255,255,0.2)" />`;
  baseData.forEach((row, idx) => {
    if (idx % 6 === 0 || idx === numPoints - 1) {
      const xPos = padL + idx * xStep;
      const label = row.month.slice(2);
      svg += `<text x="${xPos}" y="${h - 14}" fill="rgba(235,235,245,0.72)" font-family="ui-monospace, monospace" font-size="11" text-anchor="middle">${label}</text>`;
      svg += `<line x1="${xPos}" y1="${padT + plotH}" x2="${xPos}" y2="${padT + plotH + 5}" stroke="rgba(255,255,255,0.2)" />`;
    }
  });

  // Observation window reference line (max possible age at Nov 2, 2026)
  const capPts = baseData.map((row, idx) => {
    const [yr, mo] = row.month.split("-").map(Number);
    const midMs = Date.UTC(yr, mo - 1, 1);
    const maxAgeDays = Math.max(2, (scrapeDateMs - midMs) / 86400000);
    const x = padL + idx * xStep;
    const y = padT + plotH - (maxAgeDays / maxDays) * plotH;
    return { x, y };
  });
  const capD = capPts.reduce((acc, pt, i) => `${acc} ${i === 0 ? "M" : "L"} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`, "");
  svg += `<path d="${capD}" fill="none" stroke="rgba(235,235,245,0.32)" stroke-width="1.5" stroke-dasharray="5,4" clip-path="url(#vel-plot-clip)" />`;

  // Shaded area between Non-AI and AI in Compare mode
  if (isCompare && seriesList.length === 2) {
    const r0 = seriesList[0].rows;
    const r1 = seriesList[1].rows;
    const mId = seriesList[0].m.id;
    const topPts = [];
    const botPts = [];
    baseData.forEach((_, idx) => {
      const d0 = r0[idx] && r0[idx][`m${mId}_days`];
      const d1 = r1[idx] && r1[idx][`m${mId}_days`];
      if (d0 != null && d1 != null) {
        const x = padL + idx * xStep;
        topPts.push({ x, y: padT + plotH - (d0 / maxDays) * plotH });
        botPts.unshift({ x, y: padT + plotH - (d1 / maxDays) * plotH });
      }
    });
    if (topPts.length > 1) {
      const polyPts = [...topPts, ...botPts].map((p) => `${p.x.toFixed(1)},${p.y.toFixed(1)}`).join(" ");
      svg += `<polygon points="${polyPts}" fill="rgba(255, 159, 10, 0.1)" />`;
    }
  }

  // Curves
  seriesList.forEach((s) => {
    const pts = [];
    s.rows.forEach((row, idx) => {
      const days = row[`m${s.m.id}_days`];
      if (days !== null && days !== undefined) {
        const x = padL + idx * xStep;
        const y = padT + plotH - (days / maxDays) * plotH;
        pts.push({ x, y, days, count: row[`m${s.m.id}_count`], month: row.month, seriesLabel: s.label, m: s.m });
      }
    });

    if (pts.length > 1) {
      const pathD = pts.reduce((acc, pt, i) => `${acc} ${i === 0 ? "M" : "L"} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`, "");
      svg += `<path d="${pathD}" fill="none" stroke="${s.color}" stroke-width="2.6" filter="url(#neon-glow)" />`;
    }

    pts.forEach((pt) => {
      svg += `<circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="3.8" fill="${s.color}" stroke="#1c1c1e" stroke-width="1.5" class="vel-node" data-month="${pt.month}" data-milestone="${pt.seriesLabel}" data-num="${pt.m.id}" data-days="${pt.days}" data-count="${pt.count}" />`;
    });
  });

  svg += `</svg>`;
  container.innerHTML = svg;

  // Tooltip
  container.querySelectorAll(".vel-node").forEach((node) => {
    node.addEventListener("mouseenter", (e) => {
      const month = node.getAttribute("data-month");
      const milestone = node.getAttribute("data-milestone");
      const days = node.getAttribute("data-days");
      const count = node.getAttribute("data-count");
      const numM = parseInt(node.getAttribute("data-num"), 10) || 10;
      const rate = (numM / parseFloat(days)).toFixed(2);

      const tooltip = document.getElementById("chart-tooltip");
      if (!tooltip) return;
      tooltip.innerHTML = `
        <div class="tooltip-title">${month} &bull; ${milestone}</div>
        <div class="tooltip-row">
          <span>Avg Age / Days to Reach:</span>
          <strong style="color:var(--apple-blue, #0a84ff);">${days} days</strong>
        </div>
        <div class="tooltip-row">
          <span>Games Qualified:</span>
          <strong>${fmtInt(count)} games</strong>
        </div>
        <div class="tooltip-row">
          <span>Estimated Velocity:</span>
          <strong style="color:var(--apple-yellow, #ffd60a);">~${rate} rev/day</strong>
        </div>
      `;
      tooltip.classList.remove("hidden");
      moveTooltip(e);
    });

    node.addEventListener("mousemove", (e) => moveTooltip(e));
    node.addEventListener("mouseleave", () => hideTooltip());
  });

  // KPIs
  const kpis = document.getElementById("vel-kpis");
  if (kpis) {
    kpis.innerHTML = `
      <div class="kpi-card">
        <span class="kpi-label">NON-AI AVG (10 REV)</span>
        <span class="kpi-val" style="color: var(--color-false);">142.1 days</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">AI AVG (10 REV)</span>
        <span class="kpi-val" style="color: var(--color-true);">168.4 days</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">AI DEFICIT</span>
        <span class="kpi-val" style="color: var(--tetris-red);">-18.5%</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">1K AI RECORD</span>
        <span class="kpi-val" style="color: var(--tetris-cyan);">45 days</span>
      </div>
    `;
  }

  // Threshold comparison bars
  const comp = document.getElementById("vel-thresh-comparison");
  if (comp) {
    comp.innerHTML = `
      <div class="tag-bar-row">
        <span class="tag-bar-name">FALSE (Non-AI)</span>
        <div class="tag-bar-track">
          <div class="tag-bar-fill" style="width: 75%; background: var(--color-false);"></div>
        </div>
        <span class="tag-bar-count">142 days</span>
      </div>
      <div class="tag-bar-row">
        <span class="tag-bar-name">TRUE (AI Used)</span>
        <div class="tag-bar-track">
          <div class="tag-bar-fill" style="width: 89%; background: var(--color-true);"></div>
        </div>
        <span class="tag-bar-count">168 days (+18%)</span>
      </div>
      <div class="tag-bar-row">
        <span class="tag-bar-name">MAYBE (Prototyping)</span>
        <div class="tag-bar-track">
          <div class="tag-bar-fill" style="width: 100%; background: var(--color-maybe);"></div>
        </div>
        <span class="tag-bar-count">189 days (+33%)</span>
      </div>
    `;
  }

  // Fastest AI games list
  const fastestContainer = document.getElementById("vel-fastest-games");
  if (fastestContainer) {
    const fastestList = [
      { name: "ARC Raiders", reviews: 204642, score: 81, days: "~45d to 1K" },
      { name: "The Outlast Trials", reviews: 45170, score: 93, days: "~32d to 1K" },
      { name: "Where Winds Meet", reviews: 65041, score: 86, days: "~50d to 1K" },
      { name: "Crimson Desert Enhanced", reviews: 64035, score: 86, days: "~52d to 1K" }
    ];
    fastestContainer.innerHTML = fastestList
      .map(
        (g) => `
        <div class="notable-game-item">
          <div class="notable-game-left">
            <span class="notable-game-title">${g.name}</span>
            <span class="notable-game-sub">${fmtInt(g.reviews)} reviews &bull; ${g.score}% Positive</span>
          </div>
          <span class="notable-game-meta" style="color: var(--tetris-green);">${g.days}</span>
        </div>
      `
      )
      .join("");
  }
}

/* =========================================================
   8. SIMILARITY SUBVIEW (3-Column Table & Calculation Panel)
   ========================================================= */
function initSimilarityView() {
  const tableBody = document.getElementById("similarity-table-body");
  if (!tableBody || !window.STUDY_DATA_EXTENDED) return;

  const rows = window.STUDY_DATA_EXTENDED.similarity.rows;
  const top10RevSet = new Set(rows.map((r) => r.revTag));
  const top10AiSet = new Set(rows.map((r) => r.aiTag));

  tableBody.innerHTML = rows
    .map((r) => {
      const revTagDiff = r.rank - r.revTagAiRank;
      let diffBadge = "";
      if (revTagDiff === 0) {
        diffBadge = `<span class="diff-badge diff-zero">Exact (#${r.rank} = #${r.revTagAiRank})</span>`;
      } else if (revTagDiff > 0) {
        diffBadge = `<span class="diff-badge diff-pos">#${r.rank} &rarr; #${r.revTagAiRank} (+${revTagDiff})</span>`;
      } else {
        const valStr = r.revTagAiRank > 100 ? ">#100" : `#${r.revTagAiRank}`;
        diffBadge = `<span class="diff-badge diff-neg">#${r.rank} &rarr; ${valStr}</span>`;
      }

      const revInBoth = top10AiSet.has(r.revTag);
      const aiInBoth = top10RevSet.has(r.aiTag);

      return `
        <tr class="${revInBoth || aiInBoth ? "sim-row-overlap" : ""}">
          <td class="rank-badge-cell">${String(r.rank).padStart(2, "0")}</td>
          <td>
            <div class="tag-name-cell">
              <span>${revInBoth ? `<span class="sim-overlap-dot" title="In both Top 10 lists"></span>` : ""}${r.revTag}</span>
              <span class="tag-count-sub">${fmtInt(r.revCount)} rev</span>
            </div>
          </td>
          <td>
            <div class="tag-name-cell">
              <span style="color: var(--tetris-orange);">${aiInBoth ? `<span class="sim-overlap-dot" title="In both Top 10 lists"></span>` : ""}${r.aiTag}</span>
              <span class="tag-count-sub">${fmtInt(r.aiCount)} games</span>
            </div>
          </td>
          <td>${diffBadge}</td>
        </tr>
      `;
    })
    .join("");

  const allM = window.STUDY_DATA_EXTENDED.similarity.allTagsMetrics;
  if (allM) {
    const setEl = document.getElementById("sim-all-set-jaccard");
    const wEl = document.getElementById("sim-all-weighted-jaccard");
    const wBar = document.getElementById("sim-all-weighted-bar");
    const subEl = document.getElementById("sim-all-tags-sub");
    const progEl = document.getElementById("sim-progression-pills");

    if (setEl) setEl.textContent = `${allM.unweightedJaccard.toFixed(2)}%`;
    if (wEl) wEl.textContent = `${allM.weightedJaccard.toFixed(2)}%`;
    if (wBar) wBar.style.width = `${allM.weightedJaccard}%`;
    if (subEl) {
      const missingStr = allM.missingInAi && allM.missingInAi.length
        ? `only <code>${allM.missingInAi.join(", ")}</code> has 0 AI games`
        : "100% coverage";
      subEl.innerHTML = `AI games appear in <strong>${allM.sharedCount}/${allM.totalUniqueTags}</strong> Steam tags (${missingStr}), while tag frequency shares overlap <strong>${allM.weightedJaccard.toFixed(2)}%</strong> weighted (Review Share vs AI Share).`;
    }
    if (progEl && allM.progression) {
      progEl.innerHTML = [
        ...allM.progression.map(
          (p) => `<span class="sim-prog-pill">${p.label}: <strong>${p.jaccard}%</strong> (${p.shared}/${p.union})</span>`
        ),
        `<span class="sim-prog-pill">All ${allM.totalUniqueTags} Set: <strong>${allM.unweightedJaccard}%</strong></span>`,
        `<span class="sim-prog-pill">All ${allM.totalUniqueTags} Weighted: <strong>${allM.weightedJaccard}%</strong></span>`
      ].join("");
    }
  }
}

/* =========================================================
   9. OVER TIME SUBVIEW (Releases vs AI Adoption Trend)
   ========================================================= */
let timeAiFilter = "ALL";
let timeMode = "volume"; // "volume" | "rate"
let showOverTimeEvents = true;

function initOverTimeView() {
  const aiPills = document.querySelectorAll("#time-ai-filter .mini-pill");
  aiPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      timeAiFilter = pill.getAttribute("data-ai");
      aiPills.forEach((p) => p.classList.toggle("active", p === pill));
      renderOverTimeChart();
    });
  });

  const modeBtns = document.querySelectorAll("#time-mode-toggle .mode-btn");
  modeBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      timeMode = btn.getAttribute("data-mode");
      modeBtns.forEach((b) => b.classList.toggle("active", b === btn));
      renderOverTimeChart();
    });
  });

  const evtBtn = document.getElementById("time-events-toggle");
  if (evtBtn) {
    evtBtn.addEventListener("click", () => {
      showOverTimeEvents = !showOverTimeEvents;
      evtBtn.classList.toggle("active", showOverTimeEvents);
      evtBtn.setAttribute("aria-pressed", showOverTimeEvents ? "true" : "false");
      renderOverTimeChart();
    });
  }

  renderOverTimeChart();
}

function getShortModelTag(model) {
  const map = {
    "Claude 3": "C3",
    "GPT-4o": "4o",
    "Claude 3.5 Sonnet": "C3.5",
    "OpenAI o1": "o1",
    "Claude 3.7 Sonnet": "C3.7",
    "Claude 4": "C4",
    "GPT-5": "GPT-5",
    "Claude 4.5": "C4.5",
    "Claude 4.6": "C4.6",
    "Claude 5": "C5",
    "GPT-6": "GPT-6",
    "Claude Opus 5.5": "Op5.5"
  };
  return map[model] || model;
}

function renderOverTimeChart() {
  const container = document.getElementById("time-chart-container");
  const keyBarsEl = document.getElementById("time-series-key-bars");
  const keyLineEl = document.getElementById("time-series-key-line");
  if (!container || !window.STUDY_DATA_EXTENDED) return;

  const data = window.STUDY_DATA_EXTENDED.overTime;
  const events = window.STUDY_DATA_EXTENDED.overTimeEvents || [];

  if (keyBarsEl) {
    if (timeMode === "rate") {
      keyBarsEl.style.display = "none";
    } else {
      keyBarsEl.style.display = "inline-flex";
      if (timeAiFilter === "ALL") {
        keyBarsEl.innerHTML = `<span class="legend-swatch swatch-true"></span> AI Games &nbsp;<span class="legend-swatch swatch-false"></span> Non-AI Games`;
      } else if (timeAiFilter === "TRUE") {
        keyBarsEl.innerHTML = `<span class="legend-swatch swatch-true"></span> In-Game AI (TRUE)`;
      } else if (timeAiFilter === "FALSE") {
        keyBarsEl.innerHTML = `<span class="legend-swatch swatch-false"></span> Non-AI (FALSE)`;
      } else {
        keyBarsEl.innerHTML = `<span class="legend-swatch swatch-maybe"></span> Prototyping (MAYBE)`;
      }
    }
  }
  if (keyLineEl) {
    keyLineEl.style.display = (timeMode === "rate" || timeAiFilter === "ALL" || timeAiFilter === "TRUE") ? "inline-flex" : "none";
  }

  const w = 780;
  const h = 380;
  const padL = 64;
  const padR = 56;
  const padT = showOverTimeEvents ? 72 : 28;
  const padB = 46;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  const numPoints = data.length;
  const colW = plotW / numPoints;

  let maxCount = 1;
  data.forEach((d) => {
    const val = timeAiFilter === "ALL" ? d.all : d[timeAiFilter.toLowerCase()] || 0;
    if (val > maxCount) maxCount = val;
  });
  const stepUnit = maxCount > 1000 ? 500 : maxCount > 100 ? 50 : 5;
  maxCount = Math.ceil(maxCount / stepUnit) * stepUnit;

  let svg = `<svg viewBox="0 0 ${w} ${h}">`;
  svg += `<defs>
    <linearGradient id="timeBarGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a84ff" stop-opacity="0.88"/>
      <stop offset="100%" stop-color="#0a84ff" stop-opacity="0.35"/>
    </linearGradient>
    <linearGradient id="aiBarGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ff9f0a" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#ff9f0a" stop-opacity="0.45"/>
    </linearGradient>
    <pattern id="partialHatch" width="6" height="6" patternTransform="rotate(45 0 0)" patternUnits="userSpaceOnUse">
      <line x1="0" y1="0" x2="0" y2="6" stroke="rgba(255,255,255,0.35)" stroke-width="2" />
    </pattern>
  </defs>`;

  if (timeMode === "volume") {
    // Left Y Axis Title & Grid
    svg += `<text x="15" y="${padT + plotH / 2}" fill="rgba(235,235,245,0.75)" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle" transform="rotate(-90 15 ${padT + plotH / 2})">Monthly Releases</text>`;

    const yTicks = 4;
    for (let i = 0; i <= yTicks; i++) {
      const val = Math.round((maxCount / yTicks) * i);
      const yPos = padT + plotH - (val / maxCount) * plotH;
      svg += `<line x1="${padL}" y1="${yPos}" x2="${w - padR}" y2="${yPos}" stroke="rgba(255,255,255,0.09)" stroke-dasharray="3,3" />`;
      svg += `<text x="${padL - 8}" y="${yPos + 4}" fill="rgba(235,235,245,0.72)" font-family="ui-monospace, monospace" font-size="11" text-anchor="end">${fmtInt(val)}</text>`;
    }

    const showRateOverlay = timeAiFilter === "ALL" || timeAiFilter === "TRUE";
    if (showRateOverlay) {
      svg += `<text x="${w - 14}" y="${padT + plotH / 2}" fill="#ffd60a" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle" transform="rotate(90 ${w - 14} ${padT + plotH / 2})">AI Share (%)</text>`;
      for (let p = 0; p <= 50; p += 25) {
        const yPos = padT + plotH - (p / 50) * plotH;
        svg += `<text x="${w - padR + 8}" y="${yPos + 4}" fill="#ffd60a" font-family="ui-monospace, monospace" font-size="11">${p}%</text>`;
      }
    }

    // Bars
    data.forEach((d, idx) => {
      const x = padL + idx * colW + 2;
      const barWidth = Math.max(2, colW - 4);
      const isPartial = d.month === "2026-11";
      const val = timeAiFilter === "ALL" ? d.all : d[timeAiFilter.toLowerCase()] || 0;
      const totalH = (val / maxCount) * plotH;
      const topY = padT + plotH - totalH;

      if (timeAiFilter === "ALL") {
        const aiH = (d.true / maxCount) * plotH;
        const nonAiH = Math.max(0, totalH - aiH);
        // Non-AI top segment
        svg += `<rect x="${x.toFixed(1)}" y="${topY.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${nonAiH.toFixed(1)}" fill="url(#timeBarGrad)" rx="2" class="time-bar" data-month="${d.month}" data-all="${d.all}" data-false="${d.false}" data-true="${d.true}" data-maybe="${d.maybe}" data-pct="${d.truePct}" data-partial="${isPartial}" />`;
        // AI bottom segment
        svg += `<rect x="${x.toFixed(1)}" y="${(padT + plotH - aiH).toFixed(1)}" width="${barWidth.toFixed(1)}" height="${aiH.toFixed(1)}" fill="url(#aiBarGrad)" rx="2" class="time-bar" data-month="${d.month}" data-all="${d.all}" data-false="${d.false}" data-true="${d.true}" data-maybe="${d.maybe}" data-pct="${d.truePct}" data-partial="${isPartial}" />`;
      } else {
        const fillCol = timeAiFilter === "TRUE" ? "url(#aiBarGrad)" : timeAiFilter === "MAYBE" ? "#ffd60a" : "url(#timeBarGrad)";
        svg += `<rect x="${x.toFixed(1)}" y="${topY.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${totalH.toFixed(1)}" fill="${fillCol}" rx="3" class="time-bar" data-month="${d.month}" data-all="${d.all}" data-false="${d.false}" data-true="${d.true}" data-maybe="${d.maybe}" data-pct="${d.truePct}" data-partial="${isPartial}" />`;
      }

      if (isPartial) {
        svg += `<rect x="${x.toFixed(1)}" y="${topY.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${totalH.toFixed(1)}" fill="url(#partialHatch)" stroke="rgba(255,255,255,0.65)" stroke-dasharray="2,2" rx="2" style="pointer-events:none;" />`;
        svg += `<text x="${(x + barWidth / 2).toFixed(1)}" y="${(topY - 8).toFixed(1)}" fill="rgba(235,235,245,0.75)" font-family="ui-monospace, monospace" font-size="9" text-anchor="end">Partial (to Nov 2)</text>`;
      }
    });

    if (showRateOverlay) {
      const pts = data.map((d, idx) => {
        const x = padL + idx * colW + colW * 0.5;
        const y = padT + plotH - (d.truePct / 50) * plotH;
        return { x, y, d };
      });
      const lineD = pts.reduce((acc, pt, i) => `${acc} ${i === 0 ? "M" : "L"} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`, "");
      svg += `<path d="${lineD}" fill="none" stroke="#ffd60a" stroke-width="2.4" />`;
      pts.forEach((pt) => {
        svg += `<circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="3.4" fill="#ffd60a" stroke="#1c1c1e" stroke-width="1" class="time-node" data-month="${pt.d.month}" data-all="${pt.d.all}" data-false="${pt.d.false}" data-true="${pt.d.true}" data-maybe="${pt.d.maybe}" data-pct="${pt.d.truePct}" data-partial="${pt.d.month === "2026-11"}" />`;
      });
    }
  } else {
    // Mode: Adoption %
    svg += `<text x="15" y="${padT + plotH / 2}" fill="#ff9f0a" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle" transform="rotate(-90 15 ${padT + plotH / 2})">In-Game AI Share (%)</text>`;
    const yTicks = 5;
    for (let i = 0; i <= yTicks; i++) {
      const p = i * 10;
      const yPos = padT + plotH - (p / 50) * plotH;
      svg += `<line x1="${padL}" y1="${yPos}" x2="${w - padR}" y2="${yPos}" stroke="rgba(255,255,255,0.09)" stroke-dasharray="3,3" />`;
      svg += `<text x="${padL - 8}" y="${yPos + 4}" fill="#ff9f0a" font-family="ui-monospace, monospace" font-size="11" text-anchor="end">${p}%</text>`;
    }

    const pts = data.map((d, idx) => {
      const x = padL + idx * colW + colW * 0.5;
      const y = padT + plotH - (d.truePct / 50) * plotH;
      return { x, y, d };
    });

    const areaD = `${pts.reduce((acc, pt, i) => `${acc} ${i === 0 ? "M" : "L"} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`, "")} L ${pts[pts.length - 1].x.toFixed(1)} ${padT + plotH} L ${pts[0].x.toFixed(1)} ${padT + plotH} Z`;
    svg += `<path d="${areaD}" fill="rgba(255, 159, 10, 0.16)" />`;

    const lineD = pts.reduce((acc, pt, i) => `${acc} ${i === 0 ? "M" : "L"} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`, "");
    svg += `<path d="${lineD}" fill="none" stroke="#ff9f0a" stroke-width="2.6" />`;

    pts.forEach((pt) => {
      svg += `<circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="3.8" fill="#ffd60a" stroke="#1c1c1e" stroke-width="1.4" class="time-node" data-month="${pt.d.month}" data-all="${pt.d.all}" data-false="${pt.d.false}" data-true="${pt.d.true}" data-maybe="${pt.d.maybe}" data-pct="${pt.d.truePct}" data-partial="${pt.d.month === "2026-11"}" />`;
    });
  }

  // X Axis Baseline & Labels
  svg += `<line x1="${padL}" y1="${padT + plotH}" x2="${w - padR}" y2="${padT + plotH}" stroke="rgba(255,255,255,0.2)" />`;
  data.forEach((d, idx) => {
    if (idx % 6 === 0 || idx === numPoints - 1) {
      const xPos = padL + idx * colW + colW * 0.5;
      const label = d.month.slice(2);
      svg += `<text x="${xPos}" y="${h - 14}" fill="rgba(235,235,245,0.72)" font-family="ui-monospace, monospace" font-size="11" text-anchor="middle">${label}</text>`;
      svg += `<line x1="${xPos}" y1="${padT + plotH}" x2="${xPos}" y2="${padT + plotH + 5}" stroke="rgba(255,255,255,0.2)" />`;
    }
  });

  // Landmark Claude & GPT Release Vertical Lines (Collision-Free Pill Badges)
  if (showOverTimeEvents) {
    const monthIdxMap = {};
    data.forEach((d, idx) => {
      monthIdxMap[d.month] = idx;
    });

    const labelSlots = [];
    events.forEach((evt) => {
      const idx = monthIdxMap[evt.month];
      if (idx === undefined) return;
      const dayRatio = evt.day ? Math.min(Math.max(evt.day / 30, 0.16), 0.84) : 0.5;
      const xPos = padL + idx * colW + colW * dayRatio;
      const strokeCol = evt.family === "claude" ? "#bf5af2" : "#30d158";
      const shortTag = getShortModelTag(evt.model);
      const pillW = Math.max(24, shortTag.length * 6.5 + 10);

      let tier = 0;
      let placed = false;
      for (let t = 0; t < 4; t++) {
        const collides = labelSlots.some(
          (s) => s.tier === t && Math.abs(s.x - xPos) < (s.w + pillW) * 0.55 + 6
        );
        if (!collides) {
          tier = t;
          placed = true;
          break;
        }
      }
      if (!placed) tier = labelSlots.length % 4;

      const pillCenterX = Math.max(padL + pillW / 2, Math.min(xPos, w - padR - pillW / 2));
      labelSlots.push({ x: pillCenterX, tier, w: pillW });

      const badgeY = padT - 18 - tier * 17;
      svg += `<line x1="${xPos.toFixed(1)}" y1="${badgeY + 13}" x2="${xPos.toFixed(1)}" y2="${padT + plotH}" stroke="${strokeCol}" stroke-width="1.4" stroke-dasharray="4,3" stroke-opacity="0.7" />`;
      svg += `<circle cx="${xPos.toFixed(1)}" cy="${padT + plotH}" r="2.8" fill="${strokeCol}" />`;
      svg += `<rect x="${(pillCenterX - pillW / 2).toFixed(1)}" y="${badgeY}" width="${pillW}" height="14" rx="4" fill="#14151c" stroke="${strokeCol}" stroke-width="1" />`;
      svg += `<text x="${pillCenterX.toFixed(1)}" y="${badgeY + 10}" fill="${strokeCol}" font-family="ui-monospace, monospace" font-size="8.5" font-weight="700" text-anchor="middle">${shortTag}</text>`;
      svg += `<line x1="${xPos.toFixed(1)}" y1="${badgeY}" x2="${xPos.toFixed(1)}" y2="${padT + plotH}" stroke="transparent" stroke-width="12" class="time-evt-hit" data-model="${evt.model}" data-date="${evt.date}" data-family="${evt.family === "claude" ? "Anthropic Claude" : "OpenAI GPT"}" data-note="${evt.note}" data-month="${evt.month}" />`;
    });
  }

  svg += `</svg>`;
  container.innerHTML = svg;

  // Tooltip for Event Vertical Lines
  container.querySelectorAll(".time-evt-hit").forEach((el) => {
    el.addEventListener("mouseenter", (e) => {
      const model = el.getAttribute("data-model");
      const date = el.getAttribute("data-date");
      const family = el.getAttribute("data-family");
      const note = el.getAttribute("data-note");
      const month = el.getAttribute("data-month");
      const mData = data.find((d) => d.month === month);

      const tooltip = document.getElementById("chart-tooltip");
      if (!tooltip) return;
      tooltip.innerHTML = `
        <div class="tooltip-title">${model} Release</div>
        <div class="tooltip-row"><span>Provider:</span><strong>${family}</strong></div>
        <div class="tooltip-row"><span>Date:</span><strong>${date}</strong></div>
        <div class="tooltip-row"><span>Milestone:</span><strong>${note}</strong></div>
        ${mData ? `<div class="tooltip-row" style="color:var(--apple-orange);"><span>${month} AI Share:</span><strong>${mData.truePct}% (${fmtInt(mData.true)} games)</strong></div>` : ""}
      `;
      tooltip.classList.remove("hidden");
      moveTooltip(e);
    });
    el.addEventListener("mousemove", (e) => moveTooltip(e));
    el.addEventListener("mouseleave", () => hideTooltip());
  });

  // Tooltip for bars/nodes
  container.querySelectorAll(".time-bar, .time-node").forEach((el) => {
    el.addEventListener("mouseenter", (e) => {
      const month = el.getAttribute("data-month");
      const all = el.getAttribute("data-all");
      const f = el.getAttribute("data-false");
      const t = el.getAttribute("data-true");
      const m = el.getAttribute("data-maybe");
      const pct = el.getAttribute("data-pct");
      const isPartial = el.getAttribute("data-partial") === "true";

      const tooltip = document.getElementById("chart-tooltip");
      if (!tooltip) return;
      tooltip.innerHTML = `
        <div class="tooltip-title">${month}${isPartial ? " (Partial: to Nov 2)" : ""}</div>
        <div class="tooltip-row"><span>Total Releases:</span><strong>${fmtInt(all)}</strong></div>
        <div class="tooltip-row" style="color:#ff9f0a;"><span>AI Used (TRUE):</span><strong>${fmtInt(t)} (${pct}%)</strong></div>
        <div class="tooltip-row" style="color:#64d2ff;"><span>Non-AI (FALSE):</span><strong>${fmtInt(f)}</strong></div>
        ${Number(m) > 0 ? `<div class="tooltip-row" style="color:#ffd60a;"><span>Prototyping (MAYBE):</span><strong>${fmtInt(m)}</strong></div>` : ""}
      `;
      tooltip.classList.remove("hidden");
      moveTooltip(e);
    });

    el.addEventListener("mousemove", (e) => moveTooltip(e));
    el.addEventListener("mouseleave", () => hideTooltip());
  });

  // KPIs
  const kpis = document.getElementById("time-kpis");
  if (kpis) {
    kpis.innerHTML = `
      <div class="kpi-card">
        <span class="kpi-label">JAN 2024 SHARE</span>
        <span class="kpi-val" style="color: var(--tetris-cyan);">1.5%</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">OCT 2026 PEAK</span>
        <span class="kpi-val" style="color: var(--tetris-orange);">47.2%</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">TOTAL AI GAMES</span>
        <span class="kpi-val" style="color: var(--tetris-green);">15,218</span>
      </div>
      <div class="kpi-card">
        <span class="kpi-label">MONTHLY RECORD</span>
        <span class="kpi-val" style="color: var(--tetris-yellow);">2,009 games</span>
      </div>
    `;
  }
}

/* =========================================================
   10. MORE INFO TAB SUBVIEWS & CONTROLS
   ========================================================= */
let bestAiSelectedTags = new Set();
let bestAiTagQuery = "";
let bestAiMatchMode = "all"; // "all" | "any"
let moreMinScore = 0;
let moreSortPriority = "reviews";

let activeAiUsageSlice = "Visual";

let tagScoreDirection = "beyond";
let tagScoreThreshold = 80;
let tagMinGames = 15;

function initMoreInfoSubnav() {
  const subBtns = document.querySelectorAll('#topbar-subnav-drawer .section-subnav[data-for-section="more-info"] .subnav-btn');
  const subviews = document.querySelectorAll(".more-subview");

  subBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-moresubview");
      subBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("active", active);
        b.setAttribute("aria-selected", active ? "true" : "false");
      });
      subviews.forEach((sv) => {
        sv.classList.toggle("active", sv.id === `subview-${target}`);
      });
      if (window.scrollY > 40) window.scrollTo({ top: 0, behavior: "smooth" });

      if (target === "more-best-ai") renderBestAiGames();
      else if (target === "more-vis-aud") renderFunVisAud();
      else if (target === "more-ai-usage") renderAiUsagePie();
      else if (target === "more-best-tags") renderBestPerformingTags();
      else if (target === "more-cost-vs") renderFunCostVs();
    });
  });

  initBestAiGamesView();
  initFunVisAudView();
  initAiUsagePieView();
  initBestPerformingTagsView();
  initFunCostVsView();
}

function initBestAiGamesView() {
  const pillsContainer = document.getElementById("best-ai-tag-pills");
  const tagSearch = document.getElementById("best-ai-tag-search");
  const selectedBadge = document.getElementById("best-ai-selected-count");
  const matchBtns = document.querySelectorAll("#best-ai-match-toggle .mode-btn");

  const allTags = (window.STUDY_DATA_EXTENDED && window.STUDY_DATA_EXTENDED.bestAiAllTags) || [];

  const renderTagPills = () => {
    if (!pillsContainer) return;
    const q = bestAiTagQuery.toLowerCase();
    const filteredTags = allTags.filter((t) => !q || t.toLowerCase().includes(q));
    // Pin active tags first when no search query so user sees active selections immediately
    const ordered = q
      ? filteredTags
      : [
          ...filteredTags.filter((t) => bestAiSelectedTags.has(t)),
          ...filteredTags.filter((t) => !bestAiSelectedTags.has(t))
        ];

    pillsContainer.innerHTML = ordered
      .map((t) => {
        const isAct = bestAiSelectedTags.has(t);
        return `<button type="button" class="tag-toggle-pill ${isAct ? "active" : ""}" data-tag="${t.replace(/"/g, "&quot;")}">${t}</button>`;
      })
      .join("");

    if (selectedBadge) {
      selectedBadge.textContent = `${bestAiSelectedTags.size} selected`;
    }

    pillsContainer.querySelectorAll(".tag-toggle-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        const tag = pill.getAttribute("data-tag");
        if (bestAiSelectedTags.has(tag)) {
          bestAiSelectedTags.delete(tag);
        } else {
          bestAiSelectedTags.add(tag);
        }
        renderTagPills();
        renderBestAiGames();
      });
    });
  };

  if (tagSearch) {
    tagSearch.addEventListener("input", (e) => {
      bestAiTagQuery = e.target.value.trim();
      renderTagPills();
    });
  }

  matchBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      bestAiMatchMode = btn.getAttribute("data-match") || "all";
      matchBtns.forEach((b) => b.classList.toggle("active", b === btn));
      renderBestAiGames();
    });
  });

  const scorePills = document.querySelectorAll("#best-ai-score-pills .mini-pill");
  scorePills.forEach((pill) => {
    pill.addEventListener("click", () => {
      moreMinScore = parseFloat(pill.getAttribute("data-score")) || 0;
      scorePills.forEach((p) => p.classList.toggle("active", p === pill));
      renderBestAiGames();
    });
  });

  const sortBtns = document.querySelectorAll("#best-ai-sort-toggle .mode-btn");
  sortBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      moreSortPriority = btn.getAttribute("data-sort");
      sortBtns.forEach((b) => b.classList.toggle("active", b === btn));
      renderBestAiGames();
    });
  });

  const resetBtn = document.getElementById("reset-best-ai-filters");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      bestAiSelectedTags.clear();
      bestAiTagQuery = "";
      bestAiMatchMode = "all";
      moreMinScore = 0;
      moreSortPriority = "reviews";
      if (tagSearch) tagSearch.value = "";
      matchBtns.forEach((b, idx) => b.classList.toggle("active", idx === 0));
      scorePills.forEach((p, idx) => p.classList.toggle("active", idx === 0));
      sortBtns.forEach((b, idx) => b.classList.toggle("active", idx === 0));
      renderTagPills();
      renderBestAiGames();
    });
  }

  renderTagPills();
  renderBestAiGames();
}

function renderBestAiGames() {
  const container = document.getElementById("best-ai-games-container");
  const countBadge = document.getElementById("best-ai-matches-badge");
  if (!container || !window.STUDY_DATA_EXTENDED) return;

  const games = window.STUDY_DATA_EXTENDED.bestAiGames || [];
  const selTags = Array.from(bestAiSelectedTags);

  const filtered = games.filter((g) => {
    if (selTags.length > 0) {
      if (bestAiMatchMode === "all") {
        if (!selTags.every((t) => g.tags.includes(t))) return false;
      } else {
        if (!selTags.some((t) => g.tags.includes(t))) return false;
      }
    }
    if (moreMinScore > 0 && g.score < moreMinScore) return false;
    return true;
  });

  filtered.sort((a, b) => {
    if (moreSortPriority === "score") {
      return b.score - a.score || b.reviews - a.reviews;
    }
    return b.reviews - a.reviews || b.score - a.score;
  });

  const top5 = filtered.slice(0, 5);

  if (countBadge) {
    countBadge.textContent = `${filtered.length} matching games`;
  }

  if (top5.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <p style="font-size: 1.1rem; color: #ffffff; margin-bottom: 8px;">No games match your filter</p>
        <p style="font-size: 0.8rem;">Try lowering the minimum score or clearing your tag search.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = top5
    .map((g, idx) => {
      const capsuleUrl = `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${g.appid}/header.jpg`;
      const fallbackUrl = `https://cdn.akamai.steamstatic.com/steam/apps/${g.appid}/capsule_231x87.jpg`;

      const aiTagsPills = g.ai_tags
        ? g.ai_tags
            .split("|")
            .map((t) => `<span class="game-ai-tag-pill">${t}</span>`)
            .join("")
        : "";

      const gameTagsPills = g.tags
        .slice(0, 4)
        .map((t) => `<span class="game-tag-pill">${t}</span>`)
        .join("");

      return `
        <div class="best-game-card">
          <span class="best-game-rank">#${idx + 1}</span>
          <div class="best-game-capsule-wrapper">
            <img 
              class="best-game-capsule" 
              src="${capsuleUrl}" 
              alt="${g.name} Capsule Art" 
              loading="lazy"
              onerror="this.onerror=null; this.src='${fallbackUrl}'; this.onerror=function(){this.parentElement.style.display='none';};"
            />
          </div>
          <div class="best-game-info">
            <a href="https://store.steampowered.com/app/${g.appid}/" target="_blank" rel="noopener noreferrer" class="best-game-title">
              ${g.name} &nearr;
            </a>
            <div class="best-game-meta-row">
              <span class="game-reviews-badge">&starf; ${fmtInt(g.reviews)} reviews</span>
              <span class="game-score-badge">${g.score}% Positive</span>
              ${g.desc ? `<span class="tag-count-sub">${g.desc}</span>` : ""}
            </div>
            <div class="best-game-tags">
              ${aiTagsPills}
              ${gameTagsPills}
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function initAiUsagePieView() {
  renderAiUsagePie();
}

function renderAiUsagePie() {
  const container = document.getElementById("ai-pie-svg-container");
  const legend = document.getElementById("ai-pie-legend");
  if (!container || !window.STUDY_DATA_EXTENDED) return;

  const pieData = window.STUDY_DATA_EXTENDED.aiUsagePie;
  const slices = pieData.slices;
  const total = pieData.totalDisclosures;
  const maxSliceCount = Math.max(...slices.map((s) => s.count), 1);

  const palette = [
    "#64d2ff", // Visual (Apple Teal)
    "#ff9f0a", // Marketing (Apple Orange)
    "#bf5af2", // Audio (Apple Purple)
    "#30d158", // Text (Apple Green)
    "#ffd60a", // Code (Apple Yellow)
    "#ff453a", // Prototyping (Apple Red)
    "#0a84ff", // Live_Generated (Apple Blue)
    "#5e5ce6", // Unspecified (Apple Indigo)
    "#ff375f", // External_Ai_service (Apple Pink)
    "#8e8e93"  // Declares_No_Ai (Apple Gray)
  ];

  let currentAngle = -Math.PI / 2; // Start cleanly at 12 o'clock
  const cx = 160;
  const cy = 160;
  const r = 122;
  const innerR = 66;

  let svg = `<svg viewBox="0 0 320 320" style="overflow: visible;">`;

  slices.forEach((sl, idx) => {
    const fraction = sl.count / total;
    const angle = fraction * 2 * Math.PI;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    const midAngle = startAngle + angle / 2;
    currentAngle = endAngle;

    const isAct = sl.ai_tag === activeAiUsageSlice;
    const pop = isAct ? 6 : 0;
    const scx = cx + pop * Math.cos(midAngle);
    const scy = cy + pop * Math.sin(midAngle);

    const x1 = scx + r * Math.cos(startAngle);
    const y1 = scy + r * Math.sin(startAngle);
    const x2 = scx + r * Math.cos(endAngle);
    const y2 = scy + r * Math.sin(endAngle);

    const ix1 = scx + innerR * Math.cos(endAngle);
    const iy1 = scy + innerR * Math.sin(endAngle);
    const ix2 = scx + innerR * Math.cos(startAngle);
    const iy2 = scy + innerR * Math.sin(startAngle);

    const largeArc = angle > Math.PI ? 1 : 0;
    const pathD = `M ${x1.toFixed(2)} ${y1.toFixed(2)} A ${r} ${r} 0 ${largeArc} 1 ${x2.toFixed(2)} ${y2.toFixed(2)} L ${ix1.toFixed(2)} ${iy1.toFixed(2)} A ${innerR} ${innerR} 0 ${largeArc} 0 ${ix2.toFixed(2)} ${iy2.toFixed(2)} Z`;

    const color = palette[idx % palette.length];

    svg += `<path d="${pathD}" fill="${color}" fill-opacity="${isAct ? "1" : "0.8"}" stroke="${isAct ? "#ffffff" : "#0b0d14"}" stroke-width="${isAct ? "2.4" : "1.2"}" class="pie-slice ${isAct ? "active" : ""}" data-tag="${sl.ai_tag}" data-count="${sl.count}" data-pct="${sl.pct}" />`;
  });

  // Center Text in Donut
  const activeObj = slices.find((s) => s.ai_tag === activeAiUsageSlice) || slices[0];
  svg += `
    <text x="${cx}" y="${cy - 10}" fill="#f5f5f7" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="13" font-weight="700" text-anchor="middle">${activeObj.ai_tag}</text>
    <text x="${cx}" y="${cy + 10}" fill="#64d2ff" font-family="ui-monospace, monospace" font-size="14" font-weight="700" text-anchor="middle">${activeObj.pct}%</text>
    <text x="${cx}" y="${cy + 26}" fill="rgba(235,235,245,0.68)" font-family="ui-monospace, monospace" font-size="10" text-anchor="middle">${fmtInt(activeObj.count)} games</text>
  `;

  svg += `</svg>`;
  container.innerHTML = svg;

  // Ranked Interactive Bar-Legend (makes even 0.4% slices effortless to inspect & click)
  if (legend) {
    legend.innerHTML = slices
      .map((sl, idx) => {
        const color = palette[idx % palette.length];
        const isAct = sl.ai_tag === activeAiUsageSlice;
        const barW = Math.max(2, (sl.count / maxSliceCount) * 100);
        return `
          <div class="pie-legend-item ${isAct ? "active" : ""}" data-tag="${sl.ai_tag}">
            <span class="pie-swatch" style="background: ${color};"></span>
            <span style="font-weight: 600; color: #ffffff;">${sl.ai_tag}</span>
            <div class="pie-legend-bar-track">
              <div class="pie-legend-bar-fill" style="width: ${barW.toFixed(1)}%; background: ${color};"></div>
            </div>
            <span style="color: rgba(235,235,245,0.78); font-family: ui-monospace, SFMono-Regular, monospace; font-size: 0.78em; white-space: nowrap;">${fmtInt(sl.count)} (${sl.pct}%)</span>
          </div>
        `;
      })
      .join("");

    legend.querySelectorAll(".pie-legend-item").forEach((item) => {
      item.addEventListener("click", () => {
        activeAiUsageSlice = item.getAttribute("data-tag");
        renderAiUsagePie();
      });
    });
  }

  // Slice click & hover events
  container.querySelectorAll(".pie-slice").forEach((slice) => {
    slice.addEventListener("click", () => {
      activeAiUsageSlice = slice.getAttribute("data-tag");
      renderAiUsagePie();
    });

    slice.addEventListener("mouseenter", (e) => {
      const tag = slice.getAttribute("data-tag");
      const count = slice.getAttribute("data-count");
      const pct = slice.getAttribute("data-pct");

      const tooltip = document.getElementById("chart-tooltip");
      if (!tooltip) return;
      tooltip.innerHTML = `
        <div class="tooltip-title">${tag} AI Disclosure</div>
        <div class="tooltip-row"><span>Games Disclosing:</span><strong>${fmtInt(count)}</strong></div>
        <div class="tooltip-row" style="color:#64d2ff;"><span>Share of Tag Mentions:</span><strong>${pct}%</strong></div>
      `;
      tooltip.classList.remove("hidden");
      moveTooltip(e);
    });
    slice.addEventListener("mousemove", (e) => moveTooltip(e));
    slice.addEventListener("mouseleave", () => hideTooltip());
  });

  renderAiUsageLeftPanel(activeObj);
}

function renderAiUsageLeftPanel(activeObj) {
  const title = document.getElementById("ai-usage-tag-title");
  const countPill = document.getElementById("ai-usage-count-pill");
  const insight = document.getElementById("ai-usage-insight");
  const crossTags = document.getElementById("ai-usage-cross-tags");
  const notable = document.getElementById("ai-usage-notable-games");

  if (title) title.textContent = `${activeObj.ai_tag} Disclosures`;
  if (countPill) countPill.textContent = `${fmtInt(activeObj.count)} games (${activeObj.pct}%)`;

  if (insight) {
    insight.innerHTML = `Games disclosing <strong>${activeObj.ai_tag} AI</strong> make up <strong>${activeObj.pct}%</strong> of all disclosures. The list below reveals the most frequent gameplay tags developers pair with this AI technology.`;
  }

  if (crossTags) {
    const maxVal = Math.max(...activeObj.top_tags.map((t) => t.count), 1);
    crossTags.innerHTML = activeObj.top_tags
      .map((t) => {
        const w = ((t.count / maxVal) * 100).toFixed(1);
        return `
          <div class="tag-bar-row">
            <span class="tag-bar-name">${t.tag}</span>
            <div class="tag-bar-track">
              <div class="tag-bar-fill" style="width: ${w}%; background: var(--tetris-orange);"></div>
            </div>
            <span class="tag-bar-count">${fmtInt(t.count)} (${t.pct}%)</span>
          </div>
        `;
      })
      .join("");
  }

  if (notable && activeObj.examples) {
    notable.innerHTML = activeObj.examples
      .map(
        (ex) => `
        <div class="notable-game-item">
          <div class="notable-game-left">
            <span class="notable-game-title">${ex.name}</span>
          </div>
          <span class="notable-game-meta" style="color: var(--tetris-cyan);">${fmtInt(ex.reviews)} rev</span>
        </div>
      `
      )
      .join("");
  }
}

function initBestPerformingTagsView() {
  const dirBtns = document.querySelectorAll("#tag-score-direction-toggle .mode-btn");
  dirBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tagScoreDirection = btn.getAttribute("data-dir");
      dirBtns.forEach((b) => b.classList.toggle("active", b === btn));
      updateScoreSliderLabel();
      renderBestPerformingTags();
    });
  });

  const slider = document.getElementById("tag-score-slider");
  if (slider) {
    slider.addEventListener("input", (e) => {
      tagScoreThreshold = parseFloat(e.target.value);
      updateScoreSliderLabel();
      renderBestPerformingTags();
    });
  }

  const presetBtns = document.querySelectorAll("#tag-score-presets .mini-pill");
  presetBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const preset = btn.getAttribute("data-preset");
      presetBtns.forEach((b) => b.classList.toggle("active", b === btn));
      if (preset === "below-70") {
        tagScoreDirection = "below";
        tagScoreThreshold = 70;
      } else {
        tagScoreDirection = "beyond";
        tagScoreThreshold = parseFloat(preset);
      }
      dirBtns.forEach((b) => b.classList.toggle("active", b.getAttribute("data-dir") === tagScoreDirection));
      if (slider) slider.value = tagScoreThreshold;
      updateScoreSliderLabel();
      renderBestPerformingTags();
    });
  });

  const minGamesBtns = document.querySelectorAll("#tag-min-games-pills .mini-pill");
  minGamesBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      tagMinGames = parseInt(btn.getAttribute("data-min"), 10) || 15;
      minGamesBtns.forEach((b) => b.classList.toggle("active", b === btn));
      renderBestPerformingTags();
    });
  });

  const resetBtn = document.getElementById("reset-best-tags-filters");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      tagScoreDirection = "beyond";
      tagScoreThreshold = 80;
      tagMinGames = 15;
      if (slider) slider.value = 80;
      dirBtns.forEach((b, idx) => b.classList.toggle("active", idx === 0));
      minGamesBtns.forEach((b, idx) => b.classList.toggle("active", idx === 0));
      presetBtns.forEach((b) => b.classList.toggle("active", b.getAttribute("data-preset") === "80"));
      updateScoreSliderLabel();
      renderBestPerformingTags();
    });
  }

  updateScoreSliderLabel();
  renderBestPerformingTags();
}

function updateScoreSliderLabel() {
  const lbl = document.getElementById("tag-score-slider-label");
  const valBadge = document.getElementById("tag-score-slider-val");
  const sym = tagScoreDirection === "beyond" ? "≥" : "≤";
  if (lbl) lbl.textContent = `Score Threshold: ${sym} ${tagScoreThreshold}%`;
  if (valBadge) valBadge.textContent = `${tagScoreThreshold}%`;
}

function renderBestPerformingTags() {
  const tableBody = document.getElementById("best-tags-table-body");
  const countBadge = document.getElementById("best-tags-count-badge");
  if (!tableBody || !window.STUDY_DATA_EXTENDED) return;

  const allTags = window.STUDY_DATA_EXTENDED.bestPerformingTags || [];

  const filtered = allTags.filter((t) => {
    if (t.gameCount < tagMinGames) return false;
    if (tagScoreDirection === "beyond") {
      return t.avgScore >= tagScoreThreshold;
    } else {
      return t.avgScore <= tagScoreThreshold;
    }
  });

  if (countBadge) {
    countBadge.textContent = `Matching Tags: ${filtered.length}`;
  }

  if (filtered.length === 0) {
    tableBody.innerHTML = `
      <tr>
        <td colspan="6" style="text-align: center; padding: 30px; color: var(--text-muted);">
          No tags match the selected score threshold and minimum game filter.
        </td>
      </tr>
    `;
    return;
  }

  tableBody.innerHTML = filtered
    .map((t, idx) => {
      const scoreColor = t.avgScore >= 85 ? "var(--tetris-green)" : t.avgScore >= 75 ? "var(--tetris-yellow)" : "var(--tetris-red)";

      return `
        <tr>
          <td class="rank-badge-cell">${String(idx + 1).padStart(2, "0")}</td>
          <td>
            <strong style="color: #ffffff;">${t.tag}</strong>
          </td>
          <td>
            <span style="font-family: ui-monospace, SFMono-Regular, monospace; font-weight: 700; color: ${scoreColor};">
              ${t.avgScore}%
            </span>
          </td>
          <td style="font-family: ui-monospace, SFMono-Regular, monospace;">${fmtInt(t.gameCount)} games</td>
          <td style="font-family: ui-monospace, SFMono-Regular, monospace; color: var(--apple-blue);">${t.highScorePct}%</td>
          <td>
            <a href="https://store.steampowered.com/app/${t.topGame.appid}/" target="_blank" rel="noopener noreferrer" style="color: #ffffff; text-decoration: none;">
              ${t.topGame.name} <small style="color: var(--text-muted);">(${t.topGame.score}%)</small> &nearr;
            </a>
          </td>
        </tr>
      `;
    })
    .join("");
}


/* =========================================================
   14. FOR FUN SUBNAV & SUBVIEWS
   ========================================================= */
let funFootSearchQuery = "";
let funFootTagFilter = "ALL";
let funFootMinScore = 0;

let funVisAudTagFilter = "ALL";

let funCostSelectedTags = new Set(["Action", "RPG", "Casual", "Simulation", "Indie", "Strategy", "Adventure"]);

let boringSelectedTags = ["Singleplayer", "Action", "Multiplayer", "Adventure", "Indie"];
let boringTrendingSort = "growth";
let boringCostViewMode = "buckets";

function initFunSubnav() {
  const subBtns = document.querySelectorAll('#topbar-subnav-drawer .section-subnav[data-for-section="for-fun"] .subnav-btn');
  const subviews = document.querySelectorAll("#section-for-fun .fun-subview");

  subBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-funsubview");
      subBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("active", active);
        b.setAttribute("aria-selected", active ? "true" : "false");
      });
      subviews.forEach((sv) => {
        sv.classList.toggle("active", sv.id === `subview-${target}`);
      });
      if (window.scrollY > 40) window.scrollTo({ top: 0, behavior: "smooth" });

      if (target === "fun-foot") renderFunFoot();
      else if (target === "fun-word-ai") renderFunWordAi();
    });
  });

  initFunFootView();
  initFunWordAiView();
}

function initFunFootView() {
  const searchInput = document.getElementById("fun-foot-search");
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      funFootSearchQuery = e.target.value.toLowerCase().trim();
      renderFunFoot();
    });
  }

  const tagSelect = document.getElementById("fun-foot-tag-select");
  if (tagSelect && window.STUDY_DATA_EXTENDED && window.STUDY_DATA_EXTENDED.funDevsFoot) {
    const allTags = new Set();
    window.STUDY_DATA_EXTENDED.funDevsFoot.games.forEach((g) => {
      g.tags.forEach((t) => allTags.add(t));
    });
    Array.from(allTags).sort().forEach((t) => {
      const opt = document.createElement("option");
      opt.value = t;
      opt.textContent = t;
      tagSelect.appendChild(opt);
    });

    tagSelect.addEventListener("change", (e) => {
      funFootTagFilter = e.target.value;
      renderFunFoot();
    });
  }

  const scorePills = document.querySelectorAll("#fun-foot-score-pills .mini-pill");
  scorePills.forEach((pill) => {
    pill.addEventListener("click", () => {
      funFootMinScore = parseFloat(pill.getAttribute("data-score")) || 0;
      scorePills.forEach((p) => p.classList.toggle("active", p === pill));
      renderFunFoot();
    });
  });

  const resetBtn = document.getElementById("reset-fun-foot-filters");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      funFootSearchQuery = "";
      funFootTagFilter = "ALL";
      funFootMinScore = 0;
      if (searchInput) searchInput.value = "";
      if (tagSelect) tagSelect.value = "ALL";
      scorePills.forEach((p, idx) => p.classList.toggle("active", idx === 0));
      renderFunFoot();
    });
  }

  renderFunFoot();
}

function renderFunFoot() {
  const container = document.getElementById("fun-foot-games-container");
  const countBadge = document.getElementById("fun-foot-count-badge");
  if (!container || !window.STUDY_DATA_EXTENDED || !window.STUDY_DATA_EXTENDED.funDevsFoot) return;

  const games = window.STUDY_DATA_EXTENDED.funDevsFoot.games || [];

  const filtered = games.filter((g) => {
    if (funFootSearchQuery && !g.name.toLowerCase().includes(funFootSearchQuery)) return false;
    if (funFootTagFilter !== "ALL" && !g.tags.includes(funFootTagFilter)) return false;
    if (funFootMinScore > 0 && g.score < funFootMinScore) return false;
    return true;
  });

  filtered.sort((a, b) => b.reviews - a.reviews);
  const top5 = filtered.slice(0, 5);

  if (countBadge) {
    countBadge.textContent = `${filtered.length} matching games`;
  }

  if (top5.length === 0) {
    container.innerHTML = `
      <div style="text-align: center; padding: 40px 20px; color: var(--text-muted);">
        <p style="font-size: 1.1rem; color: #ffffff; margin-bottom: 8px;">No games match your filter</p>
        <p style="font-size: 0.8rem;">Try clearing your tag or search filter.</p>
      </div>
    `;
    return;
  }

  container.innerHTML = top5
    .map((g, idx) => {
      const capsuleUrl = `https://shared.cloudflare.steamstatic.com/store_item_assets/steam/apps/${g.appid}/header.jpg`;
      const fallbackUrl = `https://cdn.akamai.steamstatic.com/steam/apps/${g.appid}/capsule_231x87.jpg`;

      const tagPills = g.tags.slice(0, 4).map((t) => `<span class="game-tag-pill">${t}</span>`).join("");
      const priceBadge = g.price === 0 ? "Free" : `$${g.price.toFixed(2)}`;

      return `
        <div class="best-game-card">
          <span class="best-game-rank">#${idx + 1}</span>
          <div class="best-game-capsule-wrapper">
            <img 
              class="best-game-capsule" 
              src="${capsuleUrl}" 
              alt="${g.name} Capsule Art" 
              loading="lazy"
              onerror="this.onerror=null; this.src='${fallbackUrl}'; this.onerror=function(){this.parentElement.style.display='none';};"
            />
          </div>
          <div class="best-game-info">
            <a href="https://store.steampowered.com/app/${g.appid}/" target="_blank" rel="noopener noreferrer" class="best-game-title">
              ${g.name} &nearr;
            </a>
            <div class="best-game-meta-row">
              <span class="game-reviews-badge">&starf; ${fmtInt(g.reviews)} reviews</span>
              <span class="game-score-badge">${g.score}% Positive</span>
              <span class="tag-count-sub">${priceBadge}</span>
            </div>
            <div class="disclosure-quote-box">
              💬 &ldquo;${g.disclosure}&rdquo;
            </div>
            <div class="best-game-tags">
              <span class="game-ai-tag-pill game-ai-tag-pill--noai">Declares_No_Ai</span>
              ${tagPills}
            </div>
          </div>
        </div>
      `;
    })
    .join("");
}

function initFunVisAudView() {
  const tagSelect = document.getElementById("fun-vis-aud-tag-select");
  if (tagSelect && window.STUDY_DATA_EXTENDED && window.STUDY_DATA_EXTENDED.funVisualAudio) {
    const allTags = new Set();
    const data = window.STUDY_DATA_EXTENDED.funVisualAudio;
    [...data.visual, ...data.audio, ...data.both].forEach((g) => {
      g.tags.forEach((t) => allTags.add(t));
    });

    Array.from(allTags).sort().forEach((t) => {
      const opt = document.createElement("option");
      opt.value = t;
      opt.textContent = t;
      tagSelect.appendChild(opt);
    });

    tagSelect.addEventListener("change", (e) => {
      funVisAudTagFilter = e.target.value;
      renderFunVisAud();
    });
  }

  renderFunVisAud();
}

function renderFunVisAud() {
  if (!window.STUDY_DATA_EXTENDED || !window.STUDY_DATA_EXTENDED.funVisualAudio) return;
  const data = window.STUDY_DATA_EXTENDED.funVisualAudio;

  const renderColumn = (list, containerId) => {
    const container = document.getElementById(containerId);
    if (!container) return;

    const filtered = list.filter((g) => {
      if (funVisAudTagFilter !== "ALL" && !g.tags.includes(funVisAudTagFilter)) return false;
      return true;
    });

    filtered.sort((a, b) => b.reviews - a.reviews);
    const top5 = filtered.slice(0, 5);

    if (top5.length === 0) {
      container.innerHTML = `
        <div style="text-align: center; padding: 25px 10px; color: var(--text-muted); font-size: 0.78rem;">
          No matching games in this category.
        </div>
      `;
      return;
    }

    container.innerHTML = top5
      .map((g, idx) => {
        const topTag = g.tags[0] ? `<span class="game-tag-pill">${g.tags[0]}</span>` : "";
        const scoreCol = g.score >= 80 ? "var(--tetris-green)" : "var(--tetris-yellow)";
        return `
          <div class="column-game-row">
            <span class="column-game-rank">${String(idx + 1).padStart(2, "0")}</span>
            <div class="column-game-info">
              <a href="https://store.steampowered.com/app/${g.appid}/" target="_blank" rel="noopener noreferrer" class="column-game-title">
                ${g.name} &nearr;
              </a>
              <div class="column-game-meta">
                <span>&starf; ${fmtInt(g.reviews)} rev</span>
                <span>&bull;</span>
                <span style="color: ${scoreCol};">${g.score}%</span>
                ${topTag}
              </div>
            </div>
          </div>
        `;
      })
      .join("");
  };

  renderColumn(data.visual, "fun-vis-list");
  renderColumn(data.audio, "fun-aud-list");
  renderColumn(data.both, "fun-both-list");
}

function initFunWordAiView() {
  renderFunWordAi();
}

function renderFunWordAi() {
  const container = document.getElementById("fun-word-ai-chart-container");
  if (!container || !window.STUDY_DATA_EXTENDED || !window.STUDY_DATA_EXTENDED.funWordAi) return;

  const series = window.STUDY_DATA_EXTENDED.funWordAi.monthly || [];
  const w = 760;
  const h = 350;
  const padL = 58;
  const padR = 58;
  const padT = 26;
  const padB = 46;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  const numPoints = series.length;
  const colW = plotW / numPoints;
  const maxMonthly = 12;
  const maxCumulative = 100;

  let svg = `<svg viewBox="0 0 ${w} ${h}">`;
  svg += `<defs>
    <linearGradient id="aiWordGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ff9f0a" stop-opacity="0.95"/>
      <stop offset="100%" stop-color="#ff9f0a" stop-opacity="0.4"/>
    </linearGradient>
  </defs>`;

  // Left Y-Axis Title & Ticks (Monthly releases)
  svg += `<text x="15" y="${padT + plotH / 2}" fill="#ff9f0a" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle" transform="rotate(-90 15 ${padT + plotH / 2})">Monthly Releases</text>`;
  for (let i = 0; i <= 4; i++) {
    const val = Math.round((maxMonthly / 4) * i);
    const yPos = padT + plotH - (val / maxMonthly) * plotH;
    svg += `<line x1="${padL}" y1="${yPos}" x2="${w - padR}" y2="${yPos}" stroke="rgba(255,255,255,0.09)" stroke-dasharray="3,3" />`;
    svg += `<text x="${padL - 8}" y="${yPos + 4}" fill="rgba(235,235,245,0.72)" font-family="ui-monospace, monospace" font-size="11" text-anchor="end">${val}</text>`;
  }

  // Right Y-Axis Title & Ticks (Cumulative titles)
  svg += `<text x="${w - 14}" y="${padT + plotH / 2}" fill="#0a84ff" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle" transform="rotate(90 ${w - 14} ${padT + plotH / 2})">Cumulative Titles</text>`;
  for (let i = 0; i <= 4; i++) {
    const val = i * 25;
    const yPos = padT + plotH - (val / maxCumulative) * plotH;
    svg += `<text x="${w - padR + 8}" y="${yPos + 4}" fill="#64d2ff" font-family="ui-monospace, monospace" font-size="11" text-anchor="start">${val}</text>`;
  }

  svg += `<line x1="${padL}" y1="${padT + plotH}" x2="${w - padR}" y2="${padT + plotH}" stroke="rgba(255,255,255,0.2)" />`;

  // Stacked Bars (Orange = AI TRUE at bottom, Slate = Sci-Fi Theme Only FALSE on top)
  series.forEach((d, idx) => {
    const x = padL + idx * colW + 2;
    const barWidth = Math.max(2, colW - 4);
    const trueH = (d.ai_true / maxMonthly) * plotH;
    const falseH = (d.ai_false / maxMonthly) * plotH;
    const totalH = trueH + falseH;
    const topY = padT + plotH - totalH;

    if (d.ai_false > 0) {
      svg += `<rect x="${x.toFixed(1)}" y="${topY.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${falseH.toFixed(1)}" fill="#64748b" rx="2" class="time-bar" data-month="${d.month}" data-count="${d.count}" data-cum="${d.cumulative}" data-true="${d.ai_true}" data-false="${d.ai_false}" />`;
    }
    if (d.ai_true > 0) {
      svg += `<rect x="${x.toFixed(1)}" y="${(padT + plotH - trueH).toFixed(1)}" width="${barWidth.toFixed(1)}" height="${trueH.toFixed(1)}" fill="url(#aiWordGrad)" rx="2" class="time-bar" data-month="${d.month}" data-count="${d.count}" data-cum="${d.cumulative}" data-true="${d.ai_true}" data-false="${d.ai_false}" />`;
    }

    if (idx % 6 === 0 || idx === numPoints - 1) {
      const label = d.month.slice(2);
      svg += `<text x="${x + barWidth / 2}" y="${h - 14}" fill="rgba(235,235,245,0.72)" font-family="ui-monospace, monospace" font-size="11" text-anchor="middle">${label}</text>`;
      svg += `<line x1="${x + barWidth / 2}" y1="${padT + plotH}" x2="${x + barWidth / 2}" y2="${padT + plotH + 5}" stroke="rgba(255,255,255,0.2)" />`;
    }
  });

  // Cumulative Line
  const pts = series.map((d, idx) => {
    const x = padL + idx * colW + colW * 0.5;
    const y = padT + plotH - (d.cumulative / maxCumulative) * plotH;
    return { x, y, d };
  });

  const lineD = pts.reduce((acc, pt, i) => `${acc} ${i === 0 ? "M" : "L"} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`, "");
  svg += `<path d="${lineD}" fill="none" stroke="#0a84ff" stroke-width="2.6" />`;

  pts.forEach((pt) => {
    svg += `<circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="3.6" fill="#64d2ff" stroke="#1c1c1e" stroke-width="1.4" class="time-node" data-month="${pt.d.month}" data-count="${pt.d.count}" data-cum="${pt.d.cumulative}" data-true="${pt.d.ai_true}" data-false="${pt.d.ai_false}" />`;
  });

  svg += `</svg>`;
  container.innerHTML = svg;

  // Tooltip
  container.querySelectorAll(".time-bar, .time-node").forEach((el) => {
    el.addEventListener("mouseenter", (e) => {
      const month = el.getAttribute("data-month");
      const count = el.getAttribute("data-count");
      const cum = el.getAttribute("data-cum");
      const t = el.getAttribute("data-true");
      const f = el.getAttribute("data-false");

      const tooltip = document.getElementById("chart-tooltip");
      if (!tooltip) return;
      tooltip.innerHTML = `
        <div class="tooltip-title">${month} &bull; "AI" in Title${month === "2026-11" ? " (Partial)" : ""}</div>
        <div class="tooltip-row">
          <span>Monthly Releases:</span>
          <strong style="color: var(--tetris-orange);">${count} games</strong>
        </div>
        <div class="tooltip-row">
          <span>Cumulative Released:</span>
          <strong style="color: var(--tetris-cyan);">${cum} titles</strong>
        </div>
        <div class="tooltip-row">
          <span>Breakdown:</span>
          <strong>${t} AI Used &bull; ${f} Sci-Fi Only</strong>
        </div>
      `;
      tooltip.classList.remove("hidden");
      moveTooltip(e);
    });

    el.addEventListener("mousemove", (e) => moveTooltip(e));
    el.addEventListener("mouseleave", () => hideTooltip());
  });
}

let funCostTagQuery = "";

function initFunCostVsView() {
  const pillsContainer = document.getElementById("fun-cost-tag-pills");
  const searchInput = document.getElementById("fun-cost-tag-search");
  const countBadge = document.getElementById("fun-cost-selected-count");
  if (!pillsContainer || !window.STUDY_DATA_EXTENDED || !window.STUDY_DATA_EXTENDED.funAverageAiCost) return;

  const tagList = window.STUDY_DATA_EXTENDED.funAverageAiCost.byTag;

  const renderPills = () => {
    const q = funCostTagQuery.toLowerCase();
    const filtered = tagList.filter((t) => !q || t.tag.toLowerCase().includes(q));
    const ordered = q
      ? filtered
      : [
          ...filtered.filter((t) => funCostSelectedTags.has(t.tag)),
          ...filtered.filter((t) => !funCostSelectedTags.has(t.tag))
        ];

    pillsContainer.innerHTML = ordered
      .map((t) => {
        const isAct = funCostSelectedTags.has(t.tag);
        return `<button type="button" class="tag-toggle-pill ${isAct ? "active" : ""}" data-tag="${t.tag.replace(/"/g, "&quot;")}">${t.tag}</button>`;
      })
      .join("");

    if (countBadge) {
      countBadge.textContent = `${funCostSelectedTags.size} selected`;
    }

    pillsContainer.querySelectorAll(".tag-toggle-pill").forEach((pill) => {
      pill.addEventListener("click", () => {
        const tag = pill.getAttribute("data-tag");
        if (funCostSelectedTags.has(tag)) {
          if (funCostSelectedTags.size > 1) {
            funCostSelectedTags.delete(tag);
          }
        } else {
          funCostSelectedTags.add(tag);
        }
        renderPills();
        renderFunCostVs();
      });
    });
  };

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      funCostTagQuery = e.target.value.trim();
      renderPills();
    });
  }

  const resetBtn = document.getElementById("reset-fun-cost-tags");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      funCostSelectedTags = new Set(["Action", "RPG", "Casual", "Simulation", "Indie", "Strategy", "Adventure"]);
      funCostTagQuery = "";
      if (searchInput) searchInput.value = "";
      renderPills();
      renderFunCostVs();
    });
  }

  renderPills();
  renderFunCostVs();
}

function renderFunCostVs() {
  if (!window.STUDY_DATA_EXTENDED || !window.STUDY_DATA_EXTENDED.funAverageAiCost) return;

  const data = window.STUDY_DATA_EXTENDED.funAverageAiCost;
  const tagList = data.byTag;

  const selectedList = tagList.filter((t) => funCostSelectedTags.has(t.tag));

  let totalAiCostSum = 0;
  let totalAiGamesCount = 0;
  let totalNoAiCostSum = 0;
  let totalNoAiGamesCount = 0;

  selectedList.forEach((t) => {
    totalAiCostSum += t.aiPrice * t.aiGames;
    totalAiGamesCount += t.aiGames;
    totalNoAiCostSum += t.noAiPrice * t.noAiGames;
    totalNoAiGamesCount += t.noAiGames;
  });

  const avgAi = totalAiGamesCount > 0 ? totalAiCostSum / totalAiGamesCount : data.overall.aiPrice;
  const avgNoAi = totalNoAiGamesCount > 0 ? totalNoAiCostSum / totalNoAiGamesCount : data.overall.noAiPrice;
  const diff = avgAi - avgNoAi;
  const diffPct = avgNoAi > 0 ? ((diff / avgNoAi) * 100).toFixed(1) : "0.0";

  const aiPriceEl = document.getElementById("vs-ai-price");
  const noAiPriceEl = document.getElementById("vs-non-ai-price");
  const deltaBadgeEl = document.getElementById("vs-delta-badge");
  const aiCountEl = document.getElementById("vs-ai-count");
  const noAiCountEl = document.getElementById("vs-non-ai-count");

  if (aiPriceEl) aiPriceEl.textContent = `$${avgAi.toFixed(2)}`;
  if (noAiPriceEl) noAiPriceEl.textContent = `$${avgNoAi.toFixed(2)}`;
  if (aiCountEl) aiCountEl.textContent = `${fmtInt(totalAiGamesCount)} games in selection`;
  if (noAiCountEl) noAiCountEl.textContent = `${fmtInt(totalNoAiGamesCount)} games in selection`;

  if (deltaBadgeEl) {
    const sign = diff >= 0 ? "+" : "";
    deltaBadgeEl.textContent = `${sign}$${diff.toFixed(2)} (${sign}${diffPct}%)`;
    deltaBadgeEl.style.color = diff <= 0 ? "var(--tetris-green)" : "var(--tetris-red)";
  }

  const maxBarPrice = Math.max(avgAi, avgNoAi, 0.01);
  const barAiEl = document.getElementById("vs-bar-ai");
  const barNoAiEl = document.getElementById("vs-bar-nonai");
  const barAiLbl = document.getElementById("vs-bar-ai-lbl");
  const barNoAiLbl = document.getElementById("vs-bar-nonai-lbl");
  if (barAiEl) barAiEl.style.width = `${((avgAi / maxBarPrice) * 100).toFixed(1)}%`;
  if (barNoAiEl) barNoAiEl.style.width = `${((avgNoAi / maxBarPrice) * 100).toFixed(1)}%`;
  if (barAiLbl) barAiLbl.textContent = `$${avgAi.toFixed(2)}`;
  if (barNoAiLbl) barNoAiLbl.textContent = `$${avgNoAi.toFixed(2)}`;

  const tableBody = document.getElementById("vs-breakdown-table-body");
  if (tableBody) {
    tableBody.innerHTML = selectedList
      .map((t) => {
        const sign = t.diff >= 0 ? "+" : "";
        const diffColor = t.diff < 0 ? "var(--tetris-green)" : "var(--tetris-red)";
        return `
          <tr>
            <td><strong style="color: #ffffff;">${t.tag}</strong></td>
            <td style="font-family: ui-monospace, SFMono-Regular, monospace; color: var(--apple-orange); font-weight: 700;">$${t.aiPrice.toFixed(2)}</td>
            <td style="font-family: ui-monospace, SFMono-Regular, monospace; color: var(--apple-blue); font-weight: 700;">$${t.noAiPrice.toFixed(2)}</td>
            <td style="font-family: ui-monospace, SFMono-Regular, monospace; color: ${diffColor};">${sign}$${t.diff.toFixed(2)} (${sign}${t.diffPct}%)</td>
            <td style="font-family: ui-monospace, SFMono-Regular, monospace;">${fmtInt(t.totalGames)}</td>
          </tr>
        `;
      })
      .join("");
  }
}

let priceStratMetric = "avgScore";
let priceStratExcludeMature = false;
let priceStratSelectedTier = null;

function initPriceStratifiedView() {
  const metricBtns = document.querySelectorAll("#price-strat-metric-toggle .mode-btn");
  metricBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      priceStratMetric = btn.getAttribute("data-metric") || "avgScore";
      metricBtns.forEach((b) => b.classList.toggle("active", b === btn));
      renderPriceStratified();
    });
  });

  const matureBtn = document.getElementById("price-strat-mature-toggle");
  if (matureBtn) {
    matureBtn.addEventListener("click", () => {
      priceStratExcludeMature = !priceStratExcludeMature;
      matureBtn.classList.toggle("active", priceStratExcludeMature);
      matureBtn.setAttribute("aria-pressed", priceStratExcludeMature ? "true" : "false");
      renderPriceStratified();
    });
  }

  const resetBtn = document.getElementById("reset-price-strat-btn");
  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      priceStratSelectedTier = null;
      renderPriceStratified();
    });
  }

  renderPriceStratified();
}

function formatPriceStratVal(val, metric) {
  if (metric === "medianReviews") return Number.isInteger(val) ? fmtInt(val) : val.toFixed(1);
  return `${val.toFixed(1)}%`;
}

function renderPriceStratified() {
  const container = document.getElementById("price-stratified-chart-container");
  const axisNoteEl = document.getElementById("price-strat-axis-note");
  if (!container || !window.STUDY_DATA_EXTENDED || !window.STUDY_DATA_EXTENDED.priceStratified) return;

  const root = window.STUDY_DATA_EXTENDED.priceStratified;
  const subset = priceStratExcludeMature ? root.nonMature : root.all;
  const tiers = subset.tiers;

  const footnoteEl = document.getElementById("price-strat-footnote");
  if (footnoteEl) {
    const scopeText = priceStratExcludeMature ? "non-mature games only" : "all games";
    footnoteEl.innerHTML =
      `Click any price tier to inspect details (${scopeText}). Avg Score uses rated games (<code>review_score &gt; 0</code>, n = ${fmtInt(subset.regression.olsScore.n)}); Median Reviews &amp; 10+ Rate include all ${fmtInt(subset.regression.logitDiscovery10.n)} FALSE/TRUE releases.`;
  }

  const w = 740;
  const h = 360;
  const padL = 62;
  const padR = 24;
  const padT = 38;
  const padB = 56;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  const values = tiers.flatMap((t) => [t.FALSE[priceStratMetric], t.TRUE[priceStratMetric]]);
  let minY = 0;
  let maxY = 100;
  let ticks = [0, 25, 50, 75, 100];
  let yFmt = (v) => `${v}%`;
  let yAxisTitle = "Share (%)";

  if (priceStratMetric === "avgScore") {
    const minVal = Math.min(...values);
    const maxVal = Math.max(...values);
    minY = Math.min(50, Math.floor((minVal - 5) / 10) * 10);
    maxY = Math.max(90, Math.ceil((maxVal + 3) / 5) * 5);
    ticks = [];
    for (let v = minY; v <= maxY; v += 10) ticks.push(v);
    yAxisTitle = "Avg Score (%)";
    if (axisNoteEl) {
      axisNoteEl.style.display = "inline-flex";
      axisNoteEl.innerHTML = `<span class="legend-label" style="color: var(--text-secondary);">Y-axis zoomed (${minY}%&ndash;${maxY}%) to highlight within-tier score gap</span>`;
    }
  } else if (priceStratMetric === "pct10Plus") {
    minY = 0;
    maxY = 100;
    ticks = [0, 25, 50, 75, 100];
    yAxisTitle = "10+ Reviews (%)";
    if (axisNoteEl) axisNoteEl.style.display = "none";
  } else {
    minY = 0;
    const rawMax = Math.max(...values, 10);
    maxY = Math.ceil(rawMax / 20) * 20;
    ticks = [0, 0.25, 0.5, 0.75, 1].map((f) => Math.round(f * maxY));
    yFmt = (v) => fmtInt(v);
    yAxisTitle = "Median Reviews";
    if (axisNoteEl) axisNoteEl.style.display = "none";
  }

  const yRange = Math.max(maxY - minY, 1);

  let svg = `<svg viewBox="0 0 ${w} ${h}">`;
  svg += `<defs>
    <linearGradient id="psGradFalse" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#409cff"/>
      <stop offset="100%" stop-color="#0a84ff"/>
    </linearGradient>
    <linearGradient id="psGradTrue" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ffb340"/>
      <stop offset="100%" stop-color="#ff9f0a"/>
    </linearGradient>
  </defs>`;

  // Y Axis Title
  svg += `<text x="15" y="${padT + plotH / 2}" fill="rgba(235,235,245,0.75)" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle" transform="rotate(-90 15 ${padT + plotH / 2})">${yAxisTitle}</text>`;

  ticks.forEach((tickVal) => {
    const yPos = padT + plotH - ((tickVal - minY) / yRange) * plotH;
    svg += `<line x1="${padL}" y1="${yPos.toFixed(1)}" x2="${w - padR}" y2="${yPos.toFixed(1)}" stroke="rgba(255,255,255,0.09)" stroke-dasharray="3,3" />`;
    svg += `<text x="${padL - 10}" y="${(yPos + 4).toFixed(1)}" fill="rgba(235,235,245,0.72)" font-family="ui-monospace, monospace" font-size="11" text-anchor="end">${yFmt(tickVal)}</text>`;
  });

  svg += `<line x1="${padL}" y1="${padT + plotH}" x2="${w - padR}" y2="${padT + plotH}" stroke="rgba(255,255,255,0.22)" stroke-width="1.5" />`;

  const groupW = plotW / tiers.length;
  const barW = Math.min(40, groupW * 0.28);
  const innerGap = 8;

  tiers.forEach((tier, idx) => {
    const cx = padL + idx * groupW + groupW / 2;
    const isSelected = priceStratSelectedTier === tier.key;
    const dimOther = priceStratSelectedTier && !isSelected;

    const valF = tier.FALSE[priceStratMetric];
    const valT = tier.TRUE[priceStratMetric];
    const hF = Math.max(4, ((valF - minY) / yRange) * plotH);
    const hT = Math.max(4, ((valT - minY) / yRange) * plotH);
    const xF = cx - innerGap / 2 - barW;
    const xT = cx + innerGap / 2;
    const yF = padT + plotH - hF;
    const yT = padT + plotH - hT;

    const bgOpacity = isSelected ? 0.1 : 0.0;
    const strokeCol = isSelected ? "rgba(100, 210, 255, 0.45)" : "transparent";

    // Within-tier delta pill above taller bar
    let deltaTag = "";
    if (priceStratMetric === "avgScore") {
      deltaTag = `${(valT - valF).toFixed(1)} pts`;
    } else if (priceStratMetric === "pct10Plus") {
      deltaTag = `${(valT - valF).toFixed(1)} pp`;
    } else {
      const ratio = valT > 0 ? (valF / valT).toFixed(1) : "—";
      deltaTag = `${ratio}× lower`;
    }
    const topBarY = Math.min(yF, yT);

    svg += `<g class="price-strat-tier-group" data-tier-key="${tier.key}" style="cursor: pointer; opacity: ${dimOther ? 0.45 : 1}; transition: opacity 0.18s ease;">`;
    svg += `<rect x="${(cx - groupW * 0.44).toFixed(1)}" y="${padT - 12}" width="${(groupW * 0.88).toFixed(1)}" height="${plotH + 16}" rx="8" fill="rgba(255,255,255,${bgOpacity})" stroke="${strokeCol}" stroke-width="1.2" />`;

    svg += `<rect x="${xF.toFixed(1)}" y="${yF.toFixed(1)}" width="${barW}" height="${hF.toFixed(1)}" rx="4" fill="url(#psGradFalse)" />`;
    svg += `<rect x="${xT.toFixed(1)}" y="${yT.toFixed(1)}" width="${barW}" height="${hT.toFixed(1)}" rx="4" fill="url(#psGradTrue)" />`;

    svg += `<text x="${(xF + barW / 2).toFixed(1)}" y="${(yF - 5).toFixed(1)}" fill="#64d2ff" font-family="ui-monospace, monospace" font-size="10.5" font-weight="600" text-anchor="middle">${formatPriceStratVal(valF, priceStratMetric)}</text>`;
    svg += `<text x="${(xT + barW / 2).toFixed(1)}" y="${(yT - 5).toFixed(1)}" fill="#ffb340" font-family="ui-monospace, monospace" font-size="10.5" font-weight="600" text-anchor="middle">${formatPriceStratVal(valT, priceStratMetric)}</text>`;

    svg += `<text x="${cx.toFixed(1)}" y="${Math.max(14, topBarY - 20).toFixed(1)}" fill="#ff6961" font-family="ui-monospace, monospace" font-size="9.5" font-weight="700" text-anchor="middle">${deltaTag}</text>`;

    svg += `<text x="${cx.toFixed(1)}" y="${padT + plotH + 18}" fill="#f5f5f7" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Text', sans-serif" font-size="11" font-weight="600" text-anchor="middle">${tier.shortLabel}</text>`;
    svg += `<text x="${cx.toFixed(1)}" y="${padT + plotH + 34}" fill="rgba(235,235,245,0.68)" font-family="ui-monospace, monospace" font-size="9.5" text-anchor="middle">${tier.aiSharePct}% AI (n=${fmtInt(tier.totalGames)})</text>`;
    svg += `</g>`;
  });

  svg += `</svg>`;
  container.innerHTML = svg;

  container.querySelectorAll(".price-strat-tier-group").forEach((grp) => {
    const key = grp.getAttribute("data-tier-key");
    const tierObj = tiers.find((t) => t.key === key);
    if (!tierObj) return;

    grp.addEventListener("click", () => {
      priceStratSelectedTier = priceStratSelectedTier === key ? null : key;
      renderPriceStratified();
    });

    grp.addEventListener("mouseenter", (e) => {
      const tooltip = document.getElementById("chart-tooltip");
      if (!tooltip) return;
      const metricLabel =
        priceStratMetric === "avgScore"
          ? "Avg Score"
          : priceStratMetric === "medianReviews"
            ? "Median Reviews"
            : "10+ Review Rate";
      const valF = tierObj.FALSE[priceStratMetric];
      const valT = tierObj.TRUE[priceStratMetric];
      const diff = valT - valF;
      const diffStr =
        priceStratMetric === "medianReviews"
          ? `${diff >= 0 ? "+" : ""}${diff.toFixed(1)}`
          : `${diff >= 0 ? "+" : ""}${diff.toFixed(2)} ${priceStratMetric === "avgScore" ? "pts" : "pp"}`;

      tooltip.innerHTML = `
        <div class="tooltip-title">${tierObj.label} (${tierObj.aiSharePct}% AI)</div>
        <div class="tooltip-row">
          <span>Non-AI ${metricLabel}:</span>
          <strong style="color: #64d2ff;">${formatPriceStratVal(valF, priceStratMetric)} (n=${fmtInt(tierObj.FALSE.count)})</strong>
        </div>
        <div class="tooltip-row">
          <span>In-Game AI ${metricLabel}:</span>
          <strong style="color: #ffb340;">${formatPriceStratVal(valT, priceStratMetric)} (n=${fmtInt(tierObj.TRUE.count)})</strong>
        </div>
        <div class="tooltip-row">
          <span>Within-Tier Gap:</span>
          <strong style="color: var(--apple-red);">${diffStr}</strong>
        </div>
      `;
      tooltip.classList.remove("hidden");
      moveTooltip(e);
    });

    grp.addEventListener("mousemove", (e) => moveTooltip(e));
    grp.addEventListener("mouseleave", () => hideTooltip());
  });

  renderPriceStratifiedInspector(subset);
}

function renderPriceStratifiedInspector(subset) {
  const titleEl = document.getElementById("price-strat-title");
  const insightEl = document.getElementById("price-strat-insight");
  const kpisEl = document.getElementById("price-strat-kpis");
  const resetBtn = document.getElementById("reset-price-strat-btn");
  const regDescEl = document.getElementById("price-strat-reg-desc");
  const regGridEl = document.getElementById("price-strat-reg-grid");
  if (!titleEl || !insightEl || !kpisEl || !regGridEl) return;

  const reg = subset.regression;
  const scopeLabel = priceStratExcludeMature ? "Non-Mature Games" : "All Games";

  if (priceStratSelectedTier) {
    const t = subset.tiers.find((item) => item.key === priceStratSelectedTier) || subset.tiers[0];
    titleEl.textContent = `${t.label} (${fmtInt(t.totalGames)} Games)`;
    if (resetBtn) resetBtn.classList.remove("hidden");

    const scoreDiff = (t.TRUE.avgScore - t.FALSE.avgScore).toFixed(2);
    const discDiff = (t.TRUE.pct10Plus - t.FALSE.pct10Plus).toFixed(2);
    insightEl.innerHTML =
      `Inside <strong>${t.label}</strong> (${t.aiSharePct}% In-Game AI), Non-AI games average <strong>${t.FALSE.avgScore.toFixed(1)}%</strong> vs. <strong>${t.TRUE.avgScore.toFixed(1)}%</strong> for AI (<strong>${scoreDiff} pts</strong>), with median reviews of <strong>${formatPriceStratVal(t.FALSE.medianReviews, "medianReviews")}</strong> vs. <strong>${formatPriceStratVal(t.TRUE.medianReviews, "medianReviews")}</strong>.`;

    kpisEl.innerHTML = `
      <div class="kpi-box kpi-false">
        <span class="kpi-label">Non-AI (FALSE)</span>
        <span class="kpi-value">${t.FALSE.avgScore.toFixed(1)}% <small>score</small></span>
        <span class="kpi-sub">${fmtInt(t.FALSE.count)} games &bull; Med ${formatPriceStratVal(t.FALSE.medianReviews, "medianReviews")} rev &bull; ${t.FALSE.pct10Plus.toFixed(1)}% (10+)</span>
      </div>
      <div class="kpi-box kpi-true">
        <span class="kpi-label">In-Game AI (TRUE)</span>
        <span class="kpi-value">${t.TRUE.avgScore.toFixed(1)}% <small>score</small></span>
        <span class="kpi-sub">${fmtInt(t.TRUE.count)} games &bull; Med ${formatPriceStratVal(t.TRUE.medianReviews, "medianReviews")} rev &bull; ${t.TRUE.pct10Plus.toFixed(1)}% (10+)</span>
      </div>
      <div class="kpi-box kpi-maybe" style="grid-column: 1 / -1;">
        <span class="kpi-label">Within-Tier Delta (AI minus Non-AI)</span>
        <span class="kpi-value">${scoreDiff} pts <small>score</small> &bull; ${discDiff} pp <small>10+ discovery</small></span>
        <span class="kpi-sub">Rated sample: ${fmtInt(t.FALSE.ratedCount)} Non-AI / ${fmtInt(t.TRUE.ratedCount)} AI</span>
      </div>
    `;
  } else {
    titleEl.textContent = `All Price Tiers (${scopeLabel})`;
    if (resetBtn) resetBtn.classList.add("hidden");

    const aaTier = subset.tiers.find((t) => t.key.startsWith("AA"));
    const microTier = subset.tiers.find((t) => t.key.startsWith("Micro-Indie"));
    insightEl.innerHTML =
      `<strong>No Simpson's Paradox:</strong> AI usage concentrates in <strong>${microTier.shortLabel}</strong> (${microTier.aiSharePct}% AI), but the AI penalty holds inside <em>every</em> price tier&mdash;including funded <strong>${aaTier.shortLabel}</strong> games (<strong>${aaTier.TRUE.avgScore.toFixed(1)}% vs. ${aaTier.FALSE.avgScore.toFixed(1)}%</strong>, median <strong>${formatPriceStratVal(aaTier.TRUE.medianReviews, "medianReviews")} vs. ${formatPriceStratVal(aaTier.FALSE.medianReviews, "medianReviews")}</strong> reviews).`;

    kpisEl.innerHTML = `
      <div class="kpi-box kpi-false">
        <span class="kpi-label">Raw Avg Score (Non-AI)</span>
        <span class="kpi-value">${reg.olsScore.rawNonAi.toFixed(2)}%</span>
        <span class="kpi-sub">Across ${fmtInt(reg.olsScore.n)} rated games total</span>
      </div>
      <div class="kpi-box kpi-true">
        <span class="kpi-label">Raw Avg Score (AI)</span>
        <span class="kpi-value">${reg.olsScore.rawAi.toFixed(2)}%</span>
        <span class="kpi-sub">Raw gap: ${reg.olsScore.rawDelta.toFixed(2)} pts</span>
      </div>
    `;
  }

  if (regDescEl) {
    const matureText = priceStratExcludeMature ? "" : "<code>mature_content</code>, ";
    regDescEl.innerHTML = `Controlling for price, <code>log1p(age_days)</code>, ${matureText}and top 20 Steam tags (${scopeLabel.toLowerCase()}):`;
  }

  const ols = reg.olsScore;
  const logit = reg.logitDiscovery10;
  regGridEl.innerHTML = `
    <div class="reg-stat-card">
      <div class="reg-stat-top">
        <span class="reg-stat-label">OLS Review Score Effect</span>
        <span class="reg-stat-p">p = ${ols.pLogPrice}</span>
      </div>
      <div class="reg-stat-val">${ols.betaLogPrice.toFixed(2)} pts <small>95% CI [${ols.ciLowLogPrice.toFixed(2)}, ${ols.ciHighLogPrice.toFixed(2)}]</small></div>
      <div class="reg-stat-sub">Raw: ${ols.rawDelta.toFixed(2)} pts &bull; Price-tier dummies: ${ols.betaTier.toFixed(2)} pts (R&sup2;=${ols.r2Tier.toFixed(3)})</div>
    </div>
    <div class="reg-stat-card">
      <div class="reg-stat-top">
        <span class="reg-stat-label">Logistic Odds of 10+ Reviews</span>
        <span class="reg-stat-p">p = ${logit.pTier}</span>
      </div>
      <div class="reg-stat-val">OR = ${logit.orTier.toFixed(3)} <small>95% CI [${logit.orCiLowTier.toFixed(3)}, ${logit.orCiHighTier.toFixed(3)}]</small></div>
      <div class="reg-stat-sub">Raw 10+ rate: ${logit.rawAiPct.toFixed(1)}% vs ${logit.rawNonAiPct.toFixed(1)}% (${logit.rawDeltaPp.toFixed(1)} pp)</div>
    </div>
  `;
}

/* =========================================================
   15. BORING STUFF EVERY GAME DEV IS CURIOUS ABOUT
   ========================================================= */
function initBoringSubnav() {
  const subBtns = document.querySelectorAll('#topbar-subnav-drawer .section-subnav[data-for-section="boring-stuff"] .subnav-btn');
  const subviews = document.querySelectorAll("#section-boring-stuff .boring-subview");

  subBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-boringsubview");
      subBtns.forEach((b) => {
        const active = b === btn;
        b.classList.toggle("active", active);
        b.setAttribute("aria-selected", active ? "true" : "false");
      });
      subviews.forEach((sv) => {
        sv.classList.toggle("active", sv.id === `subview-${target}`);
      });
      if (window.scrollY > 40) window.scrollTo({ top: 0, behavior: "smooth" });

      if (target === "boring-best-tags") renderBoringBestTags();
      else if (target === "boring-trending") renderBoringTrending();
      else if (target === "boring-cost") renderBoringCost();
    });
  });

  initBoringBestTagsView();
  initBoringTrendingView();
  initBoringCostView();
}

let boringDevMinGames = 150;
let boringDevSearchQuery = "";
let boringFocusedTag = null;
let boringDensityMode = "top60"; // "top60" | "all"

function initBoringBestTagsView() {
  const searchInput = document.getElementById("boring-tags-search");
  const minPills = document.querySelectorAll("#boring-min-games-pills .mini-pill");
  const densityBtns = document.querySelectorAll("#boring-focus-toggle .mode-btn");
  const resetBtn = document.getElementById("reset-boring-tags-btn");

  if (!window.STUDY_DATA_EXTENDED || !window.STUDY_DATA_EXTENDED.boringDeveloperTags) return;

  densityBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      boringDensityMode = btn.getAttribute("data-density") || "top60";
      densityBtns.forEach((b) => b.classList.toggle("active", b === btn));
      renderBoringBestTags();
    });
  });

  minPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      boringDevMinGames = parseInt(pill.getAttribute("data-min"), 10) || 150;
      minPills.forEach((p) => p.classList.toggle("active", p === pill));
      renderBoringBestTags();
    });
  });

  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      boringDevSearchQuery = e.target.value.trim();
      renderBoringBestTags();
    });
  }

  if (resetBtn) {
    resetBtn.addEventListener("click", () => {
      boringDevMinGames = 150;
      boringDevSearchQuery = "";
      boringFocusedTag = null;
      boringDensityMode = "top60";
      if (searchInput) searchInput.value = "";
      minPills.forEach((p) => p.classList.toggle("active", p.getAttribute("data-min") === "150"));
      densityBtns.forEach((b) => b.classList.toggle("active", b.getAttribute("data-density") === "top60"));
      renderBoringBestTags();
    });
  }

  renderBoringBestTags();
}

function renderBoringBestTags() {
  const container = document.getElementById("boring-tags-chart-container");
  const checklist = document.getElementById("boring-tag-checklist");
  const detailCard = document.getElementById("boring-dev-detail-card");
  const badge = document.getElementById("boring-tags-selected-count");
  if (!container || !window.STUDY_DATA_EXTENDED || !window.STUDY_DATA_EXTENDED.boringDeveloperTags) return;

  const allTags = window.STUDY_DATA_EXTENDED.boringDeveloperTags.tags || [];
  const pool = allTags.filter((t) => t.games >= boringDevMinGames);
  const searched = boringDevSearchQuery
    ? pool.filter((t) => t.tag.toLowerCase().includes(boringDevSearchQuery.toLowerCase()))
    : pool;

  if (badge) badge.textContent = `${searched.length} Tags`;

  const activeTag =
    (boringFocusedTag && pool.find((t) => t.tag === boringFocusedTag)) ||
    searched[0] ||
    pool[0];

  if (detailCard && activeTag) {
    detailCard.innerHTML = `
      <div class="dev-detail-header">
        <span class="dev-detail-title">${activeTag.tag}</span>
        <span class="dev-detail-score-pill">Dev Index: ${activeTag.devScore}</span>
      </div>
      <div class="dev-detail-metrics">
        <div class="dev-metric-box">
          <span class="dev-metric-lbl">Median / Avg Reviews</span>
          <span class="dev-metric-val">${fmtInt(activeTag.medRev)} / ${fmtInt(Math.round(activeTag.avgRev))}</span>
        </div>
        <div class="dev-metric-box">
          <span class="dev-metric-lbl">Avg Positive Score</span>
          <span class="dev-metric-val" style="color: var(--apple-green);">${activeTag.avgScore}%</span>
        </div>
        <div class="dev-metric-box">
          <span class="dev-metric-lbl">Fast Discovery (&ge;10 rev)</span>
          <span class="dev-metric-val" style="color: var(--apple-blue);">${activeTag.discRate}% (${activeTag.avgRevPerDay} rev/d)</span>
        </div>
        <div class="dev-metric-box">
          <span class="dev-metric-lbl">Catalog Sample</span>
          <span class="dev-metric-val">${fmtInt(activeTag.games)} games</span>
        </div>
      </div>
    `;
  }

  if (checklist) {
    checklist.innerHTML = searched
      .slice(0, 80)
      .map((t, idx) => {
        const isSel = activeTag && t.tag === activeTag.tag;
        return `
          <div class="boring-tag-check-item ${isSel ? "active" : ""}" data-tag="${t.tag.replace(/"/g, "&quot;")}">
            <span><strong>#${idx + 1} ${t.tag}</strong></span>
            <span style="font-family: ui-monospace, monospace; font-size: 0.71rem; color: var(--text-muted);">
              ${t.discRate}% disc &bull; ${t.avgScore}% &bull; med ${fmtInt(t.medRev)}
            </span>
          </div>
        `;
      })
      .join("");

    checklist.querySelectorAll(".boring-tag-check-item").forEach((item) => {
      item.addEventListener("click", () => {
        boringFocusedTag = item.getAttribute("data-tag");
        renderBoringBestTags();
      });
    });
  }

  // Render Bubble Quadrant Scatter SVG
  if (pool.length === 0) {
    container.innerHTML = `<div style="padding: 40px; text-align: center; color: var(--text-muted);">No tags match this filter.</div>`;
    return;
  }

  // Decide which bubbles to plot to avoid unreadable dense clumping
  let visiblePool = pool;
  if (boringDensityMode === "top60" && pool.length > 60) {
    const topSet = new Set(pool.slice(0, 60).map((t) => t.tag));
    if (activeTag) topSet.add(activeTag.tag);
    if (boringDevSearchQuery) {
      searched.slice(0, 30).forEach((t) => topSet.add(t.tag));
    }
    visiblePool = pool.filter((t) => topSet.has(t.tag));
  }

  const w = 760;
  const h = 410;
  const padL = 62;
  const padR = 28;
  const padT = 34;
  const padB = 50;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  // Compute axis bounds and median lines from full pool so quadrant lines remain stable
  const discVals = pool.map((t) => t.discRate).sort((a, b) => a - b);
  const scoreVals = pool.map((t) => t.avgScore).sort((a, b) => a - b);
  const medDisc = discVals[Math.floor(discVals.length / 2)];
  const medScore = scoreVals[Math.floor(scoreVals.length / 2)];

  const vDisc = visiblePool.map((t) => t.discRate).sort((a, b) => a - b);
  const vScore = visiblePool.map((t) => t.avgScore).sort((a, b) => a - b);
  const minX = Math.max(0, Math.floor((Math.min(vDisc[0], medDisc) - 4) / 5) * 5);
  const maxX = Math.min(100, Math.ceil((Math.max(vDisc[vDisc.length - 1], medDisc) + 4) / 5) * 5);
  const minY = Math.max(50, Math.floor((Math.min(vScore[0], medScore) - 2) / 5) * 5);
  const maxY = Math.min(95, Math.ceil((Math.max(vScore[vScore.length - 1], medScore) + 2) / 5) * 5);

  const maxLogMed = Math.max(...pool.map((t) => Math.log1p(t.medRev)), 1);

  const xScale = (v) => padL + ((v - minX) / Math.max(maxX - minX, 1)) * plotW;
  const yScale = (v) => padT + plotH - ((v - minY) / Math.max(maxY - minY, 1)) * plotH;

  let svg = `<svg viewBox="0 0 ${w} ${h}">`;

  // Sweet spot highlight box (top-right quadrant)
  const qx = xScale(medDisc);
  const qy = yScale(medScore);
  svg += `<rect x="${qx.toFixed(1)}" y="${padT}" width="${Math.max(0, padL + plotW - qx).toFixed(1)}" height="${Math.max(0, qy - padT).toFixed(1)}" fill="rgba(48, 209, 88, 0.07)" />`;

  // Quadrant corner labels (subtle, pinned away from data clusters)
  svg += `<text x="${padL + plotW - 8}" y="${padT + 15}" fill="rgba(48, 209, 88, 0.85)" font-family="ui-monospace, monospace" font-size="9.5" font-weight="700" text-anchor="end">SWEET SPOT (FAST DISCOVERY + HIGH SCORE)</text>`;
  svg += `<text x="${padL + 8}" y="${padT + 15}" fill="rgba(100, 210, 255, 0.65)" font-family="ui-monospace, monospace" font-size="9" font-weight="600" text-anchor="start">NICHE GEMS</text>`;
  svg += `<text x="${padL + plotW - 8}" y="${padT + plotH - 8}" fill="rgba(255, 159, 10, 0.65)" font-family="ui-monospace, monospace" font-size="9" font-weight="600" text-anchor="end">HIGH TRAFFIC / MIXED SCORE</text>`;
  svg += `<text x="${padL + 8}" y="${padT + plotH - 8}" fill="rgba(235, 235, 245, 0.45)" font-family="ui-monospace, monospace" font-size="9" font-weight="600" text-anchor="start">LOWER TRACTION</text>`;

  // Gridlines Y
  for (let yv = minY; yv <= maxY; yv += 5) {
    const yp = yScale(yv);
    svg += `<line x1="${padL}" y1="${yp.toFixed(1)}" x2="${w - padR}" y2="${yp.toFixed(1)}" stroke="rgba(255,255,255,0.09)" stroke-dasharray="3,3" />`;
    svg += `<text x="${padL - 8}" y="${(yp + 4).toFixed(1)}" fill="rgba(235,235,245,0.75)" font-family="ui-monospace, monospace" font-size="11" text-anchor="end">${yv}%</text>`;
  }

  // Gridlines X
  const xStep = maxX - minX > 45 ? 10 : 5;
  for (let xv = minX; xv <= maxX; xv += xStep) {
    const xp = xScale(xv);
    svg += `<line x1="${xp.toFixed(1)}" y1="${padT}" x2="${xp.toFixed(1)}" y2="${padT + plotH}" stroke="rgba(255,255,255,0.09)" stroke-dasharray="3,3" />`;
    svg += `<text x="${xp.toFixed(1)}" y="${padT + plotH + 17}" fill="rgba(235,235,245,0.75)" font-family="ui-monospace, monospace" font-size="11" text-anchor="middle">${xv}%</text>`;
  }

  // Quadrant median dashed lines
  svg += `<line x1="${qx.toFixed(1)}" y1="${padT}" x2="${qx.toFixed(1)}" y2="${padT + plotH}" stroke="rgba(255, 214, 10, 0.35)" stroke-dasharray="5,4" />`;
  svg += `<line x1="${padL}" y1="${qy.toFixed(1)}" x2="${w - padR}" y2="${qy.toFixed(1)}" stroke="rgba(255, 214, 10, 0.35)" stroke-dasharray="5,4" />`;

  // Axis Titles
  svg += `<text x="${padL + plotW / 2}" y="${h - 10}" fill="rgba(235,235,245,0.82)" font-family="-apple-system, sans-serif" font-size="11.5" font-weight="600" text-anchor="middle">Fast Discovery: % of Games Reaching 10+ Reviews</text>`;
  svg += `<text x="16" y="${padT + plotH / 2}" fill="rgba(235,235,245,0.82)" font-family="-apple-system, sans-serif" font-size="11.5" font-weight="600" text-anchor="middle" transform="rotate(-90 16 ${padT + plotH / 2})">Avg Review Score (%)</text>`;

  // Draw bubbles back-to-front (smaller/lower score first, top/focused last)
  const searchSet = boringDevSearchQuery ? new Set(searched.map((t) => t.tag)) : null;
  const drawOrder = [...visiblePool].sort((a, b) => a.devScore - b.devScore);

  drawOrder.forEach((t) => {
    const cx = xScale(t.discRate);
    const cy = yScale(t.avgScore);
    const normR = Math.log1p(t.medRev) / maxLogMed;
    const r = 4.5 + Math.pow(normR, 1.35) * 14.0;
    const isFocus = activeTag && t.tag === activeTag.tag;
    const isDimmed = searchSet && !searchSet.has(t.tag) && !isFocus;

    let fill = "#64d2ff";
    if (t.devScore >= 62) fill = "#30d158";
    else if (t.devScore >= 52) fill = "#0a84ff";
    else fill = "#8e8e93";

    if (isFocus) fill = "#ffd60a";

    const opacity = isFocus ? 0.98 : isDimmed ? 0.14 : 0.78;
    const stroke = isFocus ? "#ffffff" : "rgba(0,0,0,0.55)";
    const sw = isFocus ? 2.5 : 1;

    svg += `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" fill="${fill}" fill-opacity="${opacity}" stroke="${stroke}" stroke-width="${sw}" class="dev-bubble" data-tag="${t.tag.replace(/"/g, "&quot;")}" />`;
  });

  // Collision-aware label placement for focused tag + top 6 tags
  const labelTargets = [];
  if (activeTag) labelTargets.push(activeTag);
  pool.slice(0, 7).forEach((t) => {
    if (!activeTag || t.tag !== activeTag.tag) labelTargets.push(t);
  });

  const placedBoxes = [
    // Reserve Sweet Spot header corner so labels never collide with it
    { x1: padL + plotW - 260, y1: padT, x2: padL + plotW, y2: padT + 22 }
  ];

  const overlaps = (b) =>
    placedBoxes.some((p) => !(b.x2 < p.x1 || b.x1 > p.x2 || b.y2 < p.y1 || b.y1 > p.y2));

  labelTargets.forEach((t) => {
    const cx = xScale(t.discRate);
    const cy = yScale(t.avgScore);
    const normR = Math.log1p(t.medRev) / maxLogMed;
    const r = 4.5 + Math.pow(normR, 1.35) * 14.0;
    const isFocus = activeTag && t.tag === activeTag.tag;
    const labelW = t.tag.length * 6.2 + 12;
    const labelH = 16;

    const candidates = [
      { ox: r + 7, oy: 0, anchor: "start" },
      { ox: -(r + 7), oy: 0, anchor: "end" },
      { ox: r + 7, oy: -16, anchor: "start" },
      { ox: r + 7, oy: 16, anchor: "start" },
      { ox: -(r + 7), oy: -16, anchor: "end" },
      { ox: -(r + 7), oy: 16, anchor: "end" },
      { ox: 0, oy: -(r + 14), anchor: "middle" },
      { ox: 0, oy: r + 18, anchor: "middle" }
    ];

    let chosen = null;
    for (const c of candidates) {
      const lx = cx + c.ox;
      const ly = cy + c.oy;
      const bx1 = c.anchor === "start" ? lx - 2 : c.anchor === "end" ? lx - labelW + 2 : lx - labelW / 2;
      const bx2 = bx1 + labelW;
      const by1 = ly - labelH / 2;
      const by2 = by1 + labelH;

      if (bx1 < padL + 2 || bx2 > padL + plotW - 2 || by1 < padT + 2 || by2 > padT + plotH - 2) {
        continue;
      }
      const box = { x1: bx1, y1: by1, x2: bx2, y2: by2 };
      if (!overlaps(box)) {
        chosen = { ...c, lx, ly, box };
        break;
      }
    }

    if (!chosen && isFocus) {
      const lx = cx > padL + plotW - 110 ? cx - (r + 7) : cx + (r + 7);
      const anchor = cx > padL + plotW - 110 ? "end" : "start";
      const bx1 = anchor === "start" ? lx - 2 : lx - labelW + 2;
      chosen = { ox: lx - cx, oy: 0, anchor, lx, ly: cy, box: { x1: bx1, y1: cy - 8, x2: bx1 + labelW, y2: cy + 8 } };
    }

    if (!chosen) return;
    placedBoxes.push(chosen.box);

    if (Math.abs(chosen.oy) > 4 || Math.abs(chosen.ox) > r + 10) {
      svg += `<line x1="${cx.toFixed(1)}" y1="${cy.toFixed(1)}" x2="${chosen.lx.toFixed(1)}" y2="${chosen.ly.toFixed(1)}" stroke="${isFocus ? "#ffd60a" : "rgba(255,255,255,0.35)"}" stroke-width="1" style="pointer-events:none;" />`;
    }

    svg += `<rect x="${chosen.box.x1.toFixed(1)}" y="${chosen.box.y1.toFixed(1)}" width="${labelW.toFixed(1)}" height="${labelH}" rx="4" fill="rgba(14,16,22,0.86)" stroke="${isFocus ? "rgba(255,214,10,0.65)" : "rgba(255,255,255,0.12)"}" stroke-width="0.8" style="pointer-events:none;" />`;
    svg += `<text x="${chosen.lx.toFixed(1)}" y="${(chosen.ly + 3.5).toFixed(1)}" fill="${isFocus ? "#ffd60a" : "#ffffff"}" font-family="-apple-system, sans-serif" font-size="${isFocus ? "10.5" : "9.5"}" font-weight="${isFocus ? "700" : "600"}" text-anchor="${chosen.anchor}" style="pointer-events:none;">${t.tag}</text>`;
  });

  svg += `</svg>`;
  container.innerHTML = svg;

  container.querySelectorAll(".dev-bubble").forEach((el) => {
    const tag = el.getAttribute("data-tag");
    const tObj = pool.find((x) => x.tag === tag);
    if (!tObj) return;

    el.addEventListener("click", () => {
      boringFocusedTag = tag;
      renderBoringBestTags();
    });

    el.addEventListener("mouseenter", (e) => {
      const tooltip = document.getElementById("chart-tooltip");
      if (!tooltip) return;
      tooltip.innerHTML = `
        <div class="tooltip-title">${tObj.tag} (Dev Index: ${tObj.devScore})</div>
        <div class="tooltip-row"><span>Median Reviews:</span><strong style="color: var(--apple-yellow);">${fmtInt(tObj.medRev)}</strong></div>
        <div class="tooltip-row"><span>Avg Reviews / Game:</span><strong>${fmtInt(Math.round(tObj.avgRev))}</strong></div>
        <div class="tooltip-row"><span>Avg Positive Score:</span><strong style="color: var(--apple-green);">${tObj.avgScore}%</strong></div>
        <div class="tooltip-row"><span>Fast Discovery (&ge;10 rev):</span><strong style="color: var(--apple-blue);">${tObj.discRate}%</strong></div>
        <div class="tooltip-row"><span>Avg Velocity:</span><strong>${tObj.avgRevPerDay} rev/day</strong></div>
        <div class="tooltip-row"><span>Catalog Size:</span><strong>${fmtInt(tObj.games)} games</strong></div>
      `;
      tooltip.classList.remove("hidden");
      moveTooltip(e);
    });
    el.addEventListener("mousemove", (e) => moveTooltip(e));
    el.addEventListener("mouseleave", () => hideTooltip());
  });
}

function initBoringTrendingView() {
  const toggleBtns = document.querySelectorAll("#trending-sort-toggle .mode-btn");
  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      boringTrendingSort = btn.getAttribute("data-sort");
      toggleBtns.forEach((b) => b.classList.toggle("active", b === btn));
      renderBoringTrending();
    });
  });

  renderBoringTrending();
}

function renderBoringTrending() {
  const container = document.getElementById("trending-chart-container");
  if (!container || !window.STUDY_DATA_EXTENDED || !window.STUDY_DATA_EXTENDED.boringTrendingTags) return;

  const tags = [...window.STUDY_DATA_EXTENDED.boringTrendingTags.tags];

  if (boringTrendingSort === "growth") {
    tags.sort((a, b) => b.multiplier - a.multiplier);
  } else {
    tags.sort((a, b) => b.totalGames - a.totalGames);
  }

  const top12 = tags.slice(0, 12);
  const maxVal = boringTrendingSort === "growth" ? Math.max(...top12.map((t) => t.multiplier)) : Math.max(...top12.map((t) => t.totalGames));

  container.innerHTML = `
    <div class="trending-cards-scroll">
      <div class="trending-cards-grid">
        ${top12
          .map((t, idx) => {
            const isGrowth = boringTrendingSort === "growth";
            const pct = ((isGrowth ? t.multiplier : t.totalGames) / maxVal) * 100;
            const heroBadge = isGrowth ? `${t.multiplier}&times;` : `${fmtInt(t.totalGames)} games`;
            const rightMeta = isGrowth ? `${fmtInt(t.totalGames)} games` : `${t.multiplier}&times; growth`;
            return `
              <div class="trending-card">
                <div class="trending-card-header">
                  <span class="trending-card-title">#${idx + 1} ${t.tag}</span>
                  <span class="trending-card-mult">${heroBadge}</span>
                </div>
                <div class="trending-card-track">
                  <div class="trending-card-fill" style="width: ${pct.toFixed(1)}%;"></div>
                </div>
                <div class="trending-card-meta">
                  <span>2024: ${t.count2024} &rarr; 2026: ${t.count2026}</span>
                  <span class="trending-card-games">${rightMeta}</span>
                </div>
              </div>
            `;
          })
          .join("")}
      </div>
    </div>
  `;
}

function initBoringCostView() {
  const toggleBtns = document.querySelectorAll("#cost-view-mode-toggle .mode-btn");
  toggleBtns.forEach((btn) => {
    btn.addEventListener("click", () => {
      boringCostViewMode = btn.getAttribute("data-view");
      toggleBtns.forEach((b) => b.classList.toggle("active", b === btn));
      renderBoringCost();
    });
  });

  renderBoringCost();
}

function renderBoringCost() {
  const container = document.getElementById("boring-cost-chart-container");
  const legendEl = document.getElementById("boring-cost-legend");
  if (!container || !window.STUDY_DATA_EXTENDED || !window.STUDY_DATA_EXTENDED.boringCostAverage) return;

  const data = window.STUDY_DATA_EXTENDED.boringCostAverage;

  if (legendEl) {
    if (boringCostViewMode === "buckets") {
      legendEl.innerHTML = `<span class="legend-item active" style="cursor:default;"><span class="legend-swatch" style="background:#0a84ff;"></span><span class="legend-label">Bars: Number of Games Released in Each Price Bucket (% of 63,798)</span></span>`;
    } else {
      legendEl.innerHTML = `
        <span class="legend-item active" style="cursor:default;"><span class="legend-swatch" style="background:#30d158;"></span><span class="legend-label">Bar: Mean Base Price (USD)</span></span>
        <span class="legend-item active" style="cursor:default;"><span class="legend-swatch" style="background:#ffd60a; border-radius:2px; transform:rotate(45deg);"></span><span class="legend-label">Diamond (&diams;): Median Price (USD)</span></span>
      `;
    }
  }

  const w = 780;
  const h = 300;
  const padL = 138;
  const padR = 185;
  const padT = 18;
  const padB = 46;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  let svg = `<svg viewBox="0 0 ${w} ${h}">`;
  svg += `<defs>
    <linearGradient id="costGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#30d158"/>
      <stop offset="100%" stop-color="#0a84ff"/>
    </linearGradient>
  </defs>`;

  if (boringCostViewMode === "buckets") {
    const buckets = data.buckets;
    const maxCount = Math.ceil(Math.max(...buckets.map((b) => b.count)) / 4000) * 4000;
    const barH = 24;
    const gap = (plotH - buckets.length * barH) / (buckets.length + 1);

    // X Gridlines & Axis Ticks
    for (let i = 0; i <= 4; i++) {
      const tickVal = Math.round((maxCount / 4) * i);
      const xPos = padL + (tickVal / maxCount) * plotW;
      svg += `<line x1="${xPos.toFixed(1)}" y1="${padT}" x2="${xPos.toFixed(1)}" y2="${padT + plotH}" stroke="rgba(255,255,255,0.09)" stroke-dasharray="3,3" />`;
      svg += `<text x="${xPos.toFixed(1)}" y="${padT + plotH + 16}" fill="rgba(235,235,245,0.72)" font-family="ui-monospace, monospace" font-size="10.5" text-anchor="middle">${fmtInt(tickVal)}</text>`;
    }
    svg += `<text x="${padL + plotW / 2}" y="${h - 8}" fill="rgba(235,235,245,0.75)" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Games Released</text>`;

    buckets.forEach((b, idx) => {
      const y = padT + gap + idx * (barH + gap);
      const barW = (b.count / maxCount) * plotW;

      svg += `<text x="${padL - 10}" y="${y + barH / 2 + 4}" fill="#f5f5f7" font-family="ui-monospace, monospace" font-size="11" font-weight="600" text-anchor="end">${b.bucket}</text>`;
      svg += `<rect x="${padL}" y="${y}" width="${plotW}" height="${barH}" fill="rgba(255,255,255,0.04)" rx="5" />`;
      svg += `<rect x="${padL}" y="${y}" width="${barW.toFixed(1)}" height="${barH}" fill="url(#costGrad)" rx="5" class="time-bar" data-bucket="${b.bucket}" data-count="${b.count}" data-pct="${b.pct}" />`;
      svg += `<text x="${(padL + barW + 10).toFixed(1)}" y="${y + barH / 2 + 4}" fill="#64d2ff" font-family="ui-monospace, monospace" font-size="11" font-weight="600">${fmtInt(b.count)} (${b.pct}%)</text>`;
    });
  } else {
    const tiers = data.byReviewTier;
    const maxPrice = 20;
    const barH = 26;
    const gap = (plotH - tiers.length * barH) / (tiers.length + 1);

    // X Gridlines & Axis Ticks
    for (let p = 0; p <= maxPrice; p += 5) {
      const xPos = padL + (p / maxPrice) * plotW;
      svg += `<line x1="${xPos.toFixed(1)}" y1="${padT}" x2="${xPos.toFixed(1)}" y2="${padT + plotH}" stroke="rgba(255,255,255,0.09)" stroke-dasharray="3,3" />`;
      svg += `<text x="${xPos.toFixed(1)}" y="${padT + plotH + 16}" fill="rgba(235,235,245,0.72)" font-family="ui-monospace, monospace" font-size="10.5" text-anchor="middle">$${p}</text>`;
    }
    svg += `<text x="${padL + plotW / 2}" y="${h - 8}" fill="rgba(235,235,245,0.75)" font-family="-apple-system, sans-serif" font-size="11" font-weight="600" text-anchor="middle">Base Price (USD)</text>`;

    tiers.forEach((t, idx) => {
      const y = padT + gap + idx * (barH + gap);
      const barW = (t.avgPrice / maxPrice) * plotW;
      const medX = padL + (t.medianPrice / maxPrice) * plotW;
      const midY = y + barH / 2;

      svg += `<text x="${padL - 10}" y="${midY + 4}" fill="#f5f5f7" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="11" font-weight="600" text-anchor="end">${t.tier}</text>`;
      svg += `<rect x="${padL}" y="${y}" width="${plotW}" height="${barH}" fill="rgba(255,255,255,0.04)" rx="5" />`;
      svg += `<rect x="${padL}" y="${y}" width="${barW.toFixed(1)}" height="${barH}" fill="url(#costGrad)" rx="4" class="time-bar" data-tier="${t.tier}" data-price="${t.avgPrice}" data-med="${t.medianPrice}" data-count="${t.count}" />`;
      // Median diamond marker
      svg += `<polygon points="${medX.toFixed(1)},${(midY - 6).toFixed(1)} ${(medX + 6).toFixed(1)},${midY.toFixed(1)} ${medX.toFixed(1)},${(midY + 6).toFixed(1)} ${(medX - 6).toFixed(1)},${midY.toFixed(1)}" fill="#ffd60a" stroke="#14151c" stroke-width="1.4" style="pointer-events:none;" />`;
      svg += `<text x="${(padL + barW + 10).toFixed(1)}" y="${midY + 4}" fill="#30d158" font-family="ui-monospace, SFMono-Regular, monospace" font-size="11" font-weight="600">Mean $${t.avgPrice.toFixed(2)} &bull; Med $${t.medianPrice.toFixed(2)}</text>`;
    });
  }

  svg += `</svg>`;
  container.innerHTML = svg;

  container.querySelectorAll(".time-bar").forEach((el) => {
    el.addEventListener("mouseenter", (e) => {
      const tooltip = document.getElementById("chart-tooltip");
      if (!tooltip) return;

      if (boringCostViewMode === "buckets") {
        const bucket = el.getAttribute("data-bucket");
        const count = el.getAttribute("data-count");
        const pct = el.getAttribute("data-pct");
        tooltip.innerHTML = `
          <div class="tooltip-title">Price Range: ${bucket}</div>
          <div class="tooltip-row">
            <span>Games Released:</span>
            <strong style="color: var(--tetris-cyan);">${fmtInt(count)} (${pct}%)</strong>
          </div>
        `;
      } else {
        const tier = el.getAttribute("data-tier");
        const p = el.getAttribute("data-price");
        const med = el.getAttribute("data-med");
        const count = el.getAttribute("data-count");
        tooltip.innerHTML = `
          <div class="tooltip-title">${tier} Tier Pricing</div>
          <div class="tooltip-row">
            <span>Average Price:</span>
            <strong style="color: var(--tetris-green);">$${p}</strong>
          </div>
          <div class="tooltip-row">
            <span>Median Price:</span>
            <strong>$${med}</strong>
          </div>
          <div class="tooltip-row">
            <span>Total Games:</span>
            <strong>${fmtInt(count)} games</strong>
          </div>
        `;
      }
      tooltip.classList.remove("hidden");
      moveTooltip(e);
    });

    el.addEventListener("mousemove", (e) => moveTooltip(e));
    el.addEventListener("mouseleave", () => hideTooltip());
  });
}


function initAdvicePanels() {
  const panels = document.querySelectorAll(".advice-panel");
  panels.forEach((panel) => {
    panel.addEventListener("click", () => {
      const isRevealed = panel.classList.toggle("revealed");
      panel.setAttribute("aria-expanded", isRevealed ? "true" : "false");
      const pill = panel.querySelector(".advice-toggle-pill");
      if (pill) {
        pill.textContent = isRevealed ? "Revealed (click to hide)" : "Click to reveal";
      }
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  initTopbarNavigation();
  initIntroQuestions();
  renderDataTabStats();
  initDataSubnav();
  initRelevantSubnav();
  initChartControls();
  renderStackedBarChart();
  renderInspector();

  // Extended Dashboard Subsections
  initReviewVelocityView();
  initSimilarityView();
  initOverTimeView();
  initPriceStratifiedView();
  initMoreInfoSubnav();
  initFunSubnav();
  initBoringSubnav();
  initAdvicePanels();
});
