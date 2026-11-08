'use client';

import classNames from 'classnames';
import Image from 'next/image';
import { useState } from 'react';

type EventItem = { id: number; title: string; tagline: string; body: string; imageUrl: string };

// 대표 행사 이름을 큰 목록으로 세우고, 이름을 고르면 오른쪽에 사진과 설명이 열립니다.
const EventsParagraph = ({ events }: { events: EventItem[] }) => {
  const [selectedId, setSelectedId] = useState(events[0]?.id);
  const selected = events.find((event) => event.id === selectedId) ?? events[0];

  if (!selected) return null;

  return (
    <div className="grid gap-14 md:grid-cols-12 md:gap-(--gutter)">
      <div className="flex flex-col gap-10 md:col-span-6">
        <h2 className="text-headline font-bold">대표 행사</h2>
        <ul className="flex flex-col gap-1">
          {events.map((event) => (
            <li key={event.id}>
              <button
                type="button"
                onClick={() => setSelectedId(event.id)}
                aria-pressed={event.id === selected.id}
                aria-controls="event-detail"
                className={classNames(
                  'group flex w-full cursor-pointer items-center gap-4 py-2 text-left text-statement font-bold transition-colors duration-300',
                  event.id === selected.id ? 'text-ink' : 'text-mute hover:text-ink',
                )}
              >
                <span
                  aria-hidden
                  className={classNames(
                    'relative h-[1.1em] w-[1.6em] shrink-0 origin-left overflow-hidden transition-transform duration-300',
                    event.id === selected.id ? 'scale-110' : 'opacity-60 group-hover:scale-110 group-hover:opacity-100',
                  )}
                >
                  <Image
                    src={event.imageUrl}
                    alt=""
                    fill
                    sizes="64px"
                    className="object-cover"
                  />
                </span>
                <span className="transition-transform duration-300 group-hover:translate-x-1">{event.title}</span>
              </button>
            </li>
          ))}
        </ul>
      </div>

      <article
        id="event-detail"
        aria-live="polite"
        className="flex flex-col gap-6 md:sticky md:top-[calc(var(--header)+48px)] md:col-span-6 md:self-start"
      >
        <div className="relative aspect-[16/10] overflow-hidden bg-surface">
          <Image
            key={selected.imageUrl}
            src={selected.imageUrl}
            alt={selected.title}
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="animate-[fade-in_0.6s_ease-out] object-cover"
          />
        </div>
        <h3 className="text-statement font-bold">{selected.title}</h3>
        {selected.tagline && <p className="text-body font-semibold text-soft">{selected.tagline}</p>}
        <p className="whitespace-pre-line text-body">{selected.body}</p>
      </article>
    </div>
  );
};

export default EventsParagraph;
