import { useEffect, useId, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

const OPEN_DELAY = 60;
const CLOSE_DELAY = 140;

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

function DropdownMenu({ label, options, className = "" }) {
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
  }, [location.pathname]);

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

  if (!label || !safeOptions.length) {
    return null;
  }

  return (
    <div
      ref={menuRef}
      className={`relative ${className}`}
      onPointerEnter={() => {
        if (isDesktop) {
          openMenu(true);
        }
      }}
      onPointerLeave={() => {
        if (isDesktop) {
          closeMenu(true);
        }
      }}
      onFocusCapture={() => openMenu()}
      onBlurCapture={(event) => {
        if (!menuRef.current?.contains(event.relatedTarget)) {
          closeMenu();
        }
      }}
    >
      <button
        type="button"
        className={`inline-flex w-full items-center justify-between gap-2 rounded-xl px-4 py-2 text-sm font-medium transition-[color,background-color,transform,box-shadow] duration-200 ease-out md:w-auto md:justify-center ${
          isOpen
            ? "bg-accent-soft text-text-primary shadow-[0_6px_18px_rgba(37,99,235,0.08)]"
            : "text-text-muted hover:-translate-y-0.5 hover:bg-accent-soft hover:text-text-primary"
        }`}
        onClick={() => {
          if (isDesktop) {
            setIsOpen((currentState) => !currentState);
            clearTimers();
            return;
          }

          setIsOpen((currentState) => !currentState);
        }}
        aria-expanded={isOpen}
        aria-haspopup="menu"
        aria-controls={menuId}
      >
        <span>{label}</span>
        <ChevronIcon open={isOpen} />
      </button>

      {isDesktop ? (
        <div
          aria-hidden="true"
          className={`absolute left-0 right-0 top-full h-4 ${isOpen ? "block" : "hidden"}`}
        />
      ) : null}

      <div
        id={menuId}
        role="menu"
        className={`rounded-2xl border border-line bg-panel/95 shadow-[0_16px_40px_rgba(15,23,42,0.08)] backdrop-blur-xl transition-[opacity,transform,max-height,box-shadow,border-color] duration-220 ease-[cubic-bezier(0.22,1,0.36,1)] dark:shadow-[0_18px_45px_rgba(0,0,0,0.28)] ${
          isDesktop
            ? `absolute left-1/2 top-full z-50 mt-2 w-64 -translate-x-1/2 origin-top ${
                isOpen
                  ? "pointer-events-auto translate-y-0 scale-100 opacity-100"
                  : "pointer-events-none -translate-y-1.5 scale-[0.98] opacity-0"
              }`
            : `mt-3 w-full overflow-hidden origin-top ${
                isOpen
                  ? "max-h-80 translate-y-0 opacity-100"
                  : "pointer-events-none max-h-0 -translate-y-1 border-transparent opacity-0 shadow-none"
              }`
        }`}
      >
        <div className="space-y-1 p-2">
          {safeOptions.map((option) => (
            <NavLink
              key={option.link}
              to={option.link}
              end={option.link === "/"}
              role="menuitem"
              className={({ isActive }) =>
                `group flex items-center justify-between rounded-xl px-4 py-3 text-sm font-medium transition-[background-color,color,transform] duration-200 ease-out hover:bg-accent-soft hover:text-text-primary ${
                  isActive ? "bg-accent-soft text-text-primary" : "text-text-muted"
                }`
              }
              onClick={() => closeMenu()}
            >
              <span>{option.label}</span>
              <span className="text-xs uppercase tracking-[0.18em] text-accent transition-transform duration-200 ease-out group-hover:translate-x-0.5">
                Go
              </span>
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );
}

export default DropdownMenu;
