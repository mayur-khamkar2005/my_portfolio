const skillCategories = [
  {
    slug: "languages",
    label: "Languages",
    description: "Languages I use most in my projects and coding practice.",
    skills: [
      {
        slug: "javascript",
        name: "JavaScript",
        summary: "This is the language I use the most in both frontend and backend projects.",
        description:
          "Most of my projects are built with JavaScript. I use it in React for the frontend and in Node.js for backend logic, APIs, and authentication flows.",
        highlights: [
          "Used in both frontend and backend work",
          "Comfortable with async/await and API handling",
          "Helps me build full stack projects faster",
        ],
        stack: ["ES6+", "Async/Await", "Modules", "DOM", "Node.js"],
      },
      {
        slug: "cpp",
        name: "C++",
        summary: "I mainly use C++ for DSA practice and improving problem solving.",
        description:
          "I have used C++ mostly for coding practice, data structures, and algorithms. It helped me understand logic better and improve my coding basics.",
        highlights: [
          "DSA and problem-solving practice",
          "Better understanding of logic and performance",
          "Useful for interview preparation",
        ],
        stack: ["STL", "DSA", "Pointers", "OOP"],
      },
    ],
  },
  {
    slug: "frontend",
    label: "Frontend",
    description: "Tools I use to build the UI part of my projects.",
    skills: [
      {
        slug: "react-js",
        name: "React.js",
        summary: "I use React in most of my frontend projects.",
        description:
          "React is what I use when building project UIs. I usually break pages into components and try to keep the code simple and reusable.",
        highlights: [
          "Component-based project structure",
          "Hooks for state and side effects",
          "Reusable UI sections and pages",
        ],
        stack: ["Hooks", "JSX", "Components", "State", "Props"],
      },
      {
        slug: "react-router",
        name: "React Router",
        summary: "I use it for page navigation and route-based layouts.",
        description:
          "I have used React Router in projects where multiple pages were needed, like product pages, profile pages, and dashboard-style layouts.",
        highlights: [
          "Routing between pages without reload",
          "Nested layout support",
          "Useful for multi-page React apps",
        ],
        stack: ["Routes", "Outlet", "NavLink", "useParams"],
      },
      {
        slug: "zustand",
        name: "Zustand",
        summary: "I have used Zustand for simple shared state in some projects.",
        description:
          "When local state starts getting messy, Zustand feels easier to manage. I have used it for keeping app data shared without adding too much setup.",
        highlights: [
          "Simple shared state setup",
          "Helpful when prop drilling becomes too much",
          "Easy to read and use in smaller apps",
        ],
        stack: ["Stores", "Selectors", "Shared State"],
      },
      {
        slug: "context-api",
        name: "Context API",
        summary: "I use it for things like theme or app-wide state.",
        description:
          "I have used Context API mostly for global values like theme or auth-related state. It works well when the app does not need a bigger state library.",
        highlights: [
          "Theme and shared UI state",
          "Good for simple global data",
          "Easy to use in React projects",
        ],
        stack: ["Providers", "useContext", "Shared UI State"],
      },
      {
        slug: "html5",
        name: "HTML5",
        summary: "I use semantic HTML to keep layouts clean and readable.",
        description:
          "I try to keep my HTML structure simple and proper, with clear sections, headings, and forms. It makes the UI easier to build and maintain.",
        highlights: [
          "Semantic page structure",
          "Forms and standard elements",
          "Better readability and accessibility",
        ],
        stack: ["Semantic Markup", "Accessibility", "Forms"],
      },
      {
        slug: "css3",
        name: "CSS3",
        summary: "I use CSS for layout, spacing, responsive design, and small UI details.",
        description:
          "Even when I use Tailwind, I still rely on CSS basics a lot. Flexbox, grid, spacing, media queries, and transitions are part of almost every project.",
        highlights: [
          "Flexbox and grid layouts",
          "Responsive design",
          "Transitions and UI polish",
        ],
        stack: ["Flexbox", "Grid", "Animations", "Media Queries"],
      },
      {
        slug: "tailwind-css",
        name: "Tailwind CSS",
        summary: "I use Tailwind in most of my recent frontend work.",
        description:
          "Tailwind helps me build UI faster and keep spacing and styling more consistent. I mostly use it in React and Vite projects.",
        highlights: [
          "Fast styling while building components",
          "Responsive classes built in",
          "Good for keeping UI consistent",
        ],
        stack: ["Utility Classes", "Responsive Design", "Design Tokens"],
      },
    ],
  },
  {
    slug: "backend",
    label: "Backend",
    description: "Tools I use more on the backend side of my projects.",
    skills: [
      {
        slug: "node-js",
        name: "Node.js",
        summary: "I use Node.js for backend APIs and project logic.",
        description:
          "Most of my backend work is done in Node.js. I use it for routes, auth logic, database connection, and handling server-side features in MERN projects.",
        highlights: [
          "Backend logic for MERN apps",
          "API building with JavaScript",
          "Async request handling",
        ],
        stack: ["Runtime", "Async IO", "API Services"],
      },
      {
        slug: "express-js",
        name: "Express.js",
        summary: "I use Express to build routes, middleware, and APIs.",
        description:
          "Express is what I have used most for backend APIs. I use it for routes, controllers, middleware, auth, and organizing backend code better.",
        highlights: [
          "Routes and controllers",
          "Middleware handling",
          "REST API structure",
        ],
        stack: ["Routing", "Middleware", "Controllers", "REST"],
      },
    ],
  },
  {
    slug: "database",
    label: "Database",
    description: "Database work I use in my MERN projects.",
    skills: [
      {
        slug: "mongodb",
        name: "MongoDB",
        summary: "MongoDB is the main database I have used in my projects.",
        description:
          "I use MongoDB in most of my MERN projects for storing users, products, orders, and other app data. I also work with schema design and basic querying.",
        highlights: [
          "Used in MERN stack projects",
          "CRUD operations and schema work",
          "Basic indexing and query handling",
        ],
        stack: ["Schema Design", "Indexing", "CRUD", "Collections"],
      },
    ],
  },
  {
    slug: "api-security",
    label: "API & Security",
    description: "Things I use when working on backend flows and auth.",
    skills: [
      {
        slug: "rest-apis",
        name: "REST APIs",
        summary: "I build REST APIs in most of my backend projects.",
        description:
          "I usually build project backends using REST APIs. I focus on clear routes, proper request handling, and responses that are easy for the frontend to use.",
        highlights: [
          "Route-based API structure",
          "CRUD endpoints",
          "Frontend and backend connection",
        ],
        stack: ["Endpoints", "CRUD", "HTTP", "JSON"],
      },
      {
        slug: "jwt",
        name: "JWT",
        summary: "I use JWT in projects where login and protected routes are needed.",
        description:
          "JWT is something I have used in many practice and full stack projects for login, token verification, and route protection.",
        highlights: [
          "Token-based login flow",
          "Protected routes",
          "User verification in backend APIs",
        ],
        stack: ["Tokens", "Auth Headers", "Protected Routes"],
      },
      {
        slug: "rbac",
        name: "RBAC",
        summary: "I have used role-based access in projects with user and admin flows.",
        description:
          "In some projects I added role checks so admin and user actions stay separate. It helped me understand permission handling better.",
        highlights: [
          "User and admin role handling",
          "Feature access control",
          "Safer route logic",
        ],
        stack: ["Roles", "Permissions", "Protected Actions"],
      },
      {
        slug: "authentication",
        name: "Authentication",
        summary: "I work with login, signup, and user verification flows.",
        description:
          "Authentication is part of most of my backend projects. I have built login and signup flows, token generation, and basic user verification features.",
        highlights: [
          "Login and signup flow",
          "User verification",
          "Session-related backend logic",
        ],
        stack: ["Login", "Verification", "Sessions", "Security"],
      },
      {
        slug: "authorization",
        name: "Authorization",
        summary: "I use authorization to control what each user is allowed to do.",
        description:
          "After login, I use authorization checks to decide whether a user can access certain routes or actions. I have used this in admin-related flows.",
        highlights: [
          "Permission checks after login",
          "Role-based route control",
          "Safer backend actions",
        ],
        stack: ["Permissions", "Roles", "Access Checks"],
      },
      {
        slug: "middleware",
        name: "Middleware",
        summary: "I use middleware a lot in Express projects.",
        description:
          "Middleware helps me keep repeated logic outside controllers. I have used it for auth checks, validation, and request flow handling.",
        highlights: [
          "Auth checking",
          "Validation handling",
          "Cleaner controller code",
        ],
        stack: ["Express Middleware", "Validation", "Auth Guards"],
      },
    ],
  },
  {
    slug: "tools",
    label: "Tools",
    description: "Tools I use while building, testing, and deploying projects.",
    skills: [
      {
        slug: "git",
        name: "Git",
        summary: "I use Git regularly while working on projects.",
        description:
          "I use Git for commits, branches, and saving project progress properly while building features or fixing bugs.",
        highlights: [
          "Basic branch workflow",
          "Commit history",
          "Version control in daily work",
        ],
        stack: ["Version Control", "Branches", "Commits"],
      },
      {
        slug: "github",
        name: "GitHub",
        summary: "I use GitHub to store and share my project work.",
        description:
          "Most of my projects are hosted on GitHub. I use it to manage repos, push updates, and keep my work public.",
        highlights: [
          "Project repositories",
          "Code sharing",
          "Branch-based workflow",
        ],
        stack: ["Repos", "Pull Requests", "Branches"],
      },
      {
        slug: "postman",
        name: "Postman",
        summary: "I use Postman to test APIs during backend development.",
        description:
          "Postman helps me test routes before connecting them to the frontend. I use it for checking headers, request bodies, and responses.",
        highlights: [
          "API route testing",
          "Header and payload checks",
          "Useful while debugging backend work",
        ],
        stack: ["API Testing", "Collections", "Requests"],
      },
      {
        slug: "vs-code",
        name: "VS Code",
        summary: "VS Code is the editor I use for all my projects.",
        description:
          "I use VS Code every day for frontend, backend, debugging, and project navigation. It is my main development setup.",
        highlights: [
          "Code editing and debugging",
          "Extensions for React and Node.js",
          "Easy project navigation",
        ],
        stack: ["Editor", "Extensions", "Debugging"],
      },
      {
        slug: "mongodb-atlas",
        name: "MongoDB Atlas",
        summary: "I use Atlas when I need the database hosted online.",
        description:
          "MongoDB Atlas is what I have used in deployed MERN projects when the database needed to be available online instead of only local.",
        highlights: [
          "Cloud MongoDB hosting",
          "Project database connection",
          "Useful for deployed apps",
        ],
        stack: ["Cloud DB", "Clusters", "Connections"],
      },
      {
        slug: "render",
        name: "Render",
        summary: "I have used Render to deploy backend projects.",
        description:
          "Render is one of the platforms I have used for hosting Node.js backend projects. It feels simple for small to medium personal projects.",
        highlights: [
          "Backend deployment",
          "Environment variable support",
          "Easy setup for personal projects",
        ],
        stack: ["Deployment", "Hosting", "Environment Variables"],
      },
      {
        slug: "vercel",
        name: "Vercel",
        summary: "I use Vercel mainly for frontend deployment.",
        description:
          "For React and portfolio projects, Vercel is usually the easiest option for me. It makes frontend deployment quick and simple.",
        highlights: [
          "Frontend deployment",
          "Good for React projects",
          "Simple preview and hosting flow",
        ],
        stack: ["Frontend Hosting", "Deployments", "Preview Builds"],
      },
      {
        slug: "cloudinary",
        name: "Cloudinary",
        summary: "I have used Cloudinary in projects with image upload features.",
        description:
          "When a project needs image upload and hosted media, I use Cloudinary instead of storing everything directly in the app.",
        highlights: [
          "Image hosting",
          "Upload handling",
          "Useful for full stack projects",
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

export {
  getRelatedSkills,
  getSkillBySlug,
  getSkillsByCategorySlug,
  skillCategories,
  skills,
};
