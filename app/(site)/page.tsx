import Image from 'next/image';
import { Fragment } from 'react';
import Link from 'next/link';
import { COMMITTEES } from '@/content/committees';
import {
  BUSINESS_AREAS,
  FOUNDED_YEAR,
  HISTORY,
  PHOTOS,
  SITE_URL,
  SNS_LINKS,
  SPIRITS,
  STATS,
} from '@/content/site';
import { getEvents, splitEventContent } from '@/lib/events';
import CountUp from '@/widgets/CountUp';
import EventsParagraph from '@/widgets/EventsParagraph';
import HistoryTimeline from '@/widgets/HistoryTimeline';
import PhotoReel from '@/widgets/PhotoReel';

// /admin 에서 등록한 대표 행사가 바로 보이도록 요청마다 새로 그립니다.
export const dynamic = 'force-dynamic';

export const metadata = {
  alternates: { canonical: `${SITE_URL}/` },
};

const HERO_REEL = [PHOTOS.exchange, PHOTOS.cemetery, PHOTOS.vision, PHOTOS.daenaering, PHOTOS.haeoreum];

const ORGANIZATION = ['회장', '부회장', '중앙위원회', '집행위원회'];

const Home = async () => {
  const events = (await getEvents()).map((event) => ({
    ...event,
    ...splitEventContent(event.content),
  }));

  return (
    <>
      {/* 첫 화면: 슬로건 한 문장, 그 사이로 실제 행사 사진이 지나갑니다. */}
      <section className="flex min-h-[calc(100svh-var(--header))] flex-col justify-between gap-12 px-(--gutter) pt-8 pb-8">
        <h1 className="my-auto text-display font-bold leading-[1.02]">
          <span className="sr-only">대한학생회, </span>
          <span className="block">
            세계 속에서
            <PhotoReel
              photos={HERO_REEL}
              priority
              sizes="(max-width: 640px) 100vw, 26vw"
              className="my-4 block aspect-[16/10] w-full sm:my-0 sm:ml-[0.28em] sm:inline-block sm:aspect-auto sm:h-[0.78em] sm:w-[2.4em] sm:align-baseline"
            />
          </span>
          <span className="block text-right">당당한 대한국인</span>
        </h1>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <p className="max-w-[34ch] text-body">
            대한학생회는 {FOUNDED_YEAR}년, 전국의 고등학교 학생회장들이 모여 설립한 전국고교학생회장연합입니다.
          </p>
          <Link
            href="/recruit"
            className="lift inline-flex h-12 w-fit items-center rounded-full bg-accent px-6 text-body font-semibold text-on-accent hover:bg-ink"
          >
            합류 안내 보기
          </Link>
        </div>
      </section>

      {/* 문장 속 작은 창이 열린 것처럼, 같은 사진을 화면 가득 보여줍니다. */}
      <figure className="relative">
        <div className="relative h-[62svh] overflow-hidden md:h-[86svh]">
          <Image
            src={PHOTOS.exchange.src}
            alt={PHOTOS.exchange.alt}
            fill
            sizes="100vw"
            className="drift object-cover"
          />
        </div>
        <figcaption className="px-(--gutter) pt-3 text-note text-soft">
          제7회 학생회 정보 교류의 장 - 학생자치를 부탁해!, 2026년 1월
        </figcaption>
      </figure>

      {/* 핵심 수치 STAT-01~04 */}
      <section
        aria-labelledby="stats-title"
        className="px-(--gutter) py-(--section)"
      >
        <div
          data-reveal
          className="grid gap-14 md:grid-cols-12 md:gap-(--gutter)"
        >
          <h2
            id="stats-title"
            className="max-w-[24ch] text-statement font-medium text-soft md:col-span-5"
          >
            <span className="font-bold text-ink">{FOUNDED_YEAR}년</span>부터 지금까지, 대한학생회는 숫자로 이렇게
            쌓여 왔습니다.
          </h2>
          <dl className="grid gap-y-10 md:col-span-7 md:grid-cols-2 md:gap-x-(--gutter) md:gap-y-14">
            {[
              { label: '운영 기간', value: STATS.years, unit: '년', note: `${FOUNDED_YEAR}년 설립` },
              { label: '누적 활동자', value: STATS.alumni, unit: '명', note: '지금까지 함께한 사람' },
              { label: '현재 활동 임원', value: STATS.officers, unit: '명', note: '현 체제 기준' },
              { label: '진행 중인 사업', value: STATS.projects, unit: '개', note: '현 체제 기준' },
            ].map((stat) => (
              <div
                key={stat.label}
                className="grid grid-cols-[11.5rem_1fr] items-end gap-4 md:flex md:flex-col-reverse md:items-start md:gap-2"
              >
                <dt className="pb-2 text-note text-soft md:pb-0">
                  <span className="block font-semibold text-ink">{stat.label}</span>
                  {stat.note}
                </dt>
                <dd className="order-first text-[clamp(52px,7.4vw,128px)] font-bold leading-none tracking-[-0.05em] md:order-none">
                  <CountUp value={stat.value} />
                  <span className="ml-1.5 text-[0.36em] font-semibold tracking-normal text-soft">{stat.unit}</span>
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* 단체 소개 */}
      <section
        id="introduce"
        aria-labelledby="introduce-title"
        className="bg-surface px-(--gutter) py-(--section)"
      >
        <h2
          id="introduce-title"
          className="sr-only"
        >
          단체 소개
        </h2>
        <div
          data-reveal
          className="grid gap-12 md:grid-cols-12 md:gap-(--gutter)"
        >
          <dl className="order-2 grid grid-cols-3 gap-4 text-note md:order-1 md:col-span-3 md:flex md:flex-col md:gap-6">
            <div>
              <dt className="text-soft">설립</dt>
              <dd className="font-semibold">2002년 10월</dd>
            </div>
            <div>
              <dt className="text-soft">구성</dt>
              <dd className="font-semibold">전국 고교 학생회장</dd>
            </div>
            <div>
              <dt className="text-soft">법인</dt>
              <dd className="font-semibold">사회적 협동조합 (2014년 인가)</dd>
            </div>
          </dl>
          <div className="order-1 flex flex-col gap-8 md:order-2 md:col-span-9">
            <p className="text-statement font-medium">
              <Image
                src="/primary-logo.png"
                alt=""
                width={330}
                height={330}
                className="float-left mt-[0.2em] mr-[0.5em] size-[3.9em]"
              />
              대한학생회는 2002년, ‘세계 속에서 당당한 대한국인’이라는 슬로건 아래 전국고교학생회장들이 모여 설립한
              단체로 올해 {STATS.years}주년을 맞이했습니다.
            </p>
            <p className="clear-left text-body sm:text-statement sm:text-soft">
              <span className="font-semibold text-ink">정의(正義), 정직(正直), 성실(誠實), 예의(禮儀)의 4대 정신</span>
              을 바탕으로 대한민국 청소년들의 자질 함양과 차세대 리더 양성을 위해{' '}
              <span className="font-semibold text-ink">교육, 문화, 복지, 교류, 운영의 5대 사업 분야</span>에 대한
              다양한 공익사업을 진행하고 있습니다.
            </p>
          </div>
        </div>
      </section>

      {/* 4대 정신과 5대 사업 분야 */}
      <section
        aria-labelledby="spirits-title"
        className="px-(--gutter) py-(--section)"
      >
        <div data-reveal>
          <h2
            id="spirits-title"
            className="text-headline font-bold"
          >
            4대 정신
          </h2>
          <ul className="mt-12 grid grid-cols-2 gap-x-(--gutter) gap-y-10 md:mt-16 md:grid-cols-4">
            {SPIRITS.map((spirit) => (
              <li
                key={spirit.name}
                className="flex flex-col gap-2"
              >
                <span className="text-display font-bold">{spirit.name}</span>
                <span className="text-statement font-medium text-soft">{spirit.hanja}</span>
              </li>
            ))}
          </ul>
        </div>
        <div
          data-reveal
          className="mt-(--section) grid gap-8 md:grid-cols-12 md:gap-(--gutter)"
        >
          <h2 className="text-headline font-bold md:col-span-4">5대 사업 분야</h2>
          <p className="text-headline font-bold text-soft md:col-span-8">
            {BUSINESS_AREAS.map((area, idx) => (
              <Fragment key={area}>
                <span className="text-ink">{area}</span>
                {idx < BUSINESS_AREAS.length - 1 && ' · '}
              </Fragment>
            ))}
          </p>
        </div>
        <blockquote
          data-reveal
          className="mt-(--section) flex flex-col items-center gap-1 text-center text-statement font-semibold"
        >
          <p>유구한 역사와 전통을 지닌 대한국인(大韓國人)의 애국심(愛國心)을 가지고</p>
          <p>국가와 국민의 발전에 기여하는</p>
          <p>자랑스런 대한민국의 글로벌 리더로 성장하겠습니다.</p>
        </blockquote>
      </section>

      {/* 조직도 */}
      <section
        id="organization"
        aria-labelledby="organization-title"
        className="bg-surface px-(--gutter) py-(--section)"
      >
        <div
          data-reveal
          className="grid gap-12 md:grid-cols-12 md:gap-(--gutter)"
        >
          <div className="flex flex-col gap-6 md:col-span-5">
            <h2
              id="organization-title"
              className="text-headline font-bold"
            >
              조직도
            </h2>
            <p className="max-w-[30ch] text-statement text-soft">
              회장단과 중앙위원회 아래, 열 개의 집행위원회가 사업을 나눠 맡습니다.
            </p>
            <Link
              href="/recruit#committees"
              className="link-underline w-fit text-body font-semibold"
            >
              위원회별 하는 일 보기
            </Link>
          </div>
          {/* 조직도: 위에서 아래로 내려오는 순서가 곧 위계입니다. 위원회 이름은 Recruit 의 해당 위원회로 이어집니다. */}
          <ol
            aria-label="대한학생회 조직도"
            className="flex flex-col items-start md:col-span-7"
          >
            {ORGANIZATION.map((role, idx) => (
              <li
                key={role}
                className="flex flex-col items-start"
              >
                {idx > 0 && (
                  <span
                    aria-hidden
                    className="ml-7 block h-5 w-1 bg-ink"
                  />
                )}
                <span className="inline-flex h-14 items-center rounded-full bg-ink px-7 text-body font-semibold text-on-field">
                  {role}
                </span>
              </li>
            ))}
            <li className="flex flex-col items-start">
              <span
                aria-hidden
                className="ml-7 block h-5 w-1 bg-ink"
              />
              <ul className="flex flex-wrap gap-2">
                {COMMITTEES.map((committee) => (
                  <li key={committee.id}>
                    <Link
                      href={`/recruit#${committee.id}`}
                      className="lift inline-flex h-12 items-center rounded-full bg-bg px-5 text-body font-semibold hover:bg-accent hover:text-on-accent"
                    >
                      {committee.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </li>
          </ol>
        </div>
      </section>

      {/* 연혁: 왼쪽 제목이 붙어 있는 동안 연도가 지나갑니다. */}
      <section
        id="history"
        className="bg-field px-(--gutter) py-(--section) text-on-field"
      >
        <HistoryTimeline history={HISTORY} />
      </section>

      {/* 대표 행사 */}
      {events.length > 0 && (
        <section
          id="events"
          className="px-(--gutter) py-(--section)"
        >
          <EventsParagraph
            events={events.map(({ id, title, tagline, body, imageUrl }) => ({
              id,
              title,
              tagline,
              body,
              imageUrl,
            }))}
          />
        </section>
      )}

      {/* SNS */}
      <section
        id="SNS"
        aria-labelledby="sns-title"
        className="bg-surface px-(--gutter) py-(--section)"
      >
        <div
          data-reveal
          className="grid gap-10 md:grid-cols-12 md:gap-(--gutter)"
        >
          <p className="text-statement font-medium md:col-span-5">
            행사 소식과 위원회 카드뉴스는 SNS에 가장 먼저 올라옵니다. 모집 공고도 인스타그램에서 확인하세요.
          </p>
          <div className="relative size-24 md:col-span-2 md:col-start-8 md:size-40">
            <Image
              src="/primary-logo.png"
              alt=""
              fill
              sizes="160px"
              className="object-contain"
            />
          </div>
          <div className="flex flex-col gap-5 md:col-span-3 md:col-start-10">
            <h2
              id="sns-title"
              className="text-body font-semibold"
            >
              어디서 만날까요?
            </h2>
            <ul className="flex flex-col gap-3">
              {SNS_LINKS.map((sns) => (
                <li key={sns.name}>
                  <a
                    href={sns.href}
                    target="_blank"
                    rel="noreferrer"
                    className="link-underline text-body font-semibold"
                  >
                    {sns.name}
                  </a>
                  <span className="block text-note text-soft">{sns.handle}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
