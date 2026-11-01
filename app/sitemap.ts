import type { MetadataRoute } from 'next';
import { PROJECTS } from '@/lib/data';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
    const siteUrl = 'https://portfolio.hothyun.com';
    const lastModified = new Date();

    return [
        {
            url: siteUrl,
            lastModified,
            changeFrequency: 'monthly',
            priority: 1,
        },
        ...PROJECTS.map((project) => ({
            url: `${siteUrl}/projects/${project.slug}`,
            lastModified,
            changeFrequency: 'monthly' as const,
            priority: 0.8,
        })),
    ];
}
