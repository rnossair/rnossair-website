export const profile = {
  name: "Rayane Nossair",
  tagline: "Full-stack builder moving into agentic AI systems.",
  location: "Grinnell, Iowa",
  email: "nossairr@grinnell.edu",
  github: "https://github.com/rnossair",
  linkedin: "https://www.linkedin.com/in/rayane-nossair/",
  resume: "/docs/resume.pdf",
  photo: "/images/pfp.png",
};

export const about = {
  body: [
    "I'm a computer science student at Grinnell College. Most of my work so far had been full-stack: React and Next.js front ends, Express and MongoDB on the back.",
    "That's shifted recently. Lately I've been moving from systems that store and serve data to systems that reason, iterate, and act over it — models that call tools, hold state, and get trusted with significant autonomy.",
    "Writing every line by hand isn't the job anymore. Planning the architecture and the spec is."
  ],
};

export const experience = [
  {
    role: "Software Engineer Intern",
    org: "DXC Technology",
    location: "Sale, Morocco",
    start: "2026-06",
    end: null,
    summary:
      "Architecting a full-stack document management platform with AI semantic search.",
    bullets: [
      "Architect a document management platform with AI semantic search (pgvector + Gemini embeddings), versioned file storage on Cloudflare R2, and role-based access control.",
      "Implemented Keycloak SSO with Authorization Code Flow, federated Google OAuth, and JWKS-based JWT verification; containerized the stack with Docker Compose including automated schema migrations.",
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
      "Design and implement gameplay systems in Luau across multiple live experiences, coordinating with a mid-size team through code reviews and Agile ticketing.",
      "Debug and port existing systems into new experiences, maintaining consistency across a codebase serving 1,150 MAU and 25,000+ total player visits.",
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
    slug: "squire",
    name: "Squire",
    description:
      "A meal-planning assistant that turns SKU-level grocery transaction data into personalized meal suggestions, with a Gemini-powered conversational planner on top.",
    stack: ["Next.js", "Express", "MongoDB Atlas", "Gemini API"],
    live: "https://www.mysquire.tech/",
    repo: "https://github.com/Squire-71-12/squire-app",
    screenshot: "/images/projects/squire.png",
    commits: {
      first: { sha: "834394b", date: "2025-11-08" },
      latest: { sha: "dbcd4cf", date: "2025-11-09" },
    },
  },
];

export const skills = {
  languages: ["C", "Python", "Java", "Luau", "JavaScript"],
  frameworks: ["Node.js", "Next.js", "React", "Express", "Tailwind CSS"],
  tools: ["Linux", "Git", "MongoDB", "PostgreSQL", "Prisma", "Docker"],
};
