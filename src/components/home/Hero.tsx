"use client";

import React from 'react';
import { motion } from 'framer-motion';
import { Download, Mail, Github, Linkedin, Twitter, Instagram } from 'lucide-react';
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
        delayChildren: 0.3
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] }
    }
  };

  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-white dark:bg-[#050505] pt-20 lg:pt-16">
      {/* Mesh Gradient Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[60%] h-[60%] bg-primary-500/10 blur-[120px] rounded-full animate-pulse transition-all duration-1000"></div>
        <div className="absolute bottom-[-10%] left-[-10%] w-[60%] h-[60%] bg-purple-500/10 blur-[120px] rounded-full animate-pulse delay-700 transition-all duration-1000"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[radial-gradient(circle_at_20%_30%,rgba(124,58,237,0.05)_0%,transparent_50%),radial-gradient(circle_at_80%_70%,rgba(59,130,246,0.05)_0%,transparent_50%)]"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start"
          >
            <motion.div variants={itemVariants} className="mb-4">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/50 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200/50 dark:border-white/10 shadow-2xl shadow-primary-500/5">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span className="text-[10px] font-black text-gray-700 dark:text-gray-300 uppercase tracking-[0.2em]">Available for Work</span>
              </div>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl font-black text-gray-900 dark:text-white mb-4 leading-[1.1] tracking-tighter">
              Hi, I'm <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500">
                {profileData.personal.shortName}
              </span>
            </motion.h1>

            <motion.div variants={itemVariants} className="flex items-center gap-3 mb-6">
              <div className="h-px w-6 bg-primary-500"></div>
              <h2 className="text-base md:text-lg font-bold text-gray-600 dark:text-gray-400 tracking-tight">
                {profileData.hero.headline.split('|')[0].trim()}
              </h2>
            </motion.div>

            <motion.p variants={itemVariants} className="text-sm md:text-base text-gray-600 dark:text-gray-400 mb-8 max-w-xl leading-relaxed font-medium">
              {profileData.hero.subtitle}
            </motion.p>

            <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
              <button
                onClick={handleDownloadCV}
                className="group relative px-8 py-4 bg-gray-900 dark:bg-white text-white dark:text-gray-900 rounded-2xl font-black text-base transition-all active:scale-95 shadow-2xl shadow-black/10 hover:shadow-primary-500/20"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-purple-600 opacity-0 group-hover:opacity-10 Transition duration-300 rounded-2xl"></div>
                <span className="flex items-center justify-center gap-2">
                  <Download className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
                  Download CV
                </span>
              </button>
              <button
                onClick={scrollToContact}
                className="group px-8 py-4 bg-white/50 dark:bg-white/[0.03] backdrop-blur-xl text-gray-900 dark:text-white border border-gray-200/50 dark:border-white/10 rounded-2xl font-black text-base transition-all hover:bg-white dark:hover:bg-white/10 active:scale-95 shadow-xl shadow-black/5"
              >
                <span className="flex items-center justify-center gap-2">
                  <Mail className="w-4 h-4 group-hover:rotate-12 transition-transform" />
                  Contact Me
                </span>
              </button>
            </motion.div>

            <motion.div variants={itemVariants} className="flex gap-3 p-1.5 bg-gray-100/50 dark:bg-white/[0.02] backdrop-blur-3xl rounded-[1.25rem] border border-gray-200/50 dark:border-white/10">
              {[Github, Linkedin, Twitter, Instagram].map((Icon, i) => (
                <Link
                  key={i}
                  href="#"
                  className="p-3 text-gray-500 dark:text-gray-400 hover:text-primary-500 dark:hover:text-primary-400 hover:bg-white dark:hover:bg-white/10 rounded-xl transition-all duration-300 hover:scale-110"
                >
                  <Icon className="w-4 h-4" />
                </Link>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Visuals */}
          <div className="order-1 lg:order-2 flex justify-center relative scale-90 lg:scale-100">
            <div className="relative w-full aspect-square max-w-[420px]">
              {/* Abstract Orbitals */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 border-[1px] border-dashed border-gray-200 dark:border-white/10 rounded-full"
              ></motion.div>
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-8 border-[1px] border-gray-200 dark:border-white/5 rounded-full"
              ></motion.div>

              {/* Main Visual Container */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
                className="absolute inset-16 z-10"
              >
                <div className="relative h-full w-full rounded-[2.5rem] overflow-hidden group">
                  <div className="absolute inset-0 bg-gradient-to-tr from-primary-500/30 to-purple-500/30 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-20 mix-blend-overlay"></div>
                  <div className="absolute inset-0 bg-gray-100 dark:bg-white/5 backdrop-blur-3xl"></div>
                  <img
                    src="/assets/profile-photo.png"
                    alt={profileData.personal.name}
                    className="w-full h-full object-cover grayscale-[20%] group-hover:grayscale-0 transform group-hover:scale-110 transition-all duration-1000"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      e.currentTarget.parentElement!.classList.add('flex', 'items-center', 'justify-center');
                      e.currentTarget.parentElement!.innerHTML = `<span class="text-8xl font-black text-gray-200 dark:text-white/10 select-none">${profileData.personal.shortName.substring(0, 2)}</span>`;
                    }}
                  />
                  <div className="absolute inset-0 shadow-[inset_0_0_80px_rgba(0,0,0,0.1)] dark:shadow-[inset_0_0_80px_rgba(255,255,255,0.05)] pointer-events-none"></div>
                </div>
              </motion.div>

              {/* Floating Stats Cards */}
              <motion.div
                animate={{ y: [0, -12, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-2 -right-2 z-20 bg-white/70 dark:bg-black/50 backdrop-blur-2xl p-4 rounded-[1.5rem] border border-gray-200 dark:border-white/10 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-xl flex items-center justify-center text-blue-500 text-sm font-black">1.5+</div>
                  <div>
                    <p className="text-base font-black text-gray-900 dark:text-white leading-none">Years</p>
                    <p className="text-[9px] font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">Experience</p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-2 -left-2 z-20 bg-white/70 dark:bg-black/50 backdrop-blur-2xl p-4 rounded-[1.5rem] border border-gray-200 dark:border-white/10 shadow-2xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-emerald-500/10 rounded-xl flex items-center justify-center text-emerald-500 text-sm font-black">12+</div>
                  <div>
                    <p className="text-base font-black text-gray-900 dark:text-white leading-none">Projects</p>
                    <p className="text-[9px] font-bold text-gray-500 dark:text-gray-400 tracking-widest uppercase">Handled</p>
                  </div>
                </div>
              </motion.div>

              {/* Background Glow */}
              <div className="absolute inset-10 bg-gradient-to-tr from-primary-500/20 via-purple-500/20 to-pink-500/20 rounded-full blur-[80px] -z-10"></div>
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
