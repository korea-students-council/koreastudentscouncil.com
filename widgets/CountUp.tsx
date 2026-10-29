'use client';

import { useEffect, useRef, useState } from 'react';

const format = (value: number) => value.toLocaleString('ko-KR');

// 화면에 들어오는 순간 0 에서 목표값까지 촤라락 올라갑니다. 스크립트가 없으면 목표값이 그대로 보입니다.
const CountUp = ({ value, durationMs = 1600 }: { value: number; durationMs?: number }) => {
  const ref = useRef<HTMLSpanElement>(null);
  const [display, setDisplay] = useState(format(value));

  useEffect(() => {
    const node = ref.current;
    if (!node || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    let frameId = 0;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        observer.disconnect();
        const startedAt = performance.now();
        const tick = (now: number) => {
          const progress = Math.min((now - startedAt) / durationMs, 1);
          const eased = 1 - Math.pow(1 - progress, 4);
          setDisplay(format(Math.round(value * eased)));
          if (progress < 1) frameId = requestAnimationFrame(tick);
        };
        frameId = requestAnimationFrame(tick);
      },
      { threshold: 0.6 },
    );

    if (node.getBoundingClientRect().top > window.innerHeight) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setDisplay(format(0));
    }
    observer.observe(node);

    return () => {
      observer.disconnect();
      cancelAnimationFrame(frameId);
    };
  }, [value, durationMs]);

  return (
    <span
      ref={ref}
      className="tabular"
    >
      {display}
    </span>
  );
};

export default CountUp;
