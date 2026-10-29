import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { formatDate, getPost, getPosts, type Block } from '@/content/posts';
import { SITE_URL } from '@/content/site';
import ShareButtons from '@/widgets/ShareButtons';

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;

export const generateStaticParams = () => getPosts().map((post) => ({ slug: post.slug }));

export const generateMetadata = async ({ params }: Params): Promise<Metadata> => {
  const post = getPost((await params).slug);
  if (!post) return {};
  const url = `${SITE_URL}/blog/${post.slug}`;

  return {
    title: post.title,
    description: post.summary,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      title: post.title,
      description: post.summary,
      url,
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.cover.src, width: post.cover.width, height: post.cover.height, alt: post.cover.alt }],
    },
    twitter: { card: 'summary_large_image', title: post.title, description: post.summary, images: [post.cover.src] },
  };
};

const BlockView = ({ block }: { block: Block }) => {
  switch (block.type) {
    case 'h2':
      return <h2 className="mt-8 text-statement font-bold">{block.text}</h2>;
    case 'quote':
      return (
        <blockquote className="my-4 bg-surface px-6 py-8 md:px-10">
          <p className="text-statement font-semibold">“{block.text}”</p>
          {block.cite && <cite className="mt-4 block text-note not-italic text-soft">{block.cite}</cite>}
        </blockquote>
      );
    case 'list':
      return (
        <ul className="flex list-disc flex-col gap-2 pl-6 marker:text-mute">
          {block.items.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>
      );
    case 'qa':
      return (
        <div className="flex flex-col gap-3">
          <p className="text-body font-bold">Q. {block.q}</p>
          <p>{block.a}</p>
        </div>
      );
    case 'image':
      return (
        <figure className="my-6">
          <Image
            src={block.photo.src}
            alt={block.photo.alt}
            width={block.photo.width}
            height={block.photo.height}
            sizes="(max-width: 768px) 100vw, 70vw"
            className="h-auto w-full"
          />
          {block.caption && <figcaption className="mt-3 text-note text-soft">{block.caption}</figcaption>}
        </figure>
      );
    default:
      return <p>{block.text}</p>;
  }
};

const PostPage = async ({ params }: Params) => {
  const post = getPost((await params).slug);
  if (!post) notFound();

  const posts = getPosts();
  const index = posts.findIndex((item) => item.slug === post.slug);
  const newer = posts[index - 1];
  const older = posts[index + 1];
  const related = posts
    .filter((item) => item.slug !== post.slug)
    .sort((a, b) => Number(b.category === post.category) - Number(a.category === post.category))
    .slice(0, 2);
  const url = `${SITE_URL}/blog/${post.slug}`;

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.summary,
    datePublished: post.date,
    author: { '@type': 'Organization', name: `대한학생회 ${post.author}` },
    image: `${SITE_URL}${post.cover.src}`,
    mainEntityOfPage: url,
  };

  return (
    <article className="pb-(--section)">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <header
        data-reveal
        className="grid gap-6 px-(--gutter) pt-[10svh] md:grid-cols-12 md:gap-(--gutter)"
      >
        <h1 className="text-headline font-bold md:col-span-9">{post.title}</h1>
        <p className="text-note text-soft md:col-span-12">
          <span className="font-semibold text-ink">{post.category}</span> ·{' '}
          <time dateTime={post.date}>{formatDate(post.date)}</time> · {post.author}
        </p>
      </header>

      <div className="relative mt-12 aspect-[16/9] overflow-hidden md:mt-16 md:aspect-[21/9]">
        <Image
          src={post.cover.src}
          alt={post.cover.alt}
          fill
          priority
          sizes="100vw"
          className="drift object-cover"
        />
      </div>

      <div className="mt-16 grid gap-16 px-(--gutter) md:mt-24 md:grid-cols-12 md:gap-(--gutter)">
        {/* 왼쪽 칸: 글 정보와 공유 버튼이 본문을 따라 붙어 있습니다. */}
        <aside className="order-last md:order-none md:col-span-3">
          <div className="flex flex-col gap-8 bg-surface p-6 md:sticky md:top-[calc(var(--header)+32px)]">
            <dl className="grid grid-cols-2 gap-4 text-note md:grid-cols-1">
              <div>
                <dt className="text-soft">분류</dt>
                <dd className="font-semibold">{post.category}</dd>
              </div>
              <div>
                <dt className="text-soft">게시일</dt>
                <dd className="font-semibold">{formatDate(post.date)}</dd>
              </div>
              <div>
                <dt className="text-soft">글쓴이</dt>
                <dd className="font-semibold">{post.author}</dd>
              </div>
              {post.interviewee && (
                <div>
                  <dt className="text-soft">인터뷰이</dt>
                  <dd className="font-semibold">
                    {post.interviewee.name} · {post.interviewee.role}
                    {post.interviewee.cohort && ` · ${post.interviewee.cohort}`}
                  </dd>
                </div>
              )}
              <div>
                <dt className="text-soft">태그</dt>
                <dd className="flex flex-wrap gap-x-2 font-semibold">
                  {post.tags.map((tag) => (
                    <span key={tag}>#{tag}</span>
                  ))}
                </dd>
              </div>
            </dl>
            <ShareButtons
              url={url}
              title={post.title}
            />
          </div>
        </aside>

        <div
          data-reveal
          className="flex flex-col gap-6 text-body md:col-span-7 md:col-start-5"
        >
          <p className="text-statement font-medium">{post.summary}</p>
          {post.body.map((block, idx) => (
            <BlockView
              key={idx}
              block={block}
            />
          ))}
        </div>
      </div>

      <nav
        aria-label="이전 글과 다음 글"
        data-reveal
        className="mt-(--section) grid gap-4 px-(--gutter) md:grid-cols-2 md:gap-(--gutter)"
      >
        {[
          { label: '이전 글', item: older },
          { label: '다음 글', item: newer },
        ].map(({ label, item }) =>
          item ? (
            <Link
              key={label}
              href={`/blog/${item.slug}`}
              className="group flex flex-col gap-2 bg-surface p-6 transition-colors hover:bg-ink hover:text-on-field md:p-10"
            >
              <span className="text-note text-soft group-hover:text-on-field-soft">{label}</span>
              <span className="text-statement font-bold">{item.title}</span>
            </Link>
          ) : (
            <span
              key={label}
              className="hidden md:block"
            />
          ),
        )}
      </nav>

      {related.length > 0 && (
        <section
          aria-labelledby="related-title"
          className="mt-(--section) px-(--gutter)"
        >
          <div className="flex flex-wrap items-end justify-between gap-4">
            <h2
              id="related-title"
              className="text-headline font-bold"
            >
              함께 읽기
            </h2>
            <Link
              href="/blog"
              className="link-underline text-body font-semibold"
            >
              블로그 목록으로
            </Link>
          </div>
          <ul
            data-reveal
            className="mt-12 grid gap-10 md:grid-cols-2 md:gap-(--gutter)"
          >
            {related.map((item) => (
              <li key={item.slug}>
                <Link
                  href={`/blog/${item.slug}`}
                  className="group flex flex-col gap-4"
                >
                  <div className="relative aspect-[16/10] overflow-hidden bg-surface">
                    <Image
                      src={item.cover.src}
                      alt={item.cover.alt}
                      fill
                      sizes="(max-width: 768px) 100vw, 50vw"
                      className="object-cover transition-transform duration-700 ease-(--ease-out-soft) group-hover:scale-[1.03]"
                    />
                  </div>
                  <span className="text-statement font-bold">{item.title}</span>
                  <span className="text-note text-soft">
                    {item.category} · {formatDate(item.date)}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  );
};

export default PostPage;
