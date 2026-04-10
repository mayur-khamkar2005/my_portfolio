import { useEffect, useRef } from "react";
import { canUseDOM, prefersReducedMotion } from "../lib/motion";

function useRevealAnimation({
  selector = "[data-reveal]",
  x = 0,
  y = 16,
  scale = 0.992,
  rotateX = 2.5,
  duration = 0.5,
  stagger = 0.06,
  start = "top 88%",
} = {}) {
  const scopeRef = useRef(null);

  useEffect(() => {
    const scope = scopeRef.current;

    if (!scope) {
      return undefined;
    }

    const targets = Array.from(scope.querySelectorAll(selector));

    if (!targets.length) {
      return undefined;
    }

    const rootMargin = start === "top 88%" ? "0px 0px -12% 0px" : "0px 0px -10% 0px";

    targets.forEach((target, index) => {
      target.setAttribute("data-reveal-ready", "true");
      target.style.setProperty("--reveal-x", `${x}px`);
      target.style.setProperty("--reveal-y", `${y}px`);
      target.style.setProperty("--reveal-scale", `${scale}`);
      target.style.setProperty("--reveal-rotate-x", `${rotateX}deg`);
      target.style.setProperty("--reveal-duration", `${Math.max(duration, 0.24) * 1000}ms`);
      target.style.setProperty("--reveal-delay", `${index * stagger * 1000}ms`);
    });

    if (prefersReducedMotion()) {
      targets.forEach((target) => target.setAttribute("data-reveal-visible", "true"));
      return undefined;
    }

    if (!canUseDOM || typeof window.IntersectionObserver !== "function") {
      targets.forEach((target) => target.setAttribute("data-reveal-visible", "true"));
      return undefined;
    }

    const observer = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) {
            return;
          }

          entry.target.setAttribute("data-reveal-visible", "true");
          observer.unobserve(entry.target);
        });
      },
      {
        rootMargin,
        threshold: 0.12,
      },
    );

    targets.forEach((target) => observer.observe(target));

    return () => observer.disconnect();
  }, [duration, rotateX, scale, selector, stagger, start, x, y]);

  return scopeRef;
}

export default useRevealAnimation;
