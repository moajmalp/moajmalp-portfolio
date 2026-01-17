"use client";

import { motion } from 'framer-motion';
import { Award, CheckCircle2, TrendingUp, Code, Check } from 'lucide-react';
import { profileData } from '../../data/profileData';

const iconMap: Record<string, any> = {
    Award, CheckCircle2, TrendingUp, Code, CheckDecagram: CheckCircle2
};

const Certifications = () => {
    return (
        <section className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden border-t border-gray-100 dark:border-white/5">
            {/* Background Decorative Elements */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary-500/5 blur-[120px] rounded-full -translate-x-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full translate-x-1/2 translate-y-1/2"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-center mb-20"
                >
                    <span className="text-primary-600 dark:text-primary-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block underline decoration-primary-500/30 underline-offset-8">
                        Recognition
                    </span>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
                        Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500">Awards</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base font-medium max-w-2xl mx-auto leading-relaxed">
                        Professional milestones and industry-recognized credentials that validate my expertise.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {profileData.certifications.map((cert: any, index: number) => {
                        const Icon = iconMap[cert.badge] || Award;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                                className="group relative h-full"
                            >
                                {/* Hover Gradient Backlight */}
                                <div className="absolute -inset-1 bg-gradient-to-br from-primary-500/20 to-purple-500/20 rounded-[2rem] blur-xl opacity-0 group-hover:opacity-100 transition duration-500"></div>

                                <div className="relative h-full bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl p-8 rounded-[2rem] border border-gray-200/50 dark:border-white/10 shadow-2xl shadow-black/5 hover:border-primary-500/30 transition-all duration-500 flex flex-col">
                                    <div className="w-14 h-14 bg-white dark:bg-white/5 rounded-2xl flex items-center justify-center mb-8 shadow-sm group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500">
                                        <Icon className="w-7 h-7 text-primary-500" />
                                    </div>

                                    <h3 className="text-lg font-black text-gray-900 dark:text-white mb-4 group-hover:text-primary-500 transition-colors leading-tight tracking-tight">
                                        {cert.title}
                                    </h3>

                                    <div className="mt-auto pt-6 border-t border-gray-100 dark:border-white/5 flex flex-col gap-4">
                                        <div className="flex items-center gap-2">
                                            <div className="w-1.5 h-1.5 rounded-full bg-primary-500"></div>
                                            <span className="text-xs font-black text-gray-500 dark:text-gray-400 uppercase tracking-widest">
                                                {cert.issuer}
                                            </span>
                                        </div>
                                        <div className="flex justify-between items-center">
                                            <span className="text-[10px] font-black text-primary-600 dark:text-primary-400 uppercase tracking-[0.2em] bg-primary-500/10 px-3 py-1 rounded-full">
                                                ID: {cert.id || 'VERIFIED'}
                                            </span>
                                            <span className="text-[10px] font-bold text-gray-400 dark:text-gray-500 uppercase">
                                                {cert.date}
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Certifications;
