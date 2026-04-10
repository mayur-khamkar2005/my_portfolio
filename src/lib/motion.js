const canUseDOM = typeof window !== "undefined";
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

function prefersReducedMotion() {
  return (
    canUseDOM &&
    typeof window.matchMedia === "function" &&
    window.matchMedia(reducedMotionQuery).matches
  );
}

export { canUseDOM, prefersReducedMotion };
