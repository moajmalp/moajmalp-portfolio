"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight, Github, GitCommit, Layout, Star, GitBranch } from 'lucide-react';

const GitHubStats = () => {
    const [opacities, setOpacities] = useState<number[]>([]);

    useEffect(() => {
        // Generate random opacities only on the client
        const randomOpacities = [...Array(100)].map(() =>
            [0.1, 0.2, 0.4, 0.7, 1][Math.floor(Math.random() * 5)]
        );
        setOpacities(randomOpacities);
    }, []);

    const stats = [
        { label: "Public Repos", value: "15+", icon: Layout, color: "text-blue-500", bg: "bg-blue-500/10" },
        { label: "Active Contribs", value: "200+", icon: GitCommit, color: "text-purple-500", bg: "bg-purple-500/10" },
        { label: "Stars Earned", value: "45+", icon: Star, color: "text-yellow-500", bg: "bg-yellow-500/10" },
        { label: "Pull Requests", value: "80+", icon: GitBranch, color: "text-emerald-500", bg: "bg-emerald-500/10" },
    ];

    return (
        <section className="py-24 bg-gray-50 dark:bg-[#050505] relative overflow-hidden border-t border-gray-100 dark:border-white/5">
            {/* Ambient Background Glows */}
            <div className="absolute top-1/2 left-0 w-[500px] h-[500px] bg-blue-600/5 blur-[120px] rounded-full -translate-y-1/2 -translate-x-1/2 pointer-events-none"></div>
            <div className="absolute top-1/2 right-0 w-[500px] h-[500px] bg-purple-600/5 blur-[120px] rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary-600 dark:text-primary-400 font-bold tracking-[0.2em] uppercase text-xs mb-3 block">Open Source Ecosystem</span>
                    <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
                        GitHub & <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-600">Contributions</span>
                    </h2>
                </motion.div>

                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-3 gap-8">
                        {/* Contribution Chart Card */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="lg:col-span-2 bg-white/40 dark:bg-white/[0.02] backdrop-blur-2xl rounded-[2.5rem] p-8 border border-gray-200/50 dark:border-white/10 shadow-2xl shadow-black/5"
                        >
                            <div className="flex items-center justify-between mb-8">
                                <div className="flex items-center gap-4">
                                    <div className="p-3 bg-gray-900 dark:bg-white rounded-2xl">
                                        <Github className="w-6 h-6 text-white dark:text-gray-900" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 dark:text-white text-lg">Git Activity</h3>
                                        <p className="text-gray-500 dark:text-gray-400 text-sm font-medium">Last 12 months</p>
                                    </div>
                                </div>
                                <div className="px-4 py-1.5 bg-primary-100 dark:bg-primary-500/10 text-primary-600 dark:text-primary-400 text-xs font-black rounded-full uppercase tracking-wider">
                                    Live Pulse
                                </div>
                            </div>

                            <div className="grid grid-cols-10 gap-1.5 h-40">
                                {(opacities.length > 0 ? opacities : [...Array(100)].map(() => 0.05)).map((opacity, i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        transition={{ delay: i * 0.005 }}
                                        className="rounded-[3px] bg-primary-500 flex-1 hover:scale-125 hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 cursor-crosshair"
                                        style={{ opacity: opacity }}
                                    />
                                ))}
                            </div>

                            <div className="mt-6 flex justify-between items-center text-[10px] text-gray-500 dark:text-gray-400 font-bold uppercase tracking-widest">
                                <div className="flex items-center gap-6">
                                    <span>Less Active</span>
                                    <div className="flex gap-1.5">
                                        {[0.1, 0.3, 0.5, 0.8, 1].map((op, idx) => (
                                            <div key={idx} className="w-3.5 h-3.5 rounded-[2px] bg-primary-500" style={{ opacity: op }}></div>
                                        ))}
                                    </div>
                                    <span>More Active</span>
                                </div>
                            </div>
                        </motion.div>

                        {/* Stats Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {stats.map((stat, index) => (
                                <motion.div
                                    key={stat.label}
                                    initial={{ opacity: 0, x: 20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white/40 dark:bg-white/[0.02] backdrop-blur-2xl p-6 rounded-3xl border border-gray-200/50 dark:border-white/10 shadow-lg shadow-black/5 hover:border-primary-500/30 transition-all group"
                                >
                                    <div className={`w-12 h-12 ${stat.bg} rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                                        <stat.icon className={`w-6 h-6 ${stat.color}`} />
                                    </div>
                                    <p className="text-[10px] font-black text-gray-400 dark:text-gray-500 mb-1 uppercase tracking-[0.15em]">{stat.label}</p>
                                    <p className="text-2xl font-black text-gray-900 dark:text-white leading-none">{stat.value}</p>
                                </motion.div>
                            ))}
                        </div>
                    </div>

                    <div className="mt-12 flex justify-center">
                        <Link href="https://github.com/moajmalp" target="_blank" className="relative group">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                            <motion.button
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.98 }}
                                className="relative flex items-center gap-3 px-12 py-5 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-full font-black text-base transition-all duration-300 shadow-2xl"
                            >
                                <Github className="w-6 h-6" />
                                <span>Explore My Codebase</span>
                                <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform" />
                            </motion.button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GitHubStats;
