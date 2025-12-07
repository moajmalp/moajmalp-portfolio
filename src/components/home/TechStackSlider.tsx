import { motion } from 'framer-motion';
import { profileData } from '../../data/profileData';
import {
  Code, Layers, Database, Smartphone, Globe,
  Server, Cpu, Terminal, Braces, TrendingUp
} from 'lucide-react';

// Fallback icon map if exact matches aren't found in Lucide
// Note: Lucide doesn't have all brand icons, so we map to generic ones or use what's available
const getIcon = (iconName: string) => {
  switch (iconName) {
    case 'WordPress': return Globe;
    case 'SEO': return TrendingUp;
    case 'React': return Code;
    default: return Layers;
  }
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
          {techStack.map((tech, index) => (
            <div
              key={`${tech.name}-${index}`}
              className="flex items-center gap-3 opacity-60 hover:opacity-100 transition-opacity grayscale hover:grayscale-0 cursor-default"
            >
              {/* We can use the icon string from data to look up a real icon if we imported them all, 
                                but for now we'll use a generic Placeholder or text. 
                                Since valid Lucide icons are strings, we can try to render them if we had a dynamic map.
                                For safety/speed, we display the Name. */}
              <span className="text-xl md:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-600 to-gray-400 dark:from-gray-300 dark:to-gray-500 hover:from-primary-500 hover:to-purple-500 transition-all">
                {tech.name}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TechStackSlider;
