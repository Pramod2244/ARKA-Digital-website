"use client";

import { useEffect, useState, useRef } from "react";

type AnimatedCounterProps = {
  target: number;
  duration?: number;
  className?: string;
};

// A simple useInView hook implementation.
function useInView(ref: React.RefObject<Element>, options: IntersectionObserverInit) {
    const [isInView, setIsInView] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(([entry]) => {
            if (entry.isIntersecting) {
                setIsInView(true);
                observer.disconnect();
            }
        }, options);

        const currentRef = ref.current;
        if (currentRef) {
            observer.observe(currentRef);
        }

        return () => {
            if(currentRef) {
                observer.unobserve(currentRef);
            }
        };
    }, [ref, options]);

    return isInView;
}

export function AnimatedCounter({ target, duration = 2000, className }: AnimatedCounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (isInView) {
      let startTime: number | null = null;
      const step = (timestamp: number) => {
        if (!startTime) startTime = timestamp;
        const progress = Math.min((timestamp - startTime) / duration, 1);
        setCount(Math.floor(progress * target));
        if (progress < 1) {
          requestAnimationFrame(step);
        }
      };
      requestAnimationFrame(step);
    }
  }, [isInView, target, duration]);

  return <span ref={ref} className={className}>{count.toLocaleString()}</span>;
}
