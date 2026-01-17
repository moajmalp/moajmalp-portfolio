"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CardFeatureProps {
    icon: LucideIcon;
    title: string;
    description: string;
    gradient: string;
    iconColor: string;
    index: number;
}

const CardFeature = ({
    icon: Icon,
    title,
    description,
    gradient,
    iconColor,
    index
}: CardFeatureProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group relative h-full"
        >
            {/* Hover Glow */}
            <div className={`absolute -inset-1 bg-gradient-to-r ${gradient} rounded-[2rem] blur-xl opacity-0 group-hover:opacity-10 transition duration-700`}></div>

            <div className={`relative h-full overflow-hidden bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl rounded-[2rem] p-8 border border-gray-200/50 dark:border-white/10 shadow-2xl shadow-black/5 hover:border-primary-500/30 transition-all duration-500`}>
                <div className={`absolute top-0 right-0 p-4 opacity-[0.05] bg-gradient-to-br ${gradient} blur-2xl w-32 h-32 rounded-full -mr-16 -mt-16 transition-opacity group-hover:opacity-20`}></div>

                <div className={`w-14 h-14 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center mb-8 ${iconColor} border border-gray-200/50 dark:border-white/10 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-xl shadow-black/5`}>
                    <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-primary-500 transition-colors tracking-tight leading-tight">
                    {title}
                </h3>

                <p className="text-gray-600 dark:text-gray-400 text-base leading-relaxed font-bold">
                    {description}
                </p>
            </div>
        </motion.div>
    );
};

export default CardFeature;
