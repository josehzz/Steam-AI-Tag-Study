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
    answer: "Me and many other devs feel overwhelmed by how much polarization AI technology is causing"
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
    answer: "I choose that date because Steam implemented the AI disclosure tag on Jan-2024 and I need a job, please hire me!"
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
let notableGamesAiFilter = "TRUE";
let activeQuestionIndex = 0;

// Format helpers
const fmtInt = (n) => Number(n).toLocaleString("en-US");
const fmtPct = (n) => `${n.toFixed(2)}%`;

/* =========================================================
   WEBGL SHADER BACKGROUND: Abstract Latent-Space Silk &
   Iridescent Caustic Contour Field (Apple Dark Coherent)
   ========================================================= */
function initAmbientShaderBackground() {
  const canvas = document.getElementById("ambient-shader-bg");
  if (!canvas) return;

  const gl = canvas.getContext("webgl", { alpha: false, antialias: false, powerPreference: "low-power" });
  if (!gl) return;

  const vsSource = `
    attribute vec2 a_position;
    void main() {
      gl_Position = vec4(a_position, 0.0, 1.0);
    }
  `;

  const fsSource = `
    #ifdef GL_ES
    precision highp float;
    #endif

    uniform vec2 u_resolution;
    uniform float u_time;
    uniform vec2 u_mouse;

    float hash21(vec2 p) {
      p = fract(p * vec2(123.34, 456.21));
      p += dot(p, p + 45.32);
      return fract(p.x * p.y);
    }

    float noise(vec2 p) {
      vec2 i = floor(p);
      vec2 f = fract(p);
      vec2 u = f * f * (3.0 - 2.0 * f);

      float a = hash21(i);
      float b = hash21(i + vec2(1.0, 0.0));
      float c = hash21(i + vec2(0.0, 1.0));
      float d = hash21(i + vec2(1.0, 1.0));

      return mix(mix(a, b, u.x), mix(c, d, u.x), u.y);
    }

    float fbm(vec2 p) {
      float v = 0.0;
      float amp = 0.5;
      mat2 rot = mat2(0.80, -0.60, 0.60, 0.80);
      for (int i = 0; i < 4; i++) {
        v += amp * noise(p);
        p = rot * p * 2.02 + vec2(13.1, 7.7);
        amp *= 0.5;
      }
      return v;
    }

    void main() {
      vec2 fragNorm = gl_FragCoord.xy / max(u_resolution.xy, vec2(1.0));
      vec2 uv = (gl_FragCoord.xy - 0.5 * u_resolution.xy) / min(u_resolution.x, u_resolution.y);
      vec2 mouseUv = (u_mouse - 0.5) * vec2(u_resolution.x / max(u_resolution.y, 1.0), 1.0);

      float t = u_time * 0.09;

      // Subtle mouse gravity/parallax shift
      vec2 mouseDelta = uv - mouseUv;
      float mouseDist = length(mouseDelta);
      vec2 p = uv * 1.45 - mouseDelta * (0.14 * exp(-mouseDist * 1.8));

      // Two-stage domain-warped latent flow field
      vec2 q = vec2(
        fbm(p + vec2(0.0, t * 0.45)),
        fbm(p + vec2(5.2, 1.3) - vec2(t * 0.35, 0.0))
      );

      vec2 r = vec2(
        fbm(p + 2.35 * q + vec2(1.7, 9.2) + 0.32 * t),
        fbm(p + 2.35 * q + vec2(8.3, 2.8) - 0.26 * t)
      );

      float f = fbm(p + 1.95 * r);

      // Dashboard-coherent Apple Dark obsidian, sapphire, teal & violet palette
      vec3 colVoid   = vec3(0.012, 0.014, 0.024);
      vec3 colIndigo = vec3(0.055, 0.065, 0.180);
      vec3 colBlue   = vec3(0.039, 0.518, 1.000); // #0a84ff
      vec3 colTeal   = vec3(0.392, 0.824, 1.000); // #64d2ff
      vec3 colPurple = vec3(0.749, 0.353, 0.949); // #bf5af2
      vec3 colGreen  = vec3(0.188, 0.820, 0.345); // #30d158 (restrained accent)

      // Base silky aurora blend
      vec3 col = mix(colVoid, colIndigo, clamp(f * f * 2.1, 0.0, 1.0));
      col = mix(col, colBlue * 0.52, clamp(length(q) * 0.72, 0.0, 1.0));
      col = mix(col, colPurple * 0.42, smoothstep(0.35, 0.95, r.x));
      col += colTeal * (0.24 * pow(clamp(r.y, 0.0, 1.0), 2.4));
      col += colGreen * (0.06 * smoothstep(0.62, 0.96, q.y * r.x + 0.2));

      // Delicate abstract caustic contour filaments
      float contourWave = abs(fract(f * 5.5 - u_time * 0.035) - 0.5);
      float ridge = exp(-contourWave * 22.0);
      float flowEnergy = smoothstep(0.28, 0.88, length(q - r));
      vec3 ridgeCol = mix(colTeal, colPurple, smoothstep(0.3, 0.75, r.x));
      col += ridgeCol * ridge * flowEnergy * 0.26;

      // Secondary wide atmospheric ribbon sweep
      float ribbon = exp(-pow(abs(uv.y * 0.85 + (f - 0.5) * 1.15), 2.0) * 6.5);
      col += mix(colBlue, colPurple, clamp(fragNorm.x, 0.0, 1.0)) * ribbon * 0.18;

      // Soft cursor refraction halo
      float cursorGlow = exp(-mouseDist * mouseDist * 2.6);
      col += mix(colBlue, colTeal, 0.5) * cursorGlow * 0.09;

      // Balanced contrast & corner grounding vignette for readable glass panels
      float vig = 1.0 - 0.42 * dot(fragNorm - 0.5, fragNorm - 0.5) * 2.2;
      col *= clamp(vig, 0.48, 1.0);
      col = col / (1.0 + col * 0.45); // Soft filmic rolloff

      // Subtle anti-banding dither
      float dither = (hash21(gl_FragCoord.xy + fract(u_time)) - 0.5) / 255.0;
      col = max(col + dither, 0.0);

      gl_FragColor = vec4(col, 1.0);
    }
  `;

  function compileShader(type, source) {
    const shader = gl.createShader(type);
    gl.shaderSource(shader, source);
    gl.compileShader(shader);
    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error("Shader compile error:", gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }
    return shader;
  }

  const vs = compileShader(gl.VERTEX_SHADER, vsSource);
  const fs = compileShader(gl.FRAGMENT_SHADER, fsSource);
  if (!vs || !fs) return;

  const program = gl.createProgram();
  gl.attachShader(program, vs);
  gl.attachShader(program, fs);
  gl.linkProgram(program);
  if (!gl.getProgramParameter(program, gl.LINK_STATUS)) return;

  const posBuffer = gl.createBuffer();
  gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
  gl.bufferData(
    gl.ARRAY_BUFFER,
    new Float32Array([-1, -1, 1, -1, -1, 1, -1, 1, 1, -1, 1, 1]),
    gl.STATIC_DRAW
  );

  const posLoc = gl.getAttribLocation(program, "a_position");
  const resLoc = gl.getUniformLocation(program, "u_resolution");
  const timeLoc = gl.getUniformLocation(program, "u_time");
  const mouseLoc = gl.getUniformLocation(program, "u_mouse");

  const targetMouse = { x: 0.5, y: 0.55 };
  const smoothMouse = { x: 0.5, y: 0.55 };

  window.addEventListener("pointermove", (e) => {
    targetMouse.x = e.clientX / Math.max(window.innerWidth, 1);
    targetMouse.y = 1.0 - e.clientY / Math.max(window.innerHeight, 1);
  }, { passive: true });

  function resize() {
    const dpr = Math.min(window.devicePixelRatio || 1, 1.5);
    canvas.width = Math.max(1, Math.floor(window.innerWidth * dpr));
    canvas.height = Math.max(1, Math.floor(window.innerHeight * dpr));
    gl.viewport(0, 0, canvas.width, canvas.height);
  }
  window.addEventListener("resize", resize);
  resize();

  const reducedMotion = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const startTime = performance.now();
  let rafId = null;

  function drawFrame(elapsed) {
    smoothMouse.x += (targetMouse.x - smoothMouse.x) * 0.04;
    smoothMouse.y += (targetMouse.y - smoothMouse.y) * 0.04;

    gl.useProgram(program);
    gl.bindBuffer(gl.ARRAY_BUFFER, posBuffer);
    gl.enableVertexAttribArray(posLoc);
    gl.vertexAttribPointer(posLoc, 2, gl.FLOAT, false, 0, 0);
    gl.uniform2f(resLoc, canvas.width, canvas.height);
    gl.uniform1f(timeLoc, elapsed);
    gl.uniform2f(mouseLoc, smoothMouse.x, smoothMouse.y);
    gl.drawArrays(gl.TRIANGLES, 0, 6);
  }

  function render(now) {
    if (document.hidden) {
      rafId = null;
      return;
    }
    const elapsed = (now - startTime) * 0.001;
    drawFrame(elapsed);
    if (!reducedMotion) {
      rafId = requestAnimationFrame(render);
    }
  }

  document.addEventListener("visibilitychange", () => {
    if (!document.hidden && !reducedMotion && rafId === null) {
      rafId = requestAnimationFrame(render);
    }
  });

  if (reducedMotion) {
    drawFrame(12.0);
  } else {
    rafId = requestAnimationFrame(render);
  }
}

