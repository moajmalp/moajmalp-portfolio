import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ExternalLink, Github } from 'lucide-react';
import { profileData } from '../../data/profileData';

const ProjectsPreview = () => {
    // Ensure we have an array to slice, default to empty array if undefined
    const projects = profileData.projects || [];
    const previewProjects = projects.slice(0, 3);

    return (
        <section className="py-24 bg-white dark:bg-gray-900/50 relative overflow-hidden">
            {/* Background blobs */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl -z-10"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl -z-10"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-end mb-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="mb-6 md:mb-0"
                    >
                        <span className="text-primary-600 dark:text-primary-400 font-bold tracking-wider uppercase text-sm mb-2 block">Portfolio</span>
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
                            Featured <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Projects</span>
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-xl text-lg">
                            A selection of my recent work, featuring complex web applications and creative designs.
                        </p>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                    >
                        <Link
                            to="/projects"
                            className="group inline-flex items-center space-x-2 bg-gray-100 dark:bg-gray-800 hover:bg-primary-600 hover:text-white text-gray-900 dark:text-white px-6 py-3 rounded-full font-semibold transition-all duration-300"
                        >
                            <span>View All Projects</span>
                            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                    </motion.div>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {previewProjects.map((project: any, index: number) => (
                        <motion.div
                            key={project.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -10 }}
                            className="group bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 border border-gray-100 dark:border-gray-700 flex flex-col h-full"
                        >
                            <div className="relative h-56 overflow-hidden shrink-0">
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 z-10"></div>
                                <img
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                                />

                                {/* Overlay Actions */}
                                <div className="absolute inset-0 bg-primary-600/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center gap-4">
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-white text-primary-600 rounded-full hover:scale-110 transition-transform shadow-lg"
                                        title="View Live Demo"
                                    >
                                        <ExternalLink className="w-6 h-6" />
                                    </a>
                                    <a
                                        href={project.codeUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gray-900 text-white rounded-full hover:scale-110 transition-transform shadow-lg"
                                        title="View Code"
                                    >
                                        <Github className="w-6 h-6" />
                                    </a>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-1">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-bold text-gray-900 dark:text-white group-hover:text-primary-600 dark:group-hover:text-primary-400 transition-colors line-clamp-1">
                                        {project.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 line-clamp-2 flex-1">
                                    {project.description}
                                </p>

                                <div className="flex flex-wrap gap-2 mt-auto">
                                    {project.tags.slice(0, 3).map((tag: string) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 bg-gray-100 dark:bg-gray-700/50 text-gray-600 dark:text-gray-300 text-xs font-medium rounded-lg"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProjectsPreview;
