"use client";

import { motion } from 'framer-motion';
import { Lightbulb, Shield, Rocket } from 'lucide-react';

const WorkPhilosophy = () => {
    const philosophies = [
        {
            title: "Understand the Problem",
            icon: Lightbulb,
            description: "I start by deeply understanding user needs, business goals, and real-world constraints before writing a single line of code.",
            color: "from-blue-500/20 to-cyan-500/20",
            iconColor: "text-blue-500"
        },
        {
            title: "Build with Quality",
            icon: Shield,
            description: "I write clean, maintainable, and scalable code with performance and best practices in mind.",
            color: "from-purple-500/20 to-pink-500/20",
            iconColor: "text-purple-500"
        },
        {
            title: "Deliver Impact",
            icon: Rocket,
            description: "I focus on shipping reliable solutions that create measurable value for users and businesses.",
            color: "from-orange-500/20 to-yellow-500/20",
            iconColor: "text-orange-500"
        }
    ];

    return (
        <section className="py-24 bg-white dark:bg-[#050505] overflow-hidden relative border-t border-gray-100 dark:border-white/5">
            {/* Background decoration */}
            <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-500/10 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-500/10 blur-[120px] rounded-full translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <span className="text-primary-600 dark:text-primary-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Our Approach</span>
                    <h2 className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white tracking-tight">
                        My Work <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500">Philosophy</span>
                    </h2>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8 mb-16">
                    {philosophies.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="group relative"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500`}></div>
                            <div className="relative bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl p-10 rounded-[2.5rem] border border-gray-200/50 dark:border-white/10 shadow-2xl shadow-black/5 hover:border-primary-500/50 transition-all duration-500 h-full flex flex-col items-center text-center">
                                <div className="w-20 h-20 bg-gray-100 dark:bg-white/5 rounded-3xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 relative">
                                    <div className={`absolute inset-0 bg-current opacity-10 blur-xl ${item.iconColor}`}></div>
                                    <item.icon className={`w-10 h-10 ${item.iconColor} relative z-10`} />
                                </div>
                                <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
                                    {item.title}
                                </h3>
                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-medium">
                                    {item.description}
                                </p>
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
                    <div className="h-px w-32 bg-gradient-to-r from-transparent via-gray-300 dark:via-white/20 to-transparent mb-8"></div>
                    <p className="text-gray-500 dark:text-gray-400 font-bold tracking-widest uppercase text-sm">
                        "Thoughtful planning. Clean execution. Real impact."
                    </p>
                </motion.div>
            </div>
        </section>
    );
};

export default WorkPhilosophy;
