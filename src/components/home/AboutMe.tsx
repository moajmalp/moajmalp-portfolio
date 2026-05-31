"use client";

import { motion } from 'framer-motion';
import { useResumeModal } from '../../context/ResumeModalContext';

const AboutMe = () => {
  const { openViewModal } = useResumeModal();

  return (
    <section id="about-me" className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden border-t border-gray-100 dark:border-white/5 text-gray-900 dark:text-white">
      {/* Blueprint grid overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Title Block - Centered */}
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gray-450 dark:text-gray-500 font-bold tracking-[0.25em] uppercase text-xs mb-3 block">
              MY BIO
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tight">
              About <span className="text-primary-500 dark:text-primary-400 lowercase">me.</span>
            </h2>
          </motion.div>
        </div>

        {/* Content Layout */}
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          
          {/* Left Column: Concentric Circles with Floating Tech Badges */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex items-center justify-center select-none"
          >
            <div className="relative w-80 h-80 sm:w-96 sm:h-96 flex items-center justify-center">
              {/* Concentric rotating border rings */}
              <div className="absolute inset-0 rounded-full border border-primary-500/10 dark:border-primary-500/5 animate-[spin_50s_linear_infinite]"></div>
              <div className="absolute inset-4 rounded-full border border-primary-500/15 dark:border-primary-500/10 animate-[spin_40s_linear_infinite_reverse]"></div>
              <div className="absolute inset-8 rounded-full border border-primary-500/20 dark:border-primary-500/15 animate-[spin_30s_linear_infinite]"></div>
              
              {/* Main Circular Profile Photo */}
              <div className="relative w-60 h-60 sm:w-72 sm:h-72 rounded-full overflow-hidden border-4 border-gray-100 dark:border-zinc-800 shadow-2xl z-10 bg-zinc-900">
                <img
                  src="/profile.png"
                  alt="Muhammed Ajmal P"
                  className="w-full h-full object-cover grayscale contrast-110 brightness-95"
                  style={{ transform: 'scale(1.45)', transformOrigin: 'center 20%' }}
                />
              </div>

              {/* Floating Badge: HTML5 (Top Left) */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="absolute top-12 left-4 sm:top-16 sm:left-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-zinc-900 border border-gray-150 dark:border-zinc-800 shadow-lg flex items-center justify-center p-2.5 z-20 cursor-default hover:border-orange-500/40"
              >
                <svg className="w-full h-full text-[#E34F26]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.7 7.8H8.3l.2 2.6h8.4l-.5 5.5-4.4 1.5-4.4-1.5-.3-3H4.7l.5 5.6 6.8 2.2 6.8-2.2.9-10.2z"/>
                </svg>
              </motion.div>

              {/* Floating Badge: JavaScript (Top Right) */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="absolute top-8 right-6 sm:top-12 sm:right-10 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-zinc-900 border border-gray-150 dark:border-zinc-800 shadow-lg flex items-center justify-center p-2.5 z-20 cursor-default hover:border-yellow-500/40"
              >
                <div className="w-full h-full bg-[#F7DF1E] rounded-md flex items-center justify-center text-black font-black text-xs select-none">
                  JS
                </div>
              </motion.div>

              {/* Floating Badge: React (Bottom Left) */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="absolute bottom-12 left-4 sm:bottom-16 sm:left-6 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-zinc-900 border border-gray-150 dark:border-zinc-800 shadow-lg flex items-center justify-center p-2.5 z-20 cursor-default hover:border-cyan-500/40"
              >
                <svg className="w-full h-full text-[#61DAFB] animate-[spin_12s_linear_infinite]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <circle cx="12" cy="12" r="2" fill="currentColor" />
                  <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(30 12 12)" />
                  <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(90 12 12)" />
                  <ellipse cx="12" cy="12" rx="10" ry="4.5" transform="rotate(150 12 12)" />
                </svg>
              </motion.div>

              {/* Floating Badge: CSS3 (Bottom Right) */}
              <motion.div
                whileHover={{ scale: 1.15 }}
                className="absolute bottom-6 right-10 sm:bottom-8 sm:right-12 w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white dark:bg-zinc-900 border border-gray-150 dark:border-zinc-800 shadow-lg flex items-center justify-center p-2.5 z-20 cursor-default hover:border-blue-500/40"
              >
                <svg className="w-full h-full text-[#1572B6]" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M1.5 0h21l-1.9 21.2L12 24l-8.6-2.8L1.5 0zm15.6 5.6H7.1l.2 2.6h8.2l-.3 3.6-3.2 1.1-3.2-1.1-.2-2.1H6.1l.4 4.7 5.5 1.8 5.5-1.8.8-8.8z"/>
                </svg>
              </motion.div>
            </div>
          </motion.div>

          {/* Right Column: Narrative Biography & CTA Button */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col items-center lg:items-start text-center lg:text-left"
          >
            <div className="space-y-6 text-gray-650 dark:text-zinc-400 font-medium text-sm sm:text-base leading-relaxed mb-8 max-w-xl">
              <p>
                My professional journey began with a curiosity for custom web engineering. Over the years, I have specialized in custom WordPress design and full-stack development. I build fast, secure, and accessible websites utilizing core languages like PHP and JavaScript.
              </p>
              <p>
                I hold a dual passion: engineering sleek, scalable digital structures, and optimizing content to rank highly. My approach to search engine optimization blends data-driven off-page link networks with precise, on-page syntax structures, helping clients double their organic visibility.
              </p>
              <p>
                Currently, I manage remote platforms, deliver high-quality digital solutions, and pursue advanced studies in Arabic Literature at MANUU. I strive to merge technical precision with creative layouts to deliver high-performing digital experiences that truly perform and inspire.
              </p>
            </div>

            {/* Solid Primary View Resume Button */}
            <button
              onClick={openViewModal}
              className="bg-primary-500 hover:bg-primary-400 text-slate-950 px-6 py-3 rounded-xl font-bold text-sm flex items-center gap-2 transition-all shadow-md active:scale-95 border-0 cursor-pointer max-w-max"
            >
              <span>View Resume</span>
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                <rect width="20" height="14" x="2" y="6" rx="2" />
              </svg>
            </button>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutMe;
