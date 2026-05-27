'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import Button from '@/components/Button';
import { useLanguage } from '@/components/LanguageProvider';
import { GENERAL_INFO } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { ArrowUpRight } from 'lucide-react';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const COPY = {
    en: {
        titleTop: 'SOFTWARE',
        titleBottom: 'ENGINEER',
        intro: (
            <>
                Hi! I&apos;m{' '}
                <span className="font-medium text-foreground">HotHyun</span>. I
                identify problems faced by specific people and build software to
                solve them, creating positive impact through my work.
            </>
        ),
        button: "Let's Talk",
        resume: 'Resume',
        status: 'Currently serving as a Navy Software Developer',
        stats: [
            { value: '4+', label: 'Years as Software Engineer' },
            { value: '10+', label: 'Software Products' },
            { value: 'POSTECH', label: 'Physics Student' },
        ],
    },
    ko: {
        titleTop: 'SOFTWARE',
        titleBottom: 'ENGINEER',
        intro: (
            <>
                안녕하세요{' '}
                <span className="font-medium text-foreground">HotHyun</span>
                입니다. 특정 사람들이 겪는 문제를 파악하고, 이를 해결하기 위한
                Software를 만들어 좋은 영향을 남기는 일을 합니다.
            </>
        ),
        button: "Let's Talk",
        resume: 'Resume',
        status: '현재 해군 SW 개발병으로 복무 중',
        stats: [
            { value: '4+', label: '소프트웨어 엔지니어 경력' },
            { value: '10+', label: '소프트웨어 개발 참여' },
            { value: 'POSTECH', label: '물리학과 재학생' },
        ],
    },
};

const Banner = () => {
    const containerRef = React.useRef<HTMLDivElement>(null);
    const { language } = useLanguage();
    const copy = COPY[language];

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 70%',
                    end: 'bottom 10%',
                    scrub: 1,
                },
            });

            tl.fromTo(
                '.slide-up-and-fade',
                { y: 0 },
                { y: -150, opacity: 0, stagger: 0.02 },
            );
        },
        { scope: containerRef },
    );

    return (
        <section className="relative overflow-hidden" id="banner">
            <ArrowAnimation />
            <div
                className="container h-[100svh] min-h-[530px] max-md:pb-10 flex justify-between items-center max-md:flex-col"
                ref={containerRef}
            >
                <div className="max-md:grow max-md:flex flex-col justify-center items-start max-w-[620px]">
                    <h1 className="banner-title slide-up-and-fade leading-[.95] text-6xl sm:text-[80px] font-anton">
                        <span className="text-primary">{copy.titleTop}</span>
                        <br /> <span className="ml-4">{copy.titleBottom}</span>
                    </h1>
                    <p className="banner-description slide-up-and-fade mt-6 text-lg text-muted-foreground">
                        {copy.intro}
                    </p>
                    <div className="mt-9 flex flex-wrap items-center gap-3 slide-up-and-fade">
                        <Button
                            as="link"
                            href={`mailto:${GENERAL_INFO.email}`}
                            variant="primary"
                            className="banner-button"
                        >
                            {copy.button}
                        </Button>
                        <Button
                            as="link"
                            href="/resume.pdf"
                            download
                            variant="no-color"
                            className="border border-white/15 bg-background-light/70 text-foreground hover:border-primary/50 hover:text-background"
                        >
                            <span>{copy.resume}</span>
                            <ArrowUpRight size={18} strokeWidth={1.8} />
                        </Button>
                    </div>

                    <div className="slide-up-and-fade flex items-center gap-2 mt-3">
                        <span className="size-3 rounded-full bg-white"></span>
                        <span className="text-sm text-muted-foreground">
                            {copy.status}
                        </span>
                    </div>
                </div>

                <div className="md:absolute bottom-[10%] right-[4%] flex md:flex-col gap-4 md:gap-8 text-center md:text-right">
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            {copy.stats[0].value}
                        </h5>
                        <p className="text-muted-foreground">{copy.stats[0].label}</p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            {copy.stats[1].value}
                        </h5>
                        <p className="text-muted-foreground">{copy.stats[1].label}</p>
                    </div>
                    <div className="slide-up-and-fade">
                        <h5 className="text-3xl sm:text-4xl font-anton text-primary mb-1.5">
                            {copy.stats[2].value}
                        </h5>
                        <p className="text-muted-foreground">{copy.stats[2].label}</p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Banner;
