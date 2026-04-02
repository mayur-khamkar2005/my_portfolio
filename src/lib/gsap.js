import { useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const canUseDOM = typeof window !== "undefined";
const reducedMotionQuery = "(prefers-reduced-motion: reduce)";

if (canUseDOM) {
  gsap.registerPlugin(ScrollTrigger);
}

const useIsomorphicLayoutEffect = canUseDOM ? useLayoutEffect : useEffect;

function prefersReducedMotion() {
  return (
    canUseDOM &&
    typeof window.matchMedia === "function" &&
    window.matchMedia(reducedMotionQuery).matches
  );
}

function hasFinePointer() {
  return (
    canUseDOM &&
    typeof window.matchMedia === "function" &&
    window.matchMedia("(pointer: fine)").matches
  );
}

function supportsInteractiveMotion(minWidth = 1200) {
  return (
    canUseDOM &&
    typeof window.matchMedia === "function" &&
    window.matchMedia(`(pointer: fine) and (min-width: ${minWidth}px)`).matches
  );
}

export {
  gsap,
  ScrollTrigger,
  hasFinePointer,
  prefersReducedMotion,
  supportsInteractiveMotion,
  useIsomorphicLayoutEffect,
};
