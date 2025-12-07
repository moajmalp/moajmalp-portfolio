import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Github, ExternalLink, Layers } from 'lucide-react';
import { profileData } from '../data/profileData';
import PageHeader from '../components/common/PageHeader';

const Projects = () => {
    return (
        <>
            <Helmet>
                <title>Projects - {profileData.personal.name}</title>
                <meta name="description" content="Explore my portfolio of web development projects, featuring React, WordPress, and full-stack applications." />
            </Helmet>

            <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-black">
                <PageHeader
                    title="Featured Projects"
                    subtitle="A showcase of my technical milestones."
                    description="Explore my portfolio of web development projects, featuring React, WordPress, and full-stack applications."
                />

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {profileData.projects.map((project: any, index: number) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -10 }}
                                className="group relative bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-primary-500/50 dark:hover:border-primary-500/50 transition-all duration-300 shadow-xl hover:shadow-2xl hover:shadow-primary-500/10 flex flex-col h-full"
                            >
                                {/* Image Container */}
                                <div className="relative h-64 overflow-hidden shrink-0">
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10 opacity-60 group-hover:opacity-40 transition-opacity"></div>
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-out"
                                    />

                                    {/* Floating Badge */}
                                    {project.featured && (
                                        <div className="absolute top-4 right-4 z-20 bg-white/90 dark:bg-black/90 backdrop-blur text-primary-600 text-xs font-bold px-3 py-1.5 rounded-full shadow-lg border border-gray-200 dark:border-gray-800 flex items-center gap-1">
                                            <Layers className="w-3 h-3" />
                                            Featured
                                        </div>
                                    )}
                                </div>

                                {/* Content */}
                                <div className="relative p-8 flex flex-col flex-1">
                                    {/* Decorative Gradient line */}
                                    <div className="absolute top-0 left-8 right-8 h-px bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-700 to-transparent group-hover:via-primary-500/50 transition-colors duration-500"></div>

                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-3 leading-relaxed flex-1">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                                        {project.tags.map((tag: string) => (
                                            <span
                                                key={tag}
                                                className="px-3 py-1.5 bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 text-xs font-semibold rounded-lg border border-gray-200 dark:border-gray-700"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4">
                                        <a
                                            href={project.liveUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 text-white rounded-xl font-semibold hover:bg-primary-700 transition-colors shadow-lg shadow-primary-500/25 text-sm group/btn"
                                        >
                                            <span>Live Demo</span>
                                            <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                        </a>
                                        <a
                                            href={project.codeUrl}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-3 bg-white dark:bg-gray-800 text-gray-700 dark:text-white rounded-xl font-semibold border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors text-sm"
                                        >
                                            <Github className="w-4 h-4" />
                                            <span>Code</span>
                                        </a>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
};

export default Projects;
