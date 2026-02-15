import React from "react";
import { useScrollReveal } from "../hooks/useScrollReveal";

/**
 * ScrollReveal Component - Premium scroll animations
 *
 * Usage:
 * <ScrollReveal animation="fade-up">
 *   <YourContent />
 * </ScrollReveal>
 *
 * Animations: fade-up, fade, scale, left, right, blur, stagger
 */
function ScrollReveal({
  children,
  animation = "fade-up",
  delay = 0,
  className = "",
  as: Component = "div",
  threshold = 0.1,
  ...props
}) {
  // Always call hook first (fix ESLint rule)
  const [ref, isVisibleRaw] = useScrollReveal({ threshold });
  // Detect mobile screen
  const isMobile = typeof window !== "undefined" && window.matchMedia && window.matchMedia("(max-width: 768px)").matches;
  // On mobile, override to visible
  const isVisible = isMobile ? true : isVisibleRaw;

  const animationClass =
    {
      "fade-up": "reveal-fade-up",
      fade: "reveal-fade",
      scale: "reveal-scale",
      left: "reveal-left",
      right: "reveal-right",
      blur: "reveal-blur",
      stagger: "reveal-stagger",
      default: "reveal",
    }[animation] || "reveal";

  const delayClass = delay > 0 && delay <= 6 ? `reveal-delay-${delay}` : "";

  return (
    <Component
      ref={ref}
      className={`${animationClass} ${isVisible ? "revealed" : ""} ${delayClass} ${className}`}
      {...props}
    >
      {children}
    </Component>
  );
}

export default ScrollReveal;
