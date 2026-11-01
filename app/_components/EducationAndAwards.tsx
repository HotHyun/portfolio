'use client';
import SectionTitle from '@/components/SectionTitle';
import { useLanguage } from '@/components/LanguageProvider';
import { AWARDS, EDUCATION } from '@/lib/data';

const COPY = {
    en: {
        title: 'Education & Recognition',
        education: 'Education',
        recognition: 'Selected Recognition',
        activities: 'Activities',
    },
    ko: {
        title: '교육 및 수상',
        education: 'Education',
        recognition: 'Awards',
        activities: 'Activities',
    },
};

const EducationAndAwards = () => {
    const { language } = useLanguage();
    const copy = COPY[language];

    return (
        <section className="py-section" id="education-recognition">
            <div className="container">
                <SectionTitle title={copy.title} />

                <div className="grid gap-16 md:grid-cols-12 md:gap-10">
                    <section className="md:col-span-6">
                        <h3 className="mb-8 text-4xl font-anton text-muted-foreground">
                            {copy.education}
                        </h3>
                        <p className="text-3xl">
                            {EDUCATION.institution} · {EDUCATION.major[language]}
                        </p>
                        <p className="mt-3 text-lg text-muted-foreground">
                            {EDUCATION.period[language]} · {EDUCATION.academicRecord[language]}
                        </p>

                        <div className="mt-10">
                            <h4 className="mb-5 text-xl text-muted-foreground">
                                {copy.activities}
                            </h4>
                            <ul className="space-y-4 text-lg leading-relaxed text-muted-foreground">
                                {EDUCATION.activities[language].map((activity) => (
                                    <li className="flex gap-3" key={activity}>
                                        <span className="mt-3 size-1.5 shrink-0 rounded-full bg-primary" />
                                        <span>{activity}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </section>

                    <section className="md:col-span-6">
                        <h3 className="mb-8 text-4xl font-anton text-muted-foreground">
                            {copy.recognition}
                        </h3>
                        <div className="space-y-7">
                            {AWARDS.map((award) => (
                                <div
                                    className="border-b border-white/15 pb-6 last:border-0"
                                    key={award.year}
                                >
                                    <p className="font-anton text-primary">
                                        {award.year}
                                    </p>
                                    <p className="mt-2 text-2xl leading-snug">
                                        {award.title[language]}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default EducationAndAwards;
