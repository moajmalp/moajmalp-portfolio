
interface SkeletonProps {
    className?: string;
    variant?: 'rectangle' | 'circle' | 'text';
}

const Skeleton = ({ className = '', variant = 'rectangle' }: SkeletonProps) => {
    const baseClasses = "relative overflow-hidden bg-gray-200 dark:bg-white/10";
    const variantClasses = {
        rectangle: "rounded-lg",
        circle: "rounded-full",
        text: "rounded h-4 w-full"
    };

    return (
        <div className={`${baseClasses} ${variantClasses[variant]} ${className}`}>
            <div className="absolute inset-0 -translate-x-full animate-[shimmer_2s_infinite] bg-gradient-to-r from-transparent via-white/20 dark:via-white/5 to-transparent"></div>
        </div>
    );
};

export default Skeleton;
