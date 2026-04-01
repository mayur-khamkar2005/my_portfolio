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

export {
  gsap,
  ScrollTrigger,
  hasFinePointer,
  prefersReducedMotion,
  useIsomorphicLayoutEffect,
};
