'use client';

import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import { useMemo, useState } from 'react';
import type { Photo } from '@/content/site';

export type PostSummary = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: string;
  author: string;
  cover: Photo;
  searchText: string;
};

const CATEGORIES = ['전체', '인터뷰', '활동', '소식'];

const BlogList = ({ posts }: { posts: PostSummary[] }) => {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState('전체');

  const filtered = useMemo(() => {
    const keyword = query.trim().toLowerCase();
    return posts.filter(
      (post) =>
        (category === '전체' || post.category === category) &&
        (!keyword || post.searchText.toLowerCase().includes(keyword)),
    );
  }, [posts, query, category]);

  const [featured, ...rest] = filtered;

  return (
    <div className="flex flex-col gap-16">
      <div
        data-reveal
        className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between"
      >
        <ul
          className="flex flex-wrap gap-1"
          aria-label="카테고리"
        >
          {CATEGORIES.map((item) => (
            <li key={item}>
              <button
                type="button"
                onClick={() => setCategory(item)}
                aria-pressed={category === item}
                className={classNames(
                  'lift h-10 cursor-pointer rounded-full px-4 text-note font-semibold',
                  category === item ? 'bg-ink text-on-field' : 'bg-surface text-ink hover:bg-ink/10',
                )}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
        <label className="flex h-12 w-full items-center gap-3 rounded-full bg-surface px-5 md:w-[22rem]">
          <span className="sr-only">제목과 본문 검색</span>
          <svg
            aria-hidden
            viewBox="0 0 24 24"
            className="size-5 shrink-0 fill-none stroke-ink stroke-2"
          >
            <circle
              cx="11"
              cy="11"
              r="7"
            />
            <path d="m20 20-4-4" />
          </svg>
          <input
            type="search"
            value={query}
            onChange={({ target: { value } }) => setQuery(value)}
            placeholder="제목, 본문으로 검색"
            className="h-full w-full bg-transparent text-body text-ink outline-none placeholder:text-soft"
          />
        </label>
      </div>

      {!featured && (
        <p className="py-24 text-statement text-soft">
          {query.trim()
            ? `‘${query.trim()}’에 맞는 글이 아직 없어요. 다른 단어로 찾아보세요.`
            : `${category} 글은 곧 올라옵니다.`}
        </p>
      )}

      {featured && (
        <Link
          href={`/blog/${featured.slug}`}
          data-reveal
          className="group grid gap-8 md:grid-cols-12 md:gap-(--gutter)"
        >
          <div className="relative aspect-[16/10] overflow-hidden bg-surface md:col-span-7">
            <Image
              src={featured.cover.src}
              alt={featured.cover.alt}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 58vw"
              className="object-cover transition-transform duration-700 ease-(--ease-out-soft) group-hover:scale-[1.03]"
            />
          </div>
          <div
            data-reveal
            className="flex flex-col gap-4 md:col-span-5 md:justify-end"
          >
            <h2 className="text-headline font-bold">{featured.title}</h2>
            <p className="text-body">{featured.summary}</p>
            <p className="text-note text-soft">
              <span className="font-semibold text-ink">{featured.category}</span> · {featured.date.replaceAll('-', '.')}{' '}
              · {featured.author}
            </p>
          </div>
        </Link>
      )}

      {rest.length > 0 && (
        <ul
          data-reveal
          className="flex flex-col gap-12"
        >
          {rest.map((post) => (
            <li key={post.slug}>
              <Link
                href={`/blog/${post.slug}`}
                className="group grid grid-cols-[7rem_1fr] gap-5 sm:grid-cols-[14rem_1fr] md:grid-cols-12 md:gap-(--gutter)"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-surface md:col-span-3">
                  <Image
                    src={post.cover.src}
                    alt={post.cover.alt}
                    fill
                    sizes="(max-width: 768px) 30vw, 24vw"
                    className="object-cover transition-transform duration-700 ease-(--ease-out-soft) group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex flex-col gap-2 md:col-span-7 md:col-start-5 md:justify-center">
                  <h2 className="text-statement font-bold transition-transform duration-300 group-hover:translate-x-1">
                    {post.title}
                  </h2>
                  <p className="hidden text-body sm:block">{post.summary}</p>
                  <p className="text-note text-soft">
                    <span className="font-semibold text-ink">{post.category}</span> · {post.date.replaceAll('-', '.')}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BlogList;
