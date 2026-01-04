'use client';

import Image from 'next/image';
import React, { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-screen px-[5%] md:px-[10%] lg:px-[15%] bg-white h-16 md:h-19.5 flex items-center justify-between fixed z-100 shadow-sm">
      <Image
        src="/header-logo.png"
        className="w-auto h-10 md:h-full"
        width={999}
        height={999}
        alt="logo"
      />
      
      {/* 햄버거 메뉴 버튼 (모바일) */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        aria-label="메뉴"
      >
        <span className={`w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`w-6 h-0.5 bg-black transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`} />
        <span className={`w-6 h-0.5 bg-black transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* 데스크톱 메뉴 */}
      <ul className="hidden md:flex items-center h-full">
        {[
          { label: '단체 소개', href: '#introduce' },
          { label: '대표 행사', href: '#events' },
          { label: 'SNS', href: '#SNS' },
          { label: 'Contact', href: '#contact' },
        ].map((navItem) => (
          <a
            key={navItem.label}
            href={navItem.href}
            className="px-3 lg:px-5 h-full text-xs lg:text-[13px] font-[Pretendard] flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors"
          >
            {navItem.label}
          </a>
        ))}
      </ul>

      {/* 모바일 메뉴 */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-lg">
          <ul className="flex flex-col">
            {[
              { label: '단체 소개', href: '#introduce' },
              { label: '대표 행사', href: '#events' },
              { label: 'SNS', href: '#SNS' },
              { label: 'Contact', href: '#contact' },
            ].map((navItem) => (
              <a
                key={navItem.label}
                href={navItem.href}
                className="px-5 py-4 text-sm font-[Pretendard] cursor-pointer hover:bg-gray-50 transition-colors border-b border-gray-100"
                onClick={() => setIsMenuOpen(false)}
              >
                {navItem.label}
              </a>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
