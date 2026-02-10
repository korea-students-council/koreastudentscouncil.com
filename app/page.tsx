import Footer from '@/widgets/Footer';
import Header from '@/widgets/Header';
import HGroup from '@/widgets/HGroup';
import KSCCarousel from '@/widgets/KSCCarousel';
import classNames from 'classnames';
import Image from 'next/image';
import React, { Fragment } from 'react';

const Home = () => {
  return (
    <main>
      <Header />
      <section
        id="introduce"
        className={classNames(
          "w-screen h-screen bg-[url('/background.jpg')] bg-cover bg-center flex items-center justify-center flex-col",
          'sm:px-6',
        )}
      >
        <hgroup
          className={classNames(
            'flex flex-col items-center justify-center -mt-12 font-[Pretendard]',
            'sm:-mt-6',
          )}
        >
          <h2
            className={classNames('text-4xl text-[#3943AE] font-semibold', 'sm:text-2xl')}
          >
            전국고교학생회장연합
          </h2>
          <h1
            className={classNames(
              'text-[13rem] text-[#00187a] font-bold leading-[115%]',
              'sm:text-6xl sm:leading-tight',
            )}
          >
            대한학생회
          </h1>
        </hgroup>
      </section>
      <section
        className={classNames(
          "flex items-center justify-center px-[16%] flex-col gap-20 bg-[url('/introduce-background.png')] bg-cover bg-center w-screen h-screen",
          'sm:h-auto sm:py-16 sm:px-6 sm:gap-10',
        )}
      >
        <HGroup>단체 소개</HGroup>
        <article className="flex flex-col font-[Pretendard] text-[#00187a] w-full">
          {[
            { id: 1, text: '대한학생회는 2002년,' },
            { id: 2, text: "'세계 속에서 당당한 대한국인'" },
            { id: 3, text: '이라는 슬로건 아래 전국고교학생회장들이 모여 설립한 단체로' },
            { id: 4, text: '올해 23주년을 맞이했습니다.' },
          ].map((paragraph) => (
            <p
              key={paragraph.id}
              className={classNames(
                paragraph.id === 2
                  ? 'font-medium text-4xl italic py-5'
                  : 'font-bold text-2xl',
                paragraph.id === 2 ? 'sm:text-2xl sm:py-3' : 'sm:text-lg',
              )}
            >
              {paragraph.text}
            </p>
          ))}
        </article>
        <article className="flex flex-col font-[Pretendard] text-[#00187a] ml-auto">
          {[
            {
              id: 1,
              text: '<span>정의(正義), 정직(正直), 성실(誠實), 예의(禮儀)의 4대 정신</span>을 바탕으로',
            },
            { id: 2, text: '대한민국 청소년들의 자질 함양과 차세대 리더 양성을 위해' },
            {
              id: 3,
              text: '<span>교육, 문화, 복지, 교류, 운영의 5대 사업 분야</span>에 대한 다양한 공익사업을 진행하고 있습니다.',
            },
          ].map((paragraph) => (
            <p
              key={paragraph.id}
              className={classNames(
                'font-bold text-2xl text-right [&>span]:bg-[#FEEFC6]',
                'sm:text-lg sm:text-left',
              )}
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
            { id: 3, text: '자랑스런 대한민국의 글로벌 리더로 성장하겠습니다.' },
          ].map((paragraph) => (
            <p
              key={paragraph.id}
              className={classNames('font-medium text-3xl text-center', 'sm:text-lg')}
            >
              {paragraph.text}
            </p>
          ))}
        </article>
      </section>
      <section
        className={classNames(
          'flex items-center py-[5%] px-[16%] flex-col gap-24 bg-[#E9F1FF] w-screen h-screen',
          'sm:h-auto sm:py-16 sm:px-4 sm:gap-12',
        )}
      >
        <HGroup>조직도</HGroup>
        <article className="flex flex-col items-center">
          {[
            { id: 1, name: '회장' },
            { id: 2, name: '부회장' },
            { id: 3, name: '중앙위원회' },
            { id: 4, name: '집행위원회' },
          ].map((organization) => (
            <Fragment key={organization.id}>
              <div
                className={classNames(
                  'bg-[#00187a] text-white font-black text-xl py-2 px-4 text-center w-36',
                  'sm:text-base sm:w-24',
                )}
              >
                {organization.name}
              </div>
              <div className="h-5 w-0.5 bg-[#00187a] mx-auto" />
            </Fragment>
          ))}
          <div className={classNames('px-5.75 w-full', 'sm:px-2')}>
            <div className="w-full h-0.5 bg-[#00187a]" />
          </div>
          <div
            className={classNames(
              'flex gap-10',
              'sm:flex-wrap sm:justify-center sm:gap-6',
            )}
          >
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
                <div className="h-5 w-0.5 bg-[#00187a] mx-auto" />
                <div
                  className={classNames(
                    'bg-[#00187a] text-white font-black text-xl h-56 py-2 w-6 px-6 flex items-center justify-center',
                    'sm:text-sm sm:h-40 sm:w-4 sm:px-3',
                  )}
                >
                  <span>{organization}</span>
                </div>
              </div>
            ))}
          </div>
        </article>
      </section>
      <section
        className={classNames(
          'flex items-center py-[5%] px-[16%] flex-col gap-24 bg-[#001B75] w-screen min-h-screen',
          'sm:py-16 sm:px-4 sm:gap-12',
        )}
      >
        <HGroup variant="dark">연혁</HGroup>
        <article
          className={classNames(
            'flex w-full justify-between',
            'sm:flex-col sm:gap-8',
          )}
        >
          <div className={classNames('grid grid-cols-2 gap-10', 'sm:grid-cols-1 sm:gap-6')}>
            {[
              [
                { year: 2002, list: ['10. “대한민국고등학교총학생회” 설립'] },
                {
                  year: 2003,
                  list: [
                    '05. ‘한강 청소년 동아리 문화축제’ 주관',
                    '08. ‘청소년문화페스티벌’ 주최 및 주관',
                  ],
                },
                {
                  year: 2004,
                  list: [
                    '12. ‘제1회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
                    '12. 대한민국 최우수 NGO 선정',
                  ],
                },
                {
                  year: 2005,
                  list: [
                    '12. ‘제2회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
                    '12. 세계 최연소 독일 국회의원 ‘안나 뤼어만’과의 토론회 참석',
                  ],
                },
                {
                  year: 2006,
                  list: ['06. ‘세상의 중심에서 나눔을 외치다’ 봉사 캠페인 주최 및 주관'],
                },
                {
                  year: 2007,
                  list: ['01. ‘제3회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관'],
                },
                {
                  year: 2008,
                  list: [
                    '01. ‘제4회 전국고교 학생회장 토론회 및 리더십연수’ 주최',
                    '12. ‘한중일 정상과 3국 청소년대표자와의 만남’ 참석',
                  ],
                },
                {
                  year: 2009,
                  list: ['03. ‘제5회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관'],
                },
                {
                  year: 2010,
                  list: [
                    '02. ‘제6회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
                    '10. ‘경술국치 100년, 그 아픔을 되새기다’ 주최 및 주관',
                  ],
                },
              ],
              [
                {
                  year: 2011,
                  list: [
                    '02. ‘제7회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
                    '08. ‘제11회 대한민국 청소년 동아리 경진 대회 후원',
                    '08. 세계 청소년 문화 축제’ 후원',
                  ],
                },
                {
                  year: 2012,
                  list: [
                    '04. ‘제8회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
                    '10. ‘대한학생회 창립 10주년 기념식’ 주최 및 주관',
                  ],
                },
                {
                  year: 2013,
                  list: ['03. ‘제9회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관'],
                },
                {
                  year: 2014,
                  list: [
                    '02. 대한학생회 사회적 협동조합 인가 (기획재정부)',
                    '03. ‘제10회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
                    '09. 취약계층 학생 대상 멘토링 프로그램 운영',
                  ],
                },
                {
                  year: 2015,
                  list: [
                    '03. ‘제11회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
                    '10. ‘세계한글문화축제 - 한글과 애국가가 만나다’ 주최 및 주관',
                    '12. ‘대한학생회와 함께하는 따뜻한 크리스마스’ 주최 및 주관',
                  ],
                },
                {
                  year: 2016,
                  list: [
                    '02. ‘제12회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
                    '07. 대한학생회 & 미래 인재 문화교육진흥원 업무 협약',
                    '10. ‘제4회 꿈지락’ 주최 및 주관',
                    '12. ‘제1회 서로를 품다’ 주최 및 주관',
                  ],
                },
              ],
              [
                {
                  year: 2017,
                  list: [
                    '02. ‘제13회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
                    '08. ‘제1회 그리다 통일’ 주최 및 주관',
                    '10. ‘제1회 학생회 정보 교류의 장 - 학생회플레이리스트’ 주최 및 주관',
                  ],
                },
                {
                  year: 2018,
                  list: [
                    '02. ‘제14회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
                    '10. ‘제2회 학생회 정보 교류의 장 - 전지적학생회시점’ 주최 및 주관',
                    '12. ‘대한학생회와 함께하는 따뜻한 크리스마스’ 주최 및 주관',
                  ],
                },
                {
                  year: 2019,
                  list: [
                    '10. ‘제3회 학생회 정보 교류의 장 - 학생자치를입력하세요www’ 주최 및 주관',
                  ],
                },
                {
                  year: 2021,
                  list: [
                    '03. ‘제4회 학생회 정보 교류의 장 - 구해줘학생자치 with대한학생회’ 주최 및 주관',
                  ],
                },
                {
                  year: 2023,
                  list: ['02. ‘제5회 학생회 정보 교류의 장 -  비정상자치’ 주최 및 주관'],
                },
                {
                  year: 2024,
                  list: ['01. ‘제6회 학생회 정보 교류의 장 - 태어난 김에 학생자치’ 주최 및 주관'],
                },
                { year: 2025, list: ['01. ‘청소년 리더 대담회 : 더 비전 2025’ 주최 및 주관'] },
                { year: 2026, list: ['01. ‘우리[:RE] 같이, 학생자치’ 주최 및 주관'] },
              ],
              'icon',
            ].map((historyList, idx) => {
              if (typeof historyList === 'string') {
                return (
                  <div
                    key={idx}
                    className="flex items-center justify-center"
                  >
                    <Image
                      src="/logo-big.png"
                      width={500}
                      height={500}
                      alt="logo"
                      className={classNames('mx-auto', 'sm:w-40 sm:h-40')}
                    />
                  </div>
                );
              }
              return (
                <div
                  className={classNames('flex gap-4', 'sm:gap-3')}
                  key={idx}
                >
                  <div className="h-full w-0.5 bg-white" />
                  <div className={classNames('flex flex-col gap-8', 'sm:gap-6')}>
                    {historyList.map((history) => (
                      <div
                        key={history.year}
                        className={classNames(
                          'flex text-white font-[Pretendard] gap-3',
                          'sm:gap-2',
                        )}
                      >
                        <div className="absolute -ml-5.25 w-2 h-2 bg-white rounded-full mt-3" />
                        <h1 className={classNames('text-2xl font-bold', 'sm:text-lg')}>
                          {history.year}
                        </h1>
                        <ul className="mt-1.25">
                          {history.list.map((info) => (
                            <p
                              key={info}
                              className={classNames('text-base font-medium', 'sm:text-sm')}
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
        className={classNames(
          'flex items-center py-[5%] flex-col gap-24 w-screen min-h-screen',
          'sm:py-16 sm:gap-12',
        )}
      >
        <HGroup>대표 행사</HGroup>
        <KSCCarousel />
      </section>
      <section
        id="SNS"
        className={classNames(
          'flex items-center py-[5%] px-[16%] flex-col gap-24 bg-[#E9F1FF] w-screen',
          'sm:px-4 sm:gap-12',
        )}
      >
        <HGroup>SNS</HGroup>
        <ul
          className={classNames(
            'w-full flex justify-between',
            'sm:flex-col sm:items-center sm:gap-6',
          )}
        >
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
              className={classNames(
                'flex flex-col gap-2 justify-center items-center',
                'sm:w-full',
              )}
            >
              <Image
                src={snsInfo.logoUrl}
                width={100}
                height={100}
                alt={snsInfo.name}
                className={classNames('mx-auto', 'sm:w-16 sm:h-16')}
              />
              <span
                className={classNames(
                  'text-xs font-[Pretendard] font-semibold underline text-[#001B75]',
                  'sm:text-sm',
                )}
              >
                {snsInfo.name}
              </span>
            </a>
          ))}
        </ul>
      </section>
      <section
        id="contact"
        className={classNames(
          'flex items-center py-[5%] px-[16%] flex-col gap-24 w-screen bg-[#001B75]',
          'sm:py-16 sm:px-4 sm:gap-12',
        )}
      >
        <HGroup variant="dark">Contact</HGroup>
        <article className="font-[Pretendard] text-white flex flex-col items-center justify-center gap-1">
          <h2 className={classNames('text-xl font-bold', 'sm:text-lg')}>문 의</h2>
          <p
            className={classNames(
              'whitespace-pre-wrap text-center font-medium',
              'sm:text-sm',
            )}
          >
            하단 이메일 주소로 메일 보내주시기 바랍니다.{'\n'}빠른 시일 내로 회신드리겠습니다.
          </p>
          <div className={classNames('h-10', 'sm:h-6')} />
          <a
            className={classNames('text-3xl font-bold', 'sm:text-lg')}
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
