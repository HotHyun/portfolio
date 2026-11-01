'use client';
import { useLanguage } from '@/components/LanguageProvider';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const COPY = {
    en: {
        label: 'Introduction',
        headline:
            'React · Next.js · React Native | From early product ideas to MVPs',
        introduction:
            'While studying physics, I became interested in startups and product development and began learning to code. In startup teams, I have built products with React/Next.js and React Native, turning early ideas and requirements into working web and app MVPs.',
        highlights: [
            'I contributed to Career Wellness from initial planning, implemented many core features, and launched it with real paid transactions. The service is still operating.',
            'I have worked across user flows and feature design, web and app development, shared modules, and deployment foundations for early products.',
            'I led development of a career AI product that was selected among the final three companies in 2023 NAVER AI RUSH. The opportunity to present it at DAN23 helped raise the company’s profile and contributed to NAVER marketing opportunities and follow-on collaborations.',
        ],
    },
    ko: {
        label: '소개',
        headline:
            'React · Next.js · React Native | 초기 제품 기획부터 MVP 구현까지',
        introduction:
            '물리학 전공으로 학업을 이어가던 중 창업과 제품 개발에 흥미를 느껴 개발을 시작했습니다. 창업팀에서 React/Next.js와 React Native 기반 제품을 만들며, 초기 아이디어와 요구사항을 실제 동작하는 웹·앱 MVP로 구체화해 왔습니다.',
        highlights: [
            'Career Wellness의 첫 기획부터 제품 개발에 참여해 핵심 기능을 다수 구현했고, 실제 결제가 이뤄지는 서비스로 출시했습니다. 서비스는 현재도 운영 중입니다.',
            '사용자 흐름과 기능을 설계하고, 웹·앱 구현부터 공통 모듈과 배포 구조까지 제품의 초기 구축에 참여했습니다.',
            '커리어 AI 제품 개발을 주도해 2023 Naver AI RUSH 최종 3개 기업에 선정됐고, DAN23에서 발표할 수 있는 기회를 얻어 회사를 널리 알리고, 네이버 마케팅 기회와 후속 협업으로 이어지는 데 기여했습니다.',
        ],
    },
};

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);
    const { language } = useLanguage();
    const copy = COPY[language];

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-in',
                    trigger: container.current,
                    start: 'top 70%',
                    end: 'bottom bottom',
                    scrub: 0.5,
                },
            });

            tl.from('.slide-up-and-fade', {
                y: 150,
                opacity: 0,
                stagger: 0.05,
            });
        },
        { scope: container },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    id: 'about-me-out',
                    trigger: container.current,
                    start: 'bottom 50%',
                    end: 'bottom 10%',
                    scrub: 0.5,
                },
            });

            tl.to('.slide-up-and-fade', {
                y: -150,
                opacity: 0,
                stagger: 0.02,
            });
        },
        { scope: container },
    );

    return (
        <section className="pb-section" id="about-me">
            <div className="container" ref={container}>
                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    {copy.label}
                </p>

                <h2 className="mt-9 max-w-5xl text-4xl font-thin leading-tight md:text-6xl slide-up-and-fade">
                    {copy.headline}
                </h2>

                <div className="mt-9 grid gap-7 md:grid-cols-12">
                    <p className="text-lg leading-relaxed text-muted-foreground md:col-span-5 slide-up-and-fade">
                        {copy.introduction}
                    </p>
                    <ul className="space-y-5 text-lg leading-relaxed text-muted-foreground md:col-span-7">
                        {copy.highlights.map((highlight) => (
                            <li className="flex gap-3 slide-up-and-fade" key={highlight}>
                                <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
                                <span>{highlight}</span>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
