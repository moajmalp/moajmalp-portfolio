import { motion } from 'framer-motion';
import { profileData } from '../../data/profileData';
import {
  Code, Layers, Database, Globe,
  TrendingUp, FileText, Settings,
  CheckCircle, Lightbulb, Users, Zap
} from 'lucide-react';

// Create a mapping of icon names string to Lucide components
const iconMap: Record<string, any> = {
  Code, Layers, Database, Globe,
  TrendingUp, FileText, Settings,
  CheckCircle, Lightbulb, Users, Zap
};

const TechStackSlider = () => {
  // Duplicate the array to create a seamless infinite scroll effect
  const techStack = [...profileData.skills.technical, ...profileData.skills.technical, ...profileData.skills.technical];

  return (
    <section className="py-16 bg-gray-50/50 dark:bg-gray-900/50 border-y border-gray-100 dark:border-gray-800 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 text-center">
        <p className="text-sm font-semibold text-primary-600 dark:text-primary-400 tracking-wider uppercase">
          Technologies & Tools
        </p>
      </div>

      <div className="relative w-full overflow-hidden mask-linear-gradient">
        {/* Gradient Masks for smooth fade edges */}
        <div className="absolute top-0 left-0 w-32 h-full bg-gradient-to-r from-gray-50 dark:from-gray-900 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 h-full bg-gradient-to-l from-gray-50 dark:from-gray-900 to-transparent z-10"></div>

        <motion.div
          className="flex gap-12 w-max"
          animate={{
            x: ["0%", "-33.33%"]
          }}
          transition={{
            repeat: Infinity,
            duration: 30,
            ease: "linear"
          }}
        >
          {techStack.map((tech, index) => {
            const Icon = iconMap[tech.icon] || Code;
            return (
              <div
                key={`${tech.name}-${index}`}
                className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default group"
              >
                <div className="p-2 bg-white dark:bg-gray-800 rounded-lg shadow-sm group-hover:shadow-md transition-shadow">
                  <Icon className="w-6 h-6 text-primary-500" />
                </div>
                <span className="text-lg md:text-xl font-bold text-gray-700 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                  {tech.name}
                </span>
              </div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSlider;
