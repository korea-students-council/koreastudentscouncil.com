import React from 'react';
import classNames from 'classnames';

const Footer = () => {
  return (
    <footer
      className={classNames(
        'flex py-[5%] px-[16%] flex-col gap-4 w-screen bg-[#001B75]',
        'sm:px-4 sm:py-10',
      )}
    >
      <div className="w-full h-px bg-white" />
      <hgroup className={classNames('flex justify-between', 'sm:flex-col sm:gap-2')}>
        <p className={classNames('text-white text-sm', 'sm:text-xs')}>
          Copyrights &copy; 2025 by KOREASC. all rights Reserved.
        </p>
        <p className={classNames('text-white text-sm', 'sm:text-xs')}>
          Made by. 임희재 박우빈 박서빈 박유영 서동석 이유진 유하늘 조정윤 김준희 최보련
        </p>
      </hgroup>
    </footer>
  );
};

export default Footer;
