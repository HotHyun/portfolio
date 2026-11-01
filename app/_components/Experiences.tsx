'use client';
import { useLanguage } from '@/components/LanguageProvider';
import SectionTitle from '@/components/SectionTitle';
import { MY_EXPERIENCE } from '@/lib/data';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import { useRef } from 'react';

gsap.registerPlugin(useGSAP, ScrollTrigger);

const COPY = {
    en: {
        title: 'My Experience',
        items: MY_EXPERIENCE,
    },
    ko: {
        title: 'My Experience',
        items: MY_EXPERIENCE,
    },
};

const Experiences = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { language } = useLanguage();
    const copy = COPY[language];

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'top 60%',
                    end: 'bottom 50%',
                    toggleActions: 'restart none none reverse',
                    scrub: 1,
                },
            });

            tl.from('.experience-item', {
                y: 50,
                opacity: 0,
                stagger: 0.3,
            });
        },
        { scope: containerRef },
    );

    useGSAP(
        () => {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: containerRef.current,
                    start: 'bottom 50%',
                    end: 'bottom 20%',
                    scrub: 1,
                },
            });

            tl.to(containerRef.current, {
                y: -150,
                opacity: 0,
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="py-section" id="my-experience">
            <div className="container" ref={containerRef}>
                <SectionTitle title={copy.title} />

                <div className="grid gap-14">
                    {copy.items.map((item) => (
                        <div key={item.company.en} className="experience-item">
                            <p className="text-xl text-muted-foreground">
                                {item.company[language]}
                            </p>
                            <p className="text-5xl font-anton leading-none mt-3.5 mb-2.5">
                                {item.title[language]}
                            </p>
                            <p className="text-lg text-muted-foreground">
                                {item.period[language]}
                            </p>
                            <p className="text-lg text-muted-foreground max-w-3xl mt-4 leading-relaxed">
                                {item.description[language]}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Experiences;
