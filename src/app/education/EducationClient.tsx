"use client";

import { motion } from 'framer-motion';
import { GraduationCap, Calendar, MapPin, Award } from 'lucide-react';
import { profileData } from '../../data/profileData';
import PageHeader from '../../components/common/PageHeader';

export default function Education() {
    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-slate-900">
            <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <PageHeader
                    subtitle="EDUCATION"
                    title="Academic Background"
                    highlight="Background"
                    description="My educational journey and academic achievements."
                />

                {/* Step Timeline */}
                <div className="relative mt-12">
                    {profileData.education.map((edu, index) => (
                        <motion.div
                            key={edu.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                            className="relative mb-12 last:mb-0"
                        >
                            <div className="flex flex-col md:flex-row gap-8 items-start">
                                {/* Step Number & Line */}
                                <div className="flex flex-col items-center">
                                    <motion.div
                                        whileHover={{ scale: 1.2, rotate: 360 }}
                                        transition={{ duration: 0.6 }}
                                        className="w-16 h-16 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center border-4 border-gray-50 dark:border-slate-900 shadow-lg z-10"
                                    >
                                        <span className="text-white font-bold text-xl">{index + 1}</span>
                                    </motion.div>
                                    {index < profileData.education.length - 1 && (
                                        <div className="w-0.5 h-full bg-gradient-to-b from-primary-500 to-primary-600 mt-4 min-h-[100px]"></div>
                                    )}
                                </div>

                                {/* Content Card */}
                                <motion.div
                                    whileHover={{ y: -10, scale: 1.02 }}
                                    className="flex-1 bg-white dark:bg-gray-900 rounded-3xl p-6 border border-gray-200 dark:border-gray-800 shadow-xl hover:shadow-2xl transition-all duration-300 group relative overflow-hidden"
                                >
                                    {/* Shine Effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent animate-shine" />

                                    {/* Logo Placeholder */}
                                    <div className="flex items-start gap-4 mb-4">
                                        <div className="w-16 h-16 bg-gradient-to-br from-primary-500/10 to-purple-500/10 rounded-xl flex items-center justify-center border border-primary-500/20 group-hover:border-primary-500/40 transition-colors flex-shrink-0">
                                            <GraduationCap className="w-8 h-8 text-primary-500 dark:text-primary-400" />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-1 group-hover:text-primary-500 dark:group-hover:text-primary-400 transition-colors">
                                                {edu.degree}
                                            </h3>
                                            <p className="text-primary-500 dark:text-primary-400 font-bold mb-2">
                                                {edu.institution}
                                            </p>
                                            {edu.current && (
                                                <span className="inline-block px-3 py-1 bg-primary-500/10 text-primary-500 dark:text-primary-400 rounded-full text-xs font-bold border border-primary-500/20">
                                                    Ongoing
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    <div className="space-y-3 text-sm text-gray-600 dark:text-gray-400 mb-4 font-semibold">
                                        <div className="flex items-center gap-2">
                                            <Calendar className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                                            <span>
                                                {edu.startDate} - {edu.current ? 'Present' : edu.endDate}
                                            </span>
                                        </div>
                                        <div className="flex items-center gap-2">
                                            <MapPin className="w-4 h-4 text-primary-500 dark:text-primary-400" />
                                            <span>{edu.location}</span>
                                        </div>
                                    </div>

                                    {edu.description && (
                                        <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-semibold">
                                            {edu.description}
                                        </p>
                                    )}

                                    {/* Award Badge for Completed */}
                                    {!edu.current && (
                                        <div className="mt-4 flex items-center gap-2 text-primary-500 dark:text-primary-400">
                                            <Award className="w-4 h-4" />
                                            <span className="text-sm font-bold">Completed</span>
                                        </div>
                                    )}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    );
}
