import { useEffect, useRef } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { gsap, prefersReducedMotion, useIsomorphicLayoutEffect } from "../lib/gsap";
import { primaryNavigation } from "../lib/siteNavigation";
import { skillMenuGroups, socialLinks } from "../lib/siteContent";
import { decodeHashFragment } from "../lib/url";

function Layout() {
  const location = useLocation();
  const pageRef = useRef(null);
  const topGlowRef = useRef(null);
  const sideGlowRef = useRef(null);
  const isSkillsRoute = location.pathname === "/skills" || location.pathname.startsWith("/skills/");

  const safeNavigation = primaryNavigation.filter(
    (item) => typeof item?.label === "string" && typeof item?.link === "string",
  );
  const safeSkillMenuGroups = skillMenuGroups.filter(
    (group) =>
      typeof group?.label === "string" &&
      typeof group?.link === "string" &&
      Array.isArray(group?.items),
  );
  const safeSocialLinks = socialLinks.filter(
    (item) => typeof item?.label === "string" && typeof item?.href === "string",
  );

  useIsomorphicLayoutEffect(() => {
    if (prefersReducedMotion() || isSkillsRoute) {
      return undefined;
    }

    const scope = pageRef.current;

    if (!scope) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      if (topGlowRef.current) {
        gsap.to(topGlowRef.current, {
          xPercent: 12,
          yPercent: -12,
          scale: 1.1,
          duration: 6.4,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });
      }

      if (sideGlowRef.current) {
        gsap.to(sideGlowRef.current, {
          xPercent: -10,
          scale: 1.08,
          duration: 7.2,
          repeat: -1,
          yoyo: true,
          ease: "sine.inOut",
        });

        gsap.to(sideGlowRef.current, {
          yPercent: -22,
          ease: "none",
          scrollTrigger: {
            trigger: scope,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.8,
          },
        });
      }
    }, scope);

    return () => ctx.revert();
  }, [isSkillsRoute]);

  useEffect(() => {
    const frameId = window.requestAnimationFrame(() => {
      const hashId = decodeHashFragment(location.hash);
      const target = hashId ? document.getElementById(hashId) : null;

      if (target) {
        const behavior = prefersReducedMotion() ? "auto" : "smooth";
        target.scrollIntoView({ block: "start", behavior });
        return;
      }

      window.scrollTo({ top: 0, behavior: "auto" });
    });

    return () => window.cancelAnimationFrame(frameId);
  }, [location.hash, location.pathname]);

  return (
    <div ref={pageRef} className="page-shell">
      {isSkillsRoute ? null : (
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 -z-10 overflow-hidden"
        >
          <div
            ref={topGlowRef}
            className="absolute left-[-10%] top-24 h-72 w-72 rounded-full bg-accent-soft blur-3xl"
          />
          <div
            ref={sideGlowRef}
            className="absolute right-[-8%] top-[36rem] h-80 w-80 rounded-full bg-accent-soft blur-3xl"
          />
        </div>
      )}

      <Navbar navigation={safeNavigation} skillMenuGroups={safeSkillMenuGroups} />

      <main>
        <Outlet />
      </main>

      <Footer socialLinks={safeSocialLinks} />
    </div>
  );
}

export default Layout;
