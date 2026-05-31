"use client";

import { motion } from 'framer-motion';

const TechStackSlider = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden border-t border-gray-100 dark:border-white/5 text-gray-900 dark:text-white">
      {/* Architectural blueprints grid overlay for depth */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gray-400 dark:text-gray-500 font-bold tracking-[0.25em] uppercase text-xs mb-3 block">
              SKILLS
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
              Technical <span className="text-primary-500 dark:text-primary-400 lowercase">skills.</span>
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base leading-relaxed font-medium max-w-xl">
              Over the years, I have built deep expertise in custom WordPress development, speed optimization, and search engine strategies. I focus on writing high-performance, clean code, scaling custom configurations, and building optimized digital experiences that rank highly on search engines and convert visitors.
            </p>
          </motion.div>

          {/* Right Column - Visual Staggered Shapes Grid */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col gap-6 items-center lg:items-end justify-center w-full"
          >
            {/* Row 1 */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap w-full lg:justify-end">
              {/* Circle - HTML5 */}
              <motion.div
                whileHover={{ scale: 1.05, borderColor: "rgba(56, 189, 248, 0.6)" }}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-primary-500/20 dark:border-primary-500/30 bg-gray-50 dark:bg-zinc-900/60 flex items-center justify-center text-gray-800 dark:text-white font-bold text-xs sm:text-sm tracking-widest text-center shadow-lg transition-colors cursor-default"
              >
                HTML5
              </motion.div>
              {/* Rounded Box - WordPress */}
              <motion.div
                whileHover={{ scale: 1.05, borderColor: "rgba(56, 189, 248, 0.6)" }}
                className="w-36 h-24 sm:w-48 sm:h-28 rounded-2xl border border-primary-500/20 dark:border-primary-500/30 bg-gray-50 dark:bg-zinc-900/60 flex items-center justify-center text-gray-800 dark:text-white font-bold text-xs sm:text-sm tracking-widest text-center shadow-lg transition-colors cursor-default"
              >
                WORDPRESS
              </motion.div>
              {/* Circle - PHP */}
              <motion.div
                whileHover={{ scale: 1.05, borderColor: "rgba(56, 189, 248, 0.6)" }}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-full border border-primary-500/20 dark:border-primary-500/30 bg-gray-50 dark:bg-zinc-900/60 flex items-center justify-center text-gray-800 dark:text-white font-bold text-xs sm:text-sm tracking-widest text-center shadow-lg transition-colors cursor-default"
              >
                PHP
              </motion.div>
            </div>

            {/* Row 2 */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap w-full lg:justify-end">
              {/* Capsule/Pill - SEO */}
              <motion.div
                whileHover={{ scale: 1.05, borderColor: "rgba(56, 189, 248, 0.6)" }}
                className="w-36 h-24 sm:w-44 sm:h-28 rounded-full border border-primary-500/20 dark:border-primary-500/30 bg-gray-50 dark:bg-zinc-900/60 flex items-center justify-center text-gray-800 dark:text-white font-bold text-xs sm:text-sm tracking-widest text-center shadow-lg transition-colors cursor-default"
              >
                SEO
              </motion.div>
              {/* Rounded Box - Content Optimization */}
              <motion.div
                whileHover={{ scale: 1.05, borderColor: "rgba(56, 189, 248, 0.6)" }}
                className="w-36 h-24 sm:w-48 sm:h-28 rounded-2xl border border-primary-500/20 dark:border-primary-500/30 bg-gray-50 dark:bg-zinc-900/60 flex items-center justify-center text-gray-800 dark:text-white font-bold text-xs sm:text-sm tracking-widest text-center shadow-lg transition-colors cursor-default"
              >
                CONTENT OPT.
              </motion.div>
            </div>

            {/* Row 3 */}
            <div className="flex items-center justify-center gap-4 sm:gap-6 flex-wrap w-full lg:justify-end">
              {/* Rounded Box - Maintenance */}
              <motion.div
                whileHover={{ scale: 1.05, borderColor: "rgba(56, 189, 248, 0.6)" }}
                className="w-36 h-24 sm:w-48 sm:h-28 rounded-2xl border border-primary-500/20 dark:border-primary-500/30 bg-gray-50 dark:bg-zinc-900/60 flex items-center justify-center text-gray-800 dark:text-white font-bold text-xs sm:text-sm tracking-widest text-center shadow-lg transition-colors cursor-default"
              >
                MAINTENANCE
              </motion.div>
              {/* Capsule/Pill - JavaScript */}
              <motion.div
                whileHover={{ scale: 1.05, borderColor: "rgba(56, 189, 248, 0.6)" }}
                className="w-36 h-24 sm:w-44 sm:h-28 rounded-full border border-primary-500/20 dark:border-primary-500/30 bg-gray-50 dark:bg-zinc-900/60 flex items-center justify-center text-gray-800 dark:text-white font-bold text-xs sm:text-sm tracking-widest text-center shadow-lg transition-colors cursor-default"
              >
                JAVASCRIPT
              </motion.div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default TechStackSlider;
