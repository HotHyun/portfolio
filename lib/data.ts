import type { IProject, LocalizedText } from '@/types';

export const GENERAL_INFO = {
    email: 'ohsong656565@gmail.com',
    phone: '+82 10-4515-1866',
    location: 'Haeundae-gu, Busan, Korea',
    birthday: 'August 27, 2003',

    emailSubject: "Let's talk",
    emailBody: 'Hi HotHyun, I am reaching out to you because...',

    oldPortfolio: 'https://portfolio.hothyun.com',
    githubProfile: 'https://github.com/hothyun',
    linkedinProfile: 'https://www.linkedin.com/in/상현-신-8b2301267',
    instagramProfile: 'https://instagram.com/hot._.hyun',
    blog: 'https://blog.hothyun.com',
};

export const SOCIAL_LINKS = [
    { name: 'github', url: GENERAL_INFO.githubProfile },
    { name: 'LinkedIn', url: GENERAL_INFO.linkedinProfile },
    { name: 'instagram', url: GENERAL_INFO.instagramProfile },
    { name: 'blog', url: GENERAL_INFO.blog },
];

type StackItem = { name: string; icon?: string };

export const MY_STACK: Record<string, StackItem[]> = {
    web: [
        { name: 'React', icon: '/logo/react.png' },
        { name: 'Next.js', icon: '/logo/next.png' },
        { name: 'TypeScript', icon: '/logo/ts.png' },
        { name: 'Recoil' },
        { name: 'Zustand', icon: '/logo/zustand.svg' },
        { name: 'TanStack Query' },
        { name: 'shadcn/ui' },
        { name: 'MUI' },
        { name: 'Ant Design' },
        { name: 'Tailwind CSS', icon: '/logo/tailwind.png' },
    ],
    mobile: [
        { name: 'React Native', icon: '/logo/react.png' },
        { name: 'Expo', icon: '/logo/expo.svg' },
        { name: 'Flutter (Dart)', icon: '/logo/flutter.svg' },
        { name: 'Electron', icon: '/logo/electron.svg' },
    ],
    serverData: [
        { name: 'Node.js', icon: '/logo/node.png' },
        { name: 'Spring Boot', icon: '/logo/spring.svg' },
        { name: 'FastAPI', icon: '/logo/fastapi.svg' },
        { name: 'PostgreSQL', icon: '/logo/postgreSQL.png' },
        { name: 'Oracle SQL', icon: '/logo/oracle.svg' },
        { name: 'Firebase', icon: '/logo/firebase.svg' },
        { name: 'Pinecone', icon: '/logo/pinecone.svg' },
    ],
    aiProduct: [
        { name: 'LangChain', icon: '/logo/langchain.svg' },
        { name: 'RAG' },
        { name: 'HyperCLOVA X' },
    ],
    developmentDeployment: [
        { name: 'Git', icon: '/logo/git.png' },
        { name: 'Docker', icon: '/logo/docker.svg' },
        { name: 'GitHub Actions', icon: '/logo/github-actions.svg' },
        { name: 'Oracle Cloud', icon: '/logo/oracle.svg' },
        { name: 'NCP' },
        { name: 'Cloudflare' },
        { name: 'Vercel' },
    ],
};

const localized = (ko: string, en: string): LocalizedText => ({ ko, en });

