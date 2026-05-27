"use client";

import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { Code, Clock, Users, Settings } from 'lucide-react';
import { profileData } from '../../data/profileData';

const iconMap: Record<string, any> = {
  Code, Clock, Users, Settings
};

const Counter = ({ from, to, duration, suffix = '' }: { from: number; to: number; duration: number; suffix?: string }) => {
  const nodeRef = useRef<HTMLSpanElement>(null);
  const inView = useInView(nodeRef, { once: true });

  return (
    <span ref={nodeRef} className="text-3xl md:text-5xl font-black text-gray-900 dark:text-white tracking-tighter">
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
                <div className="relative mb-6">
                  <div className="relative w-16 h-16 md:w-20 md:h-20 bg-gray-50 dark:bg-white/[0.03] backdrop-blur-xl border border-gray-200 dark:border-white/10 rounded-2xl md:rounded-3xl flex items-center justify-center transition-all duration-500 shadow-sm">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-500 dark:text-gray-400 group-hover:text-gray-900 dark:group-hover:text-white transition-colors" />
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
