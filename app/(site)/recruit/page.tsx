import type { Metadata } from 'next';
import Image from 'next/image';
import { COMMITTEES, LEADERSHIP } from '@/content/committees';
import { FAQ, LATEST_HAEOREUM, LATEST_RECRUIT, REQUIREMENTS, STEPS } from '@/content/recruit';
import { APPLY_URL, CONTACT_EMAIL, PHOTOS, SITE_URL, SNS_LINKS } from '@/content/site';
import CohortFinder from '@/widgets/CohortFinder';
import CommitteeNav from '@/widgets/CommitteeNav';
import PhotoReel from '@/widgets/PhotoReel';

const description =
  '대한학생회는 매년 5월 정기모집으로 새 기수를 찾고, 7월 해오름식에서 맞이합니다. 위원회별 활동과 지원 방법을 안내합니다.';

export const metadata: Metadata = {
  title: 'Recruit',
  description,
  alternates: { canonical: `${SITE_URL}/recruit` },
  openGraph: { title: 'Recruit | 대한학생회', description, url: `${SITE_URL}/recruit` },
};

const INSTAGRAM_URL = SNS_LINKS[0].href;

const RecruitPage = () => {
  return (
    <>
      <section className="flex min-h-[calc(100svh-var(--header))] flex-col justify-between gap-12 px-(--gutter) pt-8 pb-8">
        <h1 className="my-auto text-display font-bold leading-[1.02]">
          <span className="block">
            매년 5월
            <PhotoReel
              photos={[PHOTOS.haeoreum, PHOTOS.vision, PHOTOS.volunteer, PHOTOS.exchange]}
              priority
              sizes="(max-width: 640px) 100vw, 26vw"
              className="my-4 block aspect-[16/10] w-full sm:my-0 sm:ml-[0.28em] sm:inline-block sm:aspect-auto sm:h-[0.78em] sm:w-[2.4em] sm:align-baseline"
            />
          </span>
          <span className="block text-right">새 기수를 찾습니다</span>
        </h1>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-[38ch] text-body">
            전국의 고등학교 학생회장이 모이는 곳. 5월 정기모집에 지원하고, 7월 해오름식에서 대한학생회의 새 기수로
            함께합니다.
          </p>
          <div className="flex flex-wrap items-center gap-5">
            <a
              href="#steps"
              className="link-underline text-body font-semibold"
            >
              모집 일정 보기
            </a>
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noreferrer"
              className="lift inline-flex h-12 items-center rounded-full bg-accent px-6 text-body font-semibold text-on-accent hover:bg-ink"
            >
              지원서 받기
            </a>
          </div>
        </div>
      </section>

      {/* 내 기수 찾기 */}
      <section
        aria-labelledby="finder-title"
        className="bg-surface px-(--gutter) py-(--section)"
      >
        <div
          data-reveal
          className="grid gap-12 md:grid-cols-12 md:gap-(--gutter)"
        >
          <div className="flex flex-col gap-5 md:col-span-5">
            <h2
              id="finder-title"
              className="text-headline font-bold"
            >
              나는 몇 기가
              <br />
              될까요?
            </h2>
            <p className="max-w-[34ch] text-body">
              대한학생회의 기수는 모집한 해를 따라 붙습니다. {LATEST_RECRUIT.year}년 정기모집으로 들어온
              기수가 {LATEST_RECRUIT.cohort}기입니다. 전·현임 학생회장 기준으로, 지금 학년을 골라 보세요.
            </p>
          </div>
          <div className="md:col-span-7">
            <CohortFinder />
          </div>
        </div>
      </section>

      {/* 합류 과정 */}
      <section
        id="steps"
        aria-labelledby="steps-title"
        className="px-(--gutter) py-(--section)"
      >
        <div data-reveal>
          <h2
            id="steps-title"
            className="text-headline font-bold md:pl-[3vw]"
          >
            지원부터 해오름식까지,
            <br />
            합류는 이렇게 진행됩니다
          </h2>
        </div>
        <div className="mt-16 grid gap-12 md:mt-24 md:grid-cols-12 md:gap-(--gutter)">
          <div className="flex flex-col gap-4 md:col-span-4 md:self-end">
            <div className="relative aspect-[4/5] w-3/5 overflow-hidden md:w-full">
              <Image
                src={PHOTOS.vision.src}
                alt={PHOTOS.vision.alt}
                fill
                sizes="(max-width: 768px) 60vw, 30vw"
                className="object-cover"
              />
            </div>
            <p className="text-note text-soft">
              {LATEST_RECRUIT.cohort}기 정기모집: {LATEST_RECRUIT.period}, 발표 {LATEST_RECRUIT.announcement}
            </p>
          </div>
          <ol
            data-reveal
            className="order-first flex flex-col gap-10 md:order-none md:col-span-7 md:col-start-6"
          >
            {STEPS.map((step) => (
              <li
                key={step.title}
                className="grid gap-2 sm:grid-cols-[6.5rem_1fr] sm:gap-6"
              >
                <span className="text-body font-semibold text-soft">{step.when}</span>
                <div className="flex flex-col gap-2">
                  <h3 className="text-statement font-bold">{step.title}</h3>
                  <p className="text-body">{step.detail}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* 해오름식 */}
      <section
        id="haeoreum"
        aria-labelledby="haeoreum-title"
        className="bg-field text-on-field"
      >
        <div className="relative h-[56svh] overflow-hidden md:h-[78svh]">
          <Image
            src={PHOTOS.haeoreum.src}
            alt={PHOTOS.haeoreum.alt}
            fill
            sizes="100vw"
            className="drift object-cover"
          />
        </div>
        <div
          data-reveal
          className="grid gap-10 px-(--gutter) py-(--section) md:grid-cols-12 md:gap-(--gutter)"
        >
          <h2
            id="haeoreum-title"
            className="text-display font-extrabold md:col-span-5"
          >
            해오름식
          </h2>
          <div className="flex flex-col gap-8 md:col-span-7">
            <p className="text-statement">
              새 기수를 맞이하는 대한학생회의 입회식입니다. 1년마다 열리는 정기총회와 함께, 회장단과 위원회를 조직하고
              연간 결산과 현임 기수의 방향을 정하며 한 해를 시작합니다.
            </p>
            <dl className="grid gap-6 text-body sm:grid-cols-3">
              <div>
                <dt className="text-note text-on-field-soft">가장 최근</dt>
                <dd className="font-semibold">{LATEST_HAEOREUM.title}</dd>
              </div>
              <div>
                <dt className="text-note text-on-field-soft">일시</dt>
                <dd className="font-semibold">{LATEST_HAEOREUM.date}</dd>
              </div>
              <div>
                <dt className="text-note text-on-field-soft">장소</dt>
                <dd className="font-semibold">{LATEST_HAEOREUM.place}</dd>
              </div>
            </dl>
          </div>
        </div>
      </section>

      {/* 위원회 소개: 왼쪽 목록이 붙어 있고 오른쪽 위원회들이 지나갑니다. */}
      <section
        id="committees"
        aria-labelledby="committees-title"
        className="bg-surface px-(--gutter) py-(--section)"
      >
        <div className="grid gap-12 md:grid-cols-12 md:gap-(--gutter)">
          <div className="md:col-span-4">
            <h2
              id="committees-title"
              className="text-headline font-bold"
            >
              열 개의 위원회
            </h2>
            <p className="mt-6 max-w-[30ch] text-body">
              합류하면 회장단과 함께 집행위원회 중 한 곳에서 사업을 꾸립니다. 위원회 이름을 누르면 바로 이동합니다.
            </p>
            <div className="mt-8 md:sticky md:top-[calc(var(--header)+48px)] md:mt-12">
              <CommitteeNav
                items={[LEADERSHIP, ...COMMITTEES].map(({ id, name }) => ({ id, name }))}
              />
            </div>
          </div>
          <div className="flex flex-col gap-20 md:col-span-7 md:col-start-6 md:gap-28">
            {[LEADERSHIP, ...COMMITTEES].map((committee) => (
              <article
                key={committee.id}
                id={committee.id}
                data-reveal
                className="flex flex-col gap-6"
              >
                <h3 className="text-headline font-bold">{committee.name}</h3>
                <p className="text-statement text-soft">{committee.summary}</p>
                {committee.photo && (
                  <figure className="flex flex-col gap-3">
                    <div className="relative aspect-[16/9] overflow-hidden bg-bg">
                      <Image
                        src={committee.photo.image.src}
                        alt={committee.photo.image.alt}
                        fill
                        sizes="(max-width: 768px) 100vw, 55vw"
                        className="object-cover"
                      />
                    </div>
                    <figcaption className="text-note text-soft">{committee.photo.caption}</figcaption>
                  </figure>
                )}
                <ul className="flex flex-col gap-5">
                  {committee.works.map((work) => (
                    <li
                      key={work.title}
                      className="grid gap-1 sm:grid-cols-[minmax(10rem,14rem)_1fr] sm:gap-6"
                    >
                      <span className="text-body font-bold">{work.title}</span>
                      {work.detail && <span className="text-body">{work.detail}</span>}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 지원 자격과 자주 묻는 질문 */}
      <section
        aria-labelledby="faq-title"
        className="px-(--gutter) py-(--section)"
      >
        <div
          data-reveal
          className="grid gap-12 md:grid-cols-12 md:gap-(--gutter)"
        >
          <h2
            id="faq-title"
            className="text-headline font-bold md:col-span-5"
          >
            지원 전에
            <br />
            확인하세요
          </h2>
          <dl className="flex flex-col gap-10 md:col-span-7">
            {REQUIREMENTS.map((item) => (
              <div
                key={item.title}
                className="flex flex-col gap-2"
              >
                <dt className="text-statement font-bold">{item.title}</dt>
                <dd className="text-body">{item.body}</dd>
              </div>
            ))}
          </dl>
        </div>
        <dl
          data-reveal
          className="mt-(--section) grid gap-x-(--gutter) gap-y-12 md:grid-cols-2"
        >
          {FAQ.map((item) => (
            <div
              key={item.q}
              className="flex flex-col gap-3"
            >
              <dt className="text-statement font-bold">{item.q}</dt>
              <dd className="text-body">{item.a}</dd>
            </div>
          ))}
        </dl>
      </section>

      {/* 지원 */}
      <section
        id="apply"
        aria-labelledby="apply-title"
        className="flex min-h-[70svh] flex-col justify-between gap-16 bg-accent px-(--gutter) py-(--section) text-on-accent"
      >
        <h2
          id="apply-title"
          className="text-display font-extrabold"
        >
          다음 기수의 이름을
          <br />
          기다립니다
        </h2>
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <p className="max-w-[40ch] text-body">
            모집 기간에는 링크트리에 해당 기수의 가입신청서와 신청폼이 열립니다. 궁금한 점은 인스타그램 DM이나 메일로
            물어봐 주세요.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noreferrer"
              className="lift inline-flex h-12 items-center rounded-full bg-bg px-6 text-body font-semibold text-ink hover:bg-ink hover:text-on-field"
            >
              지원서 받기
            </a>
            <a
              href={INSTAGRAM_URL}
              target="_blank"
              rel="noreferrer"
              className="lift inline-flex h-12 items-center rounded-full bg-ink px-6 text-body font-semibold text-on-field"
            >
              인스타그램 DM
            </a>
            <a
              href={`mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent('[대한학생회 합류 문의]')}`}
              className="link-underline px-2 text-body font-semibold"
            >
              메일 문의
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default RecruitPage;
