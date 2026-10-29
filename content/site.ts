export const FOUNDED_YEAR = 2002;

export const SITE_URL = 'https://www.koreastudentscouncil.com';

export const CONTACT_EMAIL = 'koreasc.official@gmail.com';

// 인스타그램 프로필의 링크트리: 정기모집 가입신청서·신청폼이 올라오는 곳
export const APPLY_URL = 'https://linktr.ee/korea.studentscouncil';

export const SNS_LINKS = [
  {
    name: '인스타그램',
    handle: '@korea_studentscouncil_official',
    href: 'https://www.instagram.com/korea_studentscouncil_official/',
  },
  {
    name: '유튜브',
    handle: '@korea_studentscouncil_official',
    href: 'https://www.youtube.com/@korea_studentscouncil_official',
  },
  {
    name: '페이스북',
    handle: 'koreastudentscouncil',
    href: 'https://www.facebook.com/koreastudentscouncil/?locale=ko_KR',
  },
  {
    name: '네이버 카페',
    handle: 'cafe.naver.com/koreastudentscouncil',
    href: 'https://cafe.naver.com/koreastudentscouncil',
  },
];

// STAT-01~04. 운영 기간은 설립 연도로 계산하고, 나머지는 현 체제 기준 값으로 직접 수정합니다.
export const STATS = {
  years: new Date().getFullYear() - FOUNDED_YEAR,
  alumni: 1572,
  officers: 71,
  projects: 17,
};

export const SPIRITS = [
  { hanja: '正義', name: '정의' },
  { hanja: '正直', name: '정직' },
  { hanja: '誠實', name: '성실' },
  { hanja: '禮儀', name: '예의' },
];

export const BUSINESS_AREAS = ['교육', '문화', '복지', '교류', '운영'];

export const PHOTOS = {
  haeoreum: {
    src: '/photos/haeoreum-2025.jpg',
    width: 1440,
    height: 810,
    alt: '2025 정기총회 & 제23회 해오름식 단체 사진',
  },
  exchange: {
    src: '/photos/exchange-7th.jpg',
    width: 2000,
    height: 1210,
    alt: '제7회 학생회 정보 교류의 장 - 학생자치를 부탁해! 단체 사진',
  },
  vision: {
    src: '/photos/the-vision-2025.jpg',
    width: 2000,
    height: 1333,
    alt: '청소년 리더 대담회: 더 비전 2025 단체 사진',
  },
  daenaering: {
    src: '/photos/daenaering.jpg',
    width: 2000,
    height: 1125,
    alt: '대내링 활동에서 대한학생회 현수막을 든 임원들',
  },
  cemetery: {
    src: '/photos/national-cemetery.jpg',
    width: 720,
    height: 960,
    alt: '국립현충원 참배 행사에 참여한 임원들',
  },
  volunteer: {
    src: '/photos/education-volunteer.jpg',
    width: 960,
    height: 720,
    alt: '교육 봉사에서 아이들 앞에서 수업을 진행하는 임원',
  },
  christmas: {
    src: '/photos/warm-christmas.jpg',
    width: 1584,
    height: 906,
    alt: '대한학생회와 함께하는 따뜻한 크리스마스 단체 사진',
  },
} as const;

export type Photo = (typeof PHOTOS)[keyof typeof PHOTOS];

export type HistoryYear = { year: number; list: string[]; highlight?: boolean };

export const HISTORY: HistoryYear[] = [
  { year: 2002, highlight: true, list: ['10월 “대한민국고등학교총학생회” 설립'] },
  {
    year: 2003,
    list: ['5월 ‘한강 청소년 동아리 문화축제’ 주관', '8월 ‘청소년문화페스티벌’ 주최 및 주관'],
  },
  {
    year: 2004,
    highlight: true,
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
  { year: 2006, list: ['6월 ‘세상의 중심에서 나눔을 외치다’ 봉사 캠페인 주최 및 주관'] },
  { year: 2007, list: ['1월 ‘제3회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관'] },
  {
    year: 2008,
    list: [
      '1월 ‘제4회 전국고교 학생회장 토론회 및 리더십연수’ 주최',
      '12월 ‘한중일 정상과 3국 청소년대표자와의 만남’ 참석',
    ],
  },
  { year: 2009, list: ['3월 ‘제5회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관'] },
  {
    year: 2010,
    list: [
      '2월 ‘제6회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
      '10월 ‘경술국치 100년, 그 아픔을 되새기다’ 주최 및 주관',
    ],
  },
  {
    year: 2011,
    list: [
      '2월 ‘제7회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
      '8월 ‘제11회 대한민국 청소년 동아리 경진 대회’ 후원',
      '8월 ‘세계 청소년 문화 축제’ 후원',
    ],
  },
  {
    year: 2012,
    highlight: true,
    list: [
      '4월 ‘제8회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관',
      '10월 ‘대한학생회 창립 10주년 기념식’ 주최 및 주관',
    ],
  },
  { year: 2013, list: ['3월 ‘제9회 전국고교 학생회장 토론회 및 리더십연수’ 주최 및 주관'] },
  {
    year: 2014,
    highlight: true,
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
      '7월 대한학생회 & 미래 인재 문화교육진흥원 업무 협약',
      '10월 ‘제4회 꿈지락’ 주최 및 주관',
      '12월 ‘제1회 서로를 품다’ 주최 및 주관',
    ],
  },
  {
    year: 2017,
    highlight: true,
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
  { year: 2019, list: ['10월 ‘제3회 학생회 정보 교류의 장 - 학생자치를입력하세요www’ 주최 및 주관'] },
  {
    year: 2021,
    list: ['3월 ‘제4회 학생회 정보 교류의 장 - 구해줘학생자치 with대한학생회’ 주최 및 주관'],
  },
  { year: 2023, list: ['2월 ‘제5회 학생회 정보 교류의 장 -  비정상자치’ 주최 및 주관'] },
  { year: 2024, list: ['1월 ‘제6회 학생회 정보 교류의 장 - 태어난 김에 학생자치’ 주최 및 주관'] },
  { year: 2025, list: ['1월 ‘청소년 리더 대담회 : 더 비전 2025’ 주최 및 주관'] },
  {
    year: 2026,
    highlight: true,
    list: ['1월 ‘제7회 학생회 정보 교류의 장 - 학생자치를 부탁해!’ 주최 및 주관'],
  },
];
