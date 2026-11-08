'use client';

import classNames from 'classnames';
import { useEffect, useState } from 'react';
import type { HistoryYear } from '@/content/site';

// 왼쪽의 제목과 연도 목록은 붙어 있고, 오른쪽 연도들이 지나가면 지금 읽는 해가 왼쪽에서 밝아집니다.
const HistoryTimeline = ({ history }: { history: HistoryYear[] }) => {
  const [activeYear, setActiveYear] = useState(history[0].year);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveYear(Number((entry.target as HTMLElement).dataset.year));
        });
      },
      { rootMargin: '-45% 0px -50% 0px' },
    );
    document.querySelectorAll('[data-year]').forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <div className="grid gap-12 md:grid-cols-12 md:gap-(--gutter)">
      <div className="md:col-span-5">
        <h2 className="text-headline font-bold">
          2002년부터
          <br />
          지금까지
        </h2>
        <p className="mt-6 max-w-[30ch] text-body text-on-field-soft">
          전국고교 학생회장 토론회에서 학생회 정보 교류의 장까지, 연도를 누르면 그해로 이동합니다.
        </p>
        <div className="md:sticky md:top-[calc(var(--header)+48px)] md:mt-16">
          <p
            aria-hidden
            className="tabular hidden text-display font-bold text-on-field md:block"
          >
            {activeYear}
          </p>
          <nav
            aria-label="연도 바로가기"
            className="mt-10 md:mt-8"
          >
            <ul className="flex flex-wrap gap-x-1 gap-y-1">
              {history.map((item) => (
                <li key={item.year}>
                  <a
                    href={`#year-${item.year}`}
                    className={classNames(
                      'tabular lift inline-flex h-9 items-center rounded-full px-3 text-note font-semibold',
                      activeYear === item.year
                        ? 'bg-accent text-on-accent'
                        : 'text-on-field-soft hover:bg-on-field/10 hover:text-on-field',
                    )}
                  >
                    {item.year}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>

      <ol className="flex flex-col gap-14 md:col-span-7 md:gap-20">
        {history.map((item) => (
          <li
            key={item.year}
            id={`year-${item.year}`}
            data-year={item.year}
            className="grid grid-cols-[4rem_1fr] gap-4 sm:grid-cols-[9rem_1fr] sm:gap-8"
          >
            <span
              className={classNames(
                'tabular text-body font-bold transition-colors duration-500 sm:text-statement',
                activeYear === item.year ? 'text-on-field' : 'text-on-field-soft',
              )}
            >
              {item.year}
            </span>
            <ul className="flex flex-col gap-2 pt-1 sm:pt-2">
              {item.list.map((info) => (
                <li
                  key={info}
                  className={classNames(
                    'text-body',
                    item.highlight ? 'font-semibold text-on-field' : 'text-on-field-soft',
                  )}
                >
                  {info}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default HistoryTimeline;