/* =========================================================
   1. TOPBAR NAVIGATION
   ========================================================= */
function initTopbarNavigation() {
  const navButtons = document.querySelectorAll(".topbar-nav .nav-btn");
  const sections = document.querySelectorAll(".tab-section");

  navButtons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const target = btn.getAttribute("data-section");

      navButtons.forEach((b) => b.classList.toggle("active", b === btn));
      sections.forEach((sec) => {
        sec.classList.toggle("active", sec.id === `section-${target}`);
      });

      if (target === "intro") {
        selectIntroQuestion(0, false); // Don't trigger drop when merely switching tabs
      } else if (target === "relevant") {
        const activeSub = document.querySelector("#section-relevant .relevant-subview.active");
        if (activeSub && activeSub.id === "subview-review-velocity") renderReviewVelocity();
        else if (activeSub && activeSub.id === "subview-similarity") initSimilarityView();
        else if (activeSub && activeSub.id === "subview-over-time") renderOverTimeChart();
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
        else if (activeSub && activeSub.id === "subview-fun-inflation") renderFunInflation();
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
   4B. BOTTOM BAR NAVIGATION INSIDE "DATA"
   ========================================================= */
function initDataSubnav() {
  const subBtns = document.querySelectorAll("#section-data .bottom-subnav .subnav-btn");
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
    });
  });
}

/* =========================================================
   5. BOTTOM BAR NAVIGATION INSIDE "IS IT RELEVANT?"
   ========================================================= */
function initRelevantSubnav() {
  const subBtns = document.querySelectorAll("#section-relevant .bottom-subnav .subnav-btn");
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

      if (target === "review-count") renderStackedBarChart();
      else if (target === "review-velocity") renderReviewVelocity();
      else if (target === "similarity") initSimilarityView();
      else if (target === "over-time") renderOverTimeChart();
    });
  });
}

/* =========================================================
   6. INTERACTIVE STACKED BAR CHART + RIGHT INSPECTOR
   ========================================================= */
