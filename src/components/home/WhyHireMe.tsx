"use client";

import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';

const WhyHireMe = () => {
  const strengths = [
    {
      title: 'Expert Development',
      description: 'Proficient in WordPress, PHP, HTML, CSS, and JavaScript with modern best practices.',
    },
    {
      title: 'SEO Mastery',
      description: 'Deep understanding of on-page and off-page SEO strategies for maximum visibility.',
    },
    {
      title: 'Team Collaboration',
      description: 'Excellent communication skills and proven ability to work in cross-functional teams.',
    },
    {
      title: 'Fast & Reliable',
      description: 'Quick turnaround times without compromising on quality and attention to detail.',
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-20 w-64 h-64 bg-primary-500 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <p className="text-primary-400 font-semibold mb-2 uppercase tracking-wider text-sm">WHY CHOOSE ME</p>
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Why <span className="bg-gradient-to-r from-primary-400 to-primary-600 bg-clip-text text-transparent">Hire Me?</span>
            </h2>
            <p className="text-gray-300 text-lg mb-8 leading-relaxed">
              I bring a unique combination of technical expertise, creative problem-solving, and dedication to every project. Here's what sets me apart:
            </p>

            <div className="space-y-6">
              {strengths.map((strength, index) => (
                <motion.div
                  key={strength.title}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 backdrop-blur-xl bg-white/5 rounded-xl p-4 border border-white/10 hover:border-primary-400/30 transition-all group"
                >
                  <div className="flex-shrink-0 w-12 h-12 bg-primary-500/20 rounded-lg flex items-center justify-center border border-primary-400/30 group-hover:bg-primary-500/30 transition-colors">
                    <CheckCircle2 className="w-6 h-6 text-primary-400" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-primary-400 transition-colors">
                      {strength.title}
                    </h3>
                    <p className="text-gray-300 leading-relaxed">
                      {strength.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Visual Element */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative w-full h-96">
              {/* Animated Circles */}
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                    opacity: [0.3, 0.6, 0.3],
                  }}
                  transition={{
                    duration: 4 + i,
                    repeat: Infinity,
                    ease: 'easeInOut',
                    delay: i * 0.5,
                  }}
                  className="absolute inset-0 border-2 border-primary-400/30 rounded-full"
                  style={{
                    padding: `${(i + 1) * 40}px`,
                  }}
                />
              ))}

              {/* Center Icon Grid */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-4">
                  {strengths.map((strength, index) => (
                    <motion.div
                      key={strength.title}
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.8 + index * 0.1 }}
                      whileHover={{ scale: 1.2, rotate: 5 }}
                      className="w-16 h-16 backdrop-blur-xl bg-white/10 rounded-xl flex items-center justify-center border border-white/20 hover:border-primary-400/50 transition-all"
                    >
                      <CheckCircle2 className="w-8 h-8 text-primary-400" />
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default WhyHireMe;
