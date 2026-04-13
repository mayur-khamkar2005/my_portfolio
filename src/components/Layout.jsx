import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FirstVisitNotice from "./FirstVisitNotice";
import { primaryNavigation } from "../lib/siteNavigation";
import { skillMenuGroups } from "../lib/content/skillMenu";
import { primaryEmailHref, resumePdf, socialLinks } from "../lib/content/siteMeta";
import { decodeHashFragment } from "../lib/url";
import { prefersReducedMotion } from "../lib/motion";

const NOTICE_STORAGE_KEY = "noticeSeen";

function Layout() {
  const location = useLocation();
  const isSkillsRoute =
    location.pathname === "/skills" ||
    location.pathname.startsWith("/skills/");

  const [isNoticeOpen, setIsNoticeOpen] = useState(() => {
    if (typeof window === "undefined") return false;

    try {
      return window.sessionStorage.getItem(NOTICE_STORAGE_KEY) === null;
    } catch {
      return false;
    }
  });

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

  function handleNoticeContinue() {
    try {
      window.sessionStorage.setItem(NOTICE_STORAGE_KEY, "true");
    } catch {
      // Ignore storage issues so the banner can still close.
    }

    setIsNoticeOpen(false);
  }

  return (
    <div className="page-shell">
      {isSkillsRoute ? null : (
        <div aria-hidden="true" className="page-backdrop">
          <div className="ambient-grid" />
          <div className="ambient-orb ambient-orb-top" />
          <div className="ambient-orb ambient-orb-side" />
        </div>
      )}

      <Navbar navigation={safeNavigation} skillMenuGroups={safeSkillMenuGroups} />

      <main className="relative z-10">
        <Outlet />
      </main>

      <Footer
        navigation={safeNavigation}
        primaryEmailHref={primaryEmailHref}
        resumeUrl={resumePdf}
        socialLinks={safeSocialLinks}
      />

      {isNoticeOpen ? (
        <FirstVisitNotice onContinue={handleNoticeContinue} />
      ) : null}
    </div>
  );
}

export default Layout;
