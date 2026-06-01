import { MetadataRoute } from 'next';
import { profileData } from '../data/profileData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://moajmalp.in';

    // Static routes
    const staticRoutes = [
        '',
        '/projects',
        '/blog',
        '/contact',
        '/education',
        '/experience',
    ].map((route) => ({
        url: `${baseUrl}${route}`,
        lastModified: new Date(),
        changeFrequency: 'weekly' as const,
        priority: route === '' ? 1.0 : 0.8,
    }));

    // Dynamic blog routes
    const blogRoutes = profileData.blogs.map((blog) => {
        const slug = blog.url.split('/').pop() || '';
        return {
            url: `${baseUrl}/blog/${slug}`,
            lastModified: new Date(blog.date),
            changeFrequency: 'monthly' as const,
            priority: 0.6,
        };
    });

    return [...staticRoutes, ...blogRoutes];
}
