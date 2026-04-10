import { useEffect, useId, useMemo, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import DropdownMenu from "./DropdownMenu";
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

function Navbar({ navigation, skillMenuGroups = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const mobilePanelId = useId();
  const navItems = useMemo(
    () =>
      Array.isArray(navigation)
        ? navigation.filter(
            (item) => typeof item?.label === "string" && typeof item?.link === "string",
          )
        : [],
    [navigation],
  );
  const safeSkillMenuGroups = useMemo(
    () =>
      Array.isArray(skillMenuGroups)
        ? skillMenuGroups.filter(
            (group) =>
              typeof group?.label === "string" &&
              typeof group?.link === "string" &&
              Array.isArray(group?.items),
          )
        : [],
    [skillMenuGroups],
  );

  useEffect(() => {
    setIsOpen(false);
  }, [location.hash, location.pathname]);

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(min-width: 1024px)");
    const handleChange = (event) => {
      if (event.matches) {
        setIsOpen(false);
      }
    };

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") {
      return undefined;
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 12);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-3 sm:px-6 sm:pt-4">
      <div className="mx-auto max-w-6xl">
        <div
          className={`surface-card relative px-4 py-3 transition-[transform,background-color,border-color,box-shadow] duration-200 ease-out sm:px-6 ${
            isScrolled
              ? "border-line bg-panel-strong shadow-[0_18px_42px_-24px_rgba(15,23,42,0.38)]"
              : "border-line bg-panel"
          }`}
        >
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-6 top-0 h-px bg-gradient-to-r from-transparent via-accent to-transparent opacity-70"
          />

          <div className="relative flex items-center justify-between gap-4">
            <Link to="/" className="group flex min-w-0 flex-1 items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-text-primary text-sm font-medium text-white transition-colors duration-200 group-hover:bg-accent">
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
            </Link>

            {navItems.length ? (
              <nav className="hidden items-center gap-1 lg:flex">
                {navItems.map((item) =>
                  item.hasDropdown ? (
                    <DropdownMenu
                      key={item.link}
                      label={item.label}
                      to={item.link}
                      groups={safeSkillMenuGroups}
                    />
                  ) : (
                    <NavLink
                      key={item.link}
                      to={item.link}
                      end={item.link === "/"}
                      className={({ isActive }) =>
                        `rounded-lg px-4 py-2 text-sm font-medium transition-[color,background-color,transform] duration-200 ease-out ${
                          isActive
                            ? "bg-accent-soft text-text-primary"
                            : "text-text-muted hover:-translate-y-0.5 hover:bg-accent-soft hover:text-text-primary"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ),
                )}
              </nav>
            ) : null}

            <div className="flex items-center gap-2">
              <div className="hidden lg:block">
                <ThemeToggle />
              </div>
              {navItems.length ? (
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border text-text-primary transition-[border-color,color,background-color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-accent hover:bg-accent-soft hover:text-accent lg:hidden"
                  onClick={() => setIsOpen((currentState) => !currentState)}
                  aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={isOpen}
                  aria-controls={mobilePanelId}
                >
                  {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
              ) : null}
            </div>
          </div>
        </div>

        {navItems.length ? (
          <div
            id={mobilePanelId}
            className={`mt-3 overflow-hidden transition-[max-height,opacity,transform] duration-250 ease-out lg:hidden ${
              isOpen
                ? "max-h-[80vh] translate-y-0 opacity-100"
                : "pointer-events-none max-h-0 -translate-y-2 opacity-0"
            }`}
            aria-hidden={!isOpen}
          >
            <div className="surface-card space-y-4 px-4 py-4">
              <nav className="flex flex-col gap-2">
                {navItems.map((item) =>
                  item.hasDropdown ? (
                    <DropdownMenu
                      key={item.link}
                      label={item.label}
                      to={item.link}
                      groups={safeSkillMenuGroups}
                      className="w-full"
                    />
                  ) : (
                    <NavLink
                      key={item.link}
                      to={item.link}
                      end={item.link === "/"}
                      className={({ isActive }) =>
                        `rounded-xl px-4 py-3 text-sm font-medium transition-[background-color,color,transform] duration-200 ease-out ${
                          isActive
                            ? "bg-accent-soft text-text-primary"
                            : "text-text-primary hover:bg-accent-soft"
                        }`
                      }
                    >
                      {item.label}
                    </NavLink>
                  ),
                )}
              </nav>
              <ThemeToggle fullWidth tabIndex={isOpen ? 0 : -1} />
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Navbar;
