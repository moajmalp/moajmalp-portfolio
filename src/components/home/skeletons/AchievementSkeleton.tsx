import Skeleton from '../../common/Skeleton';

const AchievementSkeleton = () => {
    return (
        <section className="py-24 bg-white dark:bg-[#050505] relative overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
                    {[1, 2, 3, 4].map((i) => (
                        <div key={i} className="flex flex-col items-center text-center">
                            <Skeleton className="w-16 h-16 md:w-20 md:h-20 rounded-2xl md:rounded-3xl mb-6" />
                            <Skeleton className="w-24 h-12 mb-4" />
                            <Skeleton className="w-32 h-4 rounded-full" />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default AchievementSkeleton;
