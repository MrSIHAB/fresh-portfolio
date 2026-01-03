import { useEffect, useRef, useState } from "preact/hooks";
import { ComponentChildren } from "preact";

interface ScrollRevealProps {
  children: ComponentChildren;
  threshold?: number;
  class?: string;
  delay?: string; // e.g. "delay-100"
}

export default function ScrollReveal({
  children,
  threshold = 0.1,
  class: className = "",
  delay = "",
}: ScrollRevealProps) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Only animate once
        }
      },
      { threshold },
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [threshold]);

  return (
    <div
      ref={ref}
      class={`reveal ${isVisible ? "active" : ""} ${delay} ${className}`}
    >
      {children}
    </div>
  );
}
