import { useEffect, useRef, useState } from "react";

// Custom hook for scroll-triggered animations
export function useScrollReveal(options = {}) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element); // Only animate once
        }
      },
      {
        threshold: options.threshold || 0.1,
        rootMargin: options.rootMargin || "0px 0px -50px 0px",
      },
    );

    observer.observe(element);

    return () => {
      if (element) observer.unobserve(element);
    };
  }, [options.threshold, options.rootMargin]);

  return [ref, isVisible];
}

// Hook for staggered children animations
export function useStaggerReveal(itemCount, baseDelay = 0, staggerDelay = 100) {
  const [ref, isVisible] = useScrollReveal();

  const getDelay = (index) => {
    return baseDelay + index * staggerDelay;
  };

  return [ref, isVisible, getDelay];
}
