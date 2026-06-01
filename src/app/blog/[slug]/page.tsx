import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import { ArrowLeft, Calendar, Clock, Tag, User, BookOpen } from 'lucide-react';
import { profileData } from '../../../data/profileData';

interface PageProps {
    params: Promise<{ slug: string }>;
}

// Generate static params for all defined blogs to ensure static optimization works perfectly
export async function generateStaticParams() {
    return profileData.blogs.map((blog) => ({
        slug: blog.url.split('/').pop() || '',
    }));
}

// Fetch blog data helper
function getBlogData(slug: string) {
    return profileData.blogs.find(
        (b) => b.url.split('/').pop() === slug
    );
}

// Dynamic page metadata
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const blog = getBlogData(slug);
    if (!blog) return { title: 'Article Not Found' };

    const articleUrl = `https://moajmalp.in/blog/${slug}`;

    return {
        title: `${blog.title} | Muhammed Ajmal P Blog`,
        description: blog.excerpt,
        alternates: {
            canonical: articleUrl,
        },
        openGraph: {
            title: `${blog.title} | Muhammed Ajmal P`,
            description: blog.excerpt,
            url: articleUrl,
            siteName: "Muhammed Ajmal P Portfolio",
            type: "article",
            publishedTime: new Date(blog.date).toISOString(),
            authors: ["Muhammed Ajmal P"],
            images: [{ url: blog.image, alt: blog.title }],
        },
        twitter: {
            card: "summary_large_image",
            title: blog.title,
            description: blog.excerpt,
            images: [blog.image],
        }
    };
}

