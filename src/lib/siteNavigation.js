const primaryNavigation = [
  { label: "Home", link: "/" },
  { label: "Projects", link: "/projects" },
  { label: "Contact", link: "/contact" },
];

const dropdownNavigation = [
  { label: "About", link: "/about" },
  { label: "Skills", link: "/skills" },
  { label: "Projects", link: "/projects" },
  { label: "Contact", link: "/contact" },
];

const sectionRouteMap = {
  "/": "home",
  "/about": "about",
  "/skills": "skills",
  "/projects": "projects",
  "/contact": "contact",
};

const sectionRoutes = Object.keys(sectionRouteMap);

export { dropdownNavigation, primaryNavigation, sectionRouteMap, sectionRoutes };