function renderStackedBarChart() {
  const container = document.getElementById("stacked-bar-chart");
  const yAxis = document.getElementById("y-axis-labels");
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

    const topLabelText =
      chartMode === "percentage"
        ? visibleSeries.TRUE && visTotal > 0
          ? `${((tVal / visTotal) * 100).toFixed(1)}% AI`
          : `${fmtInt(visTotal)}`
        : fmtInt(visTotal);

    col.innerHTML = `
      <div class="bar-top-value">${topLabelText}</div>
      <div class="bar-stack" style="height: ${Math.max(stackHeightPct, 2)}%;">
        <div class="bar-segment seg-false" style="height: ${fPct}%;">
          ${fPct > 14 ? `<span class="seg-inline-label">${chartMode === "percentage" ? `${fPct.toFixed(0)}%` : ""}</span>` : ""}
        </div>
        <div class="bar-segment seg-true" style="height: ${tPct}%;">
          ${tPct > 11 ? `<span class="seg-inline-label">${chartMode === "percentage" ? `${tPct.toFixed(1)}%` : ""}</span>` : ""}
        </div>
        <div class="bar-segment seg-maybe" style="height: ${mPct}%;"></div>
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

  const eyebrow = document.getElementById("inspector-eyebrow");
  const title = document.getElementById("inspector-title");
  const resetBtn = document.getElementById("reset-tier-btn");
  const insight = document.getElementById("inspector-insight");
  const kpiContainer = document.getElementById("inspector-kpis");
  const tagCaption = document.getElementById("tag-breakdown-caption");
  const tagBars = document.getElementById("inspector-tag-bars");
  const gamesList = document.getElementById("notable-games-list");

  const source = tier || STUDY_DATA.overall;
  const tot = source.total;
  const tCnt = source.counts.TRUE;
  const fCnt = source.counts.FALSE;
  const mCnt = source.counts.MAYBE;

  if (tier) {
    eyebrow.textContent = `TIER INSPECTOR • ${tier.shortLabel} REVIEWS`;
    title.textContent = `${tier.fullLabel} — ${fmtInt(tot)} Games`;
    resetBtn.classList.remove("hidden");
    insight.textContent = tier.insight;
    tagCaption.textContent = `Within ${tier.shortLabel} review tier`;
  } else {
    eyebrow.textContent = "OVERALL STUDY SUMMARY • ALL TIERS";
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
      <div class="kpi-label">ai_used: TRUE</div>
      <div class="kpi-value">${fmtInt(tCnt)} <small>(${fmtPct((tCnt / tot) * 100)})</small></div>
      <div class="kpi-sub">${scoreSubTrue}</div>
    </div>
    <div class="kpi-box kpi-false">
      <div class="kpi-label">ai_used: FALSE</div>
      <div class="kpi-value">${fmtInt(fCnt)} <small>(${fmtPct((fCnt / tot) * 100)})</small></div>
      <div class="kpi-sub">${scoreSubFalse}</div>
    </div>
    <div class="kpi-box kpi-maybe">
      <div class="kpi-label">ai_used: MAYBE</div>
      <div class="kpi-value">${fmtInt(mCnt)} <small>(${fmtPct((mCnt / tot) * 100)})</small></div>
      <div class="kpi-sub">Prototyping only</div>
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

  const games = (source.topGames && source.topGames[notableGamesAiFilter]) || [];
  if (games.length === 0) {
    gamesList.innerHTML = `<div class="notable-game-item"><span class="notable-game-tags">No games in this category.</span></div>`;
  } else {
    gamesList.innerHTML = games
      .map((g) => {
        const scoreBadge = g.score > 0 ? ` • ${g.score}%` : "";
        return `
          <div class="notable-game-item">
            <div>
              <a class="notable-game-title" href="https://store.steampowered.com/app/${g.appid}" target="_blank" rel="noopener noreferrer">${g.name}</a>
              <span class="notable-game-tags">${g.ai_tags ? `ai_tags: ${g.ai_tags}` : "No AI disclosure"}</span>
            </div>
            <div class="notable-game-meta">
              ${fmtInt(g.reviews)} reviews${scoreBadge}
            </div>
          </div>
        `;
      })
      .join("");
  }
}

function initChartControls() {
  const modeBtns = document.querySelectorAll(".mode-toggle .mode-btn");
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

  const miniPills = document.querySelectorAll("#top-games-filter .mini-pill");
  miniPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      notableGamesAiFilter = pill.getAttribute("data-ai");
      miniPills.forEach((p) => p.classList.toggle("active", p === pill));
      renderInspector();
    });
  });
}

/* =========================================================
   7. REVIEW VELOCITY SUBVIEW (Time vs Milestone Achievement)
   ========================================================= */
let velAiFilter = "ALL";
let velMilestoneFilter = "all";

function initReviewVelocityView() {
  const aiPills = document.querySelectorAll("#vel-ai-filter .mini-pill");
  aiPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      velAiFilter = pill.getAttribute("data-ai");
      aiPills.forEach((p) => p.classList.toggle("active", p === pill));
      renderReviewVelocity();
    });
  });

  const mPills = document.querySelectorAll("#vel-milestone-pills .milestone-pill");
  mPills.forEach((pill) => {
    pill.addEventListener("click", () => {
      velMilestoneFilter = pill.getAttribute("data-milestone");
      mPills.forEach((p) => p.classList.toggle("active", p === pill));
      renderReviewVelocity();
    });
  });

  renderReviewVelocity();
}

function renderReviewVelocity() {
  const container = document.getElementById("velocity-chart-container");
  if (!container || !window.STUDY_DATA_EXTENDED) return;

  const velData = window.STUDY_DATA_EXTENDED.velocity[velAiFilter] || [];
  const milestones = [
    { id: 1, label: "1 Review", color: "#64d2ff" },
    { id: 10, label: "10 Reviews", color: "#30d158" },
    { id: 50, label: "50 Reviews", color: "#ffd60a" },
    { id: 200, label: "200 Reviews", color: "#ff9f0a" },
    { id: 1000, label: "1,000 Reviews", color: "#bf5af2" }
  ];

  const activeMilestones = milestones.filter(
    (m) => velMilestoneFilter === "all" || velMilestoneFilter == m.id
  );

  const w = 760;
  const h = 340;
  const padL = 55;
  const padR = 25;
  const padT = 25;
  const padB = 45;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  let maxDays = 500;
  velData.forEach((row) => {
    activeMilestones.forEach((m) => {
      const val = row[`m${m.id}_days`];
      if (val && val > maxDays) maxDays = val;
    });
  });
  maxDays = Math.ceil(maxDays / 100) * 100;

  const numPoints = velData.length;
  const xStep = numPoints > 1 ? plotW / (numPoints - 1) : plotW;

  let svg = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">`;
  svg += `<defs>
    <filter id="neon-glow" x="-20%" y="-20%" width="140%" height="140%">
      <feDropShadow dx="0" dy="2" stdDeviation="2.5" flood-opacity="0.3"/>
    </filter>
  </defs>`;

  // Y Gridlines and labels
  const yTicks = 5;
  for (let i = 0; i <= yTicks; i++) {
    const val = Math.round((maxDays / yTicks) * i);
    const yPos = padT + plotH - (val / maxDays) * plotH;
    svg += `<line x1="${padL}" y1="${yPos}" x2="${w - padR}" y2="${yPos}" stroke="rgba(255,255,255,0.06)" stroke-dasharray="3,3" />`;
    svg += `<text x="${padL - 8}" y="${yPos + 4}" fill="rgba(235,235,245,0.4)" font-family="ui-monospace, monospace" font-size="10" text-anchor="end">${val}d</text>`;
  }

  // X Axis Labels
  velData.forEach((row, idx) => {
    if (idx % 6 === 0 || idx === numPoints - 1) {
      const xPos = padL + idx * xStep;
      const label = row.month.slice(2);
      svg += `<text x="${xPos}" y="${h - 15}" fill="rgba(235,235,245,0.4)" font-family="ui-monospace, monospace" font-size="10" text-anchor="middle">${label}</text>`;
      svg += `<line x1="${xPos}" y1="${padT + plotH}" x2="${xPos}" y2="${padT + plotH + 5}" stroke="rgba(255,255,255,0.12)" />`;
    }
  });

  // Milestone Paths
  activeMilestones.forEach((m) => {
    const pts = [];
    velData.forEach((row, idx) => {
      const days = row[`m${m.id}_days`];
      if (days !== null && days !== undefined) {
        const x = padL + idx * xStep;
        const y = padT + plotH - (days / maxDays) * plotH;
        pts.push({ x, y, days, count: row[`m${m.id}_count`], month: row.month, m });
      }
    });

    if (pts.length > 1) {
      const pathD = pts.reduce((acc, pt, i) => `${acc} ${i === 0 ? "M" : "L"} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`, "");
      svg += `<path d="${pathD}" fill="none" stroke="${m.color}" stroke-width="2.5" filter="url(#neon-glow)" />`;
    }

    // Circles
    pts.forEach((pt) => {
      svg += `<circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="4" fill="${m.color}" stroke="#1c1c1e" stroke-width="1.5" class="vel-node" data-month="${pt.month}" data-milestone="${pt.m.label}" data-days="${pt.days}" data-count="${pt.count}" />`;
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
      const numM = parseInt(milestone, 10) || 10;
      const rate = (numM / parseFloat(days)).toFixed(2);

      const tooltip = document.getElementById("chart-tooltip");
      if (!tooltip) return;
      tooltip.innerHTML = `
        <div class="tooltip-title">${month} &bull; ${milestone}</div>
        <div class="tooltip-row">
          <span>Avg Days to Reach:</span>
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

  tableBody.innerHTML = rows
    .map((r) => {
      const revTagDiff = r.rank - r.revTagAiRank;
      let diffBadge = "";
      if (revTagDiff === 0) {
        diffBadge = `<span class="diff-badge diff-zero">Exact Match (0)</span>`;
      } else if (revTagDiff > 0) {
        diffBadge = `<span class="diff-badge diff-pos">+${revTagDiff} (AI #${r.revTagAiRank})</span>`;
      } else {
        const valStr = r.revTagAiRank > 100 ? ">#100" : `#${r.revTagAiRank}`;
        diffBadge = `<span class="diff-badge diff-neg">${revTagDiff} (AI ${valStr})</span>`;
      }

      return `
        <tr>
          <td class="rank-badge-cell">${String(r.rank).padStart(2, "0")}</td>
          <td>
            <div class="tag-name-cell">
              <span>${r.revTag}</span>
              <span class="tag-count-sub">${fmtInt(r.revCount)} rev</span>
            </div>
          </td>
          <td>
            <div class="tag-name-cell">
              <span style="color: var(--tetris-orange);">${r.aiTag}</span>
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

  renderOverTimeChart();
}

function renderOverTimeChart() {
  const container = document.getElementById("time-chart-container");
  if (!container || !window.STUDY_DATA_EXTENDED) return;

  const data = window.STUDY_DATA_EXTENDED.overTime;
  const events = window.STUDY_DATA_EXTENDED.overTimeEvents || [];
  const w = 760;
  const h = 340;
  const padL = 55;
  const padR = 45;
  const padT = 50;
  const padB = 45;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  const numPoints = data.length;
  const colW = plotW / numPoints;

  let maxCount = 1;
  data.forEach((d) => {
    const val = timeAiFilter === "ALL" ? d.all : d[timeAiFilter.toLowerCase()] || 0;
    if (val > maxCount) maxCount = val;
  });
  maxCount = Math.ceil(maxCount / 500) * 500;

  let svg = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">`;
  svg += `<defs>
    <linearGradient id="timeBarGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#0a84ff" stop-opacity="0.85"/>
      <stop offset="100%" stop-color="#0a84ff" stop-opacity="0.25"/>
    </linearGradient>
    <linearGradient id="aiBarGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ff9f0a" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#ff9f0a" stop-opacity="0.25"/>
    </linearGradient>
  </defs>`;

  if (timeMode === "volume") {
    // Left Y Axis (Volume)
    const yTicks = 4;
    for (let i = 0; i <= yTicks; i++) {
      const val = Math.round((maxCount / yTicks) * i);
      const yPos = padT + plotH - (val / maxCount) * plotH;
      svg += `<line x1="${padL}" y1="${yPos}" x2="${w - padR}" y2="${yPos}" stroke="rgba(255,255,255,0.06)" stroke-dasharray="3,3" />`;
      svg += `<text x="${padL - 8}" y="${yPos + 4}" fill="rgba(235,235,245,0.4)" font-family="ui-monospace, monospace" font-size="10" text-anchor="end">${fmtInt(val)}</text>`;
    }

    // Right Y Axis (Adoption %)
    for (let p = 0; p <= 50; p += 25) {
      const yPos = padT + plotH - (p / 50) * plotH;
      svg += `<text x="${w - padR + 8}" y="${yPos + 4}" fill="var(--apple-orange, #ff9f0a)" font-family="ui-monospace, monospace" font-size="10">${p}%</text>`;
    }

    // Bars
    data.forEach((d, idx) => {
      const x = padL + idx * colW + 2;
      const barWidth = Math.max(2, colW - 4);
      const val = timeAiFilter === "ALL" ? d.all : d[timeAiFilter.toLowerCase()] || 0;
      const barH = (val / maxCount) * plotH;
      const y = padT + plotH - barH;

      const grad = timeAiFilter === "TRUE" ? "url(#aiBarGrad)" : "url(#timeBarGrad)";

      svg += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${barH.toFixed(1)}" fill="${grad}" rx="4" class="time-bar" data-month="${d.month}" data-all="${d.all}" data-true="${d.true}" data-pct="${d.truePct}" />`;
    });

    // Overlaid Adoption % Line
    const pts = data.map((d, idx) => {
      const x = padL + idx * colW + colW * 0.5;
      const y = padT + plotH - (d.truePct / 50) * plotH;
      return { x, y, d };
    });

    const lineD = pts.reduce((acc, pt, i) => `${acc} ${i === 0 ? "M" : "L"} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`, "");
    svg += `<path d="${lineD}" fill="none" stroke="#ff9f0a" stroke-width="2.5" filter="url(#neon-glow)" />`;

    pts.forEach((pt) => {
      svg += `<circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="3.5" fill="#ffd60a" stroke="#1c1c1e" stroke-width="1" class="time-node" data-month="${pt.d.month}" data-pct="${pt.d.truePct}" />`;
    });
  } else {
    // Mode: Rate (%)
    const yTicks = 5;
    for (let i = 0; i <= yTicks; i++) {
      const p = i * 10;
      const yPos = padT + plotH - (p / 50) * plotH;
      svg += `<line x1="${padL}" y1="${yPos}" x2="${w - padR}" y2="${yPos}" stroke="rgba(255,255,255,0.06)" stroke-dasharray="3,3" />`;
      svg += `<text x="${padL - 8}" y="${yPos + 4}" fill="var(--apple-orange, #ff9f0a)" font-family="ui-monospace, monospace" font-size="10" text-anchor="end">${p}%</text>`;
    }

    const pts = data.map((d, idx) => {
      const x = padL + idx * colW + colW * 0.5;
      const y = padT + plotH - (d.truePct / 50) * plotH;
      return { x, y, d };
    });

    const areaD = `${pts.reduce((acc, pt, i) => `${acc} ${i === 0 ? "M" : "L"} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`, "")} L ${pts[pts.length - 1].x.toFixed(1)} ${padT + plotH} L ${pts[0].x.toFixed(1)} ${padT + plotH} Z`;
    svg += `<path d="${areaD}" fill="rgba(255, 159, 10, 0.15)" />`;

    const lineD = pts.reduce((acc, pt, i) => `${acc} ${i === 0 ? "M" : "L"} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`, "");
    svg += `<path d="${lineD}" fill="none" stroke="#ff9f0a" stroke-width="2.5" filter="url(#neon-glow)" />`;

    pts.forEach((pt) => {
      svg += `<circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="4" fill="#30d158" stroke="#1c1c1e" stroke-width="1.5" class="time-node" data-month="${pt.d.month}" data-pct="${pt.d.truePct}" />`;
    });
  }

  // X Axis Labels
  data.forEach((d, idx) => {
    if (idx % 6 === 0 || idx === numPoints - 1) {
      const xPos = padL + idx * colW + colW * 0.5;
      const label = d.month.slice(2);
      svg += `<text x="${xPos}" y="${h - 15}" fill="rgba(235,235,245,0.4)" font-family="ui-monospace, monospace" font-size="10" text-anchor="middle">${label}</text>`;
    }
  });

  // Landmark Claude & GPT Release Vertical Lines
  const monthIdxMap = {};
  data.forEach((d, idx) => {
    monthIdxMap[d.month] = idx;
  });

  const labelSlots = [];
  events.forEach((evt) => {
    const idx = monthIdxMap[evt.month];
    if (idx === undefined) return;
    const dayRatio = evt.day ? Math.min(Math.max(evt.day / 30, 0.14), 0.86) : 0.5;
    const xPos = padL + idx * colW + colW * dayRatio;
    const strokeCol = evt.family === "claude" ? "#bf5af2" : "#30d158";

    // Pick vertical tier (0, 1, 2, 3) to prevent label collisions on same/adjacent months
    let tier = 0;
    for (let t = 0; t < 4; t++) {
      const collides = labelSlots.some((s) => s.tier === t && Math.abs(s.x - xPos) < 76);
      if (!collides) {
        tier = t;
        break;
      }
    }
    labelSlots.push({ x: xPos, tier });
    const labelY = padT - 7 - tier * 12;
    const anchor = xPos > w - padR - 65 ? "end" : xPos < padL + 45 ? "start" : "middle";

    svg += `<line x1="${xPos.toFixed(1)}" y1="${labelY + 3}" x2="${xPos.toFixed(1)}" y2="${padT + plotH}" stroke="${strokeCol}" stroke-width="1.5" stroke-dasharray="4,3" stroke-opacity="0.78" />`;
    svg += `<circle cx="${xPos.toFixed(1)}" cy="${padT + plotH}" r="3" fill="${strokeCol}" />`;
    svg += `<text x="${xPos.toFixed(1)}" y="${labelY}" fill="${strokeCol}" font-family="ui-monospace, monospace" font-size="9" font-weight="600" text-anchor="${anchor}">${evt.model}</text>`;
    svg += `<line x1="${xPos.toFixed(1)}" y1="${labelY - 8}" x2="${xPos.toFixed(1)}" y2="${padT + plotH}" stroke="transparent" stroke-width="10" class="time-evt-hit" data-model="${evt.model}" data-date="${evt.date}" data-family="${evt.family === "claude" ? "Anthropic Claude" : "OpenAI GPT"}" data-note="${evt.note}" data-month="${evt.month}" />`;
  });

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

  // Tooltip
  container.querySelectorAll(".time-bar, .time-node").forEach((el) => {
    el.addEventListener("mouseenter", (e) => {
      const month = el.getAttribute("data-month");
      const all = el.getAttribute("data-all");
      const t = el.getAttribute("data-true");
      const pct = el.getAttribute("data-pct");

      const tooltip = document.getElementById("chart-tooltip");
      if (!tooltip) return;
      tooltip.innerHTML = `
        <div class="tooltip-title">${month} Telemetry</div>
        ${all ? `<div class="tooltip-row"><span>Total Releases:</span><strong>${fmtInt(all)}</strong></div>` : ""}
        ${t ? `<div class="tooltip-row" style="color:#ff8800;"><span>AI Used (TRUE):</span><strong>${fmtInt(t)}</strong></div>` : ""}
        <div class="tooltip-row" style="color:#00ff66;"><span>AI Share:</span><strong>${pct}%</strong></div>
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
  const subBtns = document.querySelectorAll(".more-bottom-subnav .subnav-btn");
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

  let currentAngle = 0;
  const cx = 160;
  const cy = 160;
  const r = 125;
  const innerR = 65;

  let svg = `<svg viewBox="0 0 320 320" style="overflow: visible;">`;

  slices.forEach((sl, idx) => {
    const fraction = sl.count / total;
    const angle = fraction * 2 * Math.PI;
    const startAngle = currentAngle;
    const endAngle = currentAngle + angle;
    currentAngle = endAngle;

    const x1 = cx + r * Math.cos(startAngle);
    const y1 = cy + r * Math.sin(startAngle);
    const x2 = cx + r * Math.cos(endAngle);
    const y2 = cy + r * Math.sin(endAngle);

    const ix1 = cx + innerR * Math.cos(endAngle);
    const iy1 = cy + innerR * Math.sin(endAngle);
    const ix2 = cx + innerR * Math.cos(startAngle);
    const iy2 = cy + innerR * Math.sin(startAngle);

    const largeArc = angle > Math.PI ? 1 : 0;
    const pathD = `M ${x1} ${y1} A ${r} ${r} 0 ${largeArc} 1 ${x2} ${y2} L ${ix1} ${iy1} A ${innerR} ${innerR} 0 ${largeArc} 0 ${ix2} ${iy2} Z`;

    const color = palette[idx % palette.length];
    const isAct = sl.ai_tag === activeAiUsageSlice;

    svg += `<path d="${pathD}" fill="${color}" fill-opacity="${isAct ? "0.95" : "0.75"}" stroke="${isAct ? "#ffffff" : "#05070e"}" stroke-width="${isAct ? "2.5" : "1"}" class="pie-slice ${isAct ? "active" : ""}" data-tag="${sl.ai_tag}" data-count="${sl.count}" data-pct="${sl.pct}" />`;
  });

  // Center Text in Donut
  const activeObj = slices.find((s) => s.ai_tag === activeAiUsageSlice) || slices[0];
  svg += `
    <text x="${cx}" y="${cy - 8}" fill="#f5f5f7" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="13" font-weight="600" text-anchor="middle">${activeObj.ai_tag}</text>
    <text x="${cx}" y="${cy + 12}" fill="var(--apple-blue, #0a84ff)" font-family="ui-monospace, monospace" font-size="12" font-weight="600" text-anchor="middle">${activeObj.pct}%</text>
    <text x="${cx}" y="${cy + 26}" fill="rgba(235,235,245,0.45)" font-family="ui-monospace, monospace" font-size="9" text-anchor="middle">${fmtInt(activeObj.count)} games</text>
  `;

  svg += `</svg>`;
  container.innerHTML = svg;

  // Legend
  if (legend) {
    legend.innerHTML = slices
      .map((sl, idx) => {
        const color = palette[idx % palette.length];
        const isAct = sl.ai_tag === activeAiUsageSlice;
        return `
          <div class="pie-legend-item ${isAct ? "active" : ""}" data-tag="${sl.ai_tag}">
            <span class="pie-swatch" style="background: ${color};"></span>
            <span style="font-weight: 700; color: #ffffff;">${sl.ai_tag}</span>
            <span style="margin-left: auto; color: var(--text-muted); font-family: ui-monospace, SFMono-Regular, monospace; font-size: 0.85em;">${sl.pct}%</span>
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

  // Slice click events
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
        <div class="tooltip-row"><span>Total Games:</span><strong>${fmtInt(count)}</strong></div>
        <div class="tooltip-row" style="color:#00f0ff;"><span>Share of Disclosures:</span><strong>${pct}%</strong></div>
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
  const subBtns = document.querySelectorAll("#section-for-fun .bottom-subnav .subnav-btn");
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

      if (target === "fun-foot") renderFunFoot();
      else if (target === "fun-word-ai") renderFunWordAi();
      else if (target === "fun-inflation") renderFunInflation();
    });
  });

  initFunFootView();
  initFunWordAiView();
  initFunInflationView();
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
  const h = 340;
  const padL = 50;
  const padR = 45;
  const padT = 25;
  const padB = 45;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  const numPoints = series.length;
  const colW = plotW / numPoints;
  const maxMonthly = 12;
  const maxCumulative = 90;

  let svg = `<svg viewBox="0 0 ${w} ${h}" preserveAspectRatio="none">`;
  svg += `<defs>
    <linearGradient id="aiWordGrad" x1="0" y1="0" x2="0" y2="1">
      <stop offset="0%" stop-color="#ff9f0a" stop-opacity="0.9"/>
      <stop offset="100%" stop-color="#ff9f0a" stop-opacity="0.25"/>
    </linearGradient>
  </defs>`;

  // Left Y-Axis (Monthly releases)
  for (let i = 0; i <= 4; i++) {
    const val = Math.round((maxMonthly / 4) * i);
    const yPos = padT + plotH - (val / maxMonthly) * plotH;
    svg += `<line x1="${padL}" y1="${yPos}" x2="${w - padR}" y2="${yPos}" stroke="rgba(255,255,255,0.06)" stroke-dasharray="3,3" />`;
    svg += `<text x="${padL - 8}" y="${yPos + 4}" fill="rgba(235,235,245,0.4)" font-family="ui-monospace, monospace" font-size="10" text-anchor="end">${val}</text>`;
  }

  // Right Y-Axis (Cumulative titles)
  for (let i = 0; i <= 4; i++) {
    const val = Math.round((maxCumulative / 4) * i);
    const yPos = padT + plotH - (val / maxCumulative) * plotH;
    svg += `<text x="${w - padR + 8}" y="${yPos + 4}" fill="var(--apple-blue, #0a84ff)" font-family="ui-monospace, monospace" font-size="10" text-anchor="start">${val}</text>`;
  }

  // Bars (Monthly releases)
  series.forEach((d, idx) => {
    const x = padL + idx * colW + 2;
    const barWidth = Math.max(2, colW - 4);
    const barH = (d.count / maxMonthly) * plotH;
    const y = padT + plotH - barH;

    svg += `<rect x="${x.toFixed(1)}" y="${y.toFixed(1)}" width="${barWidth.toFixed(1)}" height="${barH.toFixed(1)}" fill="url(#aiWordGrad)" rx="3" class="time-bar" data-month="${d.month}" data-count="${d.count}" data-cum="${d.cumulative}" data-true="${d.ai_true}" data-false="${d.ai_false}" />`;

    if (idx % 6 === 0 || idx === numPoints - 1) {
      const label = d.month.slice(2);
      svg += `<text x="${x + barWidth / 2}" y="${h - 15}" fill="rgba(235,235,245,0.4)" font-family="ui-monospace, monospace" font-size="10" text-anchor="middle">${label}</text>`;
    }
  });

  // Cumulative Line
  const pts = series.map((d, idx) => {
    const x = padL + idx * colW + colW * 0.5;
    const y = padT + plotH - (d.cumulative / maxCumulative) * plotH;
    return { x, y, d };
  });

  const lineD = pts.reduce((acc, pt, i) => `${acc} ${i === 0 ? "M" : "L"} ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`, "");
  svg += `<path d="${lineD}" fill="none" stroke="#0a84ff" stroke-width="2.5" filter="url(#neon-glow)" />`;

  pts.forEach((pt) => {
    svg += `<circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="3.5" fill="#0a84ff" stroke="#1c1c1e" stroke-width="1.5" class="time-node" data-month="${pt.d.month}" data-count="${pt.d.count}" data-cum="${pt.d.cumulative}" data-true="${pt.d.ai_true}" data-false="${pt.d.ai_false}" />`;
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
        <div class="tooltip-title">${month} &bull; "AI" in Title</div>
        <div class="tooltip-row">
          <span>Monthly Releases:</span>
          <strong style="color: var(--tetris-orange);">${count} games</strong>
        </div>
        <div class="tooltip-row">
          <span>Cumulative Released:</span>
          <strong style="color: var(--tetris-cyan);">${cum} titles</strong>
        </div>
        <div class="tooltip-row">
          <span>Declared AI Used:</span>
          <strong>${t} TRUE &bull; ${f} FALSE</strong>
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

function initFunInflationView() {
  renderFunInflation();
}

function renderFunInflation() {
  const container = document.getElementById("inflation-chart-container");
  const milestonesContainer = document.getElementById("inflation-milestones-row");
  const headerToday = document.getElementById("inflation-today-header");
  if (!container || !window.STUDY_DATA_EXTENDED || !window.STUDY_DATA_EXTENDED.funInflation) return;

  const data = window.STUDY_DATA_EXTENDED.funInflation;
  const today = new Date();
  const todayStr = today.toLocaleDateString("en-US", { year: "numeric", month: "short", day: "numeric" });
  if (headerToday) headerToday.textContent = todayStr;

  const w = 760;
  const h = 340;
  const padL = 60;
  const padR = 40;
  const padT = 40;
  const padB = 45;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  let svg = `<svg viewBox="0 0 ${w} ${h}" style="overflow: visible;">`;
  svg += `<defs>
    <linearGradient id="inflationGrad" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#ffe600"/>
      <stop offset="65%" stop-color="#ff8800"/>
      <stop offset="100%" stop-color="#ff2a54"/>
    </linearGradient>
    <filter id="hyperGlow" x="-50%" y="-50%" width="200%" height="200%">
      <feGaussianBlur stdDeviation="4" result="coloredBlur"/>
      <feMerge>
        <feMergeNode in="coloredBlur"/>
        <feMergeNode in="SourceGraphic"/>
      </feMerge>
    </filter>
  </defs>`;

  // Grid lines
  for (let i = 0; i <= 4; i++) {
    const yPos = padT + (plotH / 4) * i;
    svg += `<line x1="${padL}" y1="${yPos}" x2="${w - padR}" y2="${yPos}" stroke="rgba(255,255,255,0.08)" stroke-dasharray="3,3" />`;
  }

  // X Axis line
  svg += `<line x1="${padL}" y1="${padT + plotH}" x2="${w - padR}" y2="${padT + plotH}" stroke="rgba(255,255,255,0.2)" stroke-width="1.5" />`;

  const milestones = data.milestones;
  const numM = milestones.length;
  const xStep = plotW / (numM - 1);

  // Exponential curve points calculation:
  // Starts flat, accelerates into vertical ascent, then blasts beyond chart top boundary!
  const curvePts = milestones.map((m, idx) => {
    const x = padL + idx * xStep;
    let normY;
    if (idx === 0) normY = 0.02;
    else if (idx === 1) normY = 0.05;
    else if (idx === 2) normY = 0.09;
    else if (idx === 3) normY = 0.16;
    else if (idx === 4) normY = 0.32;
    else if (idx === 5) normY = 0.54;
    else if (idx === 6) normY = 0.76;
    else if (idx === 7) normY = 0.94;
    else normY = 1.35; // BREAKS OUT past 100%!

    const y = padT + plotH - normY * plotH;
    return { x, y, m };
  });

  const pathD = curvePts.reduce((acc, pt, i) => {
    if (i === 0) return `M ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`;
    const prev = curvePts[i - 1];
    const cpx = (prev.x + pt.x) / 2;
    return `${acc} C ${cpx.toFixed(1)} ${prev.y.toFixed(1)}, ${cpx.toFixed(1)} ${pt.y.toFixed(1)}, ${pt.x.toFixed(1)} ${pt.y.toFixed(1)}`;
  }, "");

  svg += `<path d="${pathD}" fill="none" stroke="url(#inflationGrad)" stroke-width="3.5" filter="url(#hyperGlow)" />`;

  curvePts.forEach((pt, idx) => {
    const isLast = idx === curvePts.length - 1;
    const r = isLast ? 7 : 4.5;
    const col = isLast ? "#ff2a54" : "#ffe600";

    svg += `<circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="${r}" fill="${col}" stroke="#05070e" stroke-width="2" class="vel-node" data-year="${pt.m.year}" data-label="${pt.m.label}" data-rate="${pt.m.rate}" />`;
    svg += `<text x="${pt.x.toFixed(1)}" y="${padT + plotH + 20}" fill="rgba(235, 235, 245, 0.55)" font-family="ui-monospace, SFMono-Regular, monospace" font-size="9.5" text-anchor="middle">${pt.m.year}</text>`;

    if (isLast) {
      svg += `
        <text x="${pt.x.toFixed(1) - 10}" y="${pt.y.toFixed(1) - 14}" fill="#ff453a" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="11.5" font-weight="700" text-anchor="end">🚀 OVERFLOW!</text>
        <circle cx="${pt.x.toFixed(1)}" cy="${pt.y.toFixed(1)}" r="14" fill="none" stroke="#ff2a54" stroke-width="1.5" stroke-dasharray="3,3" opacity="0.8"/>
      `;
    }
  });

  svg += `</svg>`;
  container.innerHTML = svg;

  container.querySelectorAll(".vel-node").forEach((node) => {
    node.addEventListener("mouseenter", (e) => {
      const year = node.getAttribute("data-year");
      const label = node.getAttribute("data-label");
      const rate = node.getAttribute("data-rate");

      const tooltip = document.getElementById("chart-tooltip");
      if (!tooltip) return;
      tooltip.innerHTML = `
        <div class="tooltip-title">${year} &bull; Hyperinflation Event</div>
        <div class="tooltip-row">
          <span>Historical Event:</span>
          <strong style="color: #ffffff;">${label}</strong>
        </div>
        <div class="tooltip-row">
          <span>Reported Rate:</span>
          <strong style="color: var(--tetris-red);">${rate}</strong>
        </div>
      `;
      tooltip.classList.remove("hidden");
      moveTooltip(e);
    });

    node.addEventListener("mousemove", (e) => moveTooltip(e));
    node.addEventListener("mouseleave", () => hideTooltip());
  });

  if (milestonesContainer) {
    milestonesContainer.innerHTML = milestones
      .map((m) => `
        <div class="milestone-item">
          <div class="milestone-year-row">
            <span class="milestone-year">${m.year}</span>
            <span class="milestone-rate">${m.rate}</span>
          </div>
          <div class="milestone-label">${m.label}</div>
        </div>
      `)
      .join("");
  }
}

/* =========================================================
   15. BORING STUFF EVERY GAME DEV IS CURIOUS ABOUT
   ========================================================= */
function initBoringSubnav() {
  const subBtns = document.querySelectorAll("#section-boring-stuff .bottom-subnav .subnav-btn");
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

function initBoringBestTagsView() {
  const searchInput = document.getElementById("boring-tags-search");
  const minPills = document.querySelectorAll("#boring-min-games-pills .mini-pill");
  const resetBtn = document.getElementById("reset-boring-tags-btn");

  if (!window.STUDY_DATA_EXTENDED || !window.STUDY_DATA_EXTENDED.boringDeveloperTags) return;

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
      if (searchInput) searchInput.value = "";
      minPills.forEach((p) => p.classList.toggle("active", p.getAttribute("data-min") === "150"));
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

  const w = 760;
  const h = 380;
  const padL = 56;
  const padR = 28;
  const padT = 30;
  const padB = 46;
  const plotW = w - padL - padR;
  const plotH = h - padT - padB;

  const discVals = pool.map((t) => t.discRate).sort((a, b) => a - b);
  const scoreVals = pool.map((t) => t.avgScore).sort((a, b) => a - b);
  const minX = Math.max(0, Math.floor((discVals[0] - 4) / 5) * 5);
  const maxX = Math.min(100, Math.ceil((discVals[discVals.length - 1] + 4) / 5) * 5);
  const minY = Math.max(50, Math.floor((scoreVals[0] - 2) / 5) * 5);
  const maxY = Math.min(95, Math.ceil((scoreVals[scoreVals.length - 1] + 2) / 5) * 5);

  const medDisc = discVals[Math.floor(discVals.length / 2)];
  const medScore = scoreVals[Math.floor(scoreVals.length / 2)];
  const maxLogMed = Math.max(...pool.map((t) => Math.log1p(t.medRev)), 1);

  const xScale = (v) => padL + ((v - minX) / Math.max(maxX - minX, 1)) * plotW;
  const yScale = (v) => padT + plotH - ((v - minY) / Math.max(maxY - minY, 1)) * plotH;

  let svg = `<svg viewBox="0 0 ${w} ${h}">`;

  // Sweet spot highlight box (top-right quadrant)
  const qx = xScale(medDisc);
  const qy = yScale(medScore);
  svg += `<rect x="${qx.toFixed(1)}" y="${padT}" width="${(padL + plotW - qx).toFixed(1)}" height="${(qy - padT).toFixed(1)}" fill="rgba(48, 209, 88, 0.06)" />`;
  svg += `<text x="${padL + plotW - 8}" y="${padT + 15}" fill="rgba(48, 209, 88, 0.75)" font-family="ui-monospace, monospace" font-size="9.5" font-weight="700" text-anchor="end">DEVELOPER SWEET SPOT (FAST DISCOVERY + HIGH SCORE)</text>`;

  // Gridlines Y
  for (let yv = minY; yv <= maxY; yv += 5) {
    const yp = yScale(yv);
    svg += `<line x1="${padL}" y1="${yp.toFixed(1)}" x2="${w - padR}" y2="${yp.toFixed(1)}" stroke="rgba(255,255,255,0.06)" stroke-dasharray="3,3" />`;
    svg += `<text x="${padL - 8}" y="${(yp + 3.5).toFixed(1)}" fill="rgba(235,235,245,0.45)" font-family="ui-monospace, monospace" font-size="10" text-anchor="end">${yv}%</text>`;
  }

  // Gridlines X
  const xStep = maxX - minX > 45 ? 10 : 5;
  for (let xv = minX; xv <= maxX; xv += xStep) {
    const xp = xScale(xv);
    svg += `<line x1="${xp.toFixed(1)}" y1="${padT}" x2="${xp.toFixed(1)}" y2="${padT + plotH}" stroke="rgba(255,255,255,0.06)" stroke-dasharray="3,3" />`;
    svg += `<text x="${xp.toFixed(1)}" y="${padT + plotH + 16}" fill="rgba(235,235,245,0.45)" font-family="ui-monospace, monospace" font-size="10" text-anchor="middle">${xv}%</text>`;
  }

  // Quadrant median dashed lines
  svg += `<line x1="${qx.toFixed(1)}" y1="${padT}" x2="${qx.toFixed(1)}" y2="${padT + plotH}" stroke="rgba(255, 214, 10, 0.3)" stroke-dasharray="5,4" />`;
  svg += `<line x1="${padL}" y1="${qy.toFixed(1)}" x2="${w - padR}" y2="${qy.toFixed(1)}" stroke="rgba(255, 214, 10, 0.3)" stroke-dasharray="5,4" />`;

  // Axis Titles
  svg += `<text x="${padL + plotW / 2}" y="${h - 8}" fill="rgba(235,235,245,0.65)" font-family="-apple-system, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle">Fast Discovery: % of Games Reaching 10+ Reviews</text>`;
  svg += `<text x="15" y="${padT + plotH / 2}" fill="rgba(235,235,245,0.65)" font-family="-apple-system, sans-serif" font-size="10.5" font-weight="600" text-anchor="middle" transform="rotate(-90 15 ${padT + plotH / 2})">Avg Review Score (%)</text>`;

  // Draw bubbles back-to-front (smaller/lower score first, top/focused last)
  const searchSet = boringDevSearchQuery ? new Set(searched.map((t) => t.tag)) : null;
  const drawOrder = [...pool].sort((a, b) => a.devScore - b.devScore);

  drawOrder.forEach((t) => {
    const cx = xScale(t.discRate);
    const cy = yScale(t.avgScore);
    const normR = Math.log1p(t.medRev) / maxLogMed;
    const r = 4.2 + Math.pow(normR, 1.35) * 14.5;
    const isFocus = activeTag && t.tag === activeTag.tag;
    const isDimmed = searchSet && !searchSet.has(t.tag) && !isFocus;

    let fill = "#64d2ff";
    if (t.devScore >= 62) fill = "#30d158";
    else if (t.devScore >= 52) fill = "#0a84ff";
    else fill = "#8e8e93";

    if (isFocus) fill = "#ffd60a";

    const opacity = isFocus ? 0.95 : isDimmed ? 0.14 : 0.72;
    const stroke = isFocus ? "#ffffff" : "rgba(0,0,0,0.45)";
    const sw = isFocus ? 2.4 : 1;

    svg += `<circle cx="${cx.toFixed(1)}" cy="${cy.toFixed(1)}" r="${r.toFixed(1)}" fill="${fill}" fill-opacity="${opacity}" stroke="${stroke}" stroke-width="${sw}" class="dev-bubble" data-tag="${t.tag.replace(/"/g, "&quot;")}" />`;
  });

  // Labels for top 6 tags + focused tag
  const labelTags = new Map();
  pool.slice(0, 6).forEach((t) => labelTags.set(t.tag, t));
  if (activeTag) labelTags.set(activeTag.tag, activeTag);

  labelTags.forEach((t) => {
    const cx = xScale(t.discRate);
    const cy = yScale(t.avgScore);
    const normR = Math.log1p(t.medRev) / maxLogMed;
    const r = 4.2 + Math.pow(normR, 1.35) * 14.5;
    const isFocus = activeTag && t.tag === activeTag.tag;
    const anchor = cx > padL + plotW - 90 ? "end" : "start";
    const dx = anchor === "end" ? -(r + 5) : r + 5;
    svg += `<text x="${(cx + dx).toFixed(1)}" y="${(cy + 3.5).toFixed(1)}" fill="${isFocus ? "#ffd60a" : "#ffffff"}" font-family="-apple-system, sans-serif" font-size="${isFocus ? "11" : "9.5"}" font-weight="${isFocus ? "700" : "600"}" text-anchor="${anchor}" style="pointer-events:none; text-shadow: 0 1px 4px #000;">${t.tag}</text>`;
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
            const pct = ((boringTrendingSort === "growth" ? t.multiplier : t.totalGames) / maxVal) * 100;
            return `
              <div class="trending-card">
                <div class="trending-card-header">
                  <span class="trending-card-title">#${idx + 1} ${t.tag}</span>
                  <span class="trending-card-mult">${t.multiplier}&times;</span>
                </div>
                <div class="trending-card-track">
                  <div class="trending-card-fill" style="width: ${pct.toFixed(1)}%;"></div>
                </div>
                <div class="trending-card-meta">
                  <span>2024: ${t.count2024} &rarr; 2026: ${t.count2026}</span>
                  <span class="trending-card-games">${fmtInt(t.totalGames)} games</span>
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
  if (!container || !window.STUDY_DATA_EXTENDED || !window.STUDY_DATA_EXTENDED.boringCostAverage) return;

  const data = window.STUDY_DATA_EXTENDED.boringCostAverage;

  const w = 760;
  const h = 340;
  const padL = 120;
  const padR = 45;
  const padT = 30;
  const padB = 40;
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
    const maxCount = Math.max(...buckets.map((b) => b.count));
    const barH = 26;
    const gap = (plotH - buckets.length * barH) / (buckets.length + 1);

    buckets.forEach((b, idx) => {
      const y = padT + gap + idx * (barH + gap);
      const barW = (b.count / maxCount) * plotW;

      svg += `<text x="${padL - 10}" y="${y + barH / 2 + 4}" fill="#f5f5f7" font-family="ui-monospace, monospace" font-size="11" text-anchor="end">${b.bucket}</text>`;
      svg += `<rect x="${padL}" y="${y}" width="${plotW}" height="${barH}" fill="rgba(255,255,255,0.04)" rx="5" />`;
      svg += `<rect x="${padL}" y="${y}" width="${barW.toFixed(1)}" height="${barH}" fill="url(#costGrad)" rx="5" class="time-bar" data-bucket="${b.bucket}" data-count="${b.count}" data-pct="${b.pct}" />`;
      svg += `<text x="${padL + barW + 8}" y="${y + barH / 2 + 4}" fill="var(--apple-blue, #0a84ff)" font-family="ui-monospace, monospace" font-size="10" font-weight="600">${fmtInt(b.count)} (${b.pct}%)</text>`;
    });
  } else {
    const tiers = data.byReviewTier;
    const maxPrice = 20;
    const barH = 30;
    const gap = (plotH - tiers.length * barH) / (tiers.length + 1);

    tiers.forEach((t, idx) => {
      const y = padT + gap + idx * (barH + gap);
      const barW = (t.avgPrice / maxPrice) * plotW;

      svg += `<text x="${padL - 10}" y="${y + barH / 2 + 4}" fill="#f5f5f7" font-family="-apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif" font-size="11" font-weight="600" text-anchor="end">${t.tier}</text>`;
      svg += `<rect x="${padL}" y="${y}" width="${plotW}" height="${barH}" fill="rgba(255,255,255,0.04)" rx="5" />`;
      svg += `<rect x="${padL}" y="${y}" width="${barW.toFixed(1)}" height="${barH}" fill="url(#costGrad)" rx="3" class="time-bar" data-tier="${t.tier}" data-price="${t.avgPrice}" data-med="${t.medianPrice}" data-count="${t.count}" />`;
      svg += `<text x="${padL + barW + 8}" y="${y + barH / 2 + 4}" fill="var(--apple-green, #30d158)" font-family="ui-monospace, SFMono-Regular, monospace" font-size="11" font-weight="600">$${t.avgPrice.toFixed(2)} (Med: $${t.medianPrice.toFixed(2)})</text>`;
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
  initAmbientShaderBackground();
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
  initMoreInfoSubnav();
  initFunSubnav();
  initBoringSubnav();
  initAdvicePanels();
});
