import { motion } from 'framer-motion';
import { profileData } from '../../data/profileData';
import { Quote } from 'lucide-react';

const Testimonials = () => {
    return (
        <section className="py-20 bg-white dark:bg-gray-900 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Testimonials</span>
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                        What clients and colleagues say about working with me.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-3 gap-8">
                    {profileData.testimonials.map((testimonial: any, index: number) => (
                        <motion.div
                            key={testimonial.id}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative bg-gray-50 dark:bg-gray-800 rounded-2xl p-8 pt-12 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-gray-100 dark:border-gray-700"
                        >
                            <div className="absolute top-8 left-8">
                                <Quote className="w-10 h-10 text-primary-200 dark:text-primary-900/50" />
                            </div>

                            <div className="relative z-10">
                                <p className="text-gray-600 dark:text-gray-300 mb-6 italic">
                                    "{testimonial.content}"
                                </p>

                                <div className="flex items-center">
                                    <img
                                        src={testimonial.avatar}
                                        alt={testimonial.name}
                                        className="w-12 h-12 rounded-full object-cover mr-4 border-2 border-primary-500"
                                    />
                                    <div>
                                        <h4 className="font-bold text-gray-900 dark:text-white">{testimonial.name}</h4>
                                        <p className="text-sm text-gray-500 dark:text-gray-400">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
