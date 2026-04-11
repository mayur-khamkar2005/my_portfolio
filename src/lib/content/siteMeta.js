import resumePdf from "../../assets/Mayur_Khamkar_resume.pdf";

const primaryEmail = "mayurkhambkar@gmail.com";
const primaryEmailHref = `mailto:${primaryEmail}?subject=${encodeURIComponent("Portfolio Inquiry")}`;

const heroHighlights = [
  { label: "Main Focus", value: "Backend work and API building" },
  { label: "What I Use", value: "React, Node.js, Express, MongoDB" },
  { label: "Current Stage", value: "Fresher building real projects" },
];

const focusAreas = [
  {
    tag: "API",
    title: "API Work",
    description:
      "I enjoy building backend routes, handling requests properly, and keeping the code easy to follow.",
  },
  {
    tag: "AUTH",
    title: "Login and Security",
    description:
      "A lot of my projects include JWT auth, protected routes, and simple role-based access.",
  },
  {
    tag: "STRUCT",
    title: "Clean Structure",
    description:
      "I try to keep my folders, controllers, and reusable code organized so the project does not get messy fast.",
  },
];

const contactMethods = [
  {
    label: "Email",
    value: primaryEmail,
    description: "Best way to contact me for jobs, internships, freelance work, or any project discussion.",
    actionLabel: "Send Email",
    href: primaryEmailHref,
    external: false,
  },
  {
    label: "Phone",
    value: "+91 98923 58717",
    description: "You can also call if you want to talk directly.",
    actionLabel: "Call Now",
    href: "tel:+919892358717",
    external: false,
  },
  {
    label: "GitHub",
    value: "mayur-khamkar2005",
    description: "Most of my project code and practice work is here.",
    actionLabel: "Open GitHub",
    href: "https://github.com/mayur-khamkar2005",
    external: true,
  },
  {
    label: "LinkedIn",
    value: "Mayur Khamkar",
    description: "You can connect with me here for professional updates.",
    actionLabel: "Open LinkedIn",
    href: "https://www.linkedin.com/in/mayur-khamkar-bb5aa0318/",
    external: true,
  },
  {
    label: "X / Twitter",
    value: "@mayurkhamker",
    description: "I sometimes share thoughts and small updates here.",
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
  heroHighlights,
  primaryEmail,
  primaryEmailHref,
  resumePdf,
  socialLinks,
};
