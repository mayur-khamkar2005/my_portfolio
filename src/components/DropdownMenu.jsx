import { useEffect, useId, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const OPEN_DELAY = 70;
const CLOSE_DELAY = 160;

function ChevronIcon({ open }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-4 w-4 transition-transform duration-200 ease-out ${open ? "rotate-180" : ""}`}
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m6 9 6 6 6-6" />
    </svg>
  );
}

function isMatchingPath(pathname, link) {
  if (typeof link !== "string" || !link) {
    return false;
  }

  const [routePath] = link.split("#");

  if (!routePath) {
    return false;
  }

  if (routePath === "/") {
    return pathname === "/";
  }

  return pathname === routePath || pathname.startsWith(`${routePath}/`);
}

function DropdownMenu({ label, to = "", options = [], groups = [], className = "" }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return false;
    }

    return window.matchMedia("(min-width: 768px)").matches;
  });
  const menuRef = useRef(null);
  const closeTimerRef = useRef(null);
  const openTimerRef = useRef(null);
  const location = useLocation();
  const menuId = useId();

  const safeOptions = Array.isArray(options)
    ? options.filter(
        (option) => typeof option?.label === "string" && typeof option?.link === "string",
      )
    : [];

  const safeGroups = Array.isArray(groups)
    ? groups
        .map((group) => ({
          label: typeof group?.label === "string" ? group.label : "",
          link: typeof group?.link === "string" ? group.link : "",
          items: Array.isArray(group?.items)
            ? group.items.filter(
                (item) => typeof item?.label === "string" && typeof item?.link === "string",
              )
            : [],
        }))
        .filter((group) => group.label && group.items.length)
    : [];

  const menuGroups = safeGroups.length
    ? safeGroups
    : safeOptions.length
      ? [{ label, link: to, items: safeOptions }]
      : [];
  const hasMenu = menuGroups.length > 0;
  const desktopColumnsClass =
    menuGroups.length >= 6 ? "md:grid-cols-2 xl:grid-cols-3" : "md:grid-cols-2";
  const isActive =
    isMatchingPath(location.pathname, to) ||
    menuGroups.some(
      (group) =>
        isMatchingPath(location.pathname, group.link) ||
        group.items.some((item) => isMatchingPath(location.pathname, item.link)),
    );

  const clearTimers = () => {
    if (openTimerRef.current) {
      window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }

    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
  };

  const openMenu = (withDelay = false) => {
    if (!hasMenu) {
      return;
    }

    clearTimers();

    if (withDelay) {
      openTimerRef.current = window.setTimeout(() => {
        setIsOpen(true);
        openTimerRef.current = null;
      }, OPEN_DELAY);
      return;
    }

    setIsOpen(true);
  };

  const closeMenu = (withDelay = false) => {
    clearTimers();

    if (withDelay) {
      closeTimerRef.current = window.setTimeout(() => {
        setIsOpen(false);
        closeTimerRef.current = null;
      }, CLOSE_DELAY);
      return;
    }

    setIsOpen(false);
  };

  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(min-width: 768px)");
    const handleChange = (event) => {
      setIsDesktop(event.matches);
      clearTimers();
      setIsOpen(false);
    };

    setIsDesktop(mediaQuery.matches);

    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    mediaQuery.addListener(handleChange);
    return () => mediaQuery.removeListener(handleChange);
  }, []);

  useEffect(() => {
    clearTimers();
    setIsOpen(false);
  }, [location.hash, location.pathname]);

  useEffect(() => {
    if (!isOpen) {
      return undefined;
    }

    const handlePointerDown = (event) => {
      if (!menuRef.current?.contains(event.target)) {
        closeMenu();
      }
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleEscape);

    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
    };
  }, [isOpen]);

  useEffect(() => clearTimers, []);

  if (!label) {
    return null;
  }

  const triggerBaseClass = `inline-flex items-center gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-[color,background-color,transform,border-color,box-shadow] duration-200 ease-out ${
    isActive || isOpen
      ? "bg-accent-soft text-text-primary shadow-[0_8px_24px_rgba(37,99,235,0.08)]"
      : "text-text-muted hover:-translate-y-0.5 hover:bg-accent-soft hover:text-text-primary"
  }`;

  return (
    <div
      ref={menuRef}
      className={`relative ${className}`}
      onPointerEnter={() => {
        if (isDesktop && hasMenu) {
          openMenu(true);
        }
      }}
      onPointerLeave={() => {
        if (isDesktop && hasMenu) {
          closeMenu(true);
        }
      }}
      onFocusCapture={() => {
        if (hasMenu) {
          openMenu();
        }
      }}
      onBlurCapture={(event) => {
        if (!menuRef.current?.contains(event.relatedTarget)) {
          closeMenu();
        }
      }}
    >
      <div
        className={`inline-flex w-full items-center rounded-xl border border-transparent transition-[border-color,background-color,box-shadow] duration-200 ease-out md:w-auto ${
          isActive || isOpen
            ? "bg-accent-soft/90 shadow-[0_8px_24px_rgba(37,99,235,0.08)]"
            : "hover:bg-accent-soft/80"
        }`}
      >
        {to ? (
          <NavLink
            to={to}
            end={false}
            className={`min-w-0 flex-1 rounded-l-xl px-4 py-2 text-sm font-medium transition-[color,transform] duration-200 ease-out focus:outline-none ${triggerBaseClass}`}
            onClick={() => closeMenu()}
          >
            {label}
          </NavLink>
        ) : (
          <button
            type="button"
            className={`min-w-0 flex-1 rounded-l-xl text-left ${triggerBaseClass}`}
            onClick={() => {
              if (hasMenu) {
                setIsOpen((currentState) => !currentState);
              }
            }}
          >
            {label}
          </button>
        )}

        {hasMenu ? (
          <button
            type="button"
            className={`inline-flex h-10 shrink-0 items-center justify-center rounded-r-xl px-3 text-text-muted transition-[color,transform] duration-200 ease-out focus:outline-none ${
              isActive || isOpen
                ? "text-text-primary"
                : "hover:-translate-y-0.5 hover:text-text-primary"
            }`}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              clearTimers();
              setIsOpen((currentState) => !currentState);
            }}
            aria-expanded={isOpen}
            aria-haspopup="true"
            aria-controls={menuId}
            aria-label={`${isOpen ? "Close" : "Open"} ${label} menu`}
          >
            <ChevronIcon open={isOpen} />
          </button>
        ) : null}
      </div>

      {isDesktop && hasMenu ? (
        <div
          aria-hidden="true"
          className={`absolute inset-x-0 top-full h-4 ${isOpen ? "block" : "hidden"}`}
        />
      ) : null}

      {hasMenu ? (
        <div
          id={menuId}
          className={`rounded-[1.5rem] border border-line bg-panel-strong transition-[opacity,transform,max-height,box-shadow,border-color] duration-220 ease-[cubic-bezier(0.22,1,0.36,1)] dark:shadow-[0_22px_60px_rgba(0,0,0,0.28)] ${
            isDesktop
              ? `absolute left-1/2 top-full z-50 mt-2 w-[min(96vw,62rem)] -translate-x-1/2 origin-top ${
                  isOpen
                    ? "pointer-events-auto translate-y-0 scale-100 opacity-100 shadow-[0_18px_44px_rgba(15,23,42,0.16)]"
                    : "pointer-events-none -translate-y-1.5 scale-[0.98] opacity-0 shadow-none"
                }`
              : `mt-3 w-full overflow-hidden origin-top ${
                  isOpen
                    ? "max-h-[32rem] translate-y-0 opacity-100"
                    : "pointer-events-none max-h-0 -translate-y-1 border-transparent opacity-0 shadow-none"
                }`
          }`}
        >
          <div className="max-h-[min(72vh,30rem)] overflow-y-auto overscroll-contain p-3 sm:p-4">
            <div className={`grid gap-3 ${isDesktop ? desktopColumnsClass : ""}`}>
              {menuGroups.map((group) => (
                <div
                  key={`${group.label}-${group.link || group.items[0]?.link || "group"}`}
                  className="rounded-2xl border border-line bg-background p-4 shadow-sm"
                >
                  <div className="mb-3 flex items-start justify-between gap-3">
                    <div>
                      {group.link ? (
                        <Link
                          to={group.link}
                          className="font-display text-sm font-semibold text-text-primary transition-colors duration-200 hover:text-accent"
                          onClick={() => closeMenu()}
                        >
                          {group.label}
                        </Link>
                      ) : (
                        <p className="font-display text-sm font-semibold text-text-primary">
                          {group.label}
                        </p>
                      )}
                      <p className="mt-1 text-[11px] uppercase tracking-[0.18em] text-text-muted">
                        {group.items.length} skill{group.items.length > 1 ? "s" : ""}
                      </p>
                    </div>
                  </div>

                  <div className="space-y-1">
                    {group.items.map((option) => (
                      <NavLink
                        key={option.link}
                        to={option.link}
                        className={({ isActive: isOptionActive }) =>
                          `group flex items-center justify-between gap-3 rounded-xl px-3 py-2 text-sm font-medium transition-[background-color,color] duration-150 ease-out hover:bg-accent-soft hover:text-text-primary ${
                            isOptionActive
                              ? "bg-accent-soft text-text-primary"
                              : "text-text-muted"
                          }`
                        }
                        onClick={() => closeMenu()}
                      >
                        <span className="min-w-0 truncate">{option.label}</span>
                        <span className="shrink-0 text-[11px] uppercase tracking-[0.18em] text-accent">
                          View
                        </span>
                      </NavLink>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DropdownMenu;
