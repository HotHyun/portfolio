'use client';
import ArrowAnimation from '@/components/ArrowAnimation';
import TransitionLink from '@/components/TransitionLink';
import { useLanguage } from '@/components/LanguageProvider';
import type { IProject } from '@/types';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { useRef } from 'react';

interface Props {
    project: IProject;
}

gsap.registerPlugin(useGSAP);

const COPY = {
    en: {
        back: 'Back',
        period: 'Period',
        overview: 'Product overview',
        contributions: 'My contribution',
        outcome: 'Outcome',
        tech: 'Built with',
        links: 'References',
    },
    ko: {
        back: '뒤로',
        period: '기간',
        overview: '프로덕트 소개',
        contributions: '기여한 일',
        outcome: '결과',
        tech: '사용 기술',
        links: '관련 링크',
    },
};

const ProjectDetails = ({ project }: Props) => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { language } = useLanguage();
    const copy = COPY[language];

    useGSAP(
        () => {
            if (!containerRef.current) return;

            gsap.set('.fade-in-later', { autoAlpha: 0, y: 24 });
            gsap.to('.fade-in-later', {
                autoAlpha: 1,
                y: 0,
                stagger: 0.08,
                delay: 0.15,
                duration: 0.55,
                ease: 'power2.out',
            });
        },
        { scope: containerRef },
    );

    return (
        <section className="pt-5 pb-24">
            <div className="container" ref={containerRef}>
                <TransitionLink
                    back
                    href="/"
                    className="mb-16 inline-flex h-12 items-center gap-2 group"
                >
                    <ArrowLeft className="transition-all duration-300 group-hover:-translate-x-1 group-hover:text-primary" />
                    {copy.back}
                </TransitionLink>

                <article className="mx-auto max-w-[760px]">
                    <header className="fade-in-later mb-12">
                        <div className="flex items-start justify-between gap-6">
                            <h1 className="text-4xl leading-tight md:text-6xl font-anton">
                                {project.title[language]}
                            </h1>
                            <div className="flex shrink-0 gap-3 pt-2">
                                {project.liveUrl && (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer noopener"
                                        aria-label="Live product"
                                        className="hover:text-primary"
                                    >
                                        <ExternalLink size={26} />
                                    </a>
                                )}
                            </div>
                        </div>
                        <p className="mt-5 text-xl leading-relaxed text-muted-foreground">
                            {project.summary[language]}
                        </p>
                        {project.status && (
                            <p className="mt-4 inline-flex border border-primary/40 px-3 py-1 text-sm text-primary">
                                {project.status[language]}
                            </p>
                        )}
                    </header>

                    <div className="space-y-10">
                        {project.period && (
                            <section className="fade-in-later">
                                <h2 className="mb-3 font-anton text-muted-foreground">
                                    {copy.period}
                                </h2>
                                <p className="text-lg">{project.period[language]}</p>
                            </section>
                        )}

                        <section className="fade-in-later">
                            <h2 className="mb-3 font-anton text-muted-foreground">
                                {copy.overview}
                            </h2>
                            <p className="text-lg leading-relaxed">
                                {project.overview[language]}
                            </p>
                        </section>

                        <section className="fade-in-later">
                            <h2 className="mb-3 font-anton text-muted-foreground">
                                {copy.contributions}
                            </h2>
                            <ul className="space-y-3 text-lg leading-relaxed">
                                {project.contributions[language].map((item) => (
                                    <li className="flex gap-3" key={item}>
                                        <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
                                        <span>{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {project.outcome && (
                            <section className="fade-in-later">
                                <h2 className="mb-3 font-anton text-muted-foreground">
                                    {copy.outcome}
                                </h2>
                                <p className="text-lg leading-relaxed">
                                    {project.outcome[language]}
                                </p>
                            </section>
                        )}

                        <section className="fade-in-later">
                            <h2 className="mb-3 font-anton text-muted-foreground">
                                {copy.tech}
                            </h2>
                            <div className="flex flex-wrap gap-2">
                                {project.techStack.map((tech) => (
                                    <span
                                        className="border border-white/15 px-3 py-1.5 text-sm text-muted-foreground"
                                        key={tech}
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                        </section>

                        {!!project.links?.length && (
                            <section className="fade-in-later">
                                <h2 className="mb-3 font-anton text-muted-foreground">
                                    {copy.links}
                                </h2>
                                <ul className="space-y-2">
                                    {project.links.map((link) => (
                                        <li key={link.url}>
                                            <a
                                                className="inline-flex items-center gap-2 text-lg underline underline-offset-4 transition-colors hover:text-primary"
                                                href={link.url}
                                                target="_blank"
                                                rel="noreferrer noopener"
                                            >
                                                {link.label[language]}
                                                <ExternalLink size={16} />
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </section>
                        )}
                    </div>
                </article>
                <ArrowAnimation />
            </div>
        </section>
    );
};

export default ProjectDetails;
