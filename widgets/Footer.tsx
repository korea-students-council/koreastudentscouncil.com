import React from 'react';

const Footer = () => {
  return (
    <footer className="flex py-[5%] px-[16%] flex-col gap-4 w-screen bg-[#001B75]">
      <div className="w-full h-px bg-white" />
      <hgroup className="flex justify-between">
        <p className="text-white text-sm">
          Copyrights &copy; 2025 by KOREASC. all rights Reserved.
        </p>
        <p className="text-white text-sm">
          Made by. 임희재 박우빈 박서빈 박유영 서동석 이유진 유하늘 조정윤 최준희 최보련
        </p>
      </hgroup>
    </footer>
  );
};

export default Footer;
