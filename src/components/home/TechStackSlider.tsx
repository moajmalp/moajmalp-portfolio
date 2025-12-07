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
    <section className="py-20 bg-gray-50 dark:bg-slate-900 border-y border-gray-100 dark:border-gray-800 overflow-hidden relative">

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm">Skills Ecosystem</span>
          <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white">
            Technologies <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">& Tools</span>
          </h2>
        </motion.div>
      </div>

      <div className="relative w-full overflow-hidden mask-linear-gradient py-8">
        {/* Gradient Masks */}
        <div className="absolute top-0 left-0 w-32 md:w-64 h-full bg-gradient-to-r from-gray-50 dark:from-slate-900 to-transparent z-10"></div>
        <div className="absolute top-0 right-0 w-32 md:w-64 h-full bg-gradient-to-l from-gray-50 dark:from-slate-900 to-transparent z-10"></div>

        <div className="flex w-max">
          <motion.div
            className="flex gap-6 md:gap-8 px-4"
            animate={{
              x: ["0%", "-50%"]
            }}
            transition={{
              repeat: Infinity,
              duration: 40,
              ease: "linear"
            }}
          >
            {/* Render list twice for smooth loop */}
            {[...techStack, ...techStack].map((tech, index) => {
              const Icon = iconMap[tech.icon] || Code;
              // Use index to create unique keys for the duplicated array
              return (
                <div
                  key={`${tech.name}-${index}`}
                  className="group flex flex-col items-center justify-center p-6 bg-white dark:bg-gray-800/50 backdrop-blur-sm rounded-2xl border border-gray-100 dark:border-white/5 hover:border-primary-500/30 dark:hover:border-primary-500/30 shadow-sm hover:shadow-xl hover:shadow-primary-500/10 transition-all duration-300 w-32 h-32 md:w-40 md:h-40 shrink-0"
                >
                  <div className="mb-4 transform group-hover:scale-110 transition-transform duration-300 p-3 bg-primary-50 dark:bg-white/5 rounded-xl group-hover:bg-white dark:group-hover:bg-primary-500/20">
                    <Icon className="w-8 h-8 md:w-10 md:h-10 text-gray-600 dark:text-gray-300 group-hover:text-primary-600 dark:group-hover:text-primary-400 group-hover:stroke-[2.5px] transition-all" />
                  </div>
                  <span className="text-sm font-semibold text-gray-600 dark:text-gray-400 group-hover:text-primary-600 dark:group-hover:text-primary-300 transition-colors text-center">
                    {tech.name}
                  </span>
                </div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStackSlider;
