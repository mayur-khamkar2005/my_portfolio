import { useCallback, useEffect, useId, useMemo, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";

const OPEN_DELAY = 40;
const CLOSE_DELAY = 120;
const DEBOUNCE_DELAY = 16;

function ChevronIcon({ open, className = "" }) {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 24 24"
      className={`h-4 w-4 transition-transform duration-200 ease-out will-change-transform ${open ? "rotate-180" : ""} ${className}`}
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
    return window.matchMedia("(min-width: 1024px)").matches;
  });
  const [dropdownPosition, setDropdownPosition] = useState("center");
  const menuRef = useRef(null);
  const triggerRef = useRef(null);
  const closeTimerRef = useRef(null);
  const openTimerRef = useRef(null);
  const rafRef = useRef(null);
  const resizeTimeoutRef = useRef(null);
  const location = useLocation();
  const menuId = useId();

  // Memoized data processing for performance
  const safeOptions = useMemo(
    () =>
      Array.isArray(options)
        ? options.filter(
            (option) => typeof option?.label === "string" && typeof option?.link === "string",
          )
        : [],
    [options],
  );

  const safeGroups = useMemo(
    () =>
      Array.isArray(groups)
        ? groups
            .map((group) => ({
              label: typeof group?.label === "string" ? group.label : "",
              description: typeof group?.description === "string" ? group.description : "",
              link: typeof group?.link === "string" ? group.link : "",
              items: Array.isArray(group?.items)
                ? group.items.filter(
                    (item) => typeof item?.label === "string" && typeof item?.link === "string",
                  )
                : [],
            }))
            .filter((group) => group.label && group.items.length)
        : [],
    [groups],
  );

  const menuGroups = useMemo(() => {
    if (safeGroups.length) return safeGroups;
    if (safeOptions.length) return [{ label, link: to, items: safeOptions }];
    return [];
  }, [safeGroups, safeOptions, label, to]);

  const hasMenu = menuGroups.length > 0;

  const isActive = useMemo(
    () =>
      isMatchingPath(location.pathname, to) ||
      menuGroups.some(
        (group) =>
          isMatchingPath(location.pathname, group.link) ||
          group.items.some((item) => isMatchingPath(location.pathname, item.link)),
      ),
    [location.pathname, to, menuGroups],
  );

  // Calculate dropdown position to prevent overflow
  const calculatePosition = useCallback(() => {
    if (!triggerRef.current || !isDesktop) return;

    const rect = triggerRef.current.getBoundingClientRect();
    const viewportWidth = window.innerWidth;
    const dropdownWidth = Math.min(viewportWidth * 0.92, 896); // 56rem = 896px
    const spaceRight = viewportWidth - rect.left - rect.width / 2;
    const spaceLeft = rect.left + rect.width / 2;

    if (spaceRight < dropdownWidth / 2 && spaceLeft > dropdownWidth / 2) {
      setDropdownPosition("left");
    } else if (spaceLeft < dropdownWidth / 2 && spaceRight > dropdownWidth / 2) {
      setDropdownPosition("right");
    } else {
      setDropdownPosition("center");
    }
  }, [isDesktop]);

  const clearTimers = useCallback(() => {
    if (openTimerRef.current) {
      window.clearTimeout(openTimerRef.current);
      openTimerRef.current = null;
    }
    if (closeTimerRef.current) {
      window.clearTimeout(closeTimerRef.current);
      closeTimerRef.current = null;
    }
    if (rafRef.current) {
      cancelAnimationFrame(rafRef.current);
      rafRef.current = null;
    }
  }, []);

  const openMenu = useCallback(
    (withDelay = false) => {
      if (!hasMenu) return;

      clearTimers();
      calculatePosition();

      if (withDelay) {
        openTimerRef.current = window.setTimeout(() => {
          setIsOpen(true);
          openTimerRef.current = null;
        }, OPEN_DELAY);
        return;
      }

      setIsOpen(true);
    },
    [hasMenu, clearTimers, calculatePosition],
  );

  const closeMenu = useCallback(
    (withDelay = false) => {
      clearTimers();

      if (withDelay) {
        closeTimerRef.current = window.setTimeout(() => {
          setIsOpen(false);
          closeTimerRef.current = null;
        }, CLOSE_DELAY);
        return;
      }

      setIsOpen(false);
    },
    [clearTimers],
  );

  const toggleMenu = useCallback(() => {
    if (isOpen) {
      closeMenu();
    } else {
      openMenu();
    }
  }, [isOpen, closeMenu, openMenu]);

  // Handle resize with debouncing for performance
  useEffect(() => {
    if (typeof window === "undefined" || typeof window.matchMedia !== "function") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(min-width: 1024px)");

    const handleChange = (event) => {
      setIsDesktop(event.matches);
      clearTimers();
      setIsOpen(false);
    };

    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = setTimeout(() => {
        calculatePosition();
      }, DEBOUNCE_DELAY);
    };

    setIsDesktop(mediaQuery.matches);

    // Use modern API with fallback
    if (typeof mediaQuery.addEventListener === "function") {
      mediaQuery.addEventListener("change", handleChange);
    } else {
      mediaQuery.addListener(handleChange);
    }

    window.addEventListener("resize", handleResize, { passive: true });

    return () => {
      if (typeof mediaQuery.removeEventListener === "function") {
        mediaQuery.removeEventListener("change", handleChange);
      } else {
        mediaQuery.removeListener(handleChange);
      }
      window.removeEventListener("resize", handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [clearTimers, calculatePosition]);

  // Close on route change
  useEffect(() => {
    clearTimers();
    setIsOpen(false);
  }, [location.hash, location.pathname, clearTimers]);

  // Handle click outside and escape key
  useEffect(() => {
    if (!isOpen) return undefined;

    // Use RAF for smooth performance
    let isProcessing = false;

    const handlePointerDown = (event) => {
      if (isProcessing) return;
      isProcessing = true;

      rafRef.current = requestAnimationFrame(() => {
        if (typeof event.button === "number" && event.button !== 0) {
          isProcessing = false;
          return;
        }
        if (!menuRef.current?.contains(event.target)) {
          closeMenu();
        }
        isProcessing = false;
      });
    };

    const handleEscape = (event) => {
      if (event.key === "Escape") {
        closeMenu();
      }
    };

    // Use passive listeners for better scroll performance
    document.addEventListener("pointerdown", handlePointerDown, { passive: true });
    document.addEventListener("keydown", handleEscape);

    // Recalculate position when opening
    calculatePosition();

    return () => {
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("keydown", handleEscape);
      if (rafRef.current) {
        cancelAnimationFrame(rafRef.current);
      }
    };
  }, [isOpen, closeMenu, calculatePosition]);

  // Cleanup on unmount
  useEffect(() => {
    return () => {
      clearTimers();
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, [clearTimers]);

  if (!label) {
    return null;
  }

  // Memoized class strings for performance
  const triggerBaseClass = useMemo(
    () =>
      `inline-flex items-center gap-2 rounded-xl px-3 sm:px-4 py-2 text-sm font-medium transition-all duration-200 ease-out will-change-transform ${
        isActive || isOpen
          ? "bg-accent-soft text-text-primary shadow-[0_4px_16px_rgba(37,99,235,0.1)]"
          : "text-text-muted hover:-translate-y-0.5 hover:bg-accent-soft hover:text-text-primary"
      }`,
    [isActive, isOpen],
  );

  // Get position-based transform classes
  const getPositionClasses = useMemo(() => {
    if (!isDesktop) return "";

    const baseClasses = "absolute top-full z-50 mt-2 w-[min(92vw,56rem)] origin-top";

    switch (dropdownPosition) {
      case "left":
        return `${baseClasses} left-0 -translate-x-0`;
      case "right":
        return `${baseClasses} right-0 translate-x-0`;
      default:
        return `${baseClasses} left-1/2 -translate-x-1/2`;
    }
  }, [isDesktop, dropdownPosition]);

  return (
    <div
      ref={menuRef}
      className={`relative isolate ${className}`}
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
      {/* Trigger Container */}
      <div
        ref={triggerRef}
        className={`inline-flex w-full items-center rounded-xl border transition-all duration-200 ease-out lg:w-auto ${
          isActive || isOpen
            ? "border-accent/20 bg-accent-soft/90 shadow-[0_4px_20px_rgba(37,99,235,0.1)]"
            : "border-transparent bg-transparent hover:bg-accent-soft/60"
        }`}
      >
        {to ? (
          <NavLink
            to={to}
            end={false}
            className={`min-w-0 flex-1 rounded-l-xl px-3 sm:px-4 py-2 text-sm font-medium transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${triggerBaseClass}`}
            onClick={() => closeMenu()}
          >
            <span className="truncate">{label}</span>
          </NavLink>
        ) : (
          <button
            type="button"
            className={`min-w-0 flex-1 rounded-l-xl px-3 sm:px-4 py-2 text-left transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${triggerBaseClass}`}
            onClick={toggleMenu}
            aria-expanded={isOpen}
            aria-haspopup="true"
            aria-controls={hasMenu ? menuId : undefined}
          >
            <span className="truncate">{label}</span>
          </button>
        )}

        {hasMenu ? (
          <button
            type="button"
            className={`inline-flex h-9 sm:h-10 shrink-0 items-center justify-center rounded-r-xl px-2 sm:px-3 transition-all duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-accent/50 ${
              isActive || isOpen
                ? "text-text-primary"
                : "text-text-muted hover:-translate-y-0.5 hover:text-text-primary"
            }`}
            onClick={(event) => {
              event.preventDefault();
              event.stopPropagation();
              toggleMenu();
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

      {/* Desktop hover bridge */}
      {isDesktop && hasMenu ? (
        <div
          aria-hidden="true"
          className={`absolute inset-x-0 top-full h-3 ${isOpen ? "block" : "hidden"}`}
        />
      ) : null}

      {/* Dropdown Menu */}
      {hasMenu ? (
        <div
          id={menuId}
          className={`rounded-2xl sm:rounded-3xl border border-line bg-panel-strong transition-all duration-250 ease-[cubic-bezier(0.22,1,0.36,1)] will-change-transform ${
            isDesktop
              ? `${getPositionClasses} ${
                  isOpen
                    ? "pointer-events-auto translate-y-0 scale-100 opacity-100 shadow-[0_24px_60px_-12px_rgba(0,0,0,0.25)] dark:shadow-[0_24px_60px_-12px_rgba(0,0,0,0.5)]"
                    : "pointer-events-none -translate-y-2 scale-[0.98] opacity-0 shadow-none"
                }`
              : `mt-2 w-full overflow-hidden origin-top ${
                  isOpen
                    ? "max-h-[70vh] translate-y-0 opacity-100 shadow-lg"
                    : "pointer-events-none max-h-0 -translate-y-1 border-transparent opacity-0 shadow-none"
                }`
          }`}
        >
          {/* Scrollable content container */}
          <div className="max-h-[min(70vh,28rem)] overflow-y-auto overscroll-contain p-2 sm:p-3 md:p-4 scrollbar-thin">
            {/* Grid layout for skill groups */}
            <div className={`grid gap-2 sm:gap-3 ${isDesktop ? "lg:grid-cols-2" : ""}`}>
              {menuGroups.map((group, groupIndex) => {
                const previewItems = group.items.slice(0, isDesktop ? 4 : 3);
                const remainingCount = Math.max(0, group.items.length - previewItems.length);

                return (
                  <div
                    key={`${group.label}-${group.link || group.items[0]?.link || groupIndex}`}
                    className="self-start rounded-xl sm:rounded-2xl border border-line bg-background/95 p-3 sm:p-4 md:p-5 shadow-sm transition-all duration-200 hover:border-accent/40 hover:shadow-md"
                    style={{
                      animationDelay: isOpen ? `${groupIndex * 30}ms` : "0ms",
                    }}
                  >
                    {/* Group Header */}
                    <div className="flex items-start justify-between gap-2 sm:gap-3">
                      <div className="min-w-0 flex-1">
                        {group.link ? (
                          <Link
                            to={group.link}
                            className="group/link flex items-center gap-1.5 font-display text-sm font-semibold text-text-primary transition-colors duration-200 hover:text-accent"
                            onClick={() => closeMenu()}
                          >
                            <span className="truncate">{group.label}</span>
                            <svg
                              className="h-3.5 w-3.5 opacity-0 -translate-x-1 transition-all duration-200 group-hover/link:opacity-100 group-hover/link:translate-x-0"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor"
                              strokeWidth={2}
                            >
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </Link>
                        ) : (
                          <p className="font-display text-sm font-semibold text-text-primary truncate">
                            {group.label}
                          </p>
                        )}
                        {group.description ? (
                          <p className="mt-1.5 text-xs sm:text-sm leading-relaxed text-text-muted line-clamp-2">
                            {group.description}
                          </p>
                        ) : null}
                      </div>
                      {/* Item count badge */}
                      <span className="shrink-0 rounded-full border border-line bg-background px-2 py-0.5 text-[10px] sm:text-[11px] font-medium uppercase tracking-wider text-text-muted">
                        {group.items.length}
                      </span>
                    </div>

                    {/* Skill tags */}
                    <div className="mt-3 sm:mt-4 flex flex-wrap gap-1.5 sm:gap-2">
                      {previewItems.map((option, optionIndex) => (
                        <NavLink
                          key={option.link}
                          to={option.link}
                          className={({ isActive: isOptionActive }) =>
                            `group/tag inline-flex items-center gap-1 rounded-full border px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium transition-all duration-150 ${
                              isOptionActive
                                ? "border-accent bg-accent-soft text-accent shadow-sm"
                                : "border-line text-text-muted hover:border-accent/60 hover:text-text-primary hover:bg-accent-soft/30"
                            }`
                          }
                          onClick={() => closeMenu()}
                          style={{
                            animationDelay: isOpen ? `${groupIndex * 30 + optionIndex * 20}ms` : "0ms",
                          }}
                        >
                          <span className="truncate max-w-[8rem] sm:max-w-[10rem]">{option.label}</span>
                          <svg
                            className="h-3 w-3 opacity-0 -translate-x-1 transition-all duration-150 group-hover/tag:opacity-100 group-hover/tag:translate-x-0"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            strokeWidth={2}
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                          </svg>
                        </NavLink>
                      ))}

                      {/* More items indicator */}
                      {remainingCount ? (
                        group.link ? (
                          <Link
                            to={group.link}
                            className="inline-flex items-center gap-1 rounded-full border border-dashed border-line px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium text-text-muted transition-all duration-150 hover:border-accent hover:text-accent hover:bg-accent-soft/20"
                            onClick={() => closeMenu()}
                          >
                            <span>+{remainingCount}</span>
                            <span className="hidden sm:inline">more</span>
                          </Link>
                        ) : (
                          <span className="inline-flex items-center gap-1 rounded-full border border-dashed border-line px-2.5 sm:px-3 py-1 sm:py-1.5 text-[11px] sm:text-xs font-medium text-text-muted">
                            <span>+{remainingCount}</span>
                            <span className="hidden sm:inline">more</span>
                          </span>
                        )
                      ) : null}
                    </div>

                    {/* View all link */}
                    {group.link ? (
                      <Link
                        to={group.link}
                        className="group mt-3 sm:mt-4 inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-accent transition-all duration-150 hover:text-text-primary"
                        onClick={() => closeMenu()}
                      >
                        <span>View all</span>
                        <svg
                          className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                      </Link>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default DropdownMenu;
