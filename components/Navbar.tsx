'use client';
import { cn } from '@/lib/utils';
import { useState } from 'react';
import { MoveUpRight } from 'lucide-react';
import { useRouter } from 'next/navigation';
import { GENERAL_INFO, SOCIAL_LINKS } from '@/lib/data';
import { useLanguage } from './LanguageProvider';

const COLORS = [
    'bg-yellow-500 text-black',
    'bg-blue-500 text-white',
    'bg-teal-500 text-black',
    'bg-indigo-500 text-white',
];

const MENU_LINKS = {
    en: [
        { name: 'Home', url: '/' },
        { name: 'About Me', url: '/#about-me' },
        { name: 'Experience', url: '/#my-experience' },
        { name: 'Projects', url: '/#selected-projects' },
    ],
    ko: [
        { name: '홈', url: '/' },
        { name: '소개', url: '/#about-me' },
        { name: '경험', url: '/#my-experience' },
        { name: '프로젝트', url: '/#selected-projects' },
    ],
};

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const { language, setLanguage } = useLanguage();
    const router = useRouter();
    const menuLinks = MENU_LINKS[language];

    return (
        <>
            <div className="sticky top-0 z-[4]">
                <div className="absolute top-5 right-5 md:right-10 z-[2] flex items-center gap-3">
                    <div
                        className="group/language relative flex h-10 w-[88px] items-center overflow-hidden rounded-full border border-white/10 bg-background/75 p-1 shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] backdrop-blur-md transition-colors hover:border-primary/35 md:h-12 md:w-[104px]"
                        aria-label="Language selector"
                    >
                        <span
                            className={cn(
                                'pointer-events-none absolute left-1 top-1 h-8 w-10 rounded-full bg-foreground shadow-[0_8px_24px_rgba(0,0,0,0.28)] transition-transform duration-500 ease-out md:h-10 md:w-12',
                                language === 'en' && 'translate-x-10 md:translate-x-12',
                            )}
                        ></span>
                        {(['ko', 'en'] as const).map((item) => (
                            <button
                                key={item}
                                type="button"
                                onClick={() => setLanguage(item)}
                                className={cn(
                                    'relative z-[1] flex h-8 w-10 shrink-0 items-center justify-center rounded-full text-center text-[11px] font-anton uppercase leading-none tracking-wider transition-colors duration-300 md:h-10 md:w-12 md:text-xs',
                                    language === item
                                        ? 'text-background'
                                        : 'text-foreground/90 hover:text-primary',
                                )}
                                aria-pressed={language === item}
                            >
                                {item}
                            </button>
                        ))}
                    </div>

                    <button
                        aria-label="Open menu"
                        className={cn('group size-10 relative md:size-12')}
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                    >
                        <span
                            className={cn(
                                'inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 -translate-y-[5px] ',
                                {
                                    'rotate-45 -translate-y-1/2': isMenuOpen,
                                    'md:group-hover:rotate-12': !isMenuOpen,
                                },
                            )}
                        ></span>
                        <span
                            className={cn(
                                'inline-block w-3/5 h-0.5 bg-foreground rounded-full absolute left-1/2 -translate-x-1/2 top-1/2 duration-300 translate-y-[5px] ',
                                {
                                    '-rotate-45 -translate-y-1/2': isMenuOpen,
                                    'md:group-hover:-rotate-12': !isMenuOpen,
                                },
                            )}
                        ></span>
                    </button>
                </div>
            </div>

            <div
                className={cn(
                    'overlay fixed inset-0 z-[2] bg-black/70 transition-all duration-150',
                    {
                        'opacity-0 invisible pointer-events-none': !isMenuOpen,
                    },
                )}
                onClick={() => setIsMenuOpen(false)}
            ></div>

            <div
                className={cn(
                    'fixed top-0 right-0 h-[100dvh] w-[500px] max-w-[calc(100vw-3rem)] transform translate-x-full transition-transform duration-700 z-[3] overflow-hidden gap-y-14',
                    'flex flex-col lg:justify-center py-10',
                    { 'translate-x-0': isMenuOpen },
                )}
            >
                <div
                    className={cn(
                        'fixed inset-0 scale-150 translate-x-1/2 rounded-[50%] bg-background-light duration-700 delay-150 z-[-1]',
                        {
                            'translate-x-0': isMenuOpen,
                        },
                    )}
                ></div>

                <div className="grow flex md:items-center w-full max-w-[300px] mx-8 sm:mx-auto">
                    <div className="flex gap-10 lg:justify-between max-lg:flex-col w-full">
                        <div className="max-lg:order-2">
                            <p className="text-muted-foreground mb-5 md:mb-8">
                                SOCIAL
                            </p>
                            <ul className="space-y-3">
                                {SOCIAL_LINKS.map((link) => (
                                    <li key={link.name}>
                                        <a
                                            href={link.url}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="text-lg capitalize hover:underline"
                                        >
                                            {link.name}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="">
                            <p className="text-muted-foreground mb-5 md:mb-8">
                                MENU
                            </p>
                            <ul className="space-y-3">
                                {menuLinks.map((link, idx) => (
                                    <li key={link.name}>
                                        <button
                                            onClick={() => {
                                                router.push(link.url);
                                                setIsMenuOpen(false);
                                            }}
                                            className="group text-xl flex items-center gap-3"
                                        >
                                            <span
                                                className={cn(
                                                    'size-3.5 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-[200%] transition-all',
                                                    COLORS[idx],
                                                )}
                                            >
                                                <MoveUpRight
                                                    size={8}
                                                    className="scale-0 group-hover:scale-100 transition-all"
                                                />
                                            </span>
                                            {link.name}
                                        </button>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <div className="w-full max-w-[300px] mx-8 sm:mx-auto">
                    <p className="text-muted-foreground mb-4">
                        {language === 'ko' ? 'CONTACT' : 'GET IN TOUCH'}
                    </p>
                    <a href={`mailto:${GENERAL_INFO.email}`}>
                        {GENERAL_INFO.email}
                    </a>
                </div>
            </div>
        </>
    );
};

export default Navbar;
