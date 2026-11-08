// 출처: 대한학생회 공식 인스타그램 '대한학생회 위원회 소개' 제1~3장 (2026년 5월, 24기 모집 안내)

import { PHOTOS, type Photo } from './site';

export type Work = { title: string; detail?: string };

export type Committee = {
  id: string;
  name: string;
  summary: string;
  works: Work[];
  photo?: { image: Photo; caption: string };
};

export const LEADERSHIP: Committee = {
  id: 'leadership',
  name: '회장단',
  summary: '대한학생회를 대표해 회의를 이끌고, 행사에서는 대한학생회의 얼굴로 외부와 교류합니다.',
  works: [
    { title: '회장', detail: '대한학생회를 대표하여 회의의 의장 역할 및 업무 총괄' },
    { title: '부회장', detail: '회장을 보좌하고 각 위원회 업무 총괄' },
    { title: '대한학생회의 얼굴', detail: '행사 진행 시 대한학생회의 대표로서 외부와 교류' },
  ],
};

export const COMMITTEES: Committee[] = [
  {
    id: 'education-science',
    name: '교육과학위원회',
    photo: { image: PHOTOS.volunteer, caption: '교육과학위원회의 교육 봉사' },
    summary: '교육과 관련된 다양한 활동으로 여러분의 마음을 사로잡는 위원회입니다.',
    works: [
      { title: '대한멘토링', detail: '대한학생회 임원들이 멘토와 멘티가 되어 서로 돕고 발전하기' },
      {
        title: '갓생살기 프로젝트 with 사회복지위원회',
        detail: '공부, 건강 측면에서 청소년들의 자기 계발 및 바른생활 장려',
      },
      { title: '카드뉴스', detail: '유익하고 교육적인 소식을 공유해 정보 격차 줄이기' },
      { title: '교육 봉사', detail: '교육소외지역 아이들을 위한 프로그램을 기획부터 시연까지 직접 진행' },
    ],
  },
  {
    id: 'planning-finance',
    name: '기획재정위원회',
    summary:
      '이름 그대로 ‘기획’과 ‘재정’을 맡습니다. 행사와 사업의 기반을 만들고, 사용될 예산을 심사합니다.',
    works: [
      { title: '행사 기획 주관', detail: '대한학생회의 연간 행사 및 사업 기획을 주관' },
      {
        title: '재정 관리',
        detail: '위원회 사업 예산 수합 및 심사, 현금흐름표·결산안 작성 및 보고, 평생회비 계좌 관리',
      },
    ],
  },
  {
    id: 'patriotism',
    name: '나라사랑위원회',
    photo: { image: PHOTOS.cemetery, caption: '나라사랑위원회의 정기 현충원 참배' },
    summary:
      '대한학생회의 얼굴이자 단체 이미지 제고의 선봉에 선 위원회입니다. 정기적인 대면 행사로 사회 정의를 실천합니다.',
    works: [
      {
        title: '국가기관 방문',
        detail: '청와대, 대검찰청, 대법원, 국회의사당 등 대한민국의 주요 국가기관 방문',
      },
      { title: '정기 현충원 참배', detail: '현충원 방문, 전시관 관람, 묘역 순례 및 봉사' },
      { title: '나라사랑 네모소식', detail: '나라사랑을 주제로 한 카드뉴스 제작' },
    ],
  },
  {
    id: 'external-cooperation',
    name: '대외협력위원회',
    photo: { image: PHOTOS.daenaering, caption: '대외협력위원회의 대내링 : 대한 내외 LINK' },
    summary:
      '대한학생회의 대외적 활동을 지원하고, 내부 결속력을 높여 행사가 수월하게 진행되도록 돕습니다.',
    works: [
      {
        title: '대내외 활동 지원',
        detail: '타 위원회와의 행사 진행, 소통 창구인 디스코드 운영',
      },
      { title: '대내링 : 대한 내외 LINK', detail: '대한학생회 임원의 자격으로 외부 활동에 함께 참여' },
      { title: '장소 대관', detail: '대한학생회 행사와 회의 장소 대관' },
    ],
  },
  {
    id: 'culture-sports',
    name: '문화체육위원회',
    summary:
      '구성원 간의 소통과 화합을 바탕으로 대한을 활기차고 끈끈한 공동체로 만들어 갑니다.',
    works: [
      { title: '내부 짝꿍 사업', detail: '선·후임 기수의 상호 교류와 친목 증진' },
      { title: '대한 겨울 MT', detail: '대한학생회의 조직 결속력 강화' },
      { title: '온·오프보딩 사업', detail: '신규 임원의 원활한 적응 지원 (추진 예정)' },
      { title: '회내 인터뷰', detail: '구성원 간 소통 및 소속감 강화 (추진 예정)' },
    ],
  },
  {
    id: 'office-operations',
    name: '사무운영위원회',
    summary:
      '굿즈 제작, 카페와 홈페이지 운영, 각종 자료 관리로 대한학생회의 중심을 든든하게 지킵니다.',
    works: [
      { title: '굿즈 제작', detail: '야잠, 배지, 명함, 단체 후드집업 등' },
      { title: '공식 네이버 카페 관리' },
      { title: '공식 홈페이지 제작 및 관리' },
      { title: '각종 자료 보관' },
    ],
  },
  {
    id: 'social-welfare',
    name: '사회복지위원회',
    photo: { image: PHOTOS.christmas, caption: '사회복지위원회의 대한학생회와 함께하는 따뜻한 크리스마스' },
    summary:
      '대한의 사회공헌사업을 담당합니다. 많은 대내외 사업으로 세상의 꺼진 빛들을 하나씩 밝힙니다.',
    works: [
      { title: 'HBD to 대한', detail: '생일을 축하해 주는 대표 임원복지사업' },
      {
        title: '대한학생회와 함께하는 따뜻한 크리스마스',
        detail: '아이들의 크리스마스를 따뜻하게 빛내주는 대표 사회공헌 사업',
      },
      {
        title: '갓생살기 프로젝트 with 교육과학위원회',
        detail: '공부, 건강 측면에서 청소년들의 자기 계발 및 바른생활 장려',
      },
      {
        title: '그그그 (그때 그 순간 그대로)',
        detail: '임원들의 소중한 순간을 타임캡슐로 보관하고 선물과 함께 돌려드리는 복지사업',
      },
    ],
  },
  {
    id: 'press-pr',
    name: '언론홍보위원회',
    summary:
      '대한학생회의 SNS를 관리하고 단체를 대외적으로 홍보합니다. 신입 임원 모집 업무도 맡습니다.',
    works: [
      { title: '공식 인스타그램·유튜브 채널 관리' },
      { title: '단체 홍보 및 학생회 카드뉴스 제작' },
      { title: '대한학생회 나무위키 제작 및 관리' },
      { title: '언론사 컨택 및 기사 작성' },
    ],
  },
  {
    id: 'ethics',
    name: '윤리위원회',
    summary:
      '항상 중립을 지키며 공정을 위해 앞장섭니다. 보이지 않는 곳에서 주어진 역할을 묵묵히 해냅니다.',
    works: [
      { title: '회칙 수호 및 관리', detail: '회칙 점검 및 필요시 수정' },
      { title: '고소·고발 절차 총괄 및 사건 조사', detail: '고발장 접수 시 회의 개최 및 진행' },
      { title: '회의 출석부 관리', detail: '정기 회의, 임시총회 등의 출석부 관리' },
    ],
  },
  {
    id: 'environment-safety',
    name: '환경안전위원회',
    summary:
      '아름다운 지구를 보호하며 지속 가능한 미래를 위해, 그리고 우리 모두의 안전을 위해 힘씁니다.',
    works: [
      { title: '전국 하천 정화 사업' },
      { title: '에코 다이어리 프로젝트' },
      { title: '환경과 안전을 주제로 한 카드뉴스 제작' },
    ],
  },
];
