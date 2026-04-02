import resumePdf from "../assets/Mayur_Khamkar_FullStack_Developer_Resume.pdf";

const primaryEmail = "mayurkhambkar@gmail.com";
const primaryEmailHref = `mailto:${primaryEmail}?subject=${encodeURIComponent("Portfolio Inquiry")}`;

const heroHighlights = [
  { label: "Focus", value: "Backend-heavy apps and clean APIs" },
  { label: "Security", value: "JWT auth, protected routes, and access control" },
  { label: "Approach", value: "Simple structure and practical UI" },
];

const focusAreas = [
  {
    tag: "API",
    title: "REST API Design",
    description:
      "I like building APIs that stay easy to read, test, and extend as a project grows.",
  },
  {
    tag: "JWT",
    title: "Authentication & Access",
    description:
      "A lot of my backend work includes JWT auth, protected routes, and role checks that keep user flows clear.",
  },
  {
    tag: "MVC",
    title: "Scalable Architecture",
    description:
      "I care about structure. Clear folders, reusable modules, and patterns that still make sense later are important to me.",
  },
];

const skillCategories = [
  {
    slug: "languages",
    label: "Languages",
    description:
      "The languages I use most for application logic, problem solving, and understanding how code behaves.",
    skills: [
      {
        slug: "javascript",
        name: "JavaScript",
        summary:
          "The language I use most for React apps, Node.js APIs, and day-to-day product work.",
        description:
          "JavaScript sits at the center of most of my work. I use it to build interfaces, handle backend logic, and keep the flow between client and server easy to follow.",
        highlights: [
          "Modern ES6+ syntax for cleaner, reusable code",
          "Async work with promises and async/await",
          "Shared logic across React components and Node.js services",
        ],
        stack: ["ES6+", "Async/Await", "Modules", "DOM", "Node.js"],
      },
      {
        slug: "cpp",
        name: "C++",
        summary:
          "I use C++ mainly to strengthen problem-solving and core programming fundamentals.",
        description:
          "C++ helped me get better at thinking about memory, performance, and algorithmic trade-offs. It gave me a stronger base for writing better code in general.",
        highlights: [
          "Practice with data structures and algorithms",
          "Better understanding of memory and performance",
          "Stronger problem-solving for core logic and interviews",
        ],
        stack: ["STL", "DSA", "Pointers", "OOP"],
      },
    ],
  },
  {
    slug: "frontend",
    label: "Frontend",
    description:
      "Frontend tools I use to build responsive interfaces, routed pages, and UI that stays manageable as a project grows.",
    skills: [
      {
        slug: "react-js",
        name: "React.js",
        summary:
          "My go-to library for building UI that stays modular as features grow.",
        description:
          "I use React to build pages and components that are easy to read, reuse, and extend. I try to keep state simple and component structure clear.",
        highlights: [
          "Component-based UI built with modern hooks",
          "Reusable sections for apps, dashboards, and landing pages",
          "Clear separation between layout, data, and interactions",
        ],
        stack: ["Hooks", "JSX", "Components", "State", "Props"],
      },
      {
        slug: "react-router",
        name: "React Router",
        summary:
          "I use it to build clear navigation, nested layouts, and proper page structure inside React apps.",
        description:
          "React Router helps me turn a group of components into a real app with pages, layouts, and detail views. It keeps navigation fast without full reloads.",
        highlights: [
          "Shared layouts with consistent navigation",
          "Dynamic routes for detail pages and content views",
          "Fast client-side page transitions",
        ],
        stack: ["Routes", "Outlet", "NavLink", "useParams"],
      },
      {
        slug: "zustand",
        name: "Zustand",
        summary:
          "A lightweight option I use when shared state starts to outgrow local component state.",
        description:
          "I like Zustand when I need shared state without adding too much setup. It helps keep stores simple and easy to work with.",
        highlights: [
          "Lightweight shared state for UI and app data",
          "A cleaner option than prop drilling for some flows",
          "Readable store patterns for growing apps",
        ],
        stack: ["Stores", "Selectors", "Shared State"],
      },
      {
        slug: "context-api",
        name: "Context API",
        summary:
          "A good fit for app-wide state like theme, auth, and shared UI behavior.",
        description:
          "I use Context API when data needs to be shared across the app without bringing in a heavier state library. Theme and auth are the most common examples.",
        highlights: [
          "Shared theme and interface state",
          "Simple provider-based setup",
          "Useful for lightweight app-wide data",
        ],
        stack: ["Providers", "useContext", "Shared UI State"],
      },
      {
        slug: "html5",
        name: "HTML5",
        summary:
          "The markup foundation I rely on for clear structure and better accessibility.",
        description:
          "I treat HTML as the structure of the interface, not just a wrapper. Clean markup makes styling, accessibility, and maintenance much easier.",
        highlights: [
          "Semantic structure with a clear content hierarchy",
          "Forms, sections, headings, and interactive elements",
          "Markup that supports accessibility and maintainability",
        ],
        stack: ["Semantic Markup", "Accessibility", "Forms"],
      },
      {
        slug: "css3",
        name: "CSS3",
        summary:
          "I use CSS for layout, spacing, responsive behavior, and the small details that make a UI feel finished.",
        description:
          "CSS helps me fine-tune the parts of a UI that need more control. I use it alongside Tailwind for layout, responsiveness, and visual polish.",
        highlights: [
          "Flexbox and Grid for page layout",
          "Responsive styling and transitions",
          "Custom styles for reusable UI patterns",
        ],
        stack: ["Flexbox", "Grid", "Animations", "Media Queries"],
      },
      {
        slug: "tailwind-css",
        name: "Tailwind CSS",
        summary:
          "My default styling setup for building responsive interfaces quickly without losing control of the design.",
        description:
          "I use Tailwind to move fast while keeping spacing, typography, and layout consistent. It works well for both quick builds and larger interfaces.",
        highlights: [
          "Fast UI work with utility-first classes",
          "Consistent spacing and responsive breakpoints",
          "Easy reuse of patterns across components",
        ],
        stack: ["Utility Classes", "Responsive Design", "Design Tokens"],
      },
    ],
  },
  {
    slug: "backend",
    label: "Backend",
    description:
      "Backend tools I use to build APIs, organize business logic, and keep services clean and reliable.",
    skills: [
      {
        slug: "node-js",
        name: "Node.js",
        summary:
          "The runtime I use most for backend work, APIs, and server-side application logic.",
        description:
          "I use Node.js to build backend apps that handle auth, routing, and app logic with JavaScript across the stack.",
        highlights: [
          "Server-side logic for MERN applications",
          "Async handling for APIs and integrations",
          "A smooth fit for full stack JavaScript projects",
        ],
        stack: ["Runtime", "Async IO", "API Services"],
      },
      {
        slug: "express-js",
        name: "Express.js",
        summary:
          "I use Express for routing, middleware, and clean API structure.",
        description:
          "Express helps me keep backend code organized. I use it for REST APIs, auth flows, middleware, and controller-based structure.",
        highlights: [
          "Clear route and controller organization",
          "Middleware-based request handling",
          "API structure that stays readable as features grow",
        ],
        stack: ["Routing", "Middleware", "Controllers", "REST"],
      },
    ],
  },
  {
    slug: "database",
    label: "Database",
    description:
      "Database skills focused on schema design, data modeling, and practical query decisions.",
    skills: [
      {
        slug: "mongodb",
        name: "MongoDB",
        summary:
          "My usual database choice for MERN projects and CRUD-heavy applications.",
        description:
          "I use MongoDB to model app data in a way that matches real user flows. I also pay attention to schema shape and indexing when queries need to stay fast.",
        highlights: [
          "Schema design based on real app workflows",
          "Indexing for better lookup performance",
          "Practical CRUD, validation, and collection structure",
        ],
        stack: ["Schema Design", "Indexing", "CRUD", "Collections"],
      },
    ],
  },
  {
    slug: "api-security",
    label: "API & Security",
    description:
      "API and security topics I use when building protected routes, auth flows, and role-based systems.",
    skills: [
      {
        slug: "rest-apis",
        name: "REST APIs",
        summary:
          "I build APIs around clear endpoints, predictable responses, and practical product flows.",
        description:
          "REST APIs are a big part of my work. I focus on readable routes, simple payloads, and request handling that stays easy to maintain.",
        highlights: [
          "Resource-based route structure",
          "Clear request and response contracts",
          "Smooth integration between frontend and backend",
        ],
        stack: ["Endpoints", "CRUD", "HTTP", "JSON"],
      },
      {
        slug: "jwt",
        name: "JWT",
        summary:
          "I use JWT for token-based auth, protected routes, and user session flows.",
        description:
          "JWT is one of the main tools I use for auth in MERN apps. It helps me protect routes, verify users, and manage access between client and server.",
        highlights: [
          "Token creation and verification",
          "Protected frontend and backend routes",
          "User access flows based on auth state",
        ],
        stack: ["Tokens", "Auth Headers", "Protected Routes"],
      },
      {
        slug: "rbac",
        name: "RBAC",
        summary:
          "Role-based access control for deciding which users can see or do what.",
        description:
          "I use RBAC when different users need different permissions. It is useful for admin dashboards, protected actions, and safer multi-user systems.",
        highlights: [
          "Role-aware dashboards and actions",
          "Access rules across frontend and backend",
          "Safer feature control in multi-user apps",
        ],
        stack: ["Roles", "Permissions", "Protected Actions"],
      },
      {
        slug: "authentication",
        name: "Authentication",
        summary:
          "The part of an app that confirms who the user is through login and verification.",
        description:
          "I work with login flows, token generation, and user verification so the right people can get into the right parts of an app.",
        highlights: [
          "Login and credential flow design",
          "User verification and session handling",
          "Protected access for signed-in users",
        ],
        stack: ["Login", "Verification", "Sessions", "Security"],
      },
      {
        slug: "authorization",
        name: "Authorization",
        summary:
          "The logic that decides what an authenticated user is allowed to access.",
        description:
          "After login, authorization decides what a user can actually do. I use it for permission checks, role validation, and feature gating.",
        highlights: [
          "Permission checks after authentication",
          "Feature and action gating by role",
          "Safer control over business logic",
        ],
        stack: ["Permissions", "Roles", "Access Checks"],
      },
      {
        slug: "middleware",
        name: "Middleware",
        summary:
          "A core Express pattern I use for auth checks, validation, and shared request logic.",
        description:
          "Middleware helps me move repeated backend logic out of controllers. I use it for auth, validation, logging, and cleaner request flow.",
        highlights: [
          "Reusable auth and validation layers",
          "Cleaner controllers through separation of concerns",
          "Better control over the request lifecycle",
        ],
        stack: ["Express Middleware", "Validation", "Auth Guards"],
      },
    ],
  },
  {
    slug: "tools",
    label: "Tools",
    description:
      "Tools I use for version control, testing, deployment, and day-to-day development work.",
    skills: [
      {
        slug: "git",
        name: "Git",
        summary:
          "I use Git every day to track changes, work in branches, and iterate safely.",
        description:
          "Git is part of my normal workflow for features, fixes, and experiments. It helps me keep history clean and changes easy to manage.",
        highlights: [
          "Feature branches and commit-based workflow",
          "Clean history while iterating",
          "Reliable rollback and collaboration support",
        ],
        stack: ["Version Control", "Branches", "Commits"],
      },
      {
        slug: "github",
        name: "GitHub",
        summary:
          "Where I host projects, manage repos, and share work publicly.",
        description:
          "I use GitHub to manage repositories, share project work, and keep code organized through branch-based workflows.",
        highlights: [
          "Repository organization and code sharing",
          "Branching and pull request workflow",
          "A clear place to present project work",
        ],
        stack: ["Repos", "Pull Requests", "Branches"],
      },
      {
        slug: "postman",
        name: "Postman",
        summary:
          "A tool I use to test endpoints, inspect payloads, and debug APIs while building them.",
        description:
          "I use Postman to test routes before connecting them to the frontend. It helps me quickly verify payloads, headers, and response shape.",
        highlights: [
          "Manual API testing and debugging",
          "Header, token, and payload checks",
          "Faster backend verification before UI integration",
        ],
        stack: ["API Testing", "Collections", "Requests"],
      },
      {
        slug: "vs-code",
        name: "VS Code",
        summary:
          "My main editor for writing, debugging, and navigating full stack codebases.",
        description:
          "VS Code is where most of my day-to-day work happens. It gives me quick navigation, useful extensions, and a smooth debugging setup.",
        highlights: [
          "Fast navigation through multi-file projects",
          "Helpful extensions for React and Node.js work",
          "Integrated debugging and terminal workflow",
        ],
        stack: ["Editor", "Extensions", "Debugging"],
      },
      {
        slug: "mongodb-atlas",
        name: "MongoDB Atlas",
        summary:
          "I use it when MongoDB needs to move from local development to the cloud.",
        description:
          "MongoDB Atlas makes it easier to host databases without managing everything manually. I use it for managed clusters and deployment-friendly setups.",
        highlights: [
          "Managed cloud database hosting",
          "Easy connection from deployed MERN apps",
          "A practical step from development to production",
        ],
        stack: ["Cloud DB", "Clusters", "Connections"],
      },
      {
        slug: "render",
        name: "Render",
        summary:
          "A hosting option I use for backend services and full stack projects.",
        description:
          "I use Render when I want a simple way to deploy backend APIs and supporting services without a lot of infrastructure setup.",
        highlights: [
          "Deployment for Node.js backends and services",
          "Environment variable and service-based setup",
          "A straightforward path to getting projects online",
        ],
        stack: ["Deployment", "Hosting", "Environment Variables"],
      },
      {
        slug: "vercel",
        name: "Vercel",
        summary:
          "My usual choice for deploying frontend projects quickly.",
        description:
          "I like Vercel for React frontends and portfolio work because the deployment flow is simple and the preview setup is easy to use.",
        highlights: [
          "Fast deployment for frontend projects",
          "Smooth workflow for React applications",
          "A good fit for portfolio and client-facing UI",
        ],
        stack: ["Frontend Hosting", "Deployments", "Preview Builds"],
      },
      {
        slug: "cloudinary",
        name: "Cloudinary",
        summary:
          "A useful service for handling uploads and media delivery in full stack apps.",
        description:
          "I use Cloudinary when a project needs image uploads or hosted media. It keeps asset handling cleaner than storing everything directly in the app.",
        highlights: [
          "Cloud-based image and media handling",
          "Cleaner upload flows in full stack apps",
          "Reliable delivery for hosted media",
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
  description: category.description,
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
    category: "Full Stack Commerce",
    title: "NovaCart Commerce",
    year: "2026",
    description:
      "A full stack e-commerce build with customer browsing, checkout, admin tools, and secure account flows.",
    techStack: ["React", "Node.js", "Express", "MongoDB", "JWT", "Cloudinary"],
    features: [
      "JWT auth with role-based access and protected routes",
      "Product browsing with search, filters, pagination, reviews, and wishlist support",
      "Cart, checkout, and order history across the full app",
      "Admin tools for product management and order updates",
    ],
    githubUrl: "https://github.com/mayur-khamkar2005/full-stack-e-commerce-app",
    liveUrl: "",
  },
  {
    category: "Frontend Commerce",
    title: "ShopSmart E-commerce Frontend",
    year: "2026",
    description:
      "A React storefront focused on browsing, filtering, protected actions, and a smoother shopping flow.",
    techStack: ["React", "Vite", "Tailwind CSS", "React Router", "Context API", "REST API"],
    features: [
      "Protected cart and wishlist flows after login",
      "API-driven product fetching with search, filters, and sorting",
      "Persistent cart and wishlist state with localStorage",
      "Reusable layout and component structure with custom hooks",
    ],
    githubUrl: "https://github.com/mayur-khamkar2005/ShopSmart-E-commerce",
    liveUrl: "",
  },
  {
    category: "Backend API",
    title: "Ecommerce Backend API",
    year: "2026",
    description:
      "An e-commerce backend covering auth, products, orders, and admin actions with a clean controller-based structure.",
    techStack: ["Node.js", "Express", "MongoDB Atlas", "JWT", "bcrypt", "Render"],
    features: [
      "JWT auth with user and admin access flows",
      "Product CRUD, order handling, and protected endpoints",
      "MVC plus service-layer structure for cleaner backend code",
      "MongoDB Atlas setup with deployment on Render",
    ],
    githubUrl: "https://github.com/mayur-khamkar2005/ecommerce-backend",
    liveUrl: "",
  },
  {
    category: "Authentication System",
    title: "Full Stack Authentication Starter",
    year: "2026",
    description:
      "A compact starter project that brings together React, Express, MongoDB, and JWT for protected user flows.",
    techStack: ["React", "Vite", "Express", "MongoDB", "JWT", "Axios"],
    features: [
      "Register, login, and role-based access with JWT",
      "Protected profile and admin routes",
      "Backend structure with controllers, middleware, models, and utilities",
      "A clean starting point for protected MERN apps",
    ],
    githubUrl: "https://github.com/mayur-khamkar2005/auth_test_project",
    liveUrl: "",
  },
  {
    category: "MERN Analytics App",
    title: "Wine Quality Analyzer",
    year: "2026",
    description:
      "A MERN app for predicting wine quality, tracking history, and showing trends through charts and dashboards.",
    techStack: ["React", "Vite", "Express", "MongoDB", "JWT", "Recharts"],
    features: [
      "JWT auth with protected routes and admin-only access",
      "Prediction flow with saved history, filters, and pagination",
      "Charts and dashboard views for trends and recent activity",
      "Responsive light and dark UI with a custom visual style",
    ],
    githubUrl: "https://github.com/mayur-khamkar2005/wine-test-site",
    liveUrl: "",
  },
  {
    category: "Portfolio Website",
    title: "Personal Developer Portfolio",
    year: "2026",
    description:
      "This portfolio site, built to present my work clearly without overcomplicating the experience.",
    techStack: ["React", "Vite", "Tailwind CSS", "React Router", "GSAP", "Context API"],
    features: [
      "Dark and light theme support with shared design tokens",
      "Animated multi-page layout with project and skill sections",
      "Structured content for projects, skills, and contact details",
      "Responsive design built for portfolio use",
    ],
    githubUrl: "https://github.com/mayur-khamkar2005/my_portfolio",
    liveUrl: "",
  },
];

const contactMethods = [
  {
    label: "Email",
    value: primaryEmail,
    description: "The easiest way to reach me for jobs, freelance work, or project discussions.",
    actionLabel: "Send Email",
    href: primaryEmailHref,
    external: false,
  },
  {
    label: "Phone",
    value: "+91 98923 58717",
    description: "Good for quick follow-up or a direct conversation about work.",
    actionLabel: "Call Now",
    href: "tel:+919892358717",
    external: false,
  },
  {
    label: "GitHub",
    value: "mayur-khamkar2005",
    description: "You can find my public repos, experiments, and project work here.",
    actionLabel: "Open GitHub",
    href: "https://github.com/mayur-khamkar2005",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Mayur Khamkar",
    description: "A simple place to see my background and connect professionally.",
    actionLabel: "Open LinkedIn",
    href: "https://www.linkedin.com/in/mayur-khamkar-bb5aa0318/",
    external: true,
  },
  {
    label: "X / Twitter",
    value: "@mayurkhamker",
    description: "Where I occasionally share updates, thoughts, and things I am building.",
    actionLabel: "Open X",
    href: "https://x.com/mayurkhamker",
    external: true,
  },
];

const socialLinks = [
  { label: "GitHub", href: "https://github.com/mayur-khamkar2005" },
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
