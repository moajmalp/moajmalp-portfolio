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
            gradient: "from-blue-500/20 to-cyan-500/20",
            iconColor: "text-blue-400",
            borderColor: "border-blue-400/30"
        },
        {
            icon: Search,
            title: "SEO Optimization",
            description: "Improving your website's visibility on search engines to attract more organic traffic and potential customers.",
            gradient: "from-green-500/20 to-emerald-500/20",
            iconColor: "text-green-400",
            borderColor: "border-green-400/30"
        },
        {
            icon: Layout,
            title: "WordPress Solutions",
            description: "Custom WordPress theme and plugin development to create unique and manageable content management systems.",
            gradient: "from-purple-500/20 to-pink-500/20",
            iconColor: "text-purple-400",
            borderColor: "border-purple-400/30"
        },
        {
            icon: BarChart,
            title: "Digital Strategy",
            description: "Analyzing market trends and user behavior to develop effective digital strategies for business growth.",
            gradient: "from-orange-500/20 to-yellow-500/20",
            iconColor: "text-orange-400",
            borderColor: "border-orange-400/30"
        }
    ];

    const y = useTransform(scrollYProgress, [0, 1], [0, -50]);

    return (
        <section ref={containerRef} className="py-24 relative overflow-hidden">
            {/* Background Elements */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary-900/10 rounded-full blur-[100px] -z-10"></div>

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
                        Capabilities
                    </motion.span>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-4xl md:text-5xl font-bold text-white mb-6"
                    >
                        What I <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-purple-500">Do Best</span>
                    </motion.h2>
                    <div className="w-24 h-1.5 bg-gradient-to-r from-primary-400 to-purple-500 mx-auto rounded-full"></div>
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
