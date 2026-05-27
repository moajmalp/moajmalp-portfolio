"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Twitter, Instagram, Globe, Search, Layers, CheckCircle2 } from 'lucide-react';
import { profileData } from '../../data/profileData';

const Hero = () => {
  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = profileData.personal.cvPath;
    link.download = 'Muhammed-Ajmal-P-CV.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] }
    }
  };

  // Structured Core Competencies list
  const skillNodes = [
    {
      id: 'wordpress',
      name: 'WordPress Development',
      proficiency: '95%',
      icon: Globe
    },
    {
      id: 'seo',
      name: 'SEO & Optimization',
      proficiency: '90%',
      icon: Search
    },
    {
      id: 'js',
      name: 'Frontend Engineering',
      proficiency: '90%',
      icon: Layers
    },
    {
      id: 'testing',
      name: 'Software QA Testing',
      proficiency: '88%',
      icon: CheckCircle2
    }
  ];

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-white dark:bg-[#050505] pt-20 lg:pt-16">
      {/* Quiet Background Lighting - Soft single color spotlight */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_70%_30%,rgba(14,165,233,0.03)_0%,transparent_60%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start"
          >
            <motion.div variants={itemVariants} className="mb-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-gray-50 dark:bg-white/[0.02] border border-gray-200/40 dark:border-white/5">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-green-500"></span>
                </span>
                <span className="text-[9px] font-black text-gray-500 dark:text-gray-400 uppercase tracking-[0.25em]">Available for Work</span>
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 leading-[1.15] tracking-tighter">
              Hi, I'm <br />
              <span className="text-primary-600 dark:text-primary-400">
                {profileData.personal.shortName}
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="h-px w-5 bg-gray-300 dark:bg-gray-700"></div>
              <h2 className="text-sm md:text-base font-bold text-gray-500 dark:text-gray-400 tracking-wider uppercase">
                {profileData.hero.headline.split('|')[0].trim()}
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-sm md:text-base text-gray-500 dark:text-gray-400 mb-8 max-w-xl leading-relaxed font-medium">
              {profileData.hero.subtitle}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-3.5 w-full sm:w-auto mb-8">
              <button
                onClick={handleDownloadCV}
                className="group relative px-7 py-3.5 bg-gray-900 dark:bg-white text-white dark:text-gray-950 rounded-xl font-bold text-sm transition-all hover:bg-primary-600 dark:hover:bg-primary-400 dark:hover:text-white active:scale-98 shadow-sm"
              >
                <span className="flex items-center justify-center gap-2">
                  <Download className="w-4 h-4" />
                  View Resume
                </span>
              </button>
              <button
                onClick={scrollToContact}
                className="group px-7 py-3.5 bg-transparent text-gray-900 dark:text-white border border-gray-200 dark:border-white/5 rounded-xl font-bold text-sm transition-all hover:bg-gray-50 dark:hover:bg-white/[0.02] active:scale-98"
              >
                <span className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4" />
                  Contact Me
                </span>
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-2 p-1 bg-gray-50/50 dark:bg-white/[0.01] rounded-xl border border-gray-200/40 dark:border-white/5">
              {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="p-2.5 text-gray-400 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 rounded-lg transition-colors"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visuals (Typographic Minimal Dashboard Showcase) */}
          <div className="order-1 lg:order-2 flex flex-col justify-center relative scale-90 lg:scale-100 select-none w-full max-w-[440px] mx-auto z-10">
            
            {/* Minimalist Structured Layout Card */}
            <div className="relative w-full bg-gray-50/40 dark:bg-white/[0.01] border border-gray-200/40 dark:border-white/5 rounded-[2rem] p-8 flex flex-col justify-between shadow-sm min-h-[380px] overflow-hidden">
              
              {/* Corner fine subtitle */}
              <div className="absolute top-6 right-8 text-[9px] font-mono text-gray-300 dark:text-white/10 uppercase tracking-widest pointer-events-none">
                MUH.AJMAL
              </div>

              {/* Large, sleek typographic initials in background */}
              <div className="absolute -bottom-8 -left-4 text-[12rem] font-serif font-black text-gray-200/20 dark:text-white/[0.01] leading-none select-none pointer-events-none">
                Aj
              </div>

              {/* Header */}
              <div className="mb-6 relative z-10">
                <span className="text-[9px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-[0.25em]">Overview</span>
                <h3 className="text-lg font-black text-gray-900 dark:text-white mt-1.5 tracking-tight">Core Competencies</h3>
              </div>

              {/* Structured List */}
              <div className="space-y-2 relative z-10 w-full flex-1 flex flex-col justify-center">
                {skillNodes.map((node, index) => {
                  return (
                    <motion.div
                      key={node.id}
                      whileHover={{ x: 4 }}
                      transition={{ type: "spring", stiffness: 450, damping: 30 }}
                      className="flex items-center justify-between py-3.5 border-b border-gray-150 dark:border-white/5 group cursor-pointer"
                    >
                      <div className="flex items-center gap-4">
                        <span className="text-[10px] font-mono text-gray-400 dark:text-gray-600">
                          0{index + 1}
                        </span>
                        <span className="text-sm font-bold text-gray-800 dark:text-gray-200 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                          {node.name}
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <span className="text-xs font-mono text-gray-400 dark:text-gray-500 opacity-0 group-hover:opacity-100 transition-opacity">
                          {node.proficiency}
                        </span>
                        <div className="w-1.5 h-1.5 rounded-full bg-gray-200 dark:bg-gray-800 group-hover:bg-primary-500 transition-colors" />
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>

            {/* Structured Metric Blocks at bottom */}
            <div className="grid grid-cols-2 gap-4 mt-4 w-full">
              <div className="bg-gray-50/40 dark:bg-white/[0.01] border border-gray-200/40 dark:border-white/5 p-5 rounded-[1.5rem] flex flex-col justify-center gap-1 hover:border-gray-300 dark:hover:border-white/10 transition-colors duration-300">
                <span className="text-[9px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-none">Experience</span>
                <span className="text-2xl font-black text-gray-900 dark:text-white mt-1 leading-none tracking-tight">1.5+ Years</span>
              </div>
              <div className="bg-gray-50/40 dark:bg-white/[0.01] border border-gray-200/40 dark:border-white/5 p-5 rounded-[1.5rem] flex flex-col justify-center gap-1 hover:border-gray-300 dark:hover:border-white/10 transition-colors duration-300">
                <span className="text-[9px] font-mono text-gray-400 dark:text-gray-500 uppercase tracking-widest leading-none">Projects</span>
                <span className="text-2xl font-black text-gray-900 dark:text-white mt-1 leading-none tracking-tight">12+ Handled</span>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

const Link = ({ children, href, className }: { children: React.ReactNode, href: string, className?: string }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className={className}>
    {children}
  </a>
);

export default Hero;


