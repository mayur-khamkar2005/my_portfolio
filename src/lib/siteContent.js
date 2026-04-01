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

const skillCategories = [
  {
    slug: "languages",
    label: "Languages",
    description:
      "Core programming languages I use for application logic, problem solving, and understanding runtime behavior.",
    skills: [
      {
        slug: "javascript",
        name: "JavaScript",
        summary:
          "My primary language for building React interfaces, Node.js APIs, and async application flows.",
        description:
          "JavaScript powers most of my frontend and backend work. I use it to build interactive UIs, structure server-side logic, and connect applications through clean data flows.",
        highlights: [
          "ES6+ syntax, modules, destructuring, and array/object transformations",
          "Async workflows with promises and async/await",
          "Reusable logic across React components and Node.js services",
        ],
        stack: ["ES6+", "Async/Await", "Modules", "DOM", "Node.js"],
      },
      {
        slug: "cpp",
        name: "C++",
        summary:
          "Used for strengthening problem-solving, data structure practice, and low-level programming fundamentals.",
        description:
          "C++ helps me think more carefully about performance, memory, and algorithmic efficiency. It supports my understanding of how software behaves under the hood.",
        highlights: [
          "Data structures and algorithms practice",
          "Stronger understanding of memory and performance tradeoffs",
          "Sharper problem-solving approach for technical interviews and core logic",
        ],
        stack: ["STL", "DSA", "Pointers", "OOP"],
      },
    ],
  },
  {
    slug: "frontend",
    label: "Frontend",
    description:
      "Frontend tools I use to build responsive interfaces, route-driven experiences, and maintainable stateful UI.",
    skills: [
      {
        slug: "react-js",
        name: "React.js",
        summary:
          "My main frontend library for building component-based pages, dashboards, and reusable UI systems.",
        description:
          "I use React to create modular interfaces that stay easy to extend as features grow. My workflow focuses on readable component structure, prop clarity, and state that scales cleanly.",
        highlights: [
          "Composable component architecture with modern hooks",
          "Reusable section-based UI for portfolio and app screens",
          "Clean separation of layout, data, and interactive behavior",
        ],
        stack: ["Hooks", "JSX", "Components", "State", "Props"],
      },
      {
        slug: "react-router",
        name: "React Router",
        summary:
          "Used for client-side routing, nested layouts, and smooth multi-page navigation inside React apps.",
        description:
          "React Router lets me structure applications with proper routes instead of overloading a single page. I use it for layouts, detail pages, and keeping navigation fast without reloads.",
        highlights: [
          "Nested layouts with shared Navbar and Footer",
          "Dynamic routes for detail pages and page-specific content",
          "Smooth SPA navigation with route-driven rendering",
        ],
        stack: ["Routes", "Outlet", "NavLink", "useParams"],
      },
      {
        slug: "zustand",
        name: "Zustand",
        summary:
          "A lightweight state management option I use when app state needs to stay simple and scalable.",
        description:
          "Zustand is useful when component-local state starts to spread across screens. I like it for keeping shared state straightforward without excessive setup.",
        highlights: [
          "Lightweight global state for UI and app-level data",
          "Cleaner state sharing than prop drilling for some flows",
          "Readable store patterns for growing React apps",
        ],
        stack: ["Stores", "Selectors", "Shared State"],
      },
      {
        slug: "context-api",
        name: "Context API",
        summary:
          "Used for app-wide state like theming, auth context, and lightweight shared UI data.",
        description:
          "I use Context API when state needs to be shared across multiple components but does not require a heavier state-management layer. Theme toggles and auth-aware UI are common use cases.",
        highlights: [
          "Shared theme and UI state",
          "Clean provider-based composition",
          "Good fit for lightweight cross-app state",
        ],
        stack: ["Providers", "useContext", "Shared UI State"],
      },
      {
        slug: "html5",
        name: "HTML5",
        summary:
          "The semantic foundation I use to build accessible, structured, and SEO-friendly interfaces.",
        description:
          "HTML5 is where clean UI structure starts. I focus on semantic sections, meaningful hierarchy, and markup that supports accessibility and maintainability.",
        highlights: [
          "Semantic page structure with accessible hierarchy",
          "Forms, sections, headings, and interactive content",
          "Markup that supports responsive and maintainable styling",
        ],
        stack: ["Semantic Markup", "Accessibility", "Forms"],
      },
      {
        slug: "css3",
        name: "CSS3",
        summary:
          "Used for responsive layouts, motion, spacing systems, and visual polish beyond utility classes alone.",
        description:
          "CSS3 helps me build layout systems and refined interaction details that make interfaces feel finished. I use it alongside Tailwind for responsive behavior and custom visual treatment.",
        highlights: [
          "Flexbox and Grid layouts",
          "Transitions, transforms, and responsive design",
          "Custom styling for reusable UI patterns",
        ],
        stack: ["Flexbox", "Grid", "Animations", "Media Queries"],
      },
      {
        slug: "tailwind-css",
        name: "Tailwind CSS",
        summary:
          "My default styling system for building modern, responsive, and maintainable interfaces quickly.",
        description:
          "Tailwind lets me build custom UI rapidly while keeping spacing, typography, and layout decisions consistent. I use it to move fast without giving up design control.",
        highlights: [
          "Rapid UI implementation with utility-first styling",
          "Consistent spacing, sizing, and responsive breakpoints",
          "Easy reuse of design tokens and component patterns",
        ],
        stack: ["Utility Classes", "Responsive Design", "Design Tokens"],
      },
    ],
  },
  {
    slug: "backend",
    label: "Backend",
    description:
      "Backend tools I use to build secure APIs, organize business logic, and structure production-minded services.",
    skills: [
      {
        slug: "node-js",
        name: "Node.js",
        summary:
          "My primary runtime for building backend services, API workflows, and server-side business logic.",
        description:
          "I use Node.js to build backend applications that handle authentication, routing, and app-level logic with JavaScript across the stack.",
        highlights: [
          "Server-side logic for MERN applications",
          "Async handling for API workflows and integrations",
          "Strong fit for JavaScript-based full stack development",
        ],
        stack: ["Runtime", "Async IO", "API Services"],
      },
      {
        slug: "express-js",
        name: "Express.js",
        summary:
          "Used for route handling, middleware structure, controller organization, and scalable API architecture.",
        description:
          "Express helps me structure backend applications with clean request handling and modular middleware. I use it for REST APIs, auth workflows, and controller-based app design.",
        highlights: [
          "Controller and route organization",
          "Middleware-driven request handling",
          "Clean API structure for real product flows",
        ],
        stack: ["Routing", "Middleware", "Controllers", "REST"],
      },
    ],
  },
  {
    slug: "database",
    label: "Database",
    description:
      "Database skills focused on document modeling, schema decisions, and performance-aware data access.",
    skills: [
      {
        slug: "mongodb",
        name: "MongoDB",
        summary:
          "Used for schema design, document modeling, indexing decisions, and practical CRUD-driven apps.",
        description:
          "MongoDB is my go-to database for MERN projects. I use it to model application data, design schemas that fit real workflows, and improve query performance with indexing where needed.",
        highlights: [
          "Schema design that reflects app relationships and workflows",
          "Indexing awareness for faster lookup-heavy operations",
          "Practical CRUD, validation, and collection organization",
        ],
        stack: ["Schema Design", "Indexing", "CRUD", "Collections"],
      },
    ],
  },
  {
    slug: "api-security",
    label: "API & Security",
    description:
      "API and security concepts I use to build trustworthy backend flows, protected routes, and role-aware systems.",
    skills: [
      {
        slug: "rest-apis",
        name: "REST APIs",
        summary:
          "I design API endpoints around clear request-response structure and practical product workflows.",
        description:
          "REST APIs are central to how I connect frontend interfaces with backend systems. I focus on clean endpoint structure, readable payloads, and maintainable request handling.",
        highlights: [
          "Resource-based route structure",
          "Readable request and response contracts",
          "Practical integration between frontend and backend layers",
        ],
        stack: ["Endpoints", "CRUD", "HTTP", "JSON"],
      },
      {
        slug: "jwt",
        name: "JWT",
        summary:
          "Used for token-based authentication, protected routes, and session-aware user flows.",
        description:
          "JWT is a key part of how I implement authentication in MERN apps. I use it to protect routes, verify users, and support secure client-server communication.",
        highlights: [
          "Token creation and verification",
          "Protected frontend and backend routes",
          "Session-aware user access flows",
        ],
        stack: ["Tokens", "Auth Headers", "Protected Routes"],
      },
      {
        slug: "rbac",
        name: "RBAC",
        summary:
          "Role-based access control for restricting features and data by user responsibility.",
        description:
          "RBAC helps me build systems where different users see different capabilities. I use it to create admin vs user flows and keep access aligned with application roles.",
        highlights: [
          "Role-aware dashboards and actions",
          "Access rules across frontend and backend",
          "Safer feature exposure for multi-user apps",
        ],
        stack: ["Roles", "Permissions", "Protected Actions"],
      },
      {
        slug: "authentication",
        name: "Authentication",
        summary:
          "Focused on identifying users securely through login, token issuance, and verification flows.",
        description:
          "Authentication is where application trust begins. I work with login systems, token generation, and secure session logic so users can access the right parts of an app safely.",
        highlights: [
          "Login and credential flow design",
          "User verification and session handling",
          "Secure route access for authenticated users",
        ],
        stack: ["Login", "Verification", "Sessions", "Security"],
      },
      {
        slug: "authorization",
        name: "Authorization",
        summary:
          "Used to decide what authenticated users can access after identity has been verified.",
        description:
          "Authorization helps me control what users are allowed to do after login. I apply it through permission checks, role validation, and feature gating across routes and APIs.",
        highlights: [
          "Permission checks after authentication",
          "Feature and action gating by user role",
          "Safer business logic enforcement",
        ],
        stack: ["Permissions", "Roles", "Access Checks"],
      },
      {
        slug: "middleware",
        name: "Middleware",
        summary:
          "A core Express pattern I use for auth checks, validation, logging, and shared backend behavior.",
        description:
          "Middleware keeps backend code organized by separating shared concerns from route handlers. I use it to verify tokens, validate requests, and centralize repeated logic.",
        highlights: [
          "Reusable auth and validation layers",
          "Cleaner controller code through separation of concerns",
          "Better request lifecycle control",
        ],
        stack: ["Express Middleware", "Validation", "Auth Guards"],
      },
    ],
  },
  {
    slug: "tools",
    label: "Tools",
    description:
      "Tools that support version control, testing, deployment, cloud services, and productive day-to-day development.",
    skills: [
      {
        slug: "git",
        name: "Git",
        summary:
          "Used daily for version control, branching, safer iteration, and tracking code changes cleanly.",
        description:
          "Git is essential to how I manage work across features and fixes. I use it to maintain history, isolate changes, and keep development workflows safe and traceable.",
        highlights: [
          "Feature branches and commit-based workflow",
          "Clean history while iterating on changes",
          "Reliable rollback and collaboration support",
        ],
        stack: ["Version Control", "Branches", "Commits"],
      },
      {
        slug: "github",
        name: "GitHub",
        summary:
          "Used for repository hosting, pull requests, branching workflows, and collaboration around code.",
        description:
          "GitHub is where I organize repositories, share work, and collaborate through branch-based workflows. I use it to manage code history and present projects professionally.",
        highlights: [
          "Repository organization and code sharing",
          "Branching and pull request workflow",
          "Portfolio visibility for public project work",
        ],
        stack: ["Repos", "Pull Requests", "Branches"],
      },
      {
        slug: "postman",
        name: "Postman",
        summary:
          "Used for testing endpoints, verifying payloads, and debugging API behavior during development.",
        description:
          "Postman helps me inspect and validate backend APIs before wiring them into the frontend. I use it to test endpoints, auth headers, and response formats quickly.",
        highlights: [
          "Manual API testing and debugging",
          "Header, token, and payload validation",
          "Faster backend verification before UI integration",
        ],
        stack: ["API Testing", "Collections", "Requests"],
      },
      {
        slug: "vs-code",
        name: "VS Code",
        summary:
          "My primary editor for writing, debugging, organizing, and navigating full stack codebases.",
        description:
          "VS Code is the main environment I use for development. It supports my day-to-day workflow through extensions, integrated debugging, and quick navigation across project files.",
        highlights: [
          "Fast navigation through multi-file projects",
          "Extension-driven productivity for React and Node.js work",
          "Integrated debugging and terminal workflow",
        ],
        stack: ["Editor", "Extensions", "Debugging"],
      },
      {
        slug: "mongodb-atlas",
        name: "MongoDB Atlas",
        summary:
          "Used for hosted MongoDB deployments, cloud access, and managing development and production databases.",
        description:
          "MongoDB Atlas helps me move MongoDB projects from local development to cloud-hosted environments. I use it for managed clusters and deployment-friendly database access.",
        highlights: [
          "Managed cloud database hosting",
          "Easy connection from deployed MERN apps",
          "Practical support for development-to-production flow",
        ],
        stack: ["Cloud DB", "Clusters", "Connections"],
      },
      {
        slug: "render",
        name: "Render",
        summary:
          "Used for deploying backend services and full stack applications with a straightforward cloud workflow.",
        description:
          "Render gives me a simple path to deploy backend APIs and supporting services. I use it when I want reliable hosting with minimal infrastructure overhead.",
        highlights: [
          "Deployment of Node.js backends and services",
          "Environment variable and service-based hosting setup",
          "Simple workflow for bringing projects online",
        ],
        stack: ["Deployment", "Hosting", "Environment Variables"],
      },
      {
        slug: "vercel",
        name: "Vercel",
        summary:
          "Used to deploy frontend applications quickly with strong support for modern React projects.",
        description:
          "Vercel is my preferred platform for deploying React frontends and polished portfolio work. It makes preview and production deployment fast and convenient.",
        highlights: [
          "Fast deployment for frontend projects",
          "Smooth hosting workflow for React applications",
          "Good fit for portfolio and client-facing UI delivery",
        ],
        stack: ["Frontend Hosting", "Deployments", "Preview Builds"],
      },
      {
        slug: "cloudinary",
        name: "Cloudinary",
        summary:
          "Used for image hosting, media delivery, and cleaner asset management in full stack applications.",
        description:
          "Cloudinary helps manage uploaded media without storing everything directly in the app itself. I use it for image workflows and serving media efficiently.",
        highlights: [
          "Cloud-based image and media management",
          "Cleaner handling of uploads in full stack apps",
          "Useful for scalable media delivery",
        ],
        stack: ["Media Hosting", "Uploads", "Asset Delivery"],
      },
    ],
  },
];

