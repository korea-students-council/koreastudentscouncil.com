import classNames from 'classnames';
import Image from 'next/image';
import React, { ComponentPropsWithoutRef } from 'react';

interface HGroupProps extends ComponentPropsWithoutRef<'hgroup'> {
  variant?: 'light' | 'dark';
}

const HGroup = ({ variant = 'light', children }: HGroupProps) => {
  return (
    <hgroup className={classNames('flex items-center justify-center gap-3', 'sm:gap-2')}>
      <Image
        src={variant === 'light' ? '/primary-logo.png' : '/dark-theme-logo.png'}
        alt="logo"
        width={80}
        height={80}
        className={classNames('mt-2', 'sm:mt-1 sm:w-8 sm:h-8')}
      />
      <h3
        className={classNames(
          'text-7xl border-b-[3px] py-3 font-bold font-[Pretendard]',
          'sm:text-3xl sm:py-2',
          {
            'border-[#00187a] text-[#00187a]': variant === 'light',
            'border-white text-white': variant === 'dark',
          },
        )}
      >
        {children}
      </h3>
    </hgroup>
  );
};

export default HGroup;
