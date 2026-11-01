'use client';
import { useLanguage } from '@/components/LanguageProvider';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const COPY = {
    en: {
        headline:
            'I turn early product ideas into working web and mobile MVPs.',
        label: 'This is me.',
        greeting: "Hi, I'm HotHyun.",
        paragraphs: [
            'After studying physics, I was drawn to startups and the work of making products. I enjoy taking an early idea and turning it into a working web or app MVP, collaborating across product planning and engineering.',
            'I am currently serving as a Navy SW Developer. Before that, I worked at the early-stage startup gazilab, building web, mobile, and AI products. I helped create Career Wellness from its first planning sessions through launch, implemented many of its core features alongside another engineer, and connected the payment flow. The service is still operating. I also proposed the AI RUSH project and built its Career AI product from concept to completion as the sole developer; it was selected among the final three companies at 2023 NAVER AI RUSH and presented by our CEO at DAN23.',
        ],
    },
    ko: {
        headline:
            '초기 아이디어를 실제 동작하는 웹·앱 MVP로 구현합니다.',
        label: 'This is me.',
        greeting: '안녕하세요, HotHyun입니다.',
        paragraphs: [
            '물리학을 공부하다 창업과 제품 개발에 끌려 개발을 시작했습니다. 저는 초기 아이디어를 실제로 동작하는 웹·앱 MVP로 구체화하고, 기획과 개발을 오가며 제품의 첫 버전을 만드는 Product Engineer입니다.',
            '현재 해군 SW 개발병으로 복무 중입니다. 이전에는 초기 스타트업 가지랩에서 웹·앱·AI 제품을 만들었습니다. Career Wellness는 동료 개발자와 첫 기획부터 출시까지 함께했고, 주요 기능을 다수 구현해 결제 파이프라인을 갖춘 서비스로 출시했습니다. 서비스는 지금도 운영 중입니다. 또 AI RUSH 참가를 대표에게 직접 제안했고, Career AI 제품을 기획부터 완성까지 단독 개발해 2023 NAVER AI RUSH 최종 3개 기업에 선정됐습니다. DAN23에서는 대표가 제품을 발표했습니다.',
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
                <h2 className="text-4xl md:text-6xl font-thin mb-20 slide-up-and-fade">
                    {copy.headline}
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    {copy.label}
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            {copy.greeting}
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[560px]">
                            {copy.paragraphs.map((paragraph, index) => (
                                <p
                                    className={index > 0 ? 'mt-3 slide-up-and-fade' : 'slide-up-and-fade'}
                                    key={paragraph}
                                >
                                    {paragraph}
                                </p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