const skills = skillCategories.flatMap((category) =>
  category.skills.map((skill) => ({
    ...skill,
    category: category.label,
    categorySlug: category.slug,
    categoryDescription: category.description,
  })),
);

const skillLookup = Object.fromEntries(skills.map((skill) => [skill.slug, skill]));

const skillMenuGroups = skillCategories.map((category) => ({
  label: category.label,
  link: `/skills#${category.slug}`,
  items: category.skills.map((skill) => ({
    label: skill.name,
    link: `/skills/${skill.slug}`,
  })),
}));

function getSkillBySlug(skillSlug) {
  return skillLookup[skillSlug] ?? null;
}

function getSkillsByCategorySlug(categorySlug) {
  return skills.filter((skill) => skill.categorySlug === categorySlug);
}

function getRelatedSkills(skillSlug) {
  const currentSkill = getSkillBySlug(skillSlug);

  if (!currentSkill) {
    return [];
  }

  return getSkillsByCategorySlug(currentSkill.categorySlug).filter(
    (skill) => skill.slug !== skillSlug,
  );
}

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
  getRelatedSkills,
  getSkillBySlug,
  getSkillsByCategorySlug,
  heroHighlights,
  primaryEmailHref,
  projects,
  resumePdf,
  skillCategories,
  skillMenuGroups,
  skills,
  socialLinks,
};
