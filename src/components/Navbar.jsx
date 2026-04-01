import { useEffect, useRef, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import {
  gsap,
  hasFinePointer,
  prefersReducedMotion,
  useIsomorphicLayoutEffect,
} from "../lib/gsap";
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

function Navbar({ navigation, dropdownOptions = [] }) {
  const [isOpen, setIsOpen] = useState(false);
  const headerRef = useRef(null);
  const surfaceRef = useRef(null);
  const mobilePanelRef = useRef(null);
  const mobileInnerRef = useRef(null);
  const location = useLocation();
  const navItems = Array.isArray(navigation)
    ? navigation.filter(
        (item) => typeof item?.label === "string" && typeof item?.link === "string",
      )
    : [];
  const safeDropdownOptions = Array.isArray(dropdownOptions)
    ? dropdownOptions.filter(
        (item) => typeof item?.label === "string" && typeof item?.link === "string",
      )
    : [];

  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (typeof window.matchMedia !== "function") {
      return undefined;
    }

    const mediaQuery = window.matchMedia("(min-width: 768px)");
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

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion()) {
      return undefined;
    }

    const scope = headerRef.current;
    const surface = surfaceRef.current;

    if (!scope || !surface) {
      return undefined;
    }

    const cleanupFns = [];
    const ctx = gsap.context(() => {
      const beam = scope.querySelector("[data-nav-beam]");
      const badge = scope.querySelector("[data-nav-badge]");

      gsap.set(surface, {
        transformPerspective: 1000,
        transformOrigin: "50% 0%",
        transformStyle: "preserve-3d",
      });

      gsap
        .timeline({ defaults: { ease: "power3.out" } })
        .fromTo(
          surface,
          { y: -18, autoAlpha: 0, rotateX: -12, scale: 0.975 },
          {
            y: 0,
            autoAlpha: 1,
            rotateX: 0,
            scale: 1,
            duration: 0.56,
            clearProps: "opacity,visibility",
          },
        )
        .fromTo(
          "[data-nav-brand]",
          { x: -16, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.3,
            clearProps: "opacity,visibility,transform",
          },
          0.1,
        )
        .fromTo(
          "[data-nav-link]",
          { y: -10, autoAlpha: 0 },
          {
            y: 0,
            autoAlpha: 1,
            duration: 0.24,
            stagger: 0.045,
            clearProps: "opacity,visibility,transform",
          },
          0.16,
        )
        .fromTo(
          "[data-nav-actions]",
          { x: 10, autoAlpha: 0 },
          {
            x: 0,
            autoAlpha: 1,
            duration: 0.28,
            clearProps: "opacity,visibility,transform",
          },
          0.16,
        )
        .fromTo(
          "[data-nav-beam]",
          { scaleX: 0.68, autoAlpha: 0 },
          {
            scaleX: 1,
            autoAlpha: 1,
            duration: 0.36,
            clearProps: "opacity,visibility,transform",
          },
          0.2,
        );

      gsap.to(surface, {
        y: -4,
        scale: 0.986,
        duration: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "+=180",
          scrub: 0.8,
        },
      });

      if (beam) {
        gsap.to(beam, {
          opacity: 0.95,
          scaleX: 1.08,
          duration: 1,
          ease: "none",
          scrollTrigger: {
            trigger: document.documentElement,
            start: "top top",
            end: "+=180",
            scrub: 0.8,
          },
        });
      }

      if (hasFinePointer()) {
        const rotateXTo = gsap.quickTo(surface, "rotateX", {
          duration: 0.4,
          ease: "power3.out",
        });
        const rotateYTo = gsap.quickTo(surface, "rotateY", {
          duration: 0.4,
          ease: "power3.out",
        });
        const badgeXTo = badge
          ? gsap.quickTo(badge, "x", { duration: 0.42, ease: "power3.out" })
          : null;
        const badgeYTo = badge
          ? gsap.quickTo(badge, "y", { duration: 0.42, ease: "power3.out" })
          : null;
        const beamXTo = beam
          ? gsap.quickTo(beam, "xPercent", { duration: 0.56, ease: "power3.out" })
          : null;

        const handlePointerMove = (event) => {
          const bounds = surface.getBoundingClientRect();
          const horizontal = (event.clientX - bounds.left) / bounds.width - 0.5;
          const vertical = (event.clientY - bounds.top) / bounds.height - 0.5;

          rotateYTo(horizontal * 1.6);
          rotateXTo(vertical * -1.5);
          badgeXTo?.(horizontal * 3);
          badgeYTo?.(vertical * 3);
          beamXTo?.(horizontal * 14);
        };

        const resetPointer = () => {
          rotateXTo(0);
          rotateYTo(0);
          badgeXTo?.(0);
          badgeYTo?.(0);
          beamXTo?.(0);
        };

        surface.addEventListener("pointermove", handlePointerMove);
        surface.addEventListener("pointerleave", resetPointer);
        surface.addEventListener("pointercancel", resetPointer);

        cleanupFns.push(() => {
          surface.removeEventListener("pointermove", handlePointerMove);
          surface.removeEventListener("pointerleave", resetPointer);
          surface.removeEventListener("pointercancel", resetPointer);
        });
      }
    }, scope);

    return () => {
      cleanupFns.forEach((cleanup) => cleanup());
      ctx.revert();
    };
  }, [navItems.length, safeDropdownOptions.length]);

  useIsomorphicLayoutEffect(() => {
    const panel = mobilePanelRef.current;
    const inner = mobileInnerRef.current;

    if (!panel || !inner || (!navItems.length && !safeDropdownOptions.length)) {
      return undefined;
    }

    const links = inner.querySelectorAll("[data-mobile-link]");

    if (prefersReducedMotion()) {
      gsap.set(panel, {
        height: isOpen ? "auto" : 0,
        autoAlpha: isOpen ? 1 : 0,
        y: 0,
        pointerEvents: isOpen ? "auto" : "none",
      });
      return undefined;
    }

    gsap.killTweensOf(panel);
    gsap.killTweensOf(links);

    if (isOpen) {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      gsap.set(panel, { pointerEvents: "auto" });
      tl.to(panel, {
        height: inner.offsetHeight,
        autoAlpha: 1,
        y: 0,
        duration: 0.34,
        overwrite: true,
      }).fromTo(
        links,
        { y: -10, autoAlpha: 0 },
        {
          y: 0,
          autoAlpha: 1,
          duration: 0.22,
          stagger: 0.035,
          clearProps: "opacity,visibility,transform",
        },
        0.08,
      );

      tl.add(() => gsap.set(panel, { height: "auto" }));

      return () => tl.kill();
    }

    const tl = gsap.timeline({ defaults: { ease: "power2.inOut" } });

    gsap.set(panel, { pointerEvents: "none" });
    tl.to(links, {
      y: -8,
      autoAlpha: 0,
      duration: 0.14,
      stagger: { each: 0.02, from: "end" },
      overwrite: true,
    }).to(
      panel,
      {
        height: 0,
        autoAlpha: 0,
        y: -6,
        duration: 0.22,
        overwrite: true,
      },
      0.04,
    );

    return () => tl.kill();
  }, [isOpen, navItems.length, safeDropdownOptions.length]);

  return (
    <header ref={headerRef} className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div ref={surfaceRef} className="surface-card motion-plane relative px-4 py-3 sm:px-6">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-10 top-0 h-px origin-center bg-gradient-to-r from-transparent via-accent to-transparent opacity-70"
            data-nav-beam
          />

          <div className="relative flex items-center justify-between gap-4">
            <Link
              to="/"
              className="group flex min-w-0 flex-1 items-center gap-3"
              data-nav-brand
            >
              <span
                className="flex h-10 w-10 items-center justify-center rounded-xl bg-text-primary text-sm font-medium text-white transition-colors duration-200 group-hover:bg-accent"
                data-nav-badge
              >
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

            {navItems.length || safeDropdownOptions.length ? (
              <nav className="hidden items-center gap-1 md:flex">
                {navItems.map((item) => (
                  <NavLink
                    key={item.link}
                    to={item.link}
                    end={item.link === "/"}
                    className={({ isActive }) =>
                      `rounded-lg px-4 py-2 text-sm font-medium transition-[color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:text-text-primary ${
                        isActive ? "text-text-primary" : "text-text-muted"
                      }`
                    }
                    data-nav-link
                  >
                    {item.label}
                  </NavLink>
                ))}
                {safeDropdownOptions.length ? (
                  <div data-nav-link>
                    <DropdownMenu label="Explore" options={safeDropdownOptions} />
                  </div>
                ) : null}
              </nav>
            ) : null}

            <div className="flex items-center gap-2" data-nav-actions>
              <div className="hidden md:block">
                <ThemeToggle />
              </div>
              {navItems.length || safeDropdownOptions.length ? (
                <button
                  type="button"
                  className="inline-flex h-10 w-10 items-center justify-center rounded-xl border text-text-primary transition-[border-color,color,transform] duration-200 ease-out hover:-translate-y-0.5 hover:border-accent hover:text-accent md:hidden"
                  onClick={() => setIsOpen((currentState) => !currentState)}
                  aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
                  aria-expanded={isOpen}
                  data-mobile-toggle
                >
                  {isOpen ? <CloseIcon /> : <MenuIcon />}
                </button>
              ) : null}
            </div>
          </div>
        </div>

        {navItems.length || safeDropdownOptions.length ? (
          <div
            ref={mobilePanelRef}
            className="h-0 overflow-hidden opacity-0 md:hidden"
            aria-hidden={!isOpen}
          >
            <div ref={mobileInnerRef} className="mt-3">
              <div className="surface-card space-y-4 px-4 py-4">
                <nav className="flex flex-col gap-2">
                  {navItems.map((item) => (
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
                      data-mobile-link
                    >
                      {item.label}
                    </NavLink>
                  ))}
                  {safeDropdownOptions.length ? (
                    <div data-mobile-link>
                      <DropdownMenu
                        label="Explore"
                        options={safeDropdownOptions}
                        className="w-full"
                      />
                    </div>
                  ) : null}
                </nav>
                <ThemeToggle fullWidth tabIndex={isOpen ? 0 : -1} />
              </div>
            </div>
          </div>
        ) : null}
      </div>
    </header>
  );
}

export default Navbar;
