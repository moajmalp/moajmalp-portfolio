import { motion } from 'framer-motion';

interface PageHeaderProps {
    subtitle: string;
    title: string;
    highlight?: string;
    description: string;
}

const PageHeader = ({ subtitle, title, highlight, description }: PageHeaderProps) => {
    // Split title to highlight specific word if needed
    const titleParts = highlight ? title.split(highlight) : [title];

    return (
        <div className="mb-16 text-center max-w-3xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
            >
                <span className="text-primary-400 font-semibold tracking-wider uppercase text-sm mb-2 block">
                    {subtitle}
                </span>
                <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
                    {highlight ? (
                        <>
                            {titleParts[0]}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-400 to-primary-600">
                                {highlight}
                            </span>
                            {titleParts[1]}
                        </>
                    ) : (
                        title
                    )}
                </h1>
                <div className="w-24 h-1.5 bg-gradient-to-r from-primary-400 to-primary-600 mx-auto rounded-full mb-6"></div>
                <p className="text-gray-300 text-lg leading-relaxed">
                    {description}
                </p>
            </motion.div>
        </div>
    );
};

export default PageHeader;
