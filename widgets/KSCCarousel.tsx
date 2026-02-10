'use client';

import React from 'react';
import Carousel from './Carousel';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';
import classNames from 'classnames';

const KSCCarousel = () => {
  const { data, isSuccess } = useQuery({
    queryKey: ['ksc-contents'],
    queryFn: () => axios.get('/api/carousel'),
    select: ({ data }) => data?.data,
  });

  if (!isSuccess) return '';

  return (
    <Carousel
      loop
      align="start"
      items={data}
      renderItems={(item: { id: number; imageUrl: string; title: string; content: string }) => (
        <li
          key={item.id}
          className={classNames(
            'relative flex w-full shrink-0 pr-[14px] gap-20',
            'sm:flex-col sm:gap-6 sm:pr-0',
          )}
        >
          <Image
            src={item.imageUrl}
            width={99999}
            height={99999}
            alt={item.title}
            className={classNames('w-full', 'sm:h-auto')}
          />
          <div
            className={classNames(
              'w-full flex flex-col items-start justify-between h-full gap-8 py-10',
              'sm:items-center sm:gap-6 sm:py-4',
            )}
          >
            <div className={classNames('flex flex-col gap-8 h-full', 'sm:items-center')}>
              <hgroup className={classNames('flex items-center gap-2', 'sm:flex-col')}>
                <Image
                  src="/primary-logo.png"
                  alt="logo"
                  width={36}
                  height={36}
                />
                <h3
                  className={classNames(
                    'text-3xl text-[#001B75] font-black font-[Pretendard]',
                    'sm:text-xl sm:text-center',
                  )}
                >
                  대표행사 {String(item.id).padStart(2, '0')}
                </h3>
              </hgroup>
              <h3 className={classNames('text-8xl font-bold', 'sm:text-4xl sm:text-center')}>
                {item.title}
              </h3>
            </div>
            <p
              className={classNames(
                'text-xl font-semibold block h-full whitespace-pre-wrap text-left',
                'sm:text-base sm:text-center',
              )}
            >
              {item.content.replaceAll('\\n', '\n')}
            </p>
          </div>
        </li>
      )}
    />
  );
};

export default KSCCarousel;
