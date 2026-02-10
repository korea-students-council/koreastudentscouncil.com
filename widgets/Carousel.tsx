'use client';

import { useCallback, useState, useEffect, ReactNode } from 'react';

import cn from 'classnames';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

interface CarouselProps<T> extends EmblaOptionsType {
  items: Array<T>;
  renderItems: (item: T, idx?: number) => ReactNode;
  dot?: {
    align?: 'left' | 'center' | 'right';
    size?: number;
  };
}

const Carousel = <T,>({ items, renderItems, dot, ...options }: CarouselProps<T>) => {
  const itemCount = items.length;
  const dotSize = dot?.size || 8;
  const dotAlign = dot?.align || 'center';
  const [currentIndex, setCurrentIndex] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const onSelect = useCallback(() => {
    setCurrentIndex(emblaApi!.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    // eslint-disable-next-line react-hooks/set-state-in-effect
    onSelect();
    emblaApi.on('reInit', onSelect);
    emblaApi.on('select', onSelect);
  }, [emblaApi, onSelect]);

  return (
    <div
      className={cn(
        'relative w-screen px-20 text-center',
        'sm:px-4',
        {
          'text-center': dotAlign === 'center',
          'text-right': dotAlign === 'right',
          'text-left': dotAlign === 'left',
        },
      )}
    >
      <div
        ref={emblaRef}
        className={cn('ml-6 overflow-hidden', 'sm:ml-0')}
      >
        <ul className={cn('flex', 'sm:gap-4')}>{items.map(renderItems)}</ul>
      </div>
      {!!dot &&
        [...Array(itemCount)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => emblaApi?.scrollTo(idx)}
            type="button"
          >
            <Dot
              filled={idx === currentIndex}
              size={dotSize}
            />
          </button>
        ))}
    </div>
  );
};

function Dot({ size, filled }: { size: number; filled?: boolean }) {
  return (
    <span
      className={cn(
        'relative ml-1 inline-block rounded-full',
        filled ? 'bg-findaGray-50' : 'bg-findaGray-70/40',
      )}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
}

export default Carousel;
