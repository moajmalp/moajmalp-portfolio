"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Clock, Users, Settings, Sparkles } from 'lucide-react';
import { profileData } from '../../data/profileData';

const iconMap: Record<string, any> = {
  Code, Clock, Users, Settings
};

const Counter = ({ from, to, duration, suffix = '' }: { from: number; to: number; duration: number; suffix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });

  return (
    <span ref={nodeRef} className="text-3xl md:text-5xl font-black bg-gradient-to-r from-primary-500 via-purple-500 to-pink-500 bg-clip-text text-transparent tracking-tighter">
      {inView ? (
        <CountUp end={to} duration={duration} />
      ) : (
        from
      )}
      {suffix}
    </span>
  );
};

const CountUp = ({ end, duration }: { end: number; duration: number }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const increment = end / (duration * 60);
    const handle = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(handle);
      } else {
        setCount(start);
      }
    }, 1000 / 60);
    return () => clearInterval(handle);
  }, [end, duration]);

  return <>{Number.isInteger(end) ? Math.floor(count) : count.toFixed(1)}</>;
};

const Achievements = () => {
  return (
    <section className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden border-t border-gray-100 dark:border-white/5">
      {/* Background decorative elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-1/4 w-96 h-96 bg-primary-500/5 blur-[120px] rounded-full"></div>
        <div className="absolute bottom-1/2 right-1/4 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {profileData.achievements.map((achievement: any, index: number) => {
            const Icon = iconMap[achievement.icon] || Code;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: index * 0.1 }}
                className="flex flex-col items-center text-center group relative"
              >
                {/* Active indicator on hover */}
                <div className="absolute -inset-4 bg-primary-500/5 blur-3xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>

                <div className="relative mb-6">
                  <div className="absolute -inset-2 bg-gradient-to-r from-primary-500 to-purple-500 rounded-2xl blur opacity-0 group-hover:opacity-20 transition-opacity duration-500"></div>
                  <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gray-50 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-100 dark:border-white/10 rounded-2xl md:rounded-3xl flex items-center justify-center group-hover:scale-110 group-hover:rotate-3 transition-all duration-500 shadow-xl shadow-black/5">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-400 group-hover:text-primary-500 transition-colors" />
                  </div>
                  <div className="absolute -top-2 -right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Sparkles className="w-5 h-5 text-primary-500 animate-pulse" />
                  </div>
                </div>

                <Counter from={0} to={achievement.count} duration={2} suffix={achievement.suffix} />

                <p className="mt-4 text-gray-500 dark:text-gray-400 font-black text-xs md:text-sm uppercase tracking-[0.2em]">
                  {achievement.label}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Achievements;
