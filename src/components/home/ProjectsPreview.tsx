"use client";

import { motion } from 'framer-motion';
import Image from 'next/image';
import { profileData } from '../../data/profileData';

const ProjectsPreview = () => {
    const projects = profileData.projects || [];

    return (
        <section className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden border-t border-gray-100 dark:border-white/5">
            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-500/5 blur-[120px] rounded-full translate-x-1/2"></div>
                <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full -translate-x-1/2"></div>
            </div>

        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        >
            {/* Centered Section Header */}
            <div className="text-center mb-20">
                <motion.div
                    initial={{ opacity: 0, y: 15 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                >
                    <span className="text-gray-450 dark:text-gray-500 font-bold tracking-[0.25em] uppercase text-xs mb-3 block">
                        PORTFOLIO
                    </span>
                    <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
                        Featured <span className="text-primary-500 dark:text-primary-400 lowercase">projects.</span>
                    </h2>
                </motion.div>
            </div>

            {/* Premium 3-Column Grid Layout */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-12">
                {projects.map((project: any, index: number) => (
                    <motion.a
                        key={project.id}
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
                        whileHover={{ y: -6 }}
                        className="group block"
                    >
                        {/* Outer dark image container box */}
                        <div className="relative aspect-[4/3] bg-zinc-50 dark:bg-[#0c0c0c] border border-gray-250/20 dark:border-white/5 p-4 rounded-[2rem] group-hover:border-primary-500/35 transition-all duration-300 shadow-xl overflow-hidden flex items-center justify-center">
                            {/* Visual mockup screenshot */}
                            <Image
                                src={project.image}
                                alt={`${project.title} - Custom Web Design & Engineering project by Muhammed Ajmal P`}
                                fill
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                className="w-full h-full object-cover rounded-2xl group-hover:scale-[1.02] transition-transform duration-500 shadow-md"
                            />
                        </div>

                        {/* Title and description underneath */}
                        <div className="mt-5 px-1 text-left">
                            <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors leading-tight tracking-tight">
                                {project.title}
                            </h3>
                            <p className="text-sm sm:text-base text-gray-600 dark:text-zinc-400 leading-relaxed font-medium line-clamp-2">
                                {project.description}
                            </p>
                        </div>
                    </motion.a>
                ))}
            </div>
        </motion.div>
        </section>
    );
};

export default ProjectsPreview;
