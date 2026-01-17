"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github, Sparkles } from 'lucide-react';
import { profileData } from '../../data/profileData';

const ProjectsPreview = () => {
    const projects = profileData.projects || [];
    const previewProjects = projects.slice(0, 3);

    return (
        <section className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden border-t border-gray-100 dark:border-white/5">
            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-500/5 blur-[120px] rounded-full translate-x-1/2"></div>
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full -translate-x-1/2"></div>
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
                            Portfolio
                        </span>
                        <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500">Projects</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium leading-relaxed">
                            A curated selection of my most impactful work, from scalable web platforms to immersive digital experiences.
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
                            href="/projects"
                            className="group flex items-center gap-3 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-8 py-4 rounded-full font-black text-sm uppercase tracking-widest hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl shadow-black/10"
                        >
                            <span>Explore All</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {previewProjects.map((project: any, index: number) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                            className="group relative h-full"
                        >
                            {/* Hover Shadow Glow */}
                            <div className="absolute -inset-2 bg-gradient-to-r from-primary-500/20 to-purple-500/20 rounded-[2.5rem] blur-2xl opacity-0 group-hover:opacity-100 transition duration-700"></div>

                            <div className="relative h-full bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl rounded-[2.5rem] border border-gray-200/50 dark:border-white/10 shadow-2xl shadow-black/5 hover:border-primary-500/30 overflow-hidden transition-all duration-500 flex flex-col">
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                    />

                                    {/* Action Buttons Overlay */}
                                    <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 z-20">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-4 bg-white text-gray-900 rounded-full hover:scale-110 active:scale-90 transition-transform shadow-2xl"
                                        >
                                            <ExternalLink className="w-6 h-6" />
                                        </a>
                                        <a
                                            href={project.codeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="p-4 bg-gray-900 text-white rounded-full hover:scale-110 active:scale-90 transition-transform shadow-2xl"
                                        >
                                            <Github className="w-6 h-6" />
                                        </a>
                                    </div>

                                    {/* Sparkle Decoration */}
                                    <div className="absolute top-4 right-4 z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                                        <div className="bg-primary-500 text-white p-2 rounded-xl shadow-lg">
                                            <Sparkles className="w-4 h-4" />
                                        </div>
                                    </div>
                                </div>

                                <div className="p-8 md:p-10 flex flex-col flex-1">
                                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-primary-500 transition-colors leading-tight tracking-tight">
                                        {project.title}
                                    </h3>

                                    <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-medium mb-8 line-clamp-2">
                                        {project.description}
                                    </p>

                                    <div className="mt-auto flex flex-wrap gap-2">
                                        {project.tags.slice(0, 3).map((tag: string) => (
                                            <span
                                                key={tag}
                                                className="px-4 py-1.5 bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-gray-600 dark:text-gray-300 text-[10px] font-black uppercase tracking-widest rounded-full"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPreview;
