import Image from 'next/image';
import React from 'react';

const Header = () => {
  return (
    <header className="w-screen px-[15%] bg-white h-19.5 flex items-center justify-between fixed z-100">
      <Image
        src="/header-logo.png"
        className="w-auto h-full"
        width={999}
        height={999}
        alt="logo"
      />
      <ul className="flex items-center h-full">
        {['단체 소개', '대표 행사', 'SNS', 'Contact'].map((navItem) => (
          <nav
            key={navItem}
            className="px-5 h-full text-[13px] font-[Pretendard] flex items-center justify-center cursor-pointer"
          >
            {navItem}
          </nav>
        ))}
      </ul>
    </header>
  );
};

export default Header;
