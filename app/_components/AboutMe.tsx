'use client';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React from 'react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

const AboutMe = () => {
    const container = React.useRef<HTMLDivElement>(null);

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
                    I create software products that turn hypotheses into useful
                    tools, with a focus on full-stack development, AI, and
                    automation.
                </h2>

                <p className="pb-3 border-b text-muted-foreground slide-up-and-fade">
                    This is me.
                </p>

                <div className="grid md:grid-cols-12 mt-9">
                    <div className="md:col-span-5">
                        <p className="text-5xl slide-up-and-fade">
                            Hi, I&apos;m HotHyun.
                        </p>
                    </div>
                    <div className="md:col-span-7">
                        <div className="text-lg text-muted-foreground max-w-[560px]">
                            <p className="slide-up-and-fade">
                                안녕하세요! Software Engineer HotHyun입니다. 저는
                                누군가에게 선한 영향력을 주고 싶은 사람입니다.
                                소프트웨어 제품을 만들어 특정 사회의 문제를
                                해결하는 일이 저와 가장 잘 맞는 방식이라고
                                생각합니다.
                            </p>
                            <p className="mt-3 slide-up-and-fade">
                                현재 해군 SW 개발병으로 군 복무 중이며, 이전에는
                                초기 스타트업 gazilab에서 2년간 Software
                                Engineer로 여러 제품을 개발하고 런칭했습니다.
                                FrontEnd에서 시작해 Firebase 같은 서버리스
                                플랫폼을 활용했고, 이후 제품 고도화를 위해 Spring
                                Boot, FastAPI, Oracle SQL 기반의 BackEnd 개발도
                                진행했습니다.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutMe;
