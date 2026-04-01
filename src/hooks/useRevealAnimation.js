import { useRef } from "react";
import {
  gsap,
  ScrollTrigger,
  prefersReducedMotion,
  useIsomorphicLayoutEffect,
} from "../lib/gsap";

function useRevealAnimation({
  selector = "[data-reveal]",
  x = 0,
  y = 16,
  scale = 0.992,
  rotateX = 2.5,
  duration = 0.5,
  stagger = 0.06,
  start = "top 88%",
  ease = "power3.out",
} = {}) {
  const scopeRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const scope = scopeRef.current;

    if (!scope) {
      return undefined;
    }

    const targets = gsap.utils.toArray(selector, scope);

    if (!targets.length) {
      return undefined;
    }

    if (prefersReducedMotion()) {
      gsap.set(targets, { autoAlpha: 1, x: 0, y: 0, scale: 1, rotateX: 0 });
      return undefined;
    }

    const ctx = gsap.context(() => {
      gsap.set(targets, {
        autoAlpha: 0,
        x,
        y,
        scale,
        rotateX,
        force3D: true,
        transformOrigin: "50% 100%",
        willChange: "transform, opacity",
      });

      ScrollTrigger.batch(targets, {
        start,
        once: true,
        onEnter: (elements) => {
          gsap.to(elements, {
            autoAlpha: 1,
            x: 0,
            y: 0,
            scale: 1,
            rotateX: 0,
            duration,
            stagger,
            ease,
            overwrite: true,
            clearProps: "opacity,visibility,transform,willChange",
          });
        },
      });
    }, scope);

    return () => ctx.revert();
  }, [duration, ease, rotateX, scale, selector, stagger, start, x, y]);

  return scopeRef;
}

export default useRevealAnimation;
