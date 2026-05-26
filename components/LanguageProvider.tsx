'use client';
import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';

export type Language = 'ko' | 'en';

type LanguageContextValue = {
    language: Language;
    setLanguage: (language: Language) => void;
    toggleLanguage: () => void;
    isKorean: boolean;
};

const LanguageContext = createContext<LanguageContextValue | null>(null);

export const LanguageProvider = ({ children }: { children: React.ReactNode }) => {
    const [language, setLanguageState] = useState<Language>('ko');

    useEffect(() => {
        const savedLanguage = window.localStorage.getItem('portfolio-language');
        if (savedLanguage === 'ko' || savedLanguage === 'en') {
            setLanguageState(savedLanguage);
        }
    }, []);

    useEffect(() => {
        document.documentElement.lang = language;
        document.body.dataset.lang = language;
        window.localStorage.setItem('portfolio-language', language);
    }, [language]);

    const value = useMemo<LanguageContextValue>(
        () => ({
            language,
            setLanguage: setLanguageState,
            toggleLanguage: () =>
                setLanguageState((current) => (current === 'ko' ? 'en' : 'ko')),
            isKorean: language === 'ko',
        }),
        [language],
    );

    return (
        <LanguageContext.Provider value={value}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error('useLanguage must be used within LanguageProvider');
    }
    return context;
};
