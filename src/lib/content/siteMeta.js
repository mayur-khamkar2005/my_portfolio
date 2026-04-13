import resumePdf from "../../assets/Mayur_Khamkar_resume.pdf";

const primaryEmail = "mayurkhambkar@gmail.com";
const primaryEmailHref = `mailto:${primaryEmail}?subject=${encodeURIComponent("Portfolio Inquiry")}`;

const heroHighlights = [
  { label: "Main Focus", value: "Backend work, APIs, and auth" },
  { label: "Stack I Use", value: "React, Node.js, Express, MongoDB" },
  { label: "Looking For", value: "Internships and junior roles" },
];

const focusAreas = [
  {
    tag: "API",
    title: "API Work",
    description:
      "I like working on routes, controllers, and connecting the backend properly with the frontend.",
  },
  {
    tag: "AUTH",
    title: "Auth Flow",
    description:
      "JWT auth, protected routes, and role checks are things I use a lot in my practice projects.",
  },
  {
    tag: "STRUCT",
    title: "Clean Structure",
    description:
      "I try to keep folders and code simple so the project stays easier to understand later.",
  },
];

const contactMethods = [
  {
    label: "Email",
    value: primaryEmail,
    description:
      "This is the best way to reach me for internships, junior roles, freelance work, or project discussions.",
    actionLabel: "Send Email",
    href: primaryEmailHref,
    external: false,
  },
  {
    label: "Phone",
    value: "+91 98923 58717",
    description: "You can call if you want to talk directly.",
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
    description: "I sometimes share small updates and thoughts here.",
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
