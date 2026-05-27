"use client";

import { motion } from 'framer-motion';
import { CheckCircle2, Star, Shield, Zap } from 'lucide-react';

const WhyHireMe = () => {
  const strengths = [
    {
      title: 'Expert Development',
      description: 'Proficient in WordPress, PHP, HTML, CSS, and JavaScript with modern best practices.',
      icon: Zap,
      color: "from-gray-500/10 to-gray-400/10",
      iconColor: "text-gray-900 dark:text-gray-100"
    },
    {
      title: 'SEO Mastery',
      description: 'Deep understanding of on-page and off-page SEO strategies for maximum visibility.',
      icon: Star,
      color: "from-gray-500/10 to-gray-400/10",
      iconColor: "text-gray-900 dark:text-gray-100"
    },
    {
      title: 'Team Collaboration',
      description: 'Excellent communication skills and proven ability to work in cross-functional teams.',
      icon: CheckCircle2,
      color: "from-gray-500/10 to-gray-400/10",
      iconColor: "text-gray-900 dark:text-gray-100"
    },
    {
      title: 'Reliable Delivery',
      description: 'Quick turnaround times without compromising on quality and attention to detail.',
      icon: Shield,
      color: "from-gray-500/10 to-gray-400/10",
      iconColor: "text-gray-900 dark:text-gray-100"
    },
  ];

  return (
    <section className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden border-t border-gray-100 dark:border-white/5 text-gray-900 dark:text-white">
      {/* Background Elements */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <span className="text-gray-500 dark:text-gray-400 font-bold tracking-[0.2em] uppercase text-xs mb-4 block underline decoration-gray-300 dark:decoration-gray-700 underline-offset-8">
              Why Choose Me
            </span>
            <h2 className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white mb-8 tracking-tight leading-tight">
              Building <span>Excellence</span> Together
            </h2>
            <p className="text-gray-600 dark:text-gray-400 text-sm md:text-base mb-12 leading-relaxed font-medium">
              I merge technical precision with creative strategy to deliver digital experiences that don't just work—they perform and inspire.
            </p>

            <div className="grid sm:grid-cols-2 gap-6">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.8 }}
                  className="group relative"
                >
                  <div className="relative bg-gray-50 dark:bg-white/[0.03] backdrop-blur-xl p-6 rounded-3xl border border-gray-100 dark:border-white/10 hover:border-primary-500/30 transition-all duration-500 h-full">
                    <div className={`w-12 h-12 rounded-2xl bg-white dark:bg-white/5 flex items-center justify-center mb-4 ${strength.iconColor} group-hover:scale-110 transition-transform duration-500 shadow-sm`}>
                      <strength.icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 group-hover:text-primary-500 transition-colors">
                      {strength.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed font-medium">
                      {strength.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Visual Interactive Element */}
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotate: -5 }}
              whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
              className="relative aspect-square max-w-[500px] mx-auto"
            >
              {/* Orbital background */}
              <div className="absolute inset-0 rounded-full border border-gray-200 dark:border-white/10"></div>
              <div className="absolute inset-10 rounded-full border border-gray-100 dark:border-white/5"></div>

              {/* Central Visual */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative w-48 h-48">
                  <div className="relative w-full h-full bg-white dark:bg-[#0a0a0a] rounded-full border border-gray-200 dark:border-white/10 flex items-center justify-center shadow-sm">
                    <CheckCircle2 className="w-20 h-20 text-gray-900 dark:text-white" />
                  </div>
                </div>
              </div>

              {/* Floating Badges */}
              {[
                { label: "99% Success", pos: "top-0 left-1/4", delay: 0 },
                { label: "Client Focused", pos: "bottom-10 right-0", delay: 0.2 },
                { label: "Top Quality", pos: "top-1/3 right-0", delay: 0.4 }
              ].map((badge, i) => (
                <motion.div
                  key={i}
                  animate={{ y: [0, -10, 0] }}
                  transition={{ duration: 3 + i, repeat: Infinity, delay: badge.delay }}
                  className={`absolute ${badge.pos} bg-white dark:bg-white/10 backdrop-blur-xl px-4 py-2 rounded-full border border-gray-200 dark:border-white/20 shadow-xl`}
                >
                  <span className="text-sm font-black text-gray-900 dark:text-white uppercase tracking-widest">{badge.label}</span>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
