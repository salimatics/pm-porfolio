export const profile = {
  name: "Salima El Khalidi",
  role: "Full Stack Web Developer",
  location: "Morocco",
  email: "elkhalidisalima@gmail.com",
  github: "https://github.com/salimatics",
  githubHandle: "salimatics",
};

export type Lens = "needs" | "ux" | "tech";

/** How I take part in a project, end to end */
export const journey = [
  {
    step: "Listen",
    title: "Join the client calls",
    text: "I sit in on calls with the client to understand what they really need, not just what the brief says.",
  },
  {
    step: "Validate",
    title: "Check technical feasibility",
    text: "I confirm early what is realistic, flag risks and suggest simpler options before anything is built.",
  },
  {
    step: "Build",
    title: "Develop the product",
    text: "Clean, typed and fast implementations: React, Next.js, headless WordPress, APIs and rich animations.",
  },
  {
    step: "Test",
    title: "QA through the user's eyes",
    text: "I test my own work and the team's on real devices, report bugs and catch the edge cases users would hit.",
  },
  {
    step: "Refine",
    title: "Improve the experience",
    text: "I propose UX improvements, support the launch and keep iterating once real people use the site.",
  },
];

export type Project = {
  slug: string;
  name: string;
  url: string;
  domain: string;
  sector: string;
  summary: string;
  features: string[];
  lenses: Record<Lens, string>;
  /** What I did on this project */
  role: string[];
  stack: string[];
  languages?: string;
  /** Mockup colors (used when no screenshot is provided) */
  palette: { from: string; to: string; text: string };
  /** Screenshot in /public */
  image?: string;
};

export const projects: Project[] = [
  {
    slug: "cavilam",
    name: "CAVILAM – Alliance Française",
    url: "https://www.cavilam.com/en/",
    domain: "cavilam.com",
    sector: "Education · Language school",
    languages: "FR / EN / ES",
    summary:
      "A multilingual platform for one of France's leading French-language schools, where international students discover courses, check exam dates and register online.",
    features: [
      "Course catalog with filters",
      "Exam dates",
      "User accounts",
      "Online registration & checkout",
      "Newsletter sign-up",
    ],
    lenses: {
      needs:
        "Students from all over the world needed to find the right course, check exam dates and register online without contacting the school.",
      ux:
        "Students compare many courses in three languages — filters, clear course pages and a smooth registration flow reduce friction before payment.",
      tech:
        "Headless WordPress connected to the front-end through APIs, with accounts, checkout and multilingual content kept in sync.",
    },
    stack: ["Next.js", "React", "Headless WordPress", "GraphQL / REST", "Tailwind CSS"],
    role: ["Client calls & needs", "Feasibility of the headless setup", "Front-end development", "QA on registration & checkout"],
    image: "/projects/cavilam.jpg",
    palette: { from: "#1e3a8a", to: "#e11d48", text: "#ffffff" },
  },
  {
    slug: "babonneau",
    name: "Babonneau Avocats",
    url: "https://www.babonneau-avocats.com/",
    domain: "babonneau-avocats.com",
    sector: "Legal · Criminal law, Paris",
    languages: "FR / EN",
    summary:
      "A bilingual website for a Paris criminal-law firm, built to convey expertise and trust to people often reaching out in difficult moments.",
    features: ["Practice-area pages", "Lawyer profiles", "News", "Careers section"],
    lenses: {
      needs:
        "People often reach out to a criminal-law firm in a difficult moment: they need to quickly understand who can help them and how to get in touch.",
      ux:
        "Clear practice-area pages and lawyer profiles help a stressed visitor quickly understand who can help them.",
      tech:
        "Bilingual WordPress architecture with editable content so the firm can publish news and job offers autonomously.",
    },
    stack: ["WordPress", "JavaScript", "GSAP", "Responsive integration"],
    role: ["Client calls & needs", "WordPress development", "GSAP animations", "Cross-device QA"],
    image: "/projects/babonneau.jpg",
    palette: { from: "#111827", to: "#7c2d12", text: "#f5f5f4" },
  },
  {
    slug: "altair",
    name: "Altaïr Avocats",
    url: "https://www.altairavocats.com/",
    domain: "altairavocats.com",
    sector: "Legal · Business law, 3 offices",
    languages: "FR / EN / IT",
    summary:
      "A trilingual website for a business-law firm operating across three offices, presenting its expertise and team to an international clientele.",
    features: ["Expertise pages", "Team directory", "News", "Contact form"],
    lenses: {
      needs:
        "Three offices and three languages: visitors needed one consistent site in French, English and Italian to find the right expertise and lawyer.",
      ux:
        "A structured team directory and expertise pages let business clients find the right partner and office fast.",
      tech:
        "Trilingual WordPress content model, reusable components and a contact flow shared across offices.",
    },
    stack: ["WordPress", "JavaScript", "GSAP", "Responsive integration"],
    role: ["Trilingual content structure", "WordPress development", "GSAP animations", "Cross-device QA"],
    image: "/projects/altair.jpg",
    palette: { from: "#0f172a", to: "#0e7490", text: "#f8fafc" },
  },
  {
    slug: "saphir",
    name: "Saphir Systems",
    url: "https://www.saphirsystems.com/",
    domain: "saphirsystems.com",
    sector: "Fintech · Digital payments",
    summary:
      "A corporate landing page for a Casablanca-based provider of digital financial solutions serving banks, payment institutions and telecom operators.",
    features: [
      "Solutions overview (digital banking, mobile money, payment gateway…)",
      "Client references",
      "Brochure download",
      "Contact form with consent",
    ],
    lenses: {
      needs:
        "Six technical solution lines had to be explained clearly on a single page, for readers who want the big picture fast.",
      ux:
        "A focused single-page journey — discover, trust, contact — keeps the path to a sales conversation short.",
      tech:
        "Performant single-page build with anchor navigation, a protected contact form and responsive layouts.",
    },
    stack: ["JavaScript", "Responsive integration", "Animations"],
    role: ["Page structure & journey", "Development", "Animations", "QA & launch"],
    image: "/projects/saphir.jpg",
    palette: { from: "#172554", to: "#4f46e5", text: "#eef2ff" },
  },
  {
    slug: "harpers",
    name: "Harpers Legal",
    url: "https://harpers-legal.mc/en/",
    domain: "harpers-legal.mc",
    sector: "Legal · Private wealth, Monaco",
    languages: "FR / EN",
    summary:
      "A bilingual website for an independent Monaco legal advisory firm serving private clients, families and entrepreneurs.",
    features: [
      "Expertise pages",
      "Team directory",
      "Insights / news",
      "Contact form",
      "Cookie consent management",
    ],
    lenses: {
      needs:
        "The firm had a new brand identity and wanted a calm, elegant site in two languages that reflects it, with a simple way to ask a question.",
      ux:
        "Elegant, calm navigation between expertise, team and insights, in French and English, with a simple way to ask a question.",
      tech:
        "Bilingual CMS-driven pages, GDPR-friendly cookie consent and a validated contact form.",
    },
    stack: ["WordPress", "JavaScript", "Animations", "Responsive integration"],
    role: ["Client calls & needs", "WordPress development", "Consent & forms", "QA & UX tweaks"],
    image: "/projects/harpers.jpg",
    palette: { from: "#1c1917", to: "#a16207", text: "#fafaf9" },
  },
];

