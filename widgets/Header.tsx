'use client';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NAV_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Blog', href: '/blog' },
  { label: 'Recruit', href: '/recruit' },
];

const Header = () => {
  const pathname = usePathname();

  const isActive = (href: string) => (href === '/' ? pathname === '/' : pathname.startsWith(href));

  return (
    <header className="fixed inset-x-0 top-0 z-50 h-(--header) bg-bg">
      <div className="flex h-full items-center justify-between px-(--gutter)">
        <Link
          href="/"
          className="flex items-center gap-2.5"
          aria-label="대한학생회 홈"
        >
          <Image
            src="/primary-logo.png"
            alt=""
            width={330}
            height={330}
            priority
            className="size-8"
          />
          <span className="text-[18px] font-bold tracking-[-0.03em] text-ink">대한학생회</span>
        </Link>
        <nav aria-label="주요 메뉴">
          <ul className="flex items-center gap-5 sm:gap-8">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={classNames(
                    'inline-flex h-10 items-center text-note font-semibold transition-colors duration-200',
                    isActive(item.href) ? 'text-ink' : 'text-soft hover:text-ink',
                  )}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
