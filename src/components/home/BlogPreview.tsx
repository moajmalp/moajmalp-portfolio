"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Tag } from 'lucide-react';
import { profileData } from '../../data/profileData';

const BlogPreview = () => {
    const previewBlogs = profileData.blogs.slice(0, 2);

    return (
        <section className="py-24 bg-gray-50 dark:bg-black relative">
            {/* Decorative Lines */}
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 md:mb-0"
                    >
                        <span className="text-primary-600 dark:text-primary-400 font-bold tracking-wider uppercase text-sm mb-2 block">Blog</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Insights</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-xl text-lg">
                            Thoughts and tutorials on web development, SEO, and technology.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            href="/blog"
                            className="group inline-flex items-center space-x-2 text-primary-600 dark:text-primary-400 font-bold text-lg hover:text-primary-700 dark:hover:text-primary-300 transition-colors"
                        >
                            <span>Read All Articles</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {previewBlogs.map((blog: any, index: number) => (
                        <motion.article
                            key={blog.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.15 }}
                            whileHover={{ y: -5 }}
                            className="group flex flex-col bg-white dark:bg-gray-900 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 dark:border-gray-800"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <div className="absolute inset-0 bg-primary-900/10 group-hover:bg-primary-900/0 transition-colors z-10"></div>
                                <img
                                    src={blog.image}
                                    alt={blog.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />
                                <div className="absolute top-4 left-4 z-20 bg-white/90 dark:bg-black/80 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-gray-900 dark:text-gray-100 flex items-center gap-1 shadow-lg">
                                    <Calendar className="w-3 h-3 text-primary-500" />
                                    {blog.date}
                                </div>
                            </div>

                            <div className="p-8 flex-1 flex flex-col">
                                <div className="flex gap-2 mb-4">
                                    {blog.tags.map((tag: string) => (
                                        <span key={tag} className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary-50 dark:bg-primary-900/20 text-xs font-semibold text-primary-700 dark:text-primary-300">
                                            <Tag className="w-3 h-3" />
                                            {tag}
                                        </span>
                                    ))}
                                </div>

                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors leading-snug">
                                    <Link href={blog.url} className="block">
                                        {blog.title}
                                    </Link>
                                </h3>

                                <p className="text-gray-600 dark:text-gray-400 text-base mb-6 line-clamp-2 leading-relaxed">
                                    {blog.excerpt}
                                </p>

                                <div className="mt-auto pt-6 border-t border-gray-100 dark:border-gray-800">
                                    <Link
                                        href={blog.url}
                                        className="inline-flex items-center text-sm font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors"
                                    >
                                        Read More <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                                    </Link>
                                </div>
                            </div>
                        </motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default BlogPreview;
