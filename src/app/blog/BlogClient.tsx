"use client";

import { motion } from 'framer-motion';
import { Calendar, User, ArrowRight, Tag } from 'lucide-react';
import { profileData } from '../../data/profileData';
import PageHeader from '../../components/common/PageHeader';

export default function Blog() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-black">
            <PageHeader
                title="Latest Insights"
                subtitle="Thoughts, tutorials, and updates on web development and SEO."
                description="Thoughts on Web Development, SEO strategies, and the future of digital technology."
            />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <div className="space-y-12">
                    {profileData.blogs.map((blog: any, index: number) => (
                        <motion.article
                            key={blog.id}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.15 }}
                            className="group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:border-primary-500/30 dark:hover:border-primary-500/30 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary-500/5 flex flex-col md:flex-row h-full md:h-72"
                        >
                            {/* Image */}
                            <div className="md:w-2/5 relative overflow-hidden h-48 md:h-full">
                                <div className="absolute inset-0 bg-primary-600/10 group-hover:bg-primary-600/0 transition-colors z-10 mix-blend-overlay"></div>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out"
                                />

                                {/* Date Badge */}
                                <div className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-gray-900 dark:text-gray-100 flex items-center gap-1 shadow-lg">
                                    <Calendar className="w-3 h-3 text-primary-500" />
                                    {blog.date}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-8 md:w-3/5 flex flex-col justify-center relative">
                                {/* Decoration */}
                                <div className="absolute right-0 top-0 w-32 h-32 bg-gradient-to-br from-primary-500/5 to-transparent rounded-bl-full -z-10"></div>

                                <div className="flex items-center gap-4 text-xs font-medium text-gray-500 dark:text-gray-400 mb-4">
                                    <span className="flex items-center gap-1.5 px-2 py-1 bg-gray-100 dark:bg-gray-800 rounded-md">
                                        <User className="w-3 h-3" />
                                        {profileData.personal.shortName}
                                    </span>
                                    <div className="flex gap-2">
                                        {blog.tags.slice(0, 2).map((tag: string) => (
                                            <span key={tag} className="flex items-center gap-1 text-primary-600 dark:text-primary-400">
                                                <Tag className="w-3 h-3" />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>

                                <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-tight">
                                    <a href={blog.url} className="focus:outline-none focus:underline decoration-primary-500 decoration-2 underline-offset-4">
                                        <span className="absolute inset-0 z-0"></span>
                                        {blog.title}
                                    </a>
                                </h2>

                                <p className="text-gray-600 dark:text-gray-300 text-sm md:text-base mb-6 line-clamp-2 leading-relaxed">
                                    {blog.excerpt}
                                </p>

                                <div className="mt-auto flex items-center text-sm font-bold text-primary-600 dark:text-primary-500 group-hover:gap-2 transition-all relative z-10">
                                    Read Article <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </div>
    );
}