export const PROJECTS: IProject[] = [
    {
        title: localized('Career Wellness', 'Career Wellness'),
        slug: 'career-wellness',
        summary: localized(
            'Career Wellness의 첫 기획부터 제품 개발에 참여해 웹·앱 핵심 기능과 결제 흐름을 구현했습니다. 서비스는 현재도 운영 중입니다.',
            'I contributed from initial planning through launch, implementing many core web and app features and its payment flow. The service remains live.',
        ),
        overview: localized(
            '일과 커리어를 돌아보고 다음 선택을 준비할 수 있도록 진단, 회고, 1:1 세션과 커뮤니티 진입을 제공하는 서비스입니다.',
            'A service for people to reflect on work and career decisions through assessments, guided reflection, one-to-one sessions, and community features.',
        ),
        contributions: {
            ko: [
                '초기 기획부터 MVP 출시까지 참여했고, 웹과 앱의 핵심 기능을 다수 구현했습니다.',
                '일잼 진단, 이직 진단, 1:1 커리어 세션, 커뮤니티 진입 등 공개 웹 기능과 앱의 주요 사용자 흐름을 개발했습니다.',
                '7점 척도, 단일·다중 선택, 주관식 문항을 유연하게 추가할 수 있도록 진단 플로우를 모듈화하고 상태 관리부터 결과 분석·공유까지 구현했습니다.',
                '웹·앱·AI 서버 모노레포를 구성하고 WebView와 공통 모듈을 활용했습니다. GitHub Actions에서 변경된 코드에 따라 배포 대상을 나누도록 만들었습니다.',
                '회고 기능의 AI 성과 카드 생성 파이프라인과 인증·푸시 알림을 개발했습니다.',
            ],
            en: [
                'Contributed from initial product planning through MVP launch, implementing many of the core web and app features.',
                'Built public web flows for work-style and career-change assessments, one-to-one career sessions, and community entry, along with key app journeys.',
                'Modularized assessments to support 7-point scales, single- and multiple-choice, and open responses; implemented state management, result analysis, and sharing.',
                'Structured a monorepo for web, app, and AI services, reused client modules through WebView, and configured GitHub Actions to deploy only affected apps.',
                'Built the AI achievement-card pipeline for reflection, authentication, and push notifications.',
            ],
        },
        outcome: localized(
            '결제 파이프라인을 연동해 실제 결제가 이뤄지는 서비스로 출시했고, 현재도 운영 중입니다.',
            'Launched with an integrated payment pipeline and real transactions; the service continues to operate.',
        ),
        status: localized('현재 운영 중', 'Live service'),
        techStack: [
            'React',
            'Next.js',
            'React Native',
            'Expo',
            'TypeScript',
            'WebView',
            'GitHub Actions',
        ],
        liveUrl: 'https://career.gazilab.co',
    },
    {
        title: localized('Career AI · NAVER AI RUSH', 'Career AI · NAVER AI RUSH'),
        slug: 'career-ai',
        summary: localized(
            'AI RUSH 참가를 직접 제안하고, HyperCLOVA X 기반 커리어 AI를 기획부터 완성까지 단독 개발했습니다. 2023년 최종 3개 기업에 선정됐습니다.',
            'I proposed the AI RUSH project and built a HyperCLOVA X career assistant from concept to completion as its sole developer. It was selected among the final three companies in 2023.',
        ),
        overview: localized(
            '사용자의 상황과 질문에 맞춰 개인화된 커리어 답변을 제공하는 대화형 AI 제품입니다.',
            'A conversational AI product that provides career guidance tailored to each user’s questions and context.',
        ),
        contributions: {
            ko: [
                'AI RUSH 참가를 대표에게 직접 제안하고 프로젝트 추진을 이끌었습니다. 제품 기획부터 완성까지 단독으로 개발했습니다.',
                '규칙 기반 채팅 UX와 Prompt Engineering, RAG를 HyperCLOVA X와 결합했습니다.',
                'LangChain 서버를 만들고 웹 서비스 연동까지 구현했습니다.',
            ],
            en: [
                'Proposed entering AI RUSH directly to the CEO and drove the project forward; built the product from planning through completion as its sole developer.',
                'Combined a rule-based chat experience, prompt engineering, and RAG with HyperCLOVA X.',
                'Built the LangChain service and integrated it with the web product.',
            ],
        },
        outcome: localized(
            '2023 NAVER AI RUSH 최종 3개 기업에 선정됐고, DAN23에서 대표가 제품을 발표했습니다. 발표는 제품 노출을 넓히고 네이버 마케팅 기회와 후속 협업으로 이어지는 데 기여했습니다.',
            'Selected among the final three companies in 2023 NAVER AI RUSH. The CEO presented the product at DAN23, helping broaden its visibility and contributing to NAVER marketing opportunities and follow-on collaborations.',
        ),
        period: localized('2023', '2023'),
        techStack: ['HyperCLOVA X', 'LangChain', 'RAG', 'Prompt Engineering'],
        links: [
            { label: localized('국민일보', 'Kookmin Ilbo'), url: 'https://www.kmib.co.kr/article/view.asp?arcid=0924317404' },
            { label: localized('유니콘팩토리', 'Unicorn Factory'), url: 'https://www.unicornfactory.co.kr/article/2023082210411474749' },
            { label: localized('세계일보', 'Segye Ilbo'), url: 'https://www.segye.com/newsView/20230822506691' },
        ],
    },
    {
        title: localized('건강검진 분석 AI', 'Health Check Analysis AI'),
        slug: 'health-check-ai',
        summary: localized(
            '네이버 헬스케어랩·삼성생명과 협업해 병원별 건강검진 결과를 정리하고, 사용자가 이해하기 쉽게 설명하는 AI 기능을 개발했습니다.',
            'Built health-check AI features with NAVER Healthcare Lab and Samsung Life to structure results from different hospitals and explain them in plain language.',
        ),
        overview: localized(
            '서로 다른 병원 양식의 검진 결과를 공통 스키마로 정리하고, 사용자의 질문에 맞는 결과를 찾아 설명하는 건강검진 분석 제품입니다.',
            'A health-check analysis product that normalizes results from different hospital formats and retrieves relevant information to answer user questions.',
        ),
        contributions: {
            ko: [
                'HyperCLOVA X 기반 분석 AI를 개발하고 병원별로 다른 검진 결과를 공통 데이터 스키마로 통합했습니다.',
                'OCR로 읽은 결과를 구조화하고 Vector DB와 RAG를 활용해 관련 검진 결과를 찾아 설명하는 기능을 구현했습니다.',
                '삼성생명 FC가 고객의 검진 결과를 이해하기 쉽게 분석·요약하는 React 웹 도구를 개발했습니다.',
            ],
            en: [
                'Developed HyperCLOVA X health-check AI and normalized results from different hospitals into a shared data schema.',
                'Structured OCR output and used a vector database with RAG to retrieve and explain relevant results.',
                'Built a React web tool that helps Samsung Life financial consultants explain and summarize customers’ health-check results.',
            ],
        },
        techStack: ['HyperCLOVA X', 'OCR', 'Vector DB', 'RAG', 'React'],
        links: [
            { label: localized('더벨 관련 기사', 'The Bell article'), url: 'https://www.thebell.co.kr/front/newsview.asp?key=202403211416352600102250' },
            { label: localized('삼성생명 관련 자료', 'Samsung Life reference'), url: 'https://share.google/aihJZbFcNqoogIqmf' },
        ],
    },
    {
        title: localized('여전히 (Your-Journey)', 'Your-Journey'),
        slug: 'your-journey',
        summary: localized(
            '건강한 생활 습관을 이어가는 사람들이 서로 연결되고 함께 활동할 수 있도록 만든 웰니스 커뮤니티·매칭 앱입니다.',
            'A wellness community and matching app designed to connect people who already maintain healthy routines.',
        ),
        overview: localized(
            '웰니스를 꾸준히 실천하는 사람들이 비슷한 생활방식을 가진 사람을 만나기 어렵다는 문제에서 출발했습니다.',
            'The product addressed how difficult it can be for people who maintain healthy routines to find others with similar lifestyles.',
        ),
        contributions: {
            ko: [
                'React Native 앱의 매칭·인증 로직과 식단·습관·운동 기록 및 공유 기능을 구현했습니다.',
                '커뮤니티·채팅 UX와 푸시 알림을 개발하고 앱을 출시했습니다.',
                '앱 유입을 위한 웹 가입 흐름을 설계·구현하고 웹과 앱 MVP를 출시했습니다.',
            ],
            en: [
                'Implemented matching and authentication logic, plus diet, habit, and exercise tracking and sharing in the React Native app.',
                'Built community and chat experiences with push notifications, then launched the app.',
                'Designed and built a web signup flow leading into the app and launched the web and app MVPs.',
            ],
        },
        techStack: ['React Native', 'Expo', 'Web onboarding', 'Matching', 'Push Notifications'],
        links: [
            { label: localized('서비스 소개', 'Product introduction'), url: 'https://blog.naver.com/hanwhadreamplus/223510365243' },
        ],
    },
    {
        title: localized('PAM+NET', 'PAM+NET'),
        slug: 'pam-net',
        summary: localized(
            'NFT 기반 이력 증빙 모바일 앱을 개발한 POSTECH UGRP 프로젝트입니다.',
            'A POSTECH UGRP project building a mobile app for verifiable credentials using NFTs.',
        ),
        overview: localized(
            'NFT 기반으로 사용자의 이력을 증명하고 공유할 수 있는 모바일 DApp을 만들었습니다.',
            'A mobile DApp for users to verify and share career records using NFTs.',
        ),
        contributions: {
            ko: [
                '모바일 앱 UX를 설계하고 Flutter 앱을 개발했습니다.',
                'MetaMask를 연동해 지갑 기반 인증 흐름을 구현했습니다.',
            ],
            en: [
                'Designed the mobile app experience and built the Flutter application.',
                'Integrated MetaMask to support wallet-based authentication.',
            ],
        },
        outcome: localized('2022 POSTECH-UGRP 최우수상을 받았습니다.', 'Received the 2022 POSTECH UGRP Grand Prize.'),
        period: localized('2022.03–2022.12', 'Mar–Dec 2022'),
        techStack: ['Flutter (Dart)', 'MetaMask', 'NFT'],
    },
    {
        title: localized('Seolleil', 'Seolleil'),
        slug: 'seolleil',
        summary: localized(
            '스키장과 렌탈샵, 리프트권, 교통, 숙박을 한곳에서 비교하고 계획할 수 있는 스키 여행 서비스입니다.',
            'A ski-trip planner for comparing resorts, rental shops, lift tickets, transport, and lodging in one place.',
        ),
        overview: localized(
            '사용자의 상황에 맞는 스키장을 찾고 여행 옵션을 비교해 계획할 수 있도록 만들었습니다.',
            'Helps users find a ski resort that fits their needs and compare trip options before planning.',
        ),
        contributions: {
            ko: [
                '서비스를 직접 기획하고 개발했습니다.',
                '스키장별 렌탈샵과 리프트권을 조사해 장비, 교통, 숙박까지 한곳에서 계획할 수 있도록 구성했습니다.',
            ],
            en: [
                'Planned and built the service independently.',
                'Researched resort rental shops and lift tickets, then organized gear, transportation, and lodging options in one planning flow.',
            ],
        },
        techStack: ['Next.js', 'TypeScript', 'Web'],
        liveUrl: 'https://ski.hothyun.com',
    },
    {
        title: localized('PawProof', 'PawProof'),
        slug: 'pawproof',
        summary: localized(
            '반려견과 함께 가기 적합한 장소가 여행 경로에 있는지 미리 확인하는 반려동물 동반여행 서비스입니다.',
            'A pre-trip service that checks whether a planned route includes places suitable for traveling with a dog.',
        ),
        overview: localized(
            '반려동물 동반여행을 준비할 때 장소 정보를 하나씩 확인해야 하는 번거로움을 줄이고자 만들었습니다.',
            'Built to make it easier to plan pet-friendly trips without checking every destination one by one.',
        ),
        contributions: {
            ko: [
                '한국관광공사 반려동물 동반여행 OpenAPI를 활용해 경로에 반려견과 함께 가기 적합한 장소가 있는지 확인하는 기능을 개발했습니다.',
                '반려동물 여행 콘텐츠 기능과 콘텐츠 제작·관리를 위한 자체 CMS를 만들었습니다.',
            ],
            en: [
                'Used the Korea Tourism Organization’s pet-travel OpenAPI to check for dog-friendly destinations along a route.',
                'Built pet-travel content features and a custom CMS for creating and managing that content.',
            ],
        },
        techStack: ['Next.js', 'TypeScript', 'Korea Tourism OpenAPI', 'CMS'],
        liveUrl: 'https://www.pawproof.kr',
    },
];

