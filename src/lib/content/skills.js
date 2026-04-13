const skillCategories = [
  {
    slug: "languages",
    label: "Languages",
    description: "These are the languages I use the most while learning and building projects.",
    skills: [
      {
        slug: "javascript",
        name: "JavaScript",
        summary: "This is the language I use the most right now.",
        description:
          "Most of my projects are built with JavaScript. I use it in React on the frontend and in Node.js on the backend, so I work with it almost every day.",
        highlights: [
          "I use it in both frontend and backend work",
          "Comfortable with async/await and API handling",
          "This is the language I feel most confident with right now",
        ],
        stack: ["ES6+", "Async/Await", "Modules", "DOM", "Node.js"],
      },
      {
        slug: "cpp",
        name: "C++",
        summary: "I mostly use C++ for DSA practice.",
        description:
          "I have mostly used C++ for coding practice, data structures, and problem solving. It helped me improve my basics and logical thinking.",
        highlights: [
          "Used mainly for DSA practice",
          "Helped me improve problem solving",
          "Useful for coding basics and interviews",
        ],
        stack: ["STL", "DSA", "Pointers", "OOP"],
      },
    ],
  },
  {
    slug: "frontend",
    label: "Frontend",
    description: "These are the tools I use on the frontend side of my projects.",
    skills: [
      {
        slug: "react-js",
        name: "React.js",
        summary: "React is what I use in most of my frontend projects.",
        description:
          "I like React because it lets me break the UI into smaller parts. In my projects I usually build pages with reusable components and simple state handling.",
        highlights: [
          "I build pages using reusable components",
          "I use hooks for state and side effects",
          "Most of my frontend practice projects are in React",
        ],
        stack: ["Hooks", "JSX", "Components", "State", "Props"],
      },
      {
        slug: "react-router",
        name: "React Router",
        summary: "I use it when my React project has multiple pages.",
        description:
          "I have used React Router for page navigation in projects like dashboards, product pages, and portfolio layouts. It makes the app feel cleaner and easier to manage.",
        highlights: [
          "Used for page navigation without reload",
          "Helpful for nested layouts",
          "I use NavLink, Routes, and useParams often",
        ],
        stack: ["Routes", "Outlet", "NavLink", "useParams"],
      },
      {
        slug: "zustand",
        name: "Zustand",
        summary: "I have used Zustand in some projects for shared state.",
        description:
          "When local state starts getting messy, Zustand feels easier to manage. I have used it to share app data without adding too much setup.",
        highlights: [
          "Simple way to manage shared state",
          "Useful when prop drilling gets too much",
          "Easy to read in smaller projects",
        ],
        stack: ["Stores", "Selectors", "Shared State"],
      },
      {
        slug: "context-api",
        name: "Context API",
        summary: "I use Context API for global state like theme or auth.",
        description:
          "I have mostly used Context API for things like theme and other shared values across the app. It works well when the project does not need a larger state library.",
        highlights: [
          "Good for theme and shared UI state",
          "Simple for small to medium apps",
          "Easy to use with React hooks",
        ],
        stack: ["Providers", "useContext", "Shared UI State"],
      },
      {
        slug: "html5",
        name: "HTML5",
        summary: "I try to use clean and semantic HTML in my layouts.",
        description:
          "I keep my HTML structure simple with proper sections, headings, forms, and buttons. It helps the UI stay easier to read and maintain.",
        highlights: [
          "I try to use semantic structure",
          "Forms and standard elements are part of every project",
          "Helps with readability and accessibility",
        ],
        stack: ["Semantic Markup", "Accessibility", "Forms"],
      },
      {
        slug: "css3",
        name: "CSS3",
        summary: "I use CSS for layout, spacing, responsive design, and UI details.",
        description:
          "Even when I use Tailwind, I still rely a lot on CSS basics. Flexbox, grid, spacing, transitions, and media queries are part of almost every project I build.",
        highlights: [
          "I use flexbox and grid a lot",
          "Responsive design is part of every project",
          "Useful for small UI polish and layout control",
        ],
        stack: ["Flexbox", "Grid", "Animations", "Media Queries"],
      },
      {
        slug: "tailwind-css",
        name: "Tailwind CSS",
        summary: "I use Tailwind in most of my recent frontend projects.",
        description:
          "Tailwind helps me build faster and keep spacing more consistent. I mostly use it in React and Vite projects when I want to move quickly.",
        highlights: [
          "Helps me style components faster",
          "Responsive classes are easy to use",
          "Good for keeping the UI consistent",
        ],
        stack: ["Utility Classes", "Responsive Design", "Design Tokens"],
      },
    ],
  },
  {
    slug: "backend",
    label: "Backend",
    description: "These are the tools I use more on the backend side of my projects.",
    skills: [
      {
        slug: "node-js",
        name: "Node.js",
        summary: "I use Node.js for backend APIs and server logic.",
        description:
          "Most of my backend work is done in Node.js. I use it for auth logic, routes, database connection, and handling the server side of MERN projects.",
        highlights: [
          "Used for backend logic in MERN apps",
          "I build APIs with JavaScript in Node.js",
          "Useful for async request handling",
        ],
        stack: ["Runtime", "Async IO", "API Services"],
      },
      {
        slug: "express-js",
        name: "Express.js",
        summary: "I use Express to build routes, middleware, and APIs.",
        description:
          "Express is what I have used the most for backend APIs. I use it for routes, controllers, middleware, auth, and keeping backend code organized.",
        highlights: [
          "Used for routes and controllers",
          "I use middleware a lot with Express",
          "Good for structuring REST APIs",
        ],
        stack: ["Routing", "Middleware", "Controllers", "REST"],
      },
    ],
  },
  {
    slug: "database",
    label: "Database",
    description: "This is the database tool I use in my MERN projects.",
    skills: [
      {
        slug: "mongodb",
        name: "MongoDB",
        summary: "MongoDB is the main database I have used in my projects.",
        description:
          "I use MongoDB in most of my MERN projects for users, products, orders, and other app data. I have worked with schema design, CRUD operations, and basic queries.",
        highlights: [
          "Used in most of my MERN projects",
          "I work with CRUD operations and schemas",
          "I have also used it with MongoDB Atlas",
        ],
        stack: ["Schema Design", "Indexing", "CRUD", "Collections"],
      },
    ],
  },
  {
    slug: "api-security",
    label: "API & Security",
    description: "These are the things I use while working on backend flow and auth.",
    skills: [
      {
        slug: "rest-apis",
        name: "REST APIs",
        summary: "I build REST APIs in most of my backend projects.",
        description:
          "I usually build project backends with REST APIs. I focus on clear routes, proper request handling, and responses that are easy for the frontend to use.",
        highlights: [
          "I build route based APIs",
          "Used for CRUD operations in projects",
          "This is the main way I connect frontend and backend",
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
          "Used for token based login flow",
          "Helps protect private routes",
          "I have used it in both frontend and backend flow",
        ],
        stack: ["Tokens", "Auth Headers", "Protected Routes"],
      },
      {
        slug: "rbac",
        name: "RBAC",
        summary: "I have used role based access in projects with user and admin flow.",
        description:
          "In some projects I added role checks so admin and user actions stay separate. It helped me understand permission handling better.",
        highlights: [
          "Used for user and admin flow",
          "Helps control who can do what",
          "Makes backend routes safer",
        ],
        stack: ["Roles", "Permissions", "Protected Actions"],
      },
      {
        slug: "authentication",
        name: "Authentication",
        summary: "I work with login, signup, and user verification flow.",
        description:
          "Authentication is part of most of my backend projects. I have built login and signup flow, token generation, and basic user verification features.",
        highlights: [
          "Login and signup flow",
          "User verification features",
          "A common part of my backend practice",
        ],
        stack: ["Login", "Verification", "Sessions", "Security"],
      },
      {
        slug: "authorization",
        name: "Authorization",
        summary: "I use authorization to control what a user is allowed to do.",
        description:
          "After login, I use authorization checks to decide whether a user can access certain routes or actions. I have mostly used this in admin related flow.",
        highlights: [
          "Used after authentication",
          "Helps with permission based access",
          "Important in admin related features",
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
          "Used for auth and validation checks",
          "Helps keep controller code cleaner",
          "A big part of my Express projects",
        ],
        stack: ["Express Middleware", "Validation", "Auth Guards"],
      },
    ],
  },
  {
    slug: "tools",
    label: "Tools",
    description: "These are the tools I use while building, testing, and deploying projects.",
    skills: [
      {
        slug: "git",
        name: "Git",
        summary: "I use Git regularly while working on projects.",
        description:
          "I use Git for commits, branches, and saving project progress properly while building features or fixing bugs.",
        highlights: [
          "Used for version control in daily work",
          "I use branches and commits regularly",
          "Helpful when working on features step by step",
        ],
        stack: ["Version Control", "Branches", "Commits"],
      },
      {
        slug: "github",
        name: "GitHub",
        summary: "I use GitHub to store and share my project work.",
        description:
          "Most of my projects are on GitHub. I use it to push updates, manage repositories, and keep my work online.",
        highlights: [
          "Used for project repositories",
          "Useful for sharing code",
          "Part of my normal workflow with Git",
        ],
        stack: ["Repos", "Pull Requests", "Branches"],
      },
      {
        slug: "postman",
        name: "Postman",
        summary: "I use Postman to test APIs while doing backend work.",
        description:
          "Postman helps me test routes before connecting them to the frontend. I use it for headers, request body, and response checking.",
        highlights: [
          "Used for testing API routes",
          "Helpful while debugging backend flow",
          "Makes it easier to check requests and responses",
        ],
        stack: ["API Testing", "Collections", "Requests"],
      },
      {
        slug: "vs-code",
        name: "VS Code",
        summary: "VS Code is the editor I use for all my projects.",
        description:
          "I use VS Code every day for frontend, backend, debugging, and moving around the project files. It is my main coding setup.",
        highlights: [
          "My main editor for all projects",
          "Useful for debugging and extensions",
          "Good for project navigation",
        ],
        stack: ["Editor", "Extensions", "Debugging"],
      },
      {
        slug: "mongodb-atlas",
        name: "MongoDB Atlas",
        summary: "I use Atlas when I need the database online.",
        description:
          "MongoDB Atlas is what I have used in deployed MERN projects when the database needed to be available online instead of only local.",
        highlights: [
          "Used for cloud database hosting",
          "Helpful in deployed MERN projects",
          "I have used it with backend deployment setup",
        ],
        stack: ["Cloud DB", "Clusters", "Connections"],
      },
      {
        slug: "render",
        name: "Render",
        summary: "I have used Render to deploy backend projects.",
        description:
          "Render is one of the platforms I have used for hosting Node.js backend projects. I like it because it feels simple for personal projects.",
        highlights: [
          "Used for backend deployment",
          "Supports environment variables well",
          "Simple to set up for personal projects",
        ],
        stack: ["Deployment", "Hosting", "Environment Variables"],
      },
      {
        slug: "vercel",
        name: "Vercel",
        summary: "I use Vercel mostly for frontend deployment.",
        description:
          "For React projects and this portfolio, Vercel is usually the easiest option for me. It makes deployment quick and simple.",
        highlights: [
          "Used for frontend deployment",
          "Good for React and Vite projects",
          "Easy preview and hosting flow",
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
          "Used for image hosting",
          "Helpful in upload based features",
          "A good option for full stack projects",
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