export default async function BlogPostPage({ params }: PageProps) {
    const { slug } = await params;
    const blog = getBlogData(slug);

    if (!blog) {
        notFound();
    }

    // Rich structured mock articles based on topic slug
    const getArticleContent = (slug: string) => {
        switch (slug) {
            case 'mastering-wordpress-performance':
                return (
                    <div className="space-y-6 text-gray-700 dark:text-zinc-300 font-medium leading-relaxed">
                        <p className="text-lg text-gray-800 dark:text-zinc-200 font-bold">
                            In today's digital landscape, website performance directly impacts both conversion rates and search rankings. A search engine optimization campaign can fail simply because a website loads too slowly. Below, we'll cover key strategies to achieve top PageSpeed grades.
                        </p>
                        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-8 mb-4">
                            1. Optimize Core Web Vitals (LCP, FID, CLS)
                        </h3>
                        <p>
                            Largest Contentful Paint (LCP) measures loading performance. To improve LCP, optimize critical images, eliminate render-blocking resources, and leverage modern browser caching methods. Cumulative Layout Shift (CLS) measures visual stability. Ensure all media sizes are explicitly declared to prevent visual jumps during painting.
                        </p>
                        <blockquote className="border-l-4 border-primary-500 pl-4 py-2 my-6 bg-primary-500/5 rounded-r-lg italic text-gray-800 dark:text-zinc-200">
                            "A 1-second delay in page load time can reduce conversions by up to 7% and lead to a significant drop in organic search visibility."
                        </blockquote>
                        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-8 mb-4">
                            2. Leverage Advanced Server Caching
                        </h3>
                        <p>
                            Static HTML page caching (e.g., Nginx FastCGI cache) bypasses expensive PHP database queries, delivering immediate response times. To take caching further, implement Redis or Memcached object storage pools to speed up core WordPress runtime execution and API call processing.
                        </p>
                        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-8 mb-4">
                            3. Modern Assets Chunking & CDNs
                        </h3>
                        <p>
                            Convert legacy PNG and JPG assets into next-generation formats like WebP or AVIF. Set up dynamic asset CDNs (Cloudflare, BunnyCDN) to cache static code scripts close to your visitors. Additionally, make sure to minify all JavaScript and CSS files to reduce bandwidth requirements and speed up initial render times.
                        </p>
                    </div>
                );
            case 'future-of-seo-2025':
                return (
                    <div className="space-y-6 text-gray-700 dark:text-zinc-300 font-medium leading-relaxed">
                        <p className="text-lg text-gray-800 dark:text-zinc-200 font-bold">
                            As artificial intelligence shifts from a novelty tool to the core engine of modern search, the fundamentals of Search Engine Optimization are undergoing a massive evolution. Here's what to prioritize in 2025.
                        </p>
                        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-8 mb-4">
                            1. Optimizing for AI Overviews & SGE
                        </h3>
                        <p>
                            Google's Search Generative Experience (SGE) directly serves AI-compiled summaries at the top of query results. To appear in these summaries, your content must be highly authoritative, structured logically, and directly answer complex conversational search intents.
                        </p>
                        <blockquote className="border-l-4 border-primary-500 pl-4 py-2 my-6 bg-primary-500/5 rounded-r-lg italic text-gray-800 dark:text-zinc-200">
                            "Semantic context is replacing keyword density. Search engines now parse content to measure real relevance and topical depth, rather than exact-word matches."
                        </blockquote>
                        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-8 mb-4">
                            2. Semantic Schema Markup & Core Entities
                        </h3>
                        <p>
                            Employing robust JSON-LD schema models helps search engine spiders parse the relationships between entities, authors, and organization units on your pages. Clearly stating the structural relationships between your articles helps establish direct authority on your core topics.
                        </p>
                        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-8 mb-4">
                            3. High-Quality, Data-Driven Link Networks
                        </h3>
                        <p>
                            Google's quality filters are tougher than ever. Low-cost guest blog spam no longer works. Focus on developing data-driven, off-page link networks through high-authority resources, original research distribution, and real industry citations that build authentic, long-term domain relevance.
                        </p>
                    </div>
                );
            case 'scalable-react-apps':
                return (
                    <div className="space-y-6 text-gray-700 dark:text-zinc-300 font-medium leading-relaxed">
                        <p className="text-lg text-gray-800 dark:text-zinc-200 font-bold">
                            Building large-scale React platforms requires careful structural architecture. Without pre-defined standards, a growing team can easily fall into the trap of modular fragmentation and resource leaks.
                        </p>
                        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-8 mb-4">
                            1. Feature-Based Folder Architecture
                        </h3>
                        <p>
                            Instead of splitting files into generic layers (e.g. storing all helper hooks in one folder, all API calls in another), group them by active features (e.g. `features/authentication`, `features/projects`). This ensures that related assets are stored closely, making refactoring and testing straightforward.
                        </p>
                        <blockquote className="border-l-4 border-primary-500 pl-4 py-2 my-6 bg-primary-500/5 rounded-r-lg italic text-gray-800 dark:text-zinc-200">
                            "Keep related logic localized. Clean folder modularity and robust atomic design reduce side effects and make scaling systems completely painless."
                        </blockquote>
                        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-8 mb-4">
                            2. State Management Strategy
                        </h3>
                        <p>
                            Choose state management tools based on complexity. For lightweight, localized component states, rely on React's native `useState` and standard `useContext` pools. If you are handling complex, frequent visual states across different modules, leverage robust, lightweight stores like Zustand.
                        </p>
                        <h3 className="text-xl font-extrabold text-gray-900 dark:text-white mt-8 mb-4">
                            3. Dynamic Chunking & Bundle Optimization
                        </h3>
                        <p>
                            Routinely inspect bundle sizes. Use React lazy loading or dynamic Next.js imports to load heavy page assets or complex calculations only when they are needed. This decreases initial file sizes and improves time-to-interactive scores across all devices.
                        </p>
                    </div>
                );
            default:
                return (
                    <div className="space-y-6 text-gray-700 dark:text-zinc-300 font-medium leading-relaxed">
                        <p>
                            Detailed full article reading canvas is currently under construction. Please check back later.
                        </p>
                    </div>
                );
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white pt-28 pb-20 relative overflow-hidden">
            {/* Mesh background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 blur-[120px] rounded-full -translate-x-1/2"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full translate-x-1/2"></div>
            </div>

            <div className="max-w-4xl mx-auto px-4 sm:px-6 relative z-10">
                {/* Back Link */}
                <Link
                    href="/blog"
                    className="inline-flex items-center gap-2 text-sm font-semibold text-gray-600 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 transition-colors mb-8 group"
                >
                    <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
                    Back to Insights
                </Link>

                {/* Article Header */}
                <header className="mb-10 text-left">
                    <div className="flex flex-wrap gap-2 mb-4">
                        {blog.tags.map((tag: string) => (
                            <span
                                key={tag}
                                className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-primary-500/5 border border-primary-500/10 text-[10px] font-black text-primary-600 dark:text-primary-400 uppercase tracking-widest"
                            >
                                <Tag className="w-3.5 h-3.5" />
                                {tag}
                            </span>
                        ))}
                    </div>

                    <h1 className="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight leading-tight mb-6">
                        {blog.title}
                    </h1>

                    <div className="flex flex-wrap items-center gap-4 text-xs font-semibold text-gray-500 dark:text-zinc-500 border-b border-gray-200/50 dark:border-white/5 pb-8">
                        <span className="flex items-center gap-1.5">
                            <User className="w-4 h-4 text-primary-500" />
                            {profileData.personal.name}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-zinc-700" />
                        <span className="flex items-center gap-1.5">
                            <Calendar className="w-4 h-4 text-primary-500" />
                            {blog.date}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-zinc-700" />
                        <span className="flex items-center gap-1.5">
                            <Clock className="w-4 h-4 text-primary-500" />
                            5 Min Read
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-300 dark:bg-zinc-700" />
                        <span className="flex items-center gap-1.5 text-primary-500">
                            <BookOpen className="w-4 h-4" />
                            Insights
                        </span>
                    </div>
                </header>

                {/* Hero Illustration Container */}
                <div className="relative aspect-[16/9] bg-zinc-50 dark:bg-[#0c0c0c] border border-gray-250/20 dark:border-white/5 p-4 rounded-3xl overflow-hidden shadow-2xl mb-12 flex items-center justify-center">
                    <Image
                        src={blog.image}
                        alt={`${blog.title} - In-depth Tech perspective by Muhammed Ajmal P`}
                        fill
                        sizes="(max-width: 768px) 100vw, 896px"
                        priority
                        className="w-full h-full object-cover rounded-2xl shadow-md"
                    />
                </div>

                {/* Article Content */}
                <article className="prose dark:prose-invert prose-zinc max-w-none text-left">
                    {getArticleContent(slug)}
                </article>
            </div>
        </div>
    );
}
