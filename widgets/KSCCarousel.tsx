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
      renderItems={(item: any) => (
        <li className="relative flex w-full shrink-0 pr-[14px] gap-10">
          <Image
            src={item.imageUrl}
            width={99999}
            height={9999}
            alt={item.title}
            className="w-full"
          />
          <div className="w-full flex flex-col items-start h-full gap-10 justify-center">
            <hgroup className="flex items-center gap-2">
              <Image
                src="/primary-logo.png"
                alt="logo"
                width={36}
                height={36}
              />
              <h3 className="text-xl text-[#001B75] font-black font-[Pretendard]">
                대표행사 {String(item.id).padStart(2, '0')}
              </h3>
            </hgroup>
            <h3 className="text-7xl font-bold">{item.title}</h3>
            <p className="text-xl font-semibold whitespace-pre-wrap text-left">
              {item.content.replaceAll('\\n', '\n')}
            </p>
          </div>
        </li>
      )}
    />
  );
};

export default KSCCarousel;
