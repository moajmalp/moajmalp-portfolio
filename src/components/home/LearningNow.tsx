"use client";

import { motion } from 'framer-motion';
import { Sparkles, GraduationCap } from 'lucide-react';

const LearningNow = () => {
    const learningItems = [
        { name: "Advanced Next.js", color: "from-blue-500 to-cyan-500" },
        { name: "TypeScript & Full-Stack Patterns", color: "from-purple-500 to-indigo-500" },
        { name: "Cloud Deployment & Vercel", color: "from-pink-500 to-rose-500" },
        { name: "AI Tools for Developers", color: "from-orange-500 to-amber-500" }
    ];

    return (
        <section className="py-24 bg-white dark:bg-[#050505] overflow-hidden relative border-t border-gray-100 dark:border-white/5">
            {/* Background elements */}
            <div className="absolute top-0 right-0 w-full h-full bg-[radial-gradient(circle_at_70%_50%,rgba(124,58,237,0.03),transparent_50%)]"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary-100/50 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-black uppercase tracking-widest mb-6"
                >
                    <Sparkles className="w-3.5 h-3.5" />
                    Personal Growth
                </motion.div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-16"
                >
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight">
                        Currently <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500">Learning</span>
                    </h2>
                    <p className="text-gray-500 dark:text-gray-400 text-sm md:text-base max-w-2xl mx-auto font-medium">
                        I continuously upgrade my skills to build faster, smarter, and more reliable software.
                    </p>
                </motion.div>

                <div className="flex flex-wrap justify-center gap-6 mb-12">
                    {learningItems.map((item, index) => (
                        <motion.div
                            key={item.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                            whileHover={{ y: -8, scale: 1.05 }}
                            className="group relative"
                        >
                            <div className={`absolute -inset-1 bg-gradient-to-r ${item.color} rounded-3xl blur-lg opacity-0 group-hover:opacity-25 transition duration-500`}></div>
                            <div className="relative flex items-center gap-4 px-8 py-5 bg-white dark:bg-white/[0.03] backdrop-blur-xl rounded-[2rem] border border-gray-200/50 dark:border-white/10 shadow-xl shadow-black/5 group-hover:border-primary-500/50 transition-all duration-300">
                                <div className={`w-3 h-3 rounded-full bg-gradient-to-r ${item.color}`}></div>
                                <span className="text-gray-900 dark:text-white font-black text-base">
                                    {item.name}
                                </span>
                            </div>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.6 }}
                    className="flex flex-col items-center"
                >
                    <div className="w-12 h-12 bg-gray-100 dark:bg-white/5 rounded-2xl flex items-center justify-center mb-6 text-gray-400 dark:text-gray-600">
                        <GraduationCap className="w-6 h-6" />
                    </div>
                    <div className="h-px w-24 bg-gradient-to-r from-transparent via-gray-300 dark:via-white/10 to-transparent"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default LearningNow;
