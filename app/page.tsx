import Footer from '@/widgets/Footer';
import Header from '@/widgets/Header';
import HGroup from '@/widgets/HGroup';
import KSCCarousel from '@/widgets/KSCCarousel';
import classNames from 'classnames';
import Image from 'next/image';
import { Fragment } from 'react';

const Home = () => {
  return (
    <main className="bg-white">
      <Header />
      <section
        id="introduce"
        className="w-screen h-screen bg-[url('/background.jpg')] bg-cover bg-center flex items-center justify-center flex-col pt-16 md:pt-0"
      >
        <hgroup className="flex flex-col items-center justify-center -mt-12 font-[Pretendard] px-4">
          <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl text-[#3943AE] font-semibold text-center">
            전국고교학생회장연합
          </h2>
          <h1 className="text-5xl sm:text-7xl md:text-9xl lg:text-[13rem] text-[#00187a] font-bold leading-[115%] text-center">
            대한학생회
          </h1>
        </hgroup>
      </section>
      <section className="flex items-center justify-center px-[5%] md:px-[10%] lg:px-[16%] flex-col gap-10 md:gap-16 lg:gap-20 bg-[url('/introduce-background.png')] bg-cover bg-center w-screen min-h-screen py-20">
        <HGroup>단체 소개</HGroup>
        <article className="flex flex-col font-[Pretendard] text-[#00187a] w-full">
          {[
            { id: 1, text: '대한학생회는 2002년,' },
            { id: 2, text: "'세계 속에서 당당한 대한국인'" },
            {
              id: 3,
              text: '이라는 슬로건 아래 전국고교학생회장들이 모여 설립한 단체로',
            },
            { id: 4, text: `올해 ${new Date().getFullYear() - 2002}주년을 맞이했습니다.` },
          ].map((paragraph) => (
            <p
              key={paragraph.id}
              className={classNames(
                paragraph.id === 2
                  ? 'font-medium text-xl sm:text-2xl md:text-3xl lg:text-4xl italic py-3 md:py-5'
                  : 'font-bold text-base sm:text-lg md:text-xl lg:text-2xl',
              )}
            >
              {paragraph.text}
            </p>
          ))}
        </article>
        <article className="flex flex-col font-[Pretendard] text-[#00187a] w-full md:ml-auto">
          {[
            {
              id: 1,
              text: '<span>정의(正義), 정직(正直), 성실(誠實), 예의(禮儀)의 4대 정신</span>을 바탕으로',
            },
            {
              id: 2,
              text: '대한민국 청소년들의 자질 함양과 차세대 리더 양성을 위해',
            },
            {
              id: 3,
              text: '<span>교육, 문화, 복지, 교류, 운영의 5대 사업 분야</span>에 대한 다양한 공익사업을 진행하고 있습니다.',
            },
          ].map((paragraph) => (
            <p
              key={paragraph.id}
              className="font-bold text-base sm:text-lg md:text-xl lg:text-2xl text-left md:text-right [&>span]:bg-[#FEEFC6]"
              dangerouslySetInnerHTML={{ __html: paragraph.text }}
            />
          ))}
        </article>
        <article className="flex flex-col items-center font-[Pretendard] text-[#00187a] w-full">
          {[
            {
              id: 1,
              text: '유구한 역사와 전통을 지닌 대한국인(大韓國人)의 애국심(愛國心)을 가지고',
            },
            { id: 2, text: '국가와 국민의 발전에 기여하는' },
            {
              id: 3,
              text: '자랑스런 대한민국의 글로벌 리더로 성장하겠습니다.',
            },
          ].map((paragraph) => (
            <p
              key={paragraph.id}
              className="font-medium text-lg sm:text-xl md:text-2xl lg:text-3xl text-center"
            >
              {paragraph.text}
            </p>
          ))}
        </article>
      </section>
      <section className="flex items-center py-[5%] px-[5%] md:px-[10%] lg:px-[16%] flex-col gap-12 md:gap-16 lg:gap-24 bg-[#E9F1FF] w-screen min-h-screen">
        <HGroup>조직도</HGroup>
        <article className="flex flex-col items-center w-full">
          {[
            { id: 1, name: '회장' },
            { id: 2, name: '부회장' },
            { id: 3, name: '중앙위원회' },
            { id: 4, name: '집행위원회' },
          ].map((organization) => (
            <Fragment key={organization.id}>
              <div className="bg-[#00187a] text-white font-black text-sm md:text-base lg:text-xl py-2 px-4 text-center w-28 md:w-32 lg:w-36">
                {organization.name}
              </div>
              <div className="h-4 md:h-5 w-0.5 bg-[#00187a] mx-auto" />
            </Fragment>
          ))}
          <div className="px-5.75 w-full max-w-4xl">
            <div className="w-full h-0.5 bg-[#00187a]" />
          </div>

          {/* 데스크톱 버전 - 가로 배치 */}
          <div className="hidden lg:flex gap-6 xl:gap-10">
            {[
              '교육과학위원회',
              '기획재정위원회',
              '나라사랑위원회',
              '대외협력위원회',
              '문화체육위원회',
              '사무운영위원회',
              '사회복지위원회',
              '언론홍보위원회',
              '윤리위원회',
              '환경안전위원회',
            ].map((organization) => {
              if (organization === '윤리위원회') {
                return (
                  <div
                    key={organization}
                    className="flex flex-col justify-center items-center"
                  >
                    <div className="h-5 w-0.5 bg-[#00187a] mx-auto" />
                    <div className="bg-[#00187a] text-white font-black text-base xl:text-xl h-48 xl:h-56 py-3.5 w-5 xl:w-6 px-5 xl:px-6 flex flex-col items-center justify-between">
                      {['윤', '리', '위', '원', '회'].map((organizationWord) => (
                        <span key={organizationWord}>{organizationWord}</span>
                      ))}
                    </div>
                  </div>
                );
              }

              return (
                <div
                  key={organization}
                  className="flex flex-col justify-center items-center"
                >
                  <div className="h-5 w-0.5 bg-[#00187a] mx-auto" />
                  <div className="bg-[#00187a] text-white font-black text-base xl:text-xl h-48 xl:h-56 py-2 w-5 xl:w-6 px-5 xl:px-6 flex items-center justify-center">
                    <span>{organization}</span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* 태블릿 버전 - 2줄 배치 */}
          <div className="hidden md:grid lg:hidden grid-cols-5 gap-4 w-full max-w-3xl">
            {[
              '교육과학위원회',
              '기획재정위원회',
              '나라사랑위원회',
              '대외협력위원회',
              '문화체육위원회',
              '사무운영위원회',
              '사회복지위원회',
              '언론홍보위원회',
              '윤리위원회',
              '환경안전위원회',
            ].map((organization) => (
              <div
                key={organization}
                className="flex flex-col justify-center items-center"
              >
                <div className="h-3 w-0.5 bg-[#00187a] mx-auto" />
                <div className="bg-[#00187a] text-white font-black text-xs h-32 py-2 w-4 px-4 flex items-center justify-center">
                  <span>{organization}</span>
                </div>
              </div>
            ))}
          </div>

          {/* 모바일 버전 - 3열 그리드 */}
          <div className="grid md:hidden grid-cols-3 gap-3 w-full max-w-md">
            {[
              '교육과학위원회',
              '기획재정위원회',
              '나라사랑위원회',
              '대외협력위원회',
              '문화체육위원회',
              '사무운영위원회',
              '사회복지위원회',
              '언론홍보위원회',
              '윤리위원회',
              '환경안전위원회',
            ].map((organization) => (
              <div
                key={organization}
                className="flex flex-col justify-center items-center"
              >
                <div className="h-2 w-0.5 bg-[#00187a] mx-auto" />
                <div className="bg-[#00187a] text-white font-black text-[10px] h-24 py-1 w-3 px-3 flex items-center justify-center">
                  <span>{organization}</span>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
      <section className="flex items-center py-[5%] px-[5%] md:px-[10%] lg:px-[16%] flex-col gap-12 md:gap-16 lg:gap-24 bg-[#001B75] w-screen min-h-screen">
        <HGroup variant="dark">연혁</HGroup>
        <article className="flex w-full justify-between">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 lg:gap-10">
            {[
              [
                { year: 2002, list: ['10월 “대한민국고등학교총학생회” 설립'] },
                {
                  year: 2003,
                  list: [
                    '5월 ‘한강 청소년 동아리 문화축제’ 주관',
                    '8월 ‘청소년문화페스티벌’ 주최 및 주관',
                  ],
                },
                {
                  year: 2004,
                  list: [
                    '12월 ‘제1회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
                    '12월 대한민국 최우수 NGO 선정',
                  ],
                },
                {
                  year: 2005,
                  list: [
                    '12월 ‘제2회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
                    '12월 세계 최연소 독일 국회의원 ‘안나 뤼어만’과의 토론회 참석',
                  ],
                },
                {
                  year: 2006,
                  list: ['6월 ‘세상의 중심에서 나눔을 외치다’ 봉사 캠페인 주최 및 주관'],
                },
                {
                  year: 2007,
                  list: ['1월 ‘제3회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관'],
                },
                {
                  year: 2008,
                  list: [
                    '1월 ‘제4회 전국고교 학생회장 토론회 및 리더십연수’ 주최',
                    '12월 ‘한중일 정상과 3국 청소년대표자와의 만남’ 참석',
                  ],
                },
                {
                  year: 2009,
                  list: ['3월 ‘제5회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관'],
                },
                {
                  year: 2010,
                  list: [
                    '2월 ‘제6회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
                    '10월 ‘경술국치 100년, 그 아픔을 되새기다’ 주최 및 주관',
                  ],
                },
              ],
              [
                {
                  year: 2011,
                  list: [
                    '2월 ‘제7회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
                    '8월 ‘제11회 대한민국 청소년 동아리 경진 대회 후원',
                    '8월 ‘세계 청소년 문화 축제’ 후원',
                  ],
                },
                {
                  year: 2012,
                  list: [
                    '4월 ‘제8회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
                    '10월 ‘대한학생회 창립 10주년 기념식’ 주최 및 주관',
                  ],
                },
                {
                  year: 2013,
                  list: ['3월 ‘제9회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관'],
                },
                {
                  year: 2014,
                  list: [
                    '2월 대한학생회 사회적 협동조합 인가 (기획재정부)',
                    '3월 ‘제10회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
                    '9월 취약계층 학생 대상 멘토링 프로그램 운영',
                  ],
                },
                {
                  year: 2015,
                  list: [
                    '3월 ‘제11회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
                    '10월 ‘세계한글문화축제 - 한글과 애국가가 만나다’ 주최 및 주관',
                    '12월 ‘대한학생회와 함께하는 따뜻한 크리스마스’ 주최 및 주관',
                  ],
                },
                {
                  year: 2016,
                  list: [
                    '2월 ‘제12회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
                    '07. 대한학생회 & 미래 인재 문화교육진흥원 업무 협약',
                    '10월 ‘제4회 꿈지락’ 주최 및 주관',
                    '12월 ‘제1회 서로를 품다’ 주최 및 주관',
                  ],
                },
              ],
              [
                {
                  year: 2017,
                  list: [
                    '2월 ‘제13회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
                    '8월 ‘제1회 그리다 통일’ 주최 및 주관',
                    '10월 ‘제1회 학생회 정보 교류의 장 - 학생회플레이리스트’ 주최 및 주관',
                  ],
                },
                {
                  year: 2018,
                  list: [
                    '2월 ‘제14회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
                    '10월 ‘제2회 학생회 정보 교류의 장 - 전지적학생회시점’ 주최 및 주관',
                    '12월 ‘대한학생회와 함께하는 따뜻한 크리스마스’ 주최 및 주관',
                  ],
                },
                {
                  year: 2019,
                  list: [
                    '10월 ‘제3회 학생회 정보 교류의 장 - 학생자치를입력하세요www’ 주최 및 주관',
                  ],
                },
                {
                  year: 2021,
                  list: [
                    '3월 ‘제4회 학생회 정보 교류의 장 - 구해줘학생자치 with대한학생회’ 주최 및 주관',
                  ],
                },
                {
                  year: 2023,
                  list: ['2월 ‘제5회 학생회 정보 교류의 장 -  비정상자치’ 주최 및 주관'],
                },
                {
                  year: 2024,
                  list: ['1월 ‘제6회 학생회 정보 교류의 장 - 태어난 김에 학생자치’ 주최 및 주관'],
                },
                {
                  year: 2025,
                  list: ['1월 ‘청소년 리더 대담회 : 더 비전 2025’ 주최 및 주관'],
                },
                {
                  year: 2026,
                  list: ['1월 ‘제7회 학생회 정보 교류의 장 - 학생자치를 부탁해!’ 주최 및 주관'],
                },
              ],
              'icon',
            ].map((historyList, idx) => {
              if (typeof historyList === 'string') {
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-center md:col-span-2"
                  >
                    <Image
                      src="/logo-big.png"
                      width={500}
                      height={500}
                      alt="logo"
                      className="w-48 md:w-64 lg:w-80 h-auto"
                    />
                  </div>
                );
              }
              return (
                <div
                  className="flex gap-2 md:gap-3 lg:gap-4"
                  key={idx}
                >
                  <div className="h-full w-0.5 bg-white" />
                  <div className="flex flex-col gap-4 md:gap-6 lg:gap-8">
                    {historyList.map((history) => (
                      <div
                        key={history.year}
                        className="flex text-white font-[Pretendard] gap-2 md:gap-3"
                      >
                        <div className="absolute -ml-3.5 md:-ml-4.5 lg:-ml-5.25 w-1.5 md:w-2 h-1.5 md:h-2 bg-white rounded-full mt-2 md:mt-2.5 lg:mt-3" />
                        <h1 className="text-lg md:text-xl lg:text-2xl font-bold min-w-[3rem] md:min-w-[3.5rem]">
                          {history.year}
                        </h1>
                        <ul className="mt-0.5 md:mt-1 lg:mt-1.25">
                          {history.list.map((info) => (
                            <p
                              key={info}
                              className="text-xs md:text-sm lg:text-base font-medium break-keep"
                            >
                              {info}
                            </p>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
          <div></div>
        </article>
      </section>
      <section
        id="events"
        className="flex items-center py-[5%] px-[5%] md:px-0 flex-col gap-12 md:gap-16 lg:gap-24 w-screen min-h-screen"
      >
        <HGroup>대표 행사</HGroup>
        <KSCCarousel />
      </section>
      <section
        id="SNS"
        className="flex items-center py-[5%] px-[5%] md:px-[10%] lg:px-[16%] flex-col gap-12 md:gap-16 lg:gap-24 bg-[#E9F1FF] w-screen"
      >
        <HGroup>SNS</HGroup>
        <ul className="w-full grid grid-cols-2 md:flex md:justify-between gap-6 md:gap-4">
          {[
            {
              name: '대한학생회 공식 인스타그램',
              logoUrl: '/instagram.png',
              href: 'https://www.instagram.com/korea_studentscouncil_official/',
            },
            {
              name: '대한학생회 공식 페이스북',
              logoUrl: '/facebook.png',
              href: 'https://www.facebook.com/koreastudentscouncil/?locale=ko_KR',
            },
            {
              name: '대한학생회 공식 유튜브',
              logoUrl: '/youtube.png',
              href: 'https://www.youtube.com/@korea_studentscouncil_official',
            },
            {
              name: '대한학생회 공식 카페',
              logoUrl: '/naver-cafe.png',
              href: 'https://cafe.naver.com/koreastudentscouncil',
            },
          ].map((snsInfo) => (
            <a
              href={snsInfo.href}
              target="_blank"
              key={snsInfo.name}
              className="flex flex-col gap-2 justify-center items-center"
            >
              <Image
                src={snsInfo.logoUrl}
                width={100}
                height={100}
                alt={snsInfo.name}
                className="w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
              />
              <span className="text-[10px] md:text-xs font-[Pretendard] font-semibold underline text-[#001B75] text-center">
                {snsInfo.name}
              </span>
            </a>
          ))}
        </ul>
      </section>
      <section
        id="contact"
        className="flex items-center py-[5%] px-[5%] md:px-[10%] lg:px-[16%] flex-col gap-12 md:gap-16 lg:gap-24 w-screen bg-[#001B75]"
      >
        <HGroup variant="dark">Contact</HGroup>
        <article className="font-[Pretendard] text-white flex flex-col items-center justify-center gap-1">
          <h2 className="text-lg md:text-xl font-bold">문 의</h2>
          <p className="whitespace-pre-wrap text-center font-medium text-sm md:text-base">
            하단 이메일 주소로 메일 보내주시기 바랍니다.{'\n'}빠른 시일 내로 회신드리겠습니다.
          </p>
          <div className="h-6 md:h-10" />
          <a
            className="text-lg md:text-2xl lg:text-3xl font-bold break-all text-center"
            href="mailto:koreasc.official@gmail.com"
          >
            koreasc.official@gmail.com
          </a>
        </article>
      </section>
      <Footer />
    </main>
  );
};

export default Home;
