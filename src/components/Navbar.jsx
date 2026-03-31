import { useEffect, useState } from "react";
import ThemeToggle from "./ThemeToggle";

function MenuIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M4 7h16M4 12h16M4 17h16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className="h-5 w-5"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
    >
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

function Navbar({ navigation }) {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const closeMenu = () => setIsOpen(false);

    window.addEventListener("hashchange", closeMenu);

    return () => window.removeEventListener("hashchange", closeMenu);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="surface-card flex items-center justify-between px-4 py-3 sm:px-6">
          <a href="#home" className="group flex min-w-0 flex-1 items-center gap-3">
            <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-text-primary text-sm font-medium text-white transition-colors duration-300 group-hover:bg-accent">
              MK
            </span>
            <span className="flex min-w-0 flex-col">
              <span className="truncate font-display text-sm font-medium text-text-primary">
                Mayur Khamkar
              </span>
              <span className="hidden text-xs text-text-muted min-[380px]:block">
                Full Stack Developer
              </span>
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex">
            {navigation.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="rounded-lg px-4 py-2 text-sm font-medium text-text-muted transition-all duration-300 hover:text-text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <div className="hidden md:block">
              <ThemeToggle />
            </div>
            <button
              type="button"
              className="inline-flex h-10 w-10 items-center justify-center rounded-xl border text-text-primary transition-all duration-300 hover:border-accent hover:text-accent md:hidden"
              onClick={() => setIsOpen((currentState) => !currentState)}
              aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
              aria-expanded={isOpen}
            >
              {isOpen ? <CloseIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 md:hidden ${
            isOpen ? "mt-3 max-h-96 opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="surface-card space-y-4 px-4 py-4">
            <nav className="flex flex-col gap-2">
              {navigation.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  className="rounded-xl px-4 py-3 text-sm font-medium text-text-primary transition-all duration-300 hover:bg-accent-soft"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <ThemeToggle fullWidth />
          </div>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
