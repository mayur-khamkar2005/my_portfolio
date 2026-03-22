function Footer({ socialLinks }) {
  return (
    <footer className="section-shell pb-10">
      <div className="flex flex-col gap-4 border-t pt-6 text-sm text-text-muted sm:flex-row sm:items-center sm:justify-between">
        <p>
          © {new Date().getFullYear()} Mayur Khamkar. @26
        </p>
        <div className="flex flex-wrap items-center gap-4">
          {socialLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              target="_blank"
              rel="noreferrer"
              className="transition duration-300 hover:text-accent"
            >
              {link.label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}

export default Footer;