export const experience = [
  {
    company: "Eliott & Markus",
    type: "Digital agency",
    role: "Web Developer",
    period: "Oct 2024 – May 2026",
    bullets: [
      "Developed and maintained e-commerce, educational and corporate websites, turning designers' mock-ups into responsive, mobile-first pages.",
      "Built booking flows, registration systems and dynamic content, connecting front-ends to headless WordPress and third-party services via REST and GraphQL.",
      "Worked with designers, back-end developers and client teams to understand client needs and turn them into features; optimized performance and on-page SEO.",
      "Delivered complex animations with GSAP and Framer Motion, in line with the agency's high visual standards.",
      "Took part in QA testing, releases and post-launch support across devices.",
    ],
    stack: ["React", "Next.js", "Headless WordPress", "GraphQL", "Tailwind", "GSAP", "Framer Motion"],
  },
  {
    company: "Goaluin",
    type: "Product company",
    role: "Junior Front-end Developer / QA Tester",
    period: "Oct 2023 – Jul 2024 · Mar 2025 – Aug 2025",
    bullets: [
      "Built the interface and new features of TabDiary, a reservation management platform for restaurants.",
      "Implemented mutations and server-side logic with tRPC and Prisma on PostgreSQL.",
      "Joined product discussions: gathered requirements, gave design feedback and defined user scenarios.",
      "Manual QA tester for AsylumTix, a ticketing platform: identified UX pain points, reported bugs and proposed new features.",
    ],
    stack: ["TypeScript", "Next.js", "tRPC", "Prisma", "PostgreSQL", "Zustand", "shadcn/ui"],
  },
];

export const skills = [
  { group: "Web fundamentals", items: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript", "Mobile-first"] },
  { group: "Frameworks & CMS", items: ["React", "Next.js", "Node.js", "Express", "WordPress", "Headless WordPress", "React Native", "Tailwind CSS"] },
  { group: "APIs & data", items: ["REST", "GraphQL (Apollo)", "tRPC", "React Query", "SWR", "PostgreSQL", "MySQL", "Prisma", "NoSQL"] },
  { group: "Quality & workflow", items: ["Git / GitHub", "Jest", "Cypress", "Manual QA", "CI/CD"] },
  { group: "Libraries", items: ["Redux Toolkit", "Zustand", "Material UI", "shadcn/ui", "GSAP", "Framer Motion"] },
  { group: "Governance & strategy", items: ["IT governance", "Project management", "Digital transformation", "Business intelligence", "IS security", "SDLC"] },
];

export const education = [
  {
    title: "Master's in Computer Science, Governance & Digital Transformation (M1)",
    school: "Faculty of Sciences Rabat — Mohammed V University",
    period: "2026 – Present",
    text:
      "Software engineering, information systems and data modeling applied to real business cases — alongside IT governance, project management, business intelligence, IS security and digital law.",
  },
  {
    title: "Bachelor's Degree in Computer Engineering",
    school: "FST Settat",
    period: "2021 – 2022",
    text:
      "Object-oriented programming (Java), operating systems, computer architecture, networking and security fundamentals, system design with UML.",
  },
];
