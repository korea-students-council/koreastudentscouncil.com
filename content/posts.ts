import { PHOTOS, type Photo } from './site';

// 블로그 글은 이 파일에 추가합니다. 최신 글이 위로 오도록 date로 정렬해서 보여줍니다.
// 어드민(블로그 관리자) 방식이 정해지면 이 데이터를 그 저장소로 옮기면 됩니다.

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'quote'; text: string; cite?: string }
  | { type: 'list'; items: string[] }
  | { type: 'qa'; q: string; a: string }
  | { type: 'image'; photo: Photo; caption?: string };

export type Interviewee = {
  name: string;
  role: string;
  cohort?: string;
};

export type Category = '인터뷰' | '활동' | '소식';

export type Post = {
  slug: string;
  title: string;
  summary: string;
  date: string;
  category: Category;
  author: string;
  tags: string[];
  cover: Photo;
  interviewee?: Interviewee;
  body: Block[];
};

const POSTS: Post[] = [
  {
    slug: 'interview-project',
    title: '대한 사람들의 이야기를 기록합니다',
    summary:
      '임원들의 활동과 경험, 가치관을 인터뷰로 남기는 회내 인터뷰 프로젝트를 시작합니다. 어떤 질문을 준비했는지 미리 소개합니다.',
    date: '2026-10-28',
    category: '소식',
    author: '문화체육위원회',
    tags: ['인터뷰', '문화체육위원회'],
    cover: PHOTOS.daenaering,
    body: [
      {
        type: 'p',
        text: '대한학생회에는 매년 전국 각지의 학생회장들이 모입니다. 그런데 서로의 활동과 경험, 생각을 깊이 나눌 수 있는 기록은 많지 않았습니다. 그래서 각 체제의 임원들이 들려주는 이야기를 인터뷰로 남기기로 했습니다.',
      },
      { type: 'h2', text: '왜 인터뷰인가요' },
      {
        type: 'list',
        items: [
          '임원 간 상호 교류와 소속감을 높이기 위해',
          '대한학생회 활동 경험을 아카이빙하기 위해',
          '새로 합류할 구성원과 외부에 대한학생회를 소개하기 위해',
        ],
      },
      {
        type: 'p',
        text: '특히 새 기수가 들어올 때, 선배들이 남긴 이야기가 대한학생회를 이해하는 가장 빠른 길이 되리라 기대합니다.',
      },
      {
        type: 'image',
        photo: PHOTOS.haeoreum,
        caption: '인터뷰는 현 체제 임원을 중심으로 진행합니다. 2025 정기총회 & 제23회 해오름식',
      },
      { type: 'h2', text: '이렇게 진행합니다' },
      {
        type: 'p',
        text: '현 체제 임원을 중심으로, 때로는 명예 임원도 함께 인터뷰합니다. 1차 인터뷰는 Zoom으로 약 1시간 동안 진행하고, 2~3일 뒤 보완 인터뷰를 거쳐 글과 카드뉴스로 정리합니다.',
      },
      { type: 'h2', text: '준비한 질문들' },
      {
        type: 'p',
        text: '질문은 자기소개, 대한학생회 활동, 앞으로의 이야기 세 갈래로 12~15개를 준비했습니다. 그중 몇 가지를 먼저 공개합니다.',
      },
      {
        type: 'list',
        items: [
          '대한학생회에 들어오게 된 계기가 궁금합니다.',
          '활동하면서 가장 기억에 남았던 순간은 무엇인가요?',
          '대한학생회 활동을 하며 가장 많이 성장했다고 느낀 부분은 무엇인가요?',
          '대한학생회의 분위기를 한 단어로 표현한다면 무엇인가요?',
          '새롭게 들어올 사람들에게 해주고 싶은 말이 있다면?',
        ],
      },
      {
        type: 'p',
        text: '인터뷰는 이 블로그와 인스타그램에 차례로 올라옵니다. 인터뷰어로 함께하고 싶은 임원은 언제든 문화체육위원회에 알려 주세요.',
      },
    ],
  },
  {
    slug: 'welcome-24th',
    title: '24기, 찬란과 함께할 새 가족을 맞이합니다',
    summary:
      '23기 ‘찬란’과 함께할 24기 정회원 모집 결과를 발표했습니다. 합격 이후 가입 절차와 평생회비 안내를 정리했습니다.',
    date: '2026-06-08',
    category: '소식',
    author: '23대 회장단',
    tags: ['24기', '정기모집'],
    cover: PHOTOS.haeoreum,
    body: [
      {
        type: 'p',
        text: '대한학생회 23기 ‘찬란’과 함께할 24기 정회원 모집 결과를 발표했습니다. 대한학생회에 많은 관심을 가지고 지원해 주신 모든 분께 감사드립니다.',
      },
      {
        type: 'quote',
        text: '앞으로 수많은 순간 속에서 함께 배우고 성장하며 잊지 못할 추억을 만들어 가시길 바랍니다.',
        cite: '23대 회장단',
      },
      {
        type: 'image',
        photo: PHOTOS.exchange,
        caption: '24기가 함께 꾸려 갈 대표 행사, 제7회 학생회 정보 교류의 장 (2026년 1월)',
      },
      { type: 'h2', text: '가입은 평생회비 납부로 완료됩니다' },
      {
        type: 'p',
        text: '24기 정회원으로 정식 가입하려면 평생회비를 납부해야 합니다. 평생회비는 후임 기수 1년과 선임 기수 1년, 그리고 명예 임원이 되고 나서까지 회원 자격을 유지할 수 있는 비용입니다.',
      },
      {
        type: 'list',
        items: [
          '정기총회, 정기 회의, 위원회 사업, 정기 행사에 사용됩니다.',
          '예산 사용 내역은 약 한 달 주기의 정기 회의에서 투명하게 보고됩니다.',
        ],
      },
      {
        type: 'p',
        text: '새 기수는 여름에 열리는 정기총회 & 해오름식에서 처음으로 한자리에 모입니다. 대한학생회와 24기가 함께 써 내려갈 이야기가 더욱 찬란하게 빛날 수 있도록 많은 기대와 응원 부탁드립니다.',
      },
    ],
  },
  {
    slug: 'committees-2026',
    title: '열 개의 위원회가 하는 일',
    summary:
      '24기 모집을 앞두고 소개한 집행위원회 열 곳의 사업을 한 번에 모았습니다. 어떤 위원회에서 활동하고 싶은지 그려 보세요.',
    date: '2026-05-10',
    category: '활동',
    author: '23대 회장단',
    tags: ['위원회', '24기'],
    cover: PHOTOS.exchange,
    body: [
      {
        type: 'p',
        text: '대한학생회 집행위원회는 학생들의 목소리를 대변하고, 각자의 영역에서 학생 여러분을 위한 활동을 펼치고 있습니다. 24기 모집을 앞두고 위원회별로 하는 일을 소개합니다.',
      },
      { type: 'h2', text: '교육과 나라, 그리고 사회' },
      {
        type: 'list',
        items: [
          '교육과학위원회: 대한멘토링, 갓생살기 프로젝트, 교육 카드뉴스',
          '나라사랑위원회: 국가기관 방문, 정기 현충원 참배, 나라사랑 네모소식',
          '사회복지위원회: HBD to 대한, 따뜻한 크리스마스, 그그그(그때 그 순간 그대로)',
          '환경안전위원회: 전국 하천 정화, 에코 다이어리 프로젝트',
        ],
      },
      { type: 'image', photo: PHOTOS.cemetery, caption: '나라사랑위원회의 정기 현충원 참배 행사' },
      { type: 'h2', text: '단체를 움직이는 사람들' },
      {
        type: 'list',
        items: [
          '기획재정위원회: 연간 행사와 사업 기획, 예산 심사와 결산',
          '대외협력위원회: 대내외 활동 지원, 디스코드 운영, 대내링, 장소 대관',
          '문화체육위원회: 내부 짝꿍 사업, 대한 겨울 MT',
          '사무운영위원회: 굿즈 제작, 카페와 홈페이지 운영, 자료 보관',
          '언론홍보위원회: 인스타그램·유튜브 운영, 카드뉴스, 언론사 컨택',
          '윤리위원회: 회칙 수호, 고소·고발 절차 총괄, 회의 출석부 관리',
        ],
      },
      {
        type: 'p',
        text: '위원회별 자세한 사업은 Recruit 페이지에서 볼 수 있습니다.',
      },
    ],
  },
];

export const getPosts = () => [...POSTS].sort((a, b) => b.date.localeCompare(a.date));

export const getPost = (slug: string) => POSTS.find((post) => post.slug === slug);

export const formatDate = (date: string) => date.replaceAll('-', '.');

export const postText = (post: Post) =>
  [
    post.title,
    post.summary,
    ...post.tags,
    ...post.body.map((block) => {
      if (block.type === 'list') return block.items.join(' ');
      if (block.type === 'qa') return `${block.q} ${block.a}`;
      if (block.type === 'image') return block.caption ?? '';
      return block.text;
    }),
  ].join(' ');
