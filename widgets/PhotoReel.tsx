'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useEffect, useState } from 'react';

type ReelPhoto = { src: string; alt: string };

interface PhotoReelProps {
  photos: ReelPhoto[];
  intervalMs?: number;
  className?: string;
  sizes?: string;
  priority?: boolean;
}

// 문장 사이에 끼워 넣는 작은 창. 사진들이 세로 띠처럼 한 칸씩 위로 지나갑니다.
const PhotoReel = ({ photos, intervalMs = 2800, className, sizes = '30vw', priority }: PhotoReelProps) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const timerId = window.setInterval(() => setIndex((prev) => (prev + 1) % photos.length), intervalMs);
    return () => window.clearInterval(timerId);
  }, [paused, photos.length, intervalMs]);

  return (
    <span
      className={classNames('relative overflow-hidden bg-surface', className)}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      role="img"
      aria-label={photos.map((photo) => photo.alt).join(', ')}
    >
      <span
        className="absolute inset-0 flex flex-col transition-transform duration-1000 ease-(--ease-out-soft)"
        style={{ transform: `translateY(-${index * 100}%)` }}
      >
        {photos.map((photo, idx) => (
          <span
            key={photo.src}
            className="relative block h-full w-full shrink-0"
          >
            <Image
              src={photo.src}
              alt=""
              fill
              sizes={sizes}
              priority={priority && idx === 0}
              className="object-cover"
            />
          </span>
        ))}
      </span>
    </span>
  );
};

export default PhotoReel;
