import React, { useEffect, useRef } from 'react';

interface AnimatedCounterProps {
  target: number;
  decimals?: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

// Direct DOM textContent updates inside requestAnimationFrame for locked 60fps without React re-render overhead
export const AnimatedCounter: React.FC<AnimatedCounterProps> = ({
  target,
  decimals = 0,
  duration = 950,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const spanRef = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    let startTime: number | null = null;
    let rafId: number;

    const step = (timestamp: number) => {
      if (!startTime) startTime = timestamp;
      const progress = Math.min((timestamp - startTime) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const val = (eased * target).toFixed(decimals);
      if (spanRef.current) {
        spanRef.current.textContent = `${prefix}${val}${suffix}`;
      }
      if (progress < 1) {
        rafId = requestAnimationFrame(step);
      }
    };

    rafId = requestAnimationFrame(step);
    return () => cancelAnimationFrame(rafId);
  }, [target, decimals, duration, prefix, suffix]);

  return (
    <span ref={spanRef} className={`font-tech tabular-nums ${className}`}>
      {prefix}
      {(0).toFixed(decimals)}
      {suffix}
    </span>
  );
};
