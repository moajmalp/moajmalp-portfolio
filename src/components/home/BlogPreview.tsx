"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar, Tag, Clock } from 'lucide-react';
import { profileData } from '../../data/profileData';

const BlogPreview = () => {
    const previewBlogs = profileData.blogs.slice(0, 2);

    return (
        <section className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden border-t border-gray-100 dark:border-white/5">
            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/5 blur-[120px] rounded-full -translate-x-1/2"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full translate-y-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="flex flex-col md:flex-row justify-between items-end mb-20">
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="max-w-2xl"
                    >
                        <span className="text-primary-600 dark:text-primary-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block underline decoration-primary-500/30 underline-offset-8">
                            Blog & Insights
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                            Latest <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500">Perspectives</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium leading-relaxed">
                            Exploring the intersection of technology, design, and strategic digital growth.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="mt-8 md:mt-0"
                    >
                        <Link
                            href="/blog"
                            className="group flex items-center gap-2 text-primary-600 dark:text-primary-400 font-black text-sm uppercase tracking-widest hover:text-primary-700 dark:hover:text-primary-300 transition-all border-b-2 border-primary-500/20 pb-1"
                        >
                            <span>View All Articles</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-2 gap-10">
                    {previewBlogs.map((blog: any, index: number) => (
                        <motion.article
                            key={blog.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.15 }}
                            className="group relative h-full"
                        >
                            <div className="absolute -inset-2 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-[3rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

                            <div className="relative h-full flex flex-col bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl rounded-[3rem] overflow-hidden border border-gray-200/50 dark:border-white/10 shadow-2xl shadow-black/5 hover:border-primary-500/30 transition-all duration-500">
                                <div className="relative h-72 lg:h-80 overflow-hidden">
                                    <img
                                        src={blog.image}
                                        alt={blog.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-1000"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent"></div>
                                    <div className="absolute top-6 left-6 z-20 bg-white/90 dark:bg-black/80 backdrop-blur-xl px-4 py-2 rounded-2xl text-[10px] font-black text-gray-900 dark:text-gray-100 uppercase tracking-widest flex items-center gap-2 shadow-xl">
                                        <Calendar className="w-3.5 h-3.5 text-primary-500" />
                                        {blog.date}
                                    </div>
                                </div>

                                <div className="p-10 flex-1 flex flex-col">
                                    <div className="flex flex-wrap gap-2 mb-6">
                                        {blog.tags.map((tag: string) => (
                                            <span key={tag} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-500/5 border border-primary-500/10 text-[10px] font-black text-primary-600 dark:text-primary-400 uppercase tracking-widest">
                                                <Tag className="w-3 h-3" />
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    <h3 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-6 group-hover:text-primary-500 transition-colors leading-tight tracking-tight">
                                        <Link href={blog.url} className="block">
                                            {blog.title}
                                        </Link>
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 text-base mb-10 line-clamp-2 leading-relaxed font-medium">
                                        {blog.excerpt}
                                    </p>

                                    <div className="mt-auto pt-8 border-t border-gray-100 dark:border-white/5 flex items-center justify-between">
                                        <Link
                                            href={blog.url}
                                            className="inline-flex items-center gap-2 text-xs font-black text-gray-900 dark:text-white group-hover:text-primary-500 transition-colors uppercase tracking-[0.2em]"
                                        >
                                            Read Article <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        </Link>
                                        <div className="flex items-center gap-2 text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase">
                                            <Clock className="w-3 h-3" />
                                            5 min read
                                        </div>
                                    </div>
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
