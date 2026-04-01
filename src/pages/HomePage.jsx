import { useRef } from "react";
import resumePdf from "../assets/Mayur_Khamkar_FullStack_Developer_Resume.pdf";
import About from "../components/About";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import Projects from "../components/Projects";
import Skills from "../components/Skills";
import { gsap, prefersReducedMotion, useIsomorphicLayoutEffect } from "../lib/gsap";

const primaryEmail = "mayurkhambkar@gmail.com";
const primaryEmailHref = `mailto:${primaryEmail}?subject=${encodeURIComponent("Portfolio Inquiry")}`;

const navigation = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
];

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

function HomePage() {
  const pageRef = useRef(null);
  const topGlowRef = useRef(null);
  const sideGlowRef = useRef(null);

  const safeNavigation = navigation.filter(
    (item) => typeof item?.label === "string" && typeof item?.href === "string",
  );
  const safeHighlights = heroHighlights.filter(
    (item) => typeof item?.label === "string" && typeof item?.value === "string",
  );
  const safeFocusAreas = focusAreas.filter(
    (item) =>
      typeof item?.tag === "string" &&
      typeof item?.title === "string" &&
      typeof item?.description === "string",
  );
  const safeSkills = skills.filter(
    (item) => typeof item?.name === "string" && typeof item?.description === "string",
  );
  const safeProjects = projects.filter((item) => item && typeof item === "object");
  const safeContactMethods = contactMethods.filter(
    (item) =>
      typeof item?.label === "string" &&
      typeof item?.value === "string" &&
      typeof item?.description === "string",
  );
  const safeSocialLinks = socialLinks.filter(
    (item) => typeof item?.label === "string" && typeof item?.href === "string",
  );

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) {
      return undefined;
    }

    const scope = pageRef.current;

    if (!scope) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      if (topGlowRef.current) {
        gsap.to(topGlowRef.current, {
          xPercent: 12,
          yPercent: -12,
          scale: 1.1,
          duration: 6.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (sideGlowRef.current) {
        gsap.to(sideGlowRef.current, {
          xPercent: -10,
          scale: 1.08,
          duration: 7.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(sideGlowRef.current, {
          yPercent: -22,
          ease: "none",
          scrollTrigger: {
            trigger: scope,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
          },
        });
      }
    }, scope);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pageRef} className="page-shell">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
      >
        <div
          ref={topGlowRef}
          className="absolute left-[-10%] top-24 h-72 w-72 rounded-full bg-accent-soft blur-3xl"
        />
        <div
          ref={sideGlowRef}
          className="absolute right-[-8%] top-[36rem] h-80 w-80 rounded-full bg-accent-soft blur-3xl"
        />
      </div>

      <Navbar navigation={safeNavigation} />

      <main>
        <Hero resumeUrl={resumePdf} highlights={safeHighlights} />
        <About focusAreas={safeFocusAreas} />
        <Skills skills={safeSkills} />
        <Projects projects={safeProjects} />
        <Contact
          contactMethods={safeContactMethods}
          resumeUrl={resumePdf}
          primaryEmailHref={primaryEmailHref}
        />
      </main>

      <Footer socialLinks={safeSocialLinks} />
    </div>
  );
}

export default HomePage;
