'use client';
import { useLanguage } from '@/components/LanguageProvider';
import { GENERAL_INFO } from '@/lib/data';
import { GitFork, Star } from 'lucide-react';
import { useEffect, useState } from 'react';

interface RepoStats {
    stargazers_count: number;
    forks_count: number;
}

const COPY = {
    en: {
        cta: "Let's build products people truly need.",
        modified: 'Modified by HotHyun',
        forked: 'Forked from Tajmirul Islam',
    },
    ko: {
        cta: '정말로 필요한 제품을 함께 만들어봅시다.',
        modified: 'Modified by HotHyun',
        forked: 'Forked from Tajmirul Islam',
    },
};

const Footer = () => {
    const { language } = useLanguage();
    const copy = COPY[language];
    const [repoStats, setRepoStats] = useState<RepoStats>({
        stargazers_count: 0,
        forks_count: 0,
    });

    useEffect(() => {
        fetch('https://api.github.com/repos/Tajmirul/portfolio-2.0')
            .then((response) => response.json())
            .then((data: RepoStats) => setRepoStats(data))
            .catch(() => undefined);
    }, []);

    return (
        <footer className="text-center pb-5" id="contact">
            <div className="container">
                <p className="text-lg">{copy.cta}</p>
                <a
                    href={`mailto:${GENERAL_INFO.email}`}
                    className="text-3xl sm:text-4xl font-anton inline-block mt-5 mb-10 hover:underline"
                >
                    {GENERAL_INFO.email}
                </a>

                <div className="">
                    <a
                        href="https://github.com/Tajmirul/portfolio-2.0"
                        target="_blank"
                        className="leading-none text-muted-foreground hover:underline hover:text-white"
                    >
                        {copy.modified}
                        <br />
                        {copy.forked}
                        <div className="flex items-center justify-center gap-5 pt-1">
                            <span className="flex items-center gap-2">
                                <Star size={18} /> {repoStats.stargazers_count}
                            </span>
                            <span className="flex items-center gap-2">
                                <GitFork size={18} /> {repoStats.forks_count}
                            </span>
                        </div>
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
