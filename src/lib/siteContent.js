import resumePdf from "../assets/Mayur_Khamkar_FullStack_Developer_Resume.pdf";

const primaryEmail = "mayurkhambkar@gmail.com";
const primaryEmailHref = `mailto:${primaryEmail}?subject=${encodeURIComponent("Portfolio Inquiry")}`;

const heroHighlights = [
  { label: "Specialty", value: "REST APIs and backend workflows" },
  { label: "Security", value: "JWT auth and protected routes" },
  { label: "Structure", value: "MVC architecture and clean components" },
];

const focusAreas = [
  {
    tag: "API",
    title: "REST API Design",
    description:
      "Designing clear request and response flows, validation layers, and maintainable endpoints for practical product features.",
  },
  {
    tag: "JWT",
    title: "Authentication & Access",
    description:
      "Implementing JWT-based auth, protected routes, and role-aware experiences so applications feel secure and production-minded.",
  },
  {
    tag: "MVC",
    title: "Scalable Architecture",
    description:
      "Structuring MERN apps with MVC patterns, modular services, and code organization that supports growth over time.",
  },
];

const skills = [
  {
    name: "React.js",
    description:
      "Component-driven frontends using hooks, reusable UI sections, and responsive layouts that stay easy to extend.",
  },
  {
    name: "Node.js",
    description:
      "Backend services built for business logic, authentication flows, and scalable app behavior.",
  },
  {
    name: "Express.js",
    description:
      "Practical routing, middleware composition, and controller patterns for clean server-side architecture.",
  },
  {
    name: "MongoDB",
    description:
      "Document-driven persistence for MERN apps, including schema design and efficient CRUD workflows.",
  },
  {
    name: "JWT",
    description:
      "Secure token-based authentication and protected route handling for modern web applications.",
  },
  {
    name: "REST APIs",
    description:
      "Well-structured endpoints that connect frontend experiences to reliable backend systems.",
  },
  {
    name: "Tailwind CSS",
    description:
      "Fast, maintainable styling for custom interfaces with strong spacing, hierarchy, and responsive behavior.",
  },
];

const projects = [
  {
    category: "Admin Platform",
    title: "AccessHub Dashboard",
    year: "MERN",
    description:
      "A role-aware admin platform for managing users, permissions, and protected application flows from a centralized dashboard.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Tailwind"],
    features: [
      "JWT authentication with protected frontend and backend routes",
      "Role-based access for admin and user-specific dashboards",
      "REST APIs for user management, analytics, and activity workflows",
      "MVC backend structure for readable, scalable code organization",
    ],
    githubUrl: "https://github.com/Mayur-Khamker",
    liveUrl: "",
  },
  {
    category: "Operations Suite",
    title: "OrderStack Manager",
    year: "API",
    description:
      "A backend-focused inventory and order management system designed to handle CRUD-heavy operations without losing clarity in the UI.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "REST API", "JWT"],
    features: [
      "Token-secured login and session-aware navigation",
      "API-driven order, product, and inventory workflows",
      "Search, filtering, and role-aware actions across operational screens",
      "Clean controller and model separation following MVC principles",
    ],
    githubUrl: "https://github.com/Mayur-Khamker",
    liveUrl: "",
  },
  {
    category: "Full Stack Portal",
    title: "TeamPulse Workspace",
    year: "RBAC",
    description:
      "A collaborative workspace concept that combines a modern React interface with secure backend logic for teams and internal tools.",
    techStack: ["React", "Express", "MongoDB", "JWT", "Role Access", "Tailwind"],
    features: [
      "Authentication and authorization for team-based workflows",
      "Protected APIs for managing workspace data and user actions",
      "Responsive UI with clean information hierarchy and reusable components",
      "Modular architecture built to support feature growth and maintenance",
    ],
    githubUrl: "https://github.com/Mayur-Khamker",
    liveUrl: "",
  },
];

const contactMethods = [
  {
    label: "Email",
    value: primaryEmail,
    description: "Best for hiring conversations, freelance work, and project discussions.",
    actionLabel: "Send Email",
    href: primaryEmailHref,
    external: false,
  },
  {
    label: "Phone",
    value: "+91 98923 58717",
    description: "Reach out directly for recruiter follow-up or quick project discussion.",
    actionLabel: "Call Now",
    href: "tel:+919892358717",
    external: false,
  },
  {
    label: "GitHub",
    value: "Mayur-Khamker",
    description: "Explore repositories, MERN code samples, and backend-focused project work.",
    actionLabel: "Open GitHub",
    href: "https://github.com/Mayur-Khamker",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Mayur Khamkar",
    description: "View professional profile, experience summary, and recruiter-facing details.",
    actionLabel: "Open LinkedIn",
    href: "https://www.linkedin.com/in/mayur-khamkar-bb5aa0318/",
    external: true,
  },
  {
    label: "X / Twitter",
    value: "@mayurkhamker",
    description: "Follow updates, developer thoughts, and public-facing tech activity.",
    actionLabel: "Open X",
    href: "https://x.com/mayurkhamker",
    external: true,
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/Mayur-Khamker" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/mayur-khamkar-bb5aa0318/" },
  { label: "X", href: "https://x.com/mayurkhamker" },
];

export {
  contactMethods,
  focusAreas,
  heroHighlights,
  primaryEmailHref,
  projects,
  resumePdf,
  skills,
  socialLinks,
};
