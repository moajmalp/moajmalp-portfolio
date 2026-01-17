import Skeleton from '../../common/Skeleton';

const HeroSkeleton = () => {
    return (
        <section className="relative min-h-[100svh] flex items-center justify-center overflow-hidden bg-white dark:bg-[#050505] pt-20 lg:pt-16">
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
                    {/* Left Content */}
                    <div className="text-center lg:text-left order-2 lg:order-1 flex flex-col items-center lg:items-start">
                        <Skeleton className="w-48 h-8 mb-6 rounded-full" />
                        <Skeleton className="w-full max-w-md h-16 md:h-24 mb-6" />
                        <Skeleton className="w-64 h-8 mb-6" />
                        <Skeleton className="w-full max-w-xl h-20 mb-8" />
                        <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-8">
                            <Skeleton className="w-full sm:w-48 h-14 rounded-2xl" />
                            <Skeleton className="w-full sm:w-48 h-14 rounded-2xl" />
                        </div>
                        <div className="flex gap-3 p-1.5 h-12 w-48 bg-gray-100/50 dark:bg-white/[0.02] rounded-[1.25rem]">
                            <Skeleton className="w-full h-full rounded-xl" />
                        </div>
                    </div>

                    {/* Right Visuals */}
                    <div className="order-1 lg:order-2 flex justify-center relative">
                        <div className="relative w-full aspect-square max-w-[420px]">
                            <Skeleton className="absolute inset-16 rounded-[2.5rem] h-[calc(100%-8rem)] w-[calc(100%-8rem)]" />
                            <Skeleton className="absolute -top-2 -right-2 w-32 h-20 rounded-[1.5rem]" />
                            <Skeleton className="absolute -bottom-2 -left-2 w-32 h-20 rounded-[1.5rem]" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroSkeleton;
