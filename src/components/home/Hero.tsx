"use client";

import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  const role = <>Full-Stack Developer<br/>I build fast, scalable web applications for businesses and startups.</>;
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-white dark:bg-[#050505] pt-20">
      {/* Blueprint grid layout overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-[calc(100svh-5rem)]">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="mb-8"
        >
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-primary-500/10 border border-primary-500/20">
            <span className="relative flex h-1.5 w-1.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-primary-500"></span>
            </span>
            <span className="text-[10px] font-black text-primary-600 dark:text-primary-400 uppercase tracking-[0.25em]">Available for Work</span>
          </div>
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-tight max-w-4xl"
        >
          Hi, I am <span className="text-primary-500 dark:text-primary-400">Ajmal P</span>
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-gray-500 dark:text-zinc-400 text-sm sm:text-base md:text-xl font-medium mb-12 max-w-3xl leading-relaxed"
        >
          {role}
        </motion.p>

        {/* Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 justify-center"
        >
          {[{ Icon: Github, href: "https://github.com/moajmalp" }, { Icon: Mail, href: "mailto:hi@moajmalp.in" }, { Icon: Linkedin, href: "https://linkedin.com/in/moajmalp" }, { Icon: Twitter, href: "https://twitter.com/moajmalp" }].map((item, i) => (
            <motion.a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.1, backgroundColor: "rgba(56, 189, 248, 1)", color: "#ffffff" }}
              whileTap={{ scale: 0.95 }}
              className="w-12 h-12 rounded-full bg-gray-50 dark:bg-white flex items-center justify-center text-slate-900 dark:text-slate-900 shadow-lg hover:shadow-primary-500/20 transition-all duration-300 cursor-pointer"
            >
              <item.Icon className="w-5 h-5" />
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
