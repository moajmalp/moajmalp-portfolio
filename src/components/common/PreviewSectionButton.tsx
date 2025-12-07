import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

interface PreviewSectionButtonProps {
    to: string;
    label: string;
}

const PreviewSectionButton = ({ to, label }: PreviewSectionButtonProps) => {
    return (
        <div className="flex justify-center mt-12">
            <Link to={to}>
                <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="group flex items-center gap-2 px-8 py-3 bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary-500/50 rounded-full text-white font-medium transition-all duration-300"
                >
                    {label}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform text-primary-400" />
                </motion.button>
            </Link>
        </div>
    );
};

export default PreviewSectionButton;
