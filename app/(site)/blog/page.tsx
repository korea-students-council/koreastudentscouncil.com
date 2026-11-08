import type { Metadata } from 'next';
import { getPosts, postText } from '@/content/posts';
import { PHOTOS, SITE_URL } from '@/content/site';
import PhotoReel from '@/widgets/PhotoReel';
import BlogList from './BlogList';

const description = '대한학생회 임원 인터뷰와 위원회 활동, 소식을 기록하는 블로그입니다.';

export const metadata: Metadata = {
  title: 'Blog',
  description,
  alternates: { canonical: `${SITE_URL}/blog` },
  openGraph: { title: 'Blog | 대한학생회', description, url: `${SITE_URL}/blog` },
};

const BlogPage = () => {
  const posts = getPosts().map((post) => ({
    slug: post.slug,
    title: post.title,
    summary: post.summary,
    date: post.date,
    category: post.category,
    author: post.author,
    cover: post.cover,
    searchText: postText(post),
  }));

  return (
    <div className="px-(--gutter) pt-[12svh] pb-(--section)">
      <div
        data-reveal
        className="grid gap-6 md:grid-cols-12 md:gap-(--gutter)"
      >
        <h1 className="text-display font-bold md:col-span-12">
          <span className="block">대한 사람들의</span>
          <span className="block">
            이야기
            <PhotoReel
              photos={[PHOTOS.daenaering, PHOTOS.volunteer, PHOTOS.christmas, PHOTOS.vision]}
              priority
              sizes="(max-width: 640px) 100vw, 26vw"
              className="my-4 block aspect-[16/10] w-full sm:my-0 sm:ml-[0.28em] sm:inline-block sm:aspect-auto sm:h-[0.78em] sm:w-[2.4em] sm:align-baseline"
            />
          </span>
        </h1>
        <p className="max-w-[36ch] text-body md:col-span-6">
          임원들의 인터뷰와 위원회 활동, 대한학생회 소식을 기록합니다. 누구나 로그인 없이 읽을 수 있어요.
        </p>
      </div>
      <div className="mt-20 md:mt-28">
        <BlogList posts={posts} />
      </div>
    </div>
  );
};

export default BlogPage;