export const MY_EXPERIENCE = [
    {
        company: localized('대한민국 해군', 'Republic of Korea Navy'),
        title: localized('SW 개발병', 'Software Developer'),
        period: localized('2025.03–현재', 'Mar 2025–Present'),
        description: localized(
            'Electron 기반 분과전산 시스템과 React·Spring Boot 기반 체계를 개발하고 유지보수합니다. 분과전산 로직과 알고리즘을 구현하고 OMR Reader를 연동했습니다.',
            'Build and maintain an Electron-based naval division computing system and React/Spring Boot systems. Implemented its business logic and algorithms and integrated an OMR reader.',
        ),
    },
    {
        company: localized('주식회사 가지랩', 'gazilab'),
        title: localized('Product Engineer', 'Product Engineer'),
        period: localized('2023.01–2025.02', 'Jan 2023–Feb 2025'),
        description: localized(
            '초기 제품의 기획부터 개발까지 참여해 웹·앱 서비스와 AI 기능을 만들었습니다. Career Wellness의 주요 기능을 구현하고, AI RUSH 커리어 AI 제품 개발을 주도했습니다.',
            'Worked across planning and development of early web, mobile, and AI products. Built many core features for Career Wellness and led development of the AI RUSH career product.',
        ),
    },
    {
        company: localized('POSTECH UGRP · PAM+NET', 'POSTECH UGRP · PAM+NET'),
        title: localized('DApp 개발', 'DApp Developer'),
        period: localized('2022.03–2022.12', 'Mar 2022–Dec 2022'),
        description: localized(
            'NFT 기반 이력 증빙 모바일 앱의 UX와 Flutter 앱을 개발하고 MetaMask를 연동했습니다. POSTECH UGRP 최우수상을 받았습니다.',
            'Designed the UX and built a Flutter mobile app for NFT-based verifiable credentials, integrating MetaMask. The team received the POSTECH UGRP Grand Prize.',
        ),
    },
];

