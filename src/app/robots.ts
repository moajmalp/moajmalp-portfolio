import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: ['/admin/', '/login'], // Block admin and login path crawlers
        },
        sitemap: 'https://moajmalp.in/sitemap.xml',
    };
}
