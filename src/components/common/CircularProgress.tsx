import { motion } from 'framer-motion';

interface CircularProgressProps {
    value: number;
    size?: number;
    strokeWidth?: number;
}

const CircularProgress = ({
    value,
    size = 100,
    strokeWidth = 8,
}: CircularProgressProps) => {
    const radius = (size - strokeWidth) / 2;
    const circumference = radius * 2 * Math.PI;
    const offset = circumference - (value / 100) * circumference;

    return (
        <div className="relative flex items-center justify-center" style={{ width: size, height: size }}>
            <svg
                width={size}
                height={size}
                viewBox={`0 0 ${size} ${size}`}
                className="transform -rotate-90"
            >
                {/* Background circle */}
                <circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    className="text-gray-700/30"
                />
                {/* Progress circle */}
                <motion.circle
                    cx={size / 2}
                    cy={size / 2}
                    r={radius}
                    stroke="currentColor"
                    strokeWidth={strokeWidth}
                    fill="transparent"
                    strokeDasharray={circumference}
                    initial={{ strokeDashoffset: circumference }}
                    whileInView={{ strokeDashoffset: offset }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    className="text-primary-500 drop-shadow-[0_0_10px_rgba(236,72,153,0.5)]"
                    strokeLinecap="round"
                />
            </svg>
            <div className="absolute flex items-center justify-center text-white font-bold text-xl">
                {value}%
            </div>
        </div>
    );
};

export default CircularProgress;
