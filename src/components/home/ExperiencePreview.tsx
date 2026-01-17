"use client";

import { motion } from 'framer-motion';
import { Briefcase, Calendar, ChevronRight } from 'lucide-react';
import { profileData } from '../../data/profileData';
import PreviewSectionButton from '../common/PreviewSectionButton';

const ExperiencePreview = () => {
    // Take only the latest 3 experiences
    const latestExperience = profileData.experience.slice(0, 3);

    return (
        <section className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden border-t border-gray-100 dark:border-white/5">
            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/5 blur-[120px] rounded-full -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full translate-y-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-primary-600 dark:text-primary-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Professional Journey</span>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
                        Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500">Experience</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {latestExperience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                            className="group relative"
                        >
                            {/* Hover Glow */}
                            <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-10 transition duration-700"></div>

                            <div className="relative h-full bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl p-10 rounded-[2.5rem] border border-gray-200/50 dark:border-white/10 shadow-2xl shadow-black/5 hover:border-primary-500/30 transition-all duration-500 flex flex-col">
                                <div className="absolute top-8 right-8 p-4 opacity-[0.03] group-hover:opacity-10 transition-opacity duration-500 pointer-events-none">
                                    <Briefcase className="w-24 h-24 text-primary-500" />
                                </div>

                                <div className="relative z-10 flex flex-col h-full">
                                    <div className="w-14 h-14 bg-primary-500/10 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 border border-primary-500/20">
                                        <Briefcase className="w-7 h-7 text-primary-500" />
                                    </div>

                                    <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-[10px] font-black text-gray-700 dark:text-gray-300 uppercase tracking-widest mb-6 w-fit">
                                        <Calendar className="w-3.5 h-3.5 text-primary-500" />
                                        {exp.startDate} - {exp.current ? 'Present' : exp.endDate}
                                    </div>

                                    <h3 className="text-xl font-black text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors leading-tight tracking-tight">
                                        {exp.title}
                                    </h3>
                                    <p className="text-primary-600 dark:text-primary-400 text-sm font-bold tracking-tight mb-6">
                                        {exp.company}
                                    </p>

                                    <div className="mt-auto">
                                        <p className="text-gray-600 dark:text-gray-400 text-base line-clamp-3 leading-relaxed font-medium mb-8">
                                            {exp.responsibilities[0]}
                                        </p>

                                        <div className="flex items-center gap-2 text-primary-500 font-black text-xs uppercase tracking-widest group/link">
                                            Role Details
                                            <ChevronRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <div className="flex justify-center">
                    <PreviewSectionButton to="/experience" label="Explore All Experience" />
                </div>
            </div>
        </section>
    );
};

export default ExperiencePreview;