export const EDUCATION = {
    institution: 'POSTECH',
    major: localized('물리학과', 'Physics'),
    period: localized('2021.02–현재', 'Feb 2021–Present'),
    academicRecord: localized(
        'TGPA 3.47/4.3 · 백분위 91.7/100',
        'TGPA 3.47/4.3 · 91.7th percentile',
    ),
    activities: {
        ko: [
            '포항공과대학교 창업 동아리 Partners 1기',
            'KAIST 창업 해커톤 SUM 참가 · FIST Summer School 참가',
            '이끌다교육연구소 STEAM 멘토로 4개 고교에서 전공탐구, 진로·진학 멘토링과 창업 특강 진행',
        ],
        en: [
            'Partners, first cohort of the POSTECH entrepreneurship club',
            'KAIST SUM startup hackathon · FIST Summer School',
            'STEAM mentor at four high schools, leading subject exploration, career guidance, and startup talks',
        ],
    },
};

export const AWARDS = [
    {
        year: '2026',
        title: localized('해군·해병대 인공지능 경진대회 최우수상', 'Navy & Marine Corps AI Competition · Grand Prize'),
    },
    {
        year: '2025',
        title: localized('해군 창업경진대회 우수상', 'Navy Startup Competition · Excellence Award'),
    },
    {
        year: '2022',
        title: localized('POSTECH-UGRP 최우수상', 'POSTECH UGRP · Grand Prize'),
    },
];
