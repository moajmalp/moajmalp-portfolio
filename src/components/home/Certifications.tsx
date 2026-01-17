"use client";

import { motion } from 'framer-motion';
import { Award, CheckCircle2, TrendingUp, Code } from 'lucide-react';
import { profileData } from '../../data/profileData';

const iconMap: Record<string, any> = {
    Award, CheckCircle2, TrendingUp, Code, CheckDecagram: CheckCircle2
};

const Certifications = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-bold mb-6 text-white">
                        Certifications & <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-primary-400">Awards</span>
                    </h2>
                    <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                        Professional recognitions and technical certifications.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {profileData.certifications.map((cert: any, index: number) => {
                        const Icon = iconMap[cert.badge] || Award;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-sidebar-primary/50"
                            >
                                <div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-primary-500/5 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity"></div>

                                <div className="relative z-10">
                                    <div className="w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                        <Icon className="w-6 h-6 text-purple-400 group-hover:text-primary-400 transition-colors" />
                                    </div>

                                    <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                                        {cert.title}
                                    </h3>

                                    <div className="flex justify-between items-end mt-4">
                                        <span className="text-sm text-gray-400 font-medium bg-white/5 px-2 py-1 rounded-lg">
                                            {cert.issuer}
                                        </span>
                                        <span className="text-xs font-bold text-gray-500">
                                            {cert.date}
                                        </span>
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
