"use client";

import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Code2, Search, BarChart, Layout } from 'lucide-react';
import CardFeature from '../common/CardFeature';

const WhatIDo = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const services = [
        {
            icon: Code2,
            title: "Web Development",
            description: "Building responsive, fast, and secure websites tailored to your specific business needs using modern technologies.",
            gradient: "from-gray-500/10 to-gray-400/10",
            iconColor: "text-gray-900 dark:text-gray-100"
        },
        {
            icon: Search,
            title: "SEO Optimization",
            description: "Improving your website's visibility on search engines to attract more organic traffic and potential customers.",
            gradient: "from-gray-500/10 to-gray-400/10",
            iconColor: "text-gray-900 dark:text-gray-100"
        },
        {
            icon: Layout,
            title: "Full-Stack Development",
            description: "End-to-end web development using React, Next.js, Python, PHP, and modern best practices to deliver high-performance applications.",
            gradient: "from-gray-500/10 to-gray-400/10",
            iconColor: "text-gray-900 dark:text-gray-100"
        },
        {
            icon: BarChart,
            title: "Digital Strategy",
            description: "Analyzing market trends and user behavior to develop effective digital strategies for business growth.",
            gradient: "from-gray-500/10 to-gray-400/10",
            iconColor: "text-gray-900 dark:text-gray-100"
        }
    ];

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section ref={containerRef} className="py-24 relative overflow-hidden">
            {/* Background Elements */}

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    style={{ y }}
                    className="text-center mb-16"
                >
                    <motion.span
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-primary-400 font-bold tracking-wider uppercase text-sm mb-2 block"
                    >
                        Services
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-6 tracking-tight"
                    >
                        What <span>I do.</span>
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-gray-300 dark:bg-gray-700 mx-auto rounded-full"></div>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <CardFeature
                            key={service.title}
                            {...service}
                            index={index}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhatIDo;
