import { motion } from 'framer-motion';
import { Calendar, MapPin, GraduationCap } from 'lucide-react';
import { profileData } from '../../data/profileData';

const EducationPreview = () => {
    return (
        <section className="py-20 bg-gray-50 dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm">Learning Path</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white">
                        Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Background</span>
                    </h2>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-8 md:left-1/2 top-4 bottom-4 w-0.5 bg-gradient-to-b from-primary-500/0 via-primary-500/20 to-primary-500/0 md:-translate-x-1/2"></div>

                    <div className="space-y-12">
                        {profileData.education.map((edu: any, index: number) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row gap-8 relative ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-8 md:left-1/2 top-0 w-4 h-4 rounded-full bg-white dark:bg-gray-900 border-4 border-primary-500 shadow-[0_0_0_4px_rgba(168,85,247,0.1)] z-20 -translate-x-1/2 md:-translate-x-1/2 mt-6"></div>

                                {/* Content Card */}
                                <div className={`flex-1 w-full md:w-[calc(50%-2rem)] pl-20 md:pl-0 ${index % 2 === 0 ? 'md:pr-10 text-left' : 'md:pl-10 text-left'}`}>
                                    <div className="group relative bg-white dark:bg-gray-800 rounded-2xl p-6 md:p-8 hover:shadow-xl hover:shadow-primary-500/5 transition-all duration-300 border border-gray-100 dark:border-gray-700/50 hover:border-primary-500/20 dark:hover:border-primary-500/20">

                                        <div className="flex items-center gap-3 mb-4">
                                            <div className="p-2 bg-primary-50 dark:bg-primary-900/10 rounded-lg text-primary-600 dark:text-primary-400">
                                                <GraduationCap className="w-5 h-5" />
                                            </div>
                                            <span className="font-bold text-gray-900 dark:text-white text-lg">{edu.institution}</span>
                                        </div>

                                        <h3 className="text-xl font-bold text-gray-800 dark:text-gray-100 mb-3">{edu.degree}</h3>

                                        <div className="flex flex-wrap gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                                            <span className="flex items-center gap-1.5">
                                                <MapPin className="w-4 h-4 text-primary-500" /> {edu.location}
                                            </span>
                                            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-700/50 text-xs font-medium border border-gray-200 dark:border-gray-700">
                                                <Calendar className="w-3.5 h-3.5" /> {edu.startDate} - {edu.endDate}
                                            </span>
                                        </div>

                                        <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
                                            {edu.description}
                                        </p>
                                    </div>
                                </div>

                                {/* Spacer for the other side */}
                                <div className="hidden md:block flex-1"></div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default EducationPreview;
