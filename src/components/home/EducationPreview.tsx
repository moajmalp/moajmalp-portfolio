import { motion } from 'framer-motion';
import { Briefcase, Calendar, MapPin, GraduationCap } from 'lucide-react';
import { profileData } from '../../data/profileData';

const EducationPreview = () => {
    return (
        <section className="py-20 relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm">Learning Path</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2 text-white">
                        Academic <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-400">Background</span>
                    </h2>
                </motion.div>

                <div className="relative max-w-4xl mx-auto">
                    {/* Central Line */}
                    <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary-500/50 via-purple-500/50 to-transparent"></div>

                    <div className="space-y-12">
                        {profileData.education.map((edu: any, index: number) => (
                            <motion.div
                                key={edu.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className={`flex flex-col md:flex-row gap-8 relative items-center ${index % 2 === 0 ? 'md:flex-row-reverse' : ''
                                    }`}
                            >
                                {/* Timeline Node */}
                                <div className="absolute left-0 md:left-1/2 -ml-[11px] w-6 h-6 rounded-full bg-gray-900 border-4 border-primary-500 shadow-[0_0_10px_rgba(168,85,247,0.5)] z-20"></div>

                                {/* Content Card */}
                                <div className="flex-1 w-full md:w-[calc(50%-2rem)] pl-10 md:pl-0">
                                    <div className="group relative bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-6 hover:bg-white/10 transition-all duration-300 hover:border-sidebar-primary/50">
                                        <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>

                                        <div className="relative z-10 text-left">
                                            <div className="flex items-center gap-3 mb-2 text-primary-400">
                                                <GraduationCap className="w-5 h-5" />
                                                <span className="font-bold">{edu.institution}</span>
                                            </div>
                                            <h3 className="text-xl font-bold text-white mb-2">{edu.degree}</h3>
                                            <div className="flex flex-wrap gap-4 text-sm text-gray-400 mb-4">
                                                <span className="flex items-center gap-1">
                                                    <MapPin className="w-4 h-4" /> {edu.location}
                                                </span>
                                                <span className="flex items-center gap-1 text-white bg-primary-500/20 px-2 py-0.5 rounded text-xs border border-primary-500/30">
                                                    <Calendar className="w-3 h-3" /> {edu.startDate} - {edu.endDate}
                                                </span>
                                            </div>
                                            <p className="text-gray-400 text-sm leading-relaxed">
                                                {edu.description}
                                            </p>
                                        </div>
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
