"use client";

import { motion } from 'framer-motion';
import { profileData } from '../../data/profileData';
import {
  Code, Layers, Database, Globe,
  TrendingUp, FileText, Settings,
  CheckCircle, Lightbulb, Users, Zap
} from 'lucide-react';

// Create a mapping of icon names string to Lucide components
const iconMap: Record<string, any> = {
  Code, Layers, Database, Globe,
  TrendingUp, FileText, Settings,
  CheckCircle, Lightbulb, Users, Zap
};

const TechStackSlider = () => {
  const techStack = [...profileData.skills.technical];

  return (
    <section className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden border-t border-gray-100 dark:border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        >
          <span className="text-primary-600 dark:text-primary-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block">Skills Ecosystem</span>
          <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
            Technologies <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500">& Tools</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden py-10">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-white dark:from-[#050505] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-white dark:from-[#050505] to-transparent z-10 pointer-events-none"></div>

        <div className="flex w-max">
          <motion.div
            className="flex gap-8 px-4"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              repeat: Infinity,
              duration: 30,
              ease: "linear"
            }}
          >
            {/* Render list enough times for smooth loop */}
            {[...techStack, ...techStack, ...techStack, ...techStack].map((tech, index) => {
              const Icon = iconMap[tech.icon] || Code;
              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="group flex flex-col items-center justify-center p-8 bg-gray-50 dark:bg-white/[0.03] backdrop-blur-xl rounded-[2rem] border border-gray-100 dark:border-white/10 hover:border-primary-500/30 transition-all duration-500 w-36 h-36 md:w-44 md:h-44 shrink-0 shadow-lg shadow-black/5"
                >
                  <div className="mb-4 transform group-hover:scale-110 group-hover:rotate-6 transition-transform duration-500 p-4 bg-white dark:bg-white/5 rounded-2xl shadow-sm">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-primary-500" />
                  </div>
                  <span className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest text-center">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSlider;
