"use client";

import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CardFeatureProps {
    icon: LucideIcon;
    title: string;
    description: string;
    iconColor: string;
    index: number;
}

const CardFeature = ({
    icon: Icon,
    title,
    description,
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
            <div className={`relative h-full overflow-hidden bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl rounded-[2rem] p-8 border border-gray-200/50 dark:border-white/10 shadow-sm hover:border-gray-400 dark:hover:border-gray-500 transition-all duration-500`}>
                <div className={`w-14 h-14 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center mb-8 ${iconColor} border border-gray-200/50 dark:border-white/10 transition-transform duration-500`}>
                    <Icon className="w-7 h-7" />
                </div>

                <h3 className="text-xl font-black text-gray-900 dark:text-white mb-4 group-hover:text-gray-600 dark:group-hover:text-gray-300 transition-colors tracking-tight leading-tight">
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
