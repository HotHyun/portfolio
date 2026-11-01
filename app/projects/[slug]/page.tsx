import { notFound } from 'next/navigation';
import ProjectDetails from './_components/ProjectDetails';
import { PROJECTS } from '@/lib/data';
import { Metadata } from 'next';

export const generateStaticParams = async () => {
    return PROJECTS.map((project) => ({ slug: project.slug }));
};

export const generateMetadata = async ({
    params,
}: {
    params: Promise<{ slug: string }>;
}): Promise<Metadata> => {
    const { slug } = await params;
    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project) {
        return {
            title: 'Project not found',
            robots: { index: false, follow: false },
        };
    }

    const title = project.title.ko;
    const description = project.summary.ko;
    const url = `/projects/${slug}`;

    return {
        title,
        description,
        alternates: { canonical: url },
        openGraph: {
            type: 'article',
            url,
            siteName: 'HotHyun Portfolio',
            title: `${title} | HotHyun`,
            description,
            images: [
                {
                    url: '/og-image.png',
                    width: 1200,
                    height: 630,
                    alt: 'HotHyun on a black background',
                },
            ],
        },
        twitter: {
            card: 'summary_large_image',
            title: `${title} | HotHyun`,
            description,
            images: ['/og-image.png'],
        },
    };
};

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
    const { slug } = await params;

    const project = PROJECTS.find((project) => project.slug === slug);

    if (!project) {
        return notFound();
    }

    return <ProjectDetails project={project} />;
};

export default Page;
