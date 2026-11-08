'use client';

import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

// data-reveal 이 붙은 블록이 화면에 들어오면 자식들을 80ms 간격으로 차례로 올립니다.
// 검색·필터처럼 나중에 새로 그려지는 블록도 놓치지 않도록 DOM 변화를 함께 지켜봅니다.
const RevealRoot = () => {
  const pathname = usePathname();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          entry.target.classList.add('is-in');
          observer.unobserve(entry.target);
        });
      },
      { rootMargin: '0px 0px -12% 0px' },
    );

    const track = (target: HTMLElement) => {
      Array.from(target.children).forEach((child, idx) =>
        (child as HTMLElement).style.setProperty('--i', String(idx)),
      );
      observer.observe(target);
    };

    const trackWithin = (root: ParentNode) =>
      root.querySelectorAll<HTMLElement>('[data-reveal]:not(.is-in)').forEach(track);

    trackWithin(document);

    const mutations = new MutationObserver((records) => {
      records.forEach((record) =>
        record.addedNodes.forEach((node) => {
          if (!(node instanceof HTMLElement)) return;
          if (node.matches('[data-reveal]:not(.is-in)')) track(node);
          trackWithin(node);
        }),
      );
    });
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [pathname]);

  return null;
};

export default RevealRoot;
