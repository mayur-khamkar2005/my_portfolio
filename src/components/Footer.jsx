import { Link } from "react-router-dom";
import { isSafeExternalHref } from "../lib/url";

function Footer({ navigation, primaryEmailHref, resumeUrl, socialLinks }) {
  const links = Array.isArray(socialLinks)
    ? socialLinks.filter(
        (link) => typeof link?.label === "string" && isSafeExternalHref(link?.href),
      )
    : [];
  const quickLinks = Array.isArray(navigation)
    ? navigation.filter(
        (item) => typeof item?.label === "string" && typeof item?.link === "string",
      )
    : [];
  const primaryEmail =
    typeof primaryEmailHref === "string" && primaryEmailHref.startsWith("mailto:")
      ? primaryEmailHref.replace(/^mailto:/, "").split("?")[0]
      : "";
  const hasResume = typeof resumeUrl === "string" && resumeUrl.trim().length > 0;

  return (
    <footer className="section-shell pb-8 pt-6 sm:pb-10 sm:pt-8">
      <div className="surface-card-strong relative overflow-hidden">
        <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-70" />
        <div className="absolute right-[-3rem] top-[-3rem] h-32 w-32 rounded-full bg-accent-soft opacity-70 blur-[70px]" />

        <div className="flex flex-col gap-6 px-5 py-6 sm:px-7 sm:py-7 lg:flex-row lg:items-center lg:justify-between lg:gap-8">
          <div className="max-w-2xl">
            <p className="eyebrow">Footer</p>
            <h2 className="mt-3 font-display text-xl font-semibold tracking-tight text-text-primary sm:text-2xl">
              Mayur Khamkar
            </h2>
            <p className="mt-3 max-w-xl text-sm leading-7 text-text-muted sm:text-[15px]">
              Fresher full-stack developer working with MERN stack projects, backend APIs,
              auth flow, and responsive UI. Open to internships, junior roles.
            </p>
          </div>

          <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row lg:shrink-0">
            {primaryEmailHref ? (
              <a href={primaryEmailHref} className="primary-link w-full sm:w-auto">
                Contact Me
              </a>
            ) : null}
            {hasResume ? (
              <a
                href={resumeUrl}
                download="Mayur_Khamkar_FullStack_Developer_Resume.pdf"
                className="ghost-link w-full sm:w-auto"
              >
                Resume
              </a>
            ) : null}
          </div>
        </div>

        <div className="border-t border-line/80 px-5 py-4 sm:px-7">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <nav className="flex flex-wrap gap-2.5" aria-label="Footer navigation">
              {quickLinks.map((item) => (
                <Link
                  key={item.link}
                  to={item.link}
                  className="footer-link inline-flex items-center rounded-full border border-line/80 bg-background/55 px-3.5 py-2 text-sm text-text-muted"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <div className="flex flex-wrap gap-2.5">
              {primaryEmail ? (
                <a
                  href={primaryEmailHref}
                  className="footer-link inline-flex min-w-0 items-center rounded-full border border-line/80 bg-background/55 px-3.5 py-2 text-sm text-text-muted"
                >
                  <span className="truncate">{primaryEmail}</span>
                </a>
              ) : null}
              <a
                href="tel:+919892358717"
                className="footer-link inline-flex items-center rounded-full border border-line/80 bg-background/55 px-3.5 py-2 text-sm text-text-muted"
              >
                +91 98923 58717
              </a>
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noreferrer"
                  className="footer-link inline-flex items-center rounded-full border border-line/80 bg-background/55 px-3.5 py-2 text-sm text-text-muted"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2 border-t border-line/80 px-5 py-3 text-xs text-text-muted sm:px-7 md:flex-row md:items-center md:justify-between">
          <p>&copy; {new Date().getFullYear()} Mayur Khamkar.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
