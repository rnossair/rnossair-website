export const profile = {
  name: "Rayane Nossair",
  tagline: "Full-stack builder moving into agentic AI systems.",
  location: "Grinnell, Iowa",
  email: "nossairr@grinnell.edu",
  github: "https://github.com/rnossair",
  linkedin: "https://www.linkedin.com/in/rayane-nossair/",
  resume: "/docs/resume.pdf",
  photo: null, // hidden for now; "/images/pfp.png" restores it
};

// The hero diff. Removed lines are what the work used to be; added lines are
// what it is now. Counts in the hunk header match the line counts below.
export const trajectory = {
  from: 2022,
  to: 2026,
  path: "rayane-nossair/trajectory",
  removed: [
    "full-stack builder",
    "React front ends, Express and Mongo behind them",
    "writes every line by hand",
  ],
  added: [
    "Applied AI Engineer",
    "architects systems that reason, iterate, and act",
    "RAG Pipelines, Agent Loops",
    "MCP Integrations and Tool Calling",
  ],
};

export const about = {
  pull: ["Writing every line by hand isn't the job anymore.", "Planning the architecture and the spec is."],
  body: [
    "I'm a computer science student at Grinnell College. Most of my work so far had been full-stack: React and Next.js front ends, Express and MongoDB on the back.",
    "That's shifted recently. Lately I've been moving from systems that store and serve data to systems that reason, iterate, and act over it — models that call tools, hold state, and get trusted with significant autonomy."
  ],
};

export const experience = [
  {
    role: "Software Engineer Intern",
    org: "DXC Technology",
    location: "Salé, Morocco",
    start: "2026-06",
    end: "2026-07",
    summary:
      "Architected a full-stack document management platform with AI semantic search.",
    bullets: [
      "Architected a full-stack document management platform with AI semantic search (pgvector), versioned file storage on Cloudflare R2, and role-based access control.",
      "Implemented Keycloak SSO with Authorization Code Flow, federated Google OAuth, and JWKS-based JWT verification; containerized the full stack with Docker Compose including automated schema migrations.",
    ],
  },
  {
    role: "Lead Programmer (part-time)",
    org: "Roblox — Independent Studio",
    location: "Remote",
    start: "2026-01",
    end: null,
    summary: "Gameplay systems in Luau across live experiences serving 1,150+ MAU.",
    bullets: [
      "Debug and port existing systems into new experiences, maintaining consistency across a codebase serving 1,150 MAU and 25,000+ total player visits.",
      "Design and implement gameplay systems in Luau across multiple live experiences, coordinating with a mid-size team through code reviews and Agile ticketing.",
    ],
  },
  {
    role: "Computer Science Grader",
    org: "Grinnell College",
    location: "Grinnell, IA",
    start: "2024-08",
    end: null,
    summary: "Grading and autograder development for an intro CS course.",
    bullets: [
      "Assist in grading and developing autograders for coding assignments in an introductory computer science course.",
      "Provide constructive feedback on students' programming style, logic, and problem-solving approaches.",
    ],
  },
];

export const projects = [
  {
    slug: "squire",
    name: "Squire",
    description:
      "Built at HackPrinceton Fall 2025. A meal-planning assistant that turns SKU-level grocery transaction data into personalized meal suggestions, with a Gemini-powered conversational planner on top.",
    stack: ["Next.js", "Express", "MongoDB Atlas", "Gemini API"],
    live: "https://www.mysquire.tech/",
    repo: "https://github.com/Squire-71-12/squire-app",
    screenshot: "/images/projects/squire.png",
    commits: {
      first: { sha: "834394b", date: "2025-11-08" },
      latest: { sha: "dbcd4cf", date: "2025-11-09" },
    },
  },
  {
    slug: "unipass",
    name: "UniPass",
    description:
      "A password manager built on the MERN stack. Vaults are encrypted client-side with AES-256 before they ever reach the database, and unlocked with a single master password.",
    stack: ["React", "Express", "MongoDB", "Node.js", "AES-256"],
    live: "https://unipassv2.vercel.app/",
    repo: "https://github.com/rnossair/UniPass-Password-Manager",
    screenshot: "/images/projects/unipass.png",
    commits: {
      first: { sha: "2cfaf69", date: "2022-08-07" },
      latest: { sha: "a79f7de", date: "2024-09-11" },
    },
  },
  {
    slug: "hiway",
    name: "HiWay",
    description:
      "A team build at MHacks 26: a phone on the dash that flags 1.5-second microsleeps and keeps family in the loop. I built the family agent over iMessage and Telegram, which classifies incoming texts and reads them to the driver by voice, plus the Android client and part of the vision pipeline.",
    stack: ["Kotlin", "TypeScript", "ElevenLabs", "Photon", "Presage"],
    live: null,
    repo: "https://github.com/Dunni14/hi-way67",
    screenshot: "/images/projects/hiway.png",
    commits: {
      first: { sha: "ba72547", date: "2026-10-03" },
      latest: { sha: "cecad63", date: "2026-10-04" },
    },
  },
  {
    slug: "alia",
    name: "A.L.I.A.",
    description:
      "A persona-driven Discord agent that decides for itself whether to reply. An evaluation harness took its 4-class intent router from 59% to 93% accuracy on production-log cases, and LLM calls fail over across Ollama, Groq and Gemini.",
    stack: ["TypeScript", "Node.js", "pgvector", "MCP"],
    live: null,
    repo: "https://github.com/rnossair/alia-discord-bot",
    screenshot: "/images/projects/alia.png",
    commits: {
      first: { sha: "d20727e", date: "2026-07-07" },
      latest: { sha: "79006e9", date: "2026-07-08" },
    },
  },
  {
    slug: "provenance-guard",
    name: "Provenance Guard",
    description:
      "A Flask API that scores text for AI authorship from GPT-2 perplexity and two other statistical signals, with an SQLite audit log, rate limiting, unit tests, and an appeal workflow for contested results.",
    stack: ["Python", "Flask", "Transformers", "SQLite"],
    live: null,
    repo: "https://github.com/rnossair/ai201-project4-provenance-guard",
    screenshot: "/images/projects/provenance-guard.png",
    commits: {
      first: { sha: "871b7a6", date: "2026-06-29" },
      latest: { sha: "dc07b74", date: "2026-06-30" },
    },
  },
];

// Open-source contributions. The section is marked under construction until a
// contribution outside coursework lands; `coursework: true` labels the rest.
export const contributions = [
  {
    title: "fix(agent): skip root-relative vendored and build paths in tech detector",
    repo: "codepath/pathreview-ai301-fa26-s1",
    url: "https://github.com/codepath/pathreview-ai301-fa26-s1/pull/246",
    opened: "2026-11-01",
    status: "open",
    coursework: true,
  },
  {
    title: "Fix ReviewService tests failing (#158)",
    repo: "ascherj/pathreview",
    url: "https://github.com/ascherj/pathreview/pull/555",
    opened: "2026-08-02",
    status: "open",
    coursework: true,
  },
];

export const skills = {
  languages: ["Python", "TypeScript", "JavaScript", "C", "Java", "Luau"],
  frameworks: ["Node.js", "Next.js", "React", "Express", "Flask", "FastAPI", "Tailwind CSS"],
  tools: ["Docker", "Git", "Linux", "PostgreSQL", "MongoDB", "SQLite", "Prisma", "Cloudflare R2"],
  ai: ["RAG", "pgvector", "MCP", "Agent Loops", "LLM Evaluation", "Hugging Face Transformers", "Claude Code"],
};
