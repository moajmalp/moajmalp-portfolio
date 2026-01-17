"use client";

import { motion } from 'framer-motion';
import { Briefcase, Calendar } from 'lucide-react';
import { profileData } from '../../data/profileData';
import PreviewSectionButton from '../common/PreviewSectionButton';

const ExperiencePreview = () => {
    // Take only the latest 3 experiences
    const latestExperience = profileData.experience.slice(0, 3);

    return (
        <section className="py-20 bg-slate-900 relative overflow-hidden">
            {/* Background Gradient */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary-900/10 to-transparent pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                        Professional <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">Experience</span>
                    </h2>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-6">
                    {latestExperience.map((exp, index) => (
                        <motion.div
                            key={exp.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl p-6 hover:bg-white/10 hover:border-primary-500/30 transition-all duration-300 relative overflow-hidden"
                        >
                            <div className="absolute top-0 right-0 p-4 opacity-5 group-hover:opacity-10 transition-opacity">
                                <Briefcase className="w-24 h-24 text-primary-400" />
                            </div>

                            <div className="relative z-10">
                                <div className="w-12 h-12 bg-primary-500/20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-primary-500/30">
                                    <Briefcase className="w-6 h-6 text-primary-400" />
                                </div>

                                <div className="flex items-center gap-2 text-primary-400 text-sm font-medium mb-3">
                                    <Calendar className="w-4 h-4" />
                                    <span>{exp.startDate} - {exp.current ? 'Present' : exp.endDate}</span>
                                </div>

                                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-primary-400 transition-colors">
                                    {exp.title}
                                </h3>
                                <p className="text-gray-400 text-sm font-medium mb-4">
                                    {exp.company}
                                </p>

                                <p className="text-gray-400 text-sm line-clamp-3 leading-relaxed">
                                    {exp.responsibilities[0]}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <PreviewSectionButton to="/experience" label="View Full Experience" />
            </div>
        </section>
    );
};

export default ExperiencePreview;
