import classNames from 'classnames';
import Image from 'next/image';
import React, { ComponentPropsWithoutRef } from 'react';

interface HGroupProps extends ComponentPropsWithoutRef<'hgroup'> {
  variant?: 'light' | 'dark';
}

const HGroup = ({ variant = 'light', children }: HGroupProps) => {
  return (
    <hgroup className="flex items-center justify-center gap-2 md:gap-3">
      <Image
        src={variant === 'light' ? '/primary-logo.png' : '/dark-theme-logo.png'}
        alt="logo"
        width={80}
        height={80}
        className="mt-1 md:mt-2 w-12 h-12 md:w-16 md:h-16 lg:w-20 lg:h-20"
      />
      <h3
        className={classNames('text-3xl md:text-5xl lg:text-7xl border-b-[2px] md:border-b-[3px] py-2 md:py-3 font-bold font-[Pretendard]', {
          'border-[#00187a] text-[#00187a]': variant === 'light',
          'border-white text-white': variant === 'dark',
        })}
      >
        {children}
      </h3>
    </hgroup>
  );
};

export default HGroup;
