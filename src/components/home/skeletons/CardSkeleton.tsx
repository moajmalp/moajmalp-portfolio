import Skeleton from '../../common/Skeleton';

const CardSkeleton = () => {
    return (
        <div className="relative h-full overflow-hidden bg-white/40 dark:bg-white/[0.03] backdrop-blur-xl rounded-[2rem] p-8 border border-gray-200/50 dark:border-white/10 shadow-2xl">
            <Skeleton className="w-14 h-14 rounded-2xl mb-8" />
            <Skeleton className="w-3/4 h-8 mb-4" />
            <Skeleton className="w-full h-4 mb-2" />
            <Skeleton className="w-full h-4 mb-2" />
            <Skeleton className="w-2/3 h-4" />
        </div>
    );
};

export default CardSkeleton;
