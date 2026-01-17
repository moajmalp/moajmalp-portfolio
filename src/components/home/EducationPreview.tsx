"use client";

import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap, ChevronRight } from 'lucide-react';
import { profileData } from '../../data/profileData';

const EducationPreview = () => {
    return (
        <section className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden border-t border-gray-100 dark:border-white/5">
            {/* Mesh Gradient Background */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary-500/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/4 right-0 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-primary-600 dark:text-primary-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Learning Journey</span>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
                        Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500">History</span>
                    </h2>
                </motion.div>

                <div className="relative max-w-5xl mx-auto">
                    {/* Glowing Central Line */}
                    <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-gray-200 dark:via-white/10 to-transparent md:-translate-x-1/2 overflow-hidden">
                        <motion.div
                            initial={{ y: "-100%" }}
                            whileInView={{ y: "100%" }}
                            viewport={{ once: true }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                            className="absolute top-0 left-0 w-full h-40 bg-gradient-to-b from-transparent via-primary-500 to-transparent"
                        />
                    </div>

                    <div className="space-y-16">
                        {profileData.education.map((edu: any, index: number) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                                className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-8 md:left-1/2 top-0 w-12 h-12 -translate-x-1/2 z-20 mt-6 flex items-center justify-center">
                                    <div className="absolute inset-0 bg-primary-500/20 rounded-2xl blur-lg animate-pulse"></div>
                                    <div className="relative w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-4 border-primary-500 shadow-xl"></div>
                                </div>

                                {/* Content Side */}
                                <div className={`flex-1 pl-24 md:pl-0 ${index % 2 === 0 ? 'md:pr-20' : 'md:pl-20'}`}>
                                    <div className="group relative">
                                        {/* Hover Glow */}
                                        <div className="absolute -inset-1 bg-gradient-to-r from-primary-500 to-purple-500 rounded-[2.5rem] blur-xl opacity-0 group-hover:opacity-10 transition duration-700"></div>

                                        <div className="relative bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl p-8 md:p-10 rounded-[2.5rem] border border-gray-200/50 dark:border-white/10 shadow-2xl shadow-black/5 hover:border-primary-500/30 transition-all duration-500">
                                            <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
                                                <div className="flex items-center gap-4">
                                                    <div className="w-12 h-12 bg-primary-500/10 rounded-2xl flex items-center justify-center text-primary-500">
                                                        <GraduationCap className="w-6 h-6" />
                                                    </div>
                                                    <div>
                                                        <h3 className="text-lg font-black text-gray-900 dark:text-white leading-tight">
                                                            {edu.institution}
                                                        </h3>
                                                        <div className="flex items-center gap-1.5 text-gray-500 dark:text-gray-400 text-xs font-bold uppercase tracking-widest mt-1">
                                                            <MapPin className="w-3 h-3" />
                                                            {edu.location}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-gray-100 dark:bg-white/5 border border-gray-200 dark:border-white/10 text-xs font-black text-gray-700 dark:text-gray-300">
                                                    <Calendar className="w-3.5 h-3.5 text-primary-500" />
                                                    {edu.startDate} - {edu.endDate}
                                                </div>
                                            </div>

                                            <div className="space-y-4">
                                                <h4 className="text-xl font-bold text-gray-800 dark:text-gray-100 flex items-center gap-2">
                                                    <ChevronRight className="w-5 h-5 text-primary-500 opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all" />
                                                    {edu.degree}
                                                </h4>
                                                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-medium">
                                                    {edu.description}
                                                </p>
                                            </div>

                                            {/* Corner Decoration */}
                                            <div className="absolute bottom-6 right-6 opacity-0 group-hover:opacity-10 transition-opacity duration-500">
                                                <GraduationCap className="w-20 h-20 text-primary-500" />
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Spacer for Timeline alignment */}
                                <div className="hidden md:block flex-1"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Final Quote/Impact */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-24 text-center"
                >
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-200 dark:via-white/10 to-transparent mx-auto mb-8"></div>
                    <p className="text-gray-400 dark:text-gray-500 font-bold tracking-[0.3em] uppercase text-xs">
                        Education &middot; Innovation &middot; Excellence
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default EducationPreview;
