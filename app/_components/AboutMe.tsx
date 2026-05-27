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
            'I like forming hypotheses about problems, validating them through Pretotyping and MVP development, and refining them into products that users truly need.',
        label: 'This is me.',
        greeting: "Hi, I'm HotHyun.",
        paragraphs: [
            'Hello, I am HotHyun, a software engineer who wants to create positive impact. There are many ways to do that, but building software products that solve problems in specific communities feels like the path that fits me best.',
            'I am currently serving as a Naval Software Developer. Previously, I worked for two years as a Software Engineer at early-stage startup gazilab, where I built and launched multiple products. I started with FrontEnd development and serverless platforms such as Firebase, then expanded into BackEnd development with Spring Boot, FastAPI, and Oracle SQL as the products matured.',
        ],
    },
    ko: {
        headline:
            '저는 문제에 대한 가설을 세우고, 그 가설을 Pretotyping과 MVP를 개발하여 검증하고 고도화하여 사용자들에게 더 필요한 제품을 만드는 것을 좋아합니다.',
        label: 'This is me.',
        greeting: '안녕하세요, HotHyun입니다.',
        paragraphs: [
            '안녕하세요! Software Engineer HotHyun입니다. 저는 누군가에게 선한 영향력을 주고 싶은 사람입니다. 소프트웨어 제품을 만들어 특정 사회의 문제를 해결하는 일이 저와 가장 잘 맞는 방식이라고 생각합니다.',
            '현재 해군 SW 개발병으로 군 복무 중이며, 이전에는 초기 스타트업 gazilab에서 2년간 Software Engineer로 여러 제품을 개발하고 런칭했습니다. FrontEnd에서 시작해 Firebase 같은 서버리스 플랫폼을 활용했고, 이후 제품 고도화를 위해 Spring Boot, FastAPI, Oracle SQL 기반의 BackEnd 개발도 진행했습니다.',
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
