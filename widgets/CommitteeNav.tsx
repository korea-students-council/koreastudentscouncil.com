'use client';

import classNames from 'classnames';
import { useEffect, useState } from 'react';

type NavItem = { id: string; name: string };

// 위원회 바로가기. 오른쪽에서 지금 읽고 있는 위원회가 목록에서 밝아집니다.
const CommitteeNav = ({ items }: { items: NavItem[] }) => {
  const [activeId, setActiveId] = useState(items[0]?.id);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveId(entry.target.id);
        });
      },
      { rootMargin: '-40% 0px -55% 0px' },
    );
    items.forEach((item) => {
      const node = document.getElementById(item.id);
      if (node) observer.observe(node);
    });
    return () => observer.disconnect();
  }, [items]);

  return (
    <nav aria-label="위원회 바로가기">
      <ul className="flex flex-wrap gap-1 md:flex-col md:gap-0">
        {items.map((item) => (
          <li key={item.id}>
            <a
              href={`#${item.id}`}
              aria-current={activeId === item.id ? 'location' : undefined}
              className={classNames(
                'inline-flex h-9 items-center rounded-full px-3 text-note font-semibold transition-colors md:h-10 md:text-body',
                activeId === item.id
                  ? 'bg-ink text-on-field'
                  : 'bg-bg text-ink hover:bg-ink hover:text-on-field md:bg-transparent md:text-soft md:hover:bg-transparent md:hover:text-ink',
              )}
            >
              {item.name}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default CommitteeNav;
