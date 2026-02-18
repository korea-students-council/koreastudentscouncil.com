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
      autoplayMs={5000}
      dot={{ align: 'center', size: 10 }}
      renderItems={(item: { id: number; imageUrl: string; title: string; content: string }) => (
        <li
          key={item.id}
          className="relative flex w-full shrink-0 pr-5 gap-20"
        >
          <div className="relative w-[70%] aspect-square overflow-hidden rounded-xl">
            <Image
              src={item.imageUrl}
              alt={item.title}
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover select-none"
              draggable={false}
            />
          </div>
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
              <h3 className="text-7xl font-bold font-[Pretendard] text-left">{item.title}</h3>
            </div>
            <p className="text-2xl font-semibold block h-full whitespace-pre-wrap text-left">
              {item.content.replaceAll('\\n', '\n')}
            </p>
          </div>
        </li>
      )}
    />
  );
};

export default KSCCarousel;
