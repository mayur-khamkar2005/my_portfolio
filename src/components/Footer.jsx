import { isSafeExternalHref } from "../lib/url";

function Footer({ socialLinks }) {
  const links = Array.isArray(socialLinks)
    ? socialLinks.filter(
        (link) =>
          typeof link?.label === "string" && isSafeExternalHref(link?.href),
      )
    : [];

  return (
    <footer className="section-shell pb-10">
      <div className="flex flex-col gap-4 border-t pt-8 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p className="font-medium">
          &copy; {new Date().getFullYear()} Mayur Khamkar
        </p>
        {links.length ? (
          <div className="flex flex-wrap items-center gap-6">
            {links.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noreferrer"
                className="transition-[color,transform] duration-200 ease-out hover:text-accent"
              >
                {link.label}
              </a>
            ))}
          </div>
        ) : null}
      </div>
    </footer>
  );
}

export default Footer;
