'use client';

import { useCallback, useState, useEffect, ReactNode } from 'react';

import cn from 'classnames';
import { EmblaOptionsType } from 'embla-carousel';
import useEmblaCarousel from 'embla-carousel-react';

interface CarouselProps<T> extends EmblaOptionsType {
  items: Array<T>;
  renderItems: (item: T, idx?: number) => ReactNode;
  autoplayMs?: number;
  dot?: {
    align?: 'left' | 'center' | 'right';
    size?: number;
  };
}

const Carousel = <T,>({ items, renderItems, autoplayMs, dot, ...options }: CarouselProps<T>) => {
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

  useEffect(() => {
    if (!emblaApi || !autoplayMs) return;
    const timerId = window.setInterval(() => {
      emblaApi.scrollNext();
    }, autoplayMs);

    return () => window.clearInterval(timerId);
  }, [emblaApi, autoplayMs]);

  return (
    <div
      className={cn('relative w-screen md:px-20 lg:px-20 text-center select-none', {
        'text-center': dotAlign === 'center',
        'text-right': dotAlign === 'right',
        'text-left': dotAlign === 'left',
      })}
    >
      <div
        ref={emblaRef}
        className="ml-6 overflow-hidden"
      >
        <ul className="flex">{items.map(renderItems)}</ul>
      </div>
      {!!dot && (
        <div
          className={cn('mt-6 flex items-center gap-2', {
            'justify-center': dotAlign === 'center',
            'justify-end': dotAlign === 'right',
            'justify-start': dotAlign === 'left',
          })}
        >
          {[...Array(itemCount)].map((_, idx) => (
            <button
              key={idx}
              onClick={() => emblaApi?.scrollTo(idx)}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
            >
              <Dot
                filled={idx === currentIndex}
                size={dotSize}
              />
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

function Dot({ size, filled }: { size: number; filled?: boolean }) {
  return (
    <span
      className={cn(
        'relative ml-1 inline-block rounded-full',
        filled ? 'bg-black' : 'border border-black',
      )}
      style={{ width: `${size}px`, height: `${size}px` }}
    />
  );
}

export default Carousel;
