import { motion } from 'framer-motion';

interface TimelineCardProps {
    title: string;
    date: string;
    description: string;
    index: number;
    isLast: boolean;
}

const TimelineCard = ({ title, date, description, index, isLast }: TimelineCardProps) => {
    return (
        <div className="relative pl-8 pb-8 md:pl-0 md:pb-12 md:grid md:grid-cols-5 items-center gap-8 group">
            {/* Date (Left side on desktop) */}
            <div className="md:col-span-1 md:text-right hidden md:block">
                <span className="text-primary-400 font-bold text-xl">{date}</span>
            </div>

            {/* Timeline Line & Dot */}
            <div className="absolute left-0 top-0 bottom-0 md:static md:col-span-1 md:flex md:justify-center md:relative">
                {/* Line */}
                {!isLast && (
                    <div className="hidden md:block absolute top-[50%] left-[50%] -translate-x-1/2 w-0.5 h-full bg-gradient-to-b from-primary-500 to-primary-600 -z-10"></div>
                )}
                <div className="md:hidden absolute left-0 top-2 bottom-0 w-0.5 bg-gradient-to-b from-primary-500 to-primary-600"></div>

                {/* Dot */}
                <motion.div
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, type: "spring" }}
                    className="w-4 h-4 rounded-full bg-primary-500 border-2 border-slate-900 shadow-[0_0_10px_rgba(236,72,153,0.5)] md:w-6 md:h-6 md:absolute md:top-[50%] md:left-[50%] md:-translate-x-1/2 md:-translate-y-1/2 z-10"
                ></motion.div>
            </div>

            {/* Content Card (Right side on desktop) */}
            <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 + 0.2 }}
                whileHover={{ y: -5 }}
                className="md:col-span-3 backdrop-blur-xl bg-white/10 rounded-xl p-6 border border-white/10 shadow-lg hover:shadow-2xl transition-all duration-300"
            >
                <div className="md:hidden mb-2 text-primary-400 font-bold text-sm">{date}</div>
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm md:text-base">
                    {description}
                </p>
            </motion.div>
        </div>
    );
};

export default TimelineCard;
