import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface CardFeatureProps {
    icon: LucideIcon;
    title: string;
    description: string;
    gradient: string;
    iconColor: string;
    borderColor: string;
    index: number;
}

const CardFeature = ({
    icon: Icon,
    title,
    description,
    gradient,
    iconColor,
    borderColor,
    index
}: CardFeatureProps) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            whileHover={{ scale: 1.05 }}
            className={`relative overflow-hidden backdrop-blur-xl bg-white/5 rounded-2xl p-6 border ${borderColor} hover:bg-white/10 transition-all duration-300 group`}
        >
            <div className={`absolute top-0 right-0 p-4 opacity-20 bg-gradient-to-br ${gradient} blur-2xl w-32 h-32 rounded-full -mr-16 -mt-16 transition-opacity group-hover:opacity-40`}></div>

            <div className={`w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-4 ${iconColor} border ${borderColor} group-hover:scale-110 transition-transform duration-300`}>
                <Icon className="w-6 h-6" />
            </div>

            <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary-400 transition-colors">
                {title}
            </h3>

            <p className="text-gray-400 text-sm leading-relaxed mb-4">
                {description}
            </p>
        </motion.div>
    );
};

export default CardFeature;
