"use client";

import { motion } from 'framer-motion';
import { Github, Mail, Linkedin, Twitter } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-white dark:bg-[#050505] pt-20">

      {/* Blueprint grid layout overlay */}
      <div className="absolute inset-0 blueprint-grid opacity-30 pointer-events-none"></div>

      {/* Code Editor Simulated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-20 dark:opacity-[0.12] select-none flex">
        {/* Left Side: Mock File Explorer */}
        <div className="hidden md:block w-64 border-r border-gray-200 dark:border-zinc-800/40 p-6 font-mono text-[11px] leading-relaxed text-gray-400 dark:text-zinc-600 shrink-0">
          <div className="text-gray-500 dark:text-zinc-500 font-bold uppercase tracking-wider mb-4 text-[9px]">LIBRARY ROOT</div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400/60 font-semibold"><span className="opacity-40">📁</span> src</div>
            <div className="pl-4 space-y-2">
              <div className="flex items-center gap-2 text-primary-600 dark:text-primary-400/60 font-semibold"><span className="opacity-40">📁</span> components</div>
              <div className="pl-4 space-y-1.5">
                <div className="flex items-center gap-2"><span className="opacity-40">📁</span> home</div>
                <div className="pl-4 space-y-1">
                  <div className="text-primary-555 text-primary-500 dark:text-primary-400 font-bold">📄 Hero.tsx</div>
                  <div>📄 TechStack.tsx</div>
                  <div>📄 Projects.tsx</div>
                </div>
                <div><span className="opacity-40">📁</span> layout</div>
              </div>
              <div className="flex items-center gap-2"><span className="opacity-40">📁</span> data</div>
              <div className="pl-4">
                <div className="text-yellow-600 dark:text-yellow-500/80">📄 profileData.ts</div>
              </div>
            </div>
            <div className="flex items-center gap-2"><span className="opacity-40">📁</span> public</div>
            <div>📄 vercel.json</div>
            <div>📄 package.json</div>
          </div>
        </div>

        {/* Right Side: Mock Syntax Highlighted Code Lines */}
        <div className="flex-1 p-8 font-mono text-[11px] sm:text-xs leading-loose text-gray-300 dark:text-zinc-700/80 overflow-hidden select-none filter blur-[1px]">
          <div className="text-purple-500">import <span className="text-blue-500">React</span> from <span className="text-green-500">'react'</span>;</div>
          <div className="text-purple-500">import <span className="text-blue-500">{"{ motion }"}</span> from <span className="text-green-500">'framer-motion'</span>;</div>
          <div className="text-purple-500">import <span className="text-blue-500">{"{ Github, Mail }"}</span> from <span className="text-green-500">'lucide-react'</span>;</div>
          <br />
          <div><span className="text-purple-500">const</span> <span className="text-yellow-500">PortfolioHero</span> = () =&gt; {"{"}</div>
          <div className="pl-4"><span className="text-purple-500">const</span> name = <span className="text-green-500">"Muhammed Ajmal P"</span>;</div>
          <div className="pl-4"><span className="text-purple-500">const</span> role = <span className="text-green-500">"WordPress Developer & SEO Specialist"</span>;</div>
          <br />
          <div className="pl-4 text-gray-450 dark:text-zinc-600">// Rendering stunning digital experiences</div>
          <div className="pl-4"><span className="text-purple-500">return</span> (</div>
          <div className="pl-8 text-blue-500">&lt;<span className="text-yellow-500">section</span> className=<span className="text-green-500">"hero-container"</span>&gt;</div>
          <div className="pl-12 text-blue-500">&lt;<span className="text-yellow-500">h1</span>&gt;<span className="text-white dark:text-zinc-400">Hi, I am </span>{"{name}"}&lt;/<span className="text-yellow-500">h1</span>&gt;</div>
          <div className="pl-12 text-blue-500">&lt;<span className="text-yellow-500">p</span>&gt;<span className="text-white dark:text-zinc-400">Transforming ideas into stunning digital solutions.</span>&lt;/<span className="text-yellow-500">p</span>&gt;</div>
          <div className="pl-8 text-blue-500">&lt;/<span className="text-yellow-500">section</span>&gt;</div>
          <div className="pl-4">);</div>
          <div>{"};"}</div>
          <br />
          <div className="text-purple-500">export default <span className="text-yellow-500">PortfolioHero</span>;</div>
        </div>
      </div>

      {/* Main Container */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center justify-center min-h-[calc(100svh-5rem)]">

        {/* Available Badge */}
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

        {/* Centered Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-900 dark:text-white mb-6 leading-tight tracking-tight max-w-4xl"
        >
          Hi, I am <span className="text-primary-500 dark:text-primary-400">Ajmal P</span>
        </motion.h1>

        {/* Centered Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-gray-500 dark:text-zinc-400 text-sm sm:text-base md:text-xl font-medium mb-12 max-w-3xl leading-relaxed"
        >
          A seasoned <span className="text-primary-500 dark:text-primary-400 font-bold">WordPress Developer & SEO Specialist</span> transforming ideas into stunning digital experiences. Let's create something amazing!
        </motion.p>

        {/* Centered Social Links */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex items-center gap-4 justify-center"
        >
          {[
            { Icon: Github, href: "https://github.com/moajmalp" },
            { Icon: Mail, href: "mailto:hi@moajmalp.in" },
            { Icon: Linkedin, href: "https://linkedin.com/in/moajmalp" },
            { Icon: Twitter, href: "https://twitter.com/moajmalp" }
          ].map((item, i) => (
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
