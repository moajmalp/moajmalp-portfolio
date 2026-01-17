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

  // Custom hook usage or simple effect for counters could be used here
  // For simplicity with framer-motion, we animate a value if needed, but 
  // typical "count up" logic often requires a separate state or library.
  // Using a simple CSS-based or interval approach for lightweight solution.

  // Actually, let's use a simple keyframe animation or just display the number for now
  // to ensure reliability without extra heavy deps. 
  // BUT user asked for "Animated number counters".
  // Let's use Framer Motion's useSpring/useTransform if possible, or a simple useEffect.

  return (
    <span ref={nodeRef} className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-primary-600 to-purple-600 bg-clip-text text-transparent">
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

  // Handle float for years
  return <>{Number.isInteger(end) ? Math.floor(count) : count.toFixed(1)}</>;
};



const Achievements = () => {
  return (
    <section className="py-20 bg-white dark:bg-gray-900 relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-1/2 left-10 w-64 h-64 bg-primary-500/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/2 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {profileData.achievements.map((achievement: any, index: number) => {
            const Icon = iconMap[achievement.icon] || Code;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center group"
              >
                <div className="mb-4 p-4 bg-gray-50 dark:bg-gray-800 rounded-full group-hover:bg-primary-50 dark:group-hover:bg-primary-900/20 transition-colors duration-300">
                  <Icon className="w-8 h-8 text-gray-400 group-hover:text-primary-600 dark:text-gray-500 dark:group-hover:text-primary-400 transition-colors" />
                </div>

                <Counter from={0} to={achievement.count} duration={2} suffix={achievement.suffix} />

                <p className="mt-2 text-gray-600 dark:text-gray-400 font-medium">
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