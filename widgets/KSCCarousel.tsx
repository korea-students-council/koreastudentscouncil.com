'use client';

import React from 'react';
import Carousel from './Carousel';
import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import Image from 'next/image';

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
          className="relative flex w-full shrink-0 pr-[14px] gap-20"
        >
          <Image
            src={item.imageUrl}
            width={99999}
            height={99999}
            alt={item.title}
            className="w-full bg-amber-400"
          />
          <div className="w-full flex flex-col items-start justify-between h-full gap-8 py-10">
            <div className="flex flex-col gap-8 h-full">
              <hgroup className="flex items-center gap-2">
                <Image
                  src="/primary-logo.png"
                  alt="logo"
                  width={36}
                  height={36}
                />
                <h3 className="text-3xl text-[#001B75] font-black font-[Pretendard]">
                  대표행사 {String(item.id).padStart(2, '0')}
                </h3>
              </hgroup>
              <h3 className="text-8xl font-bold">{item.title}</h3>
            </div>
            <p className="text-xl font-semibold block h-full whitespace-pre-wrap text-left">
              {item.content.replaceAll('\\n', '\n')}
            </p>
          </div>
        </li>
      )}
    />
  );
};

export default KSCCarousel;
