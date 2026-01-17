"use client";

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { profileData } from '../../data/profileData';
import { Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [direction, setDirection] = useState(0);

    useEffect(() => {
        const timer = setInterval(() => {
            nextSlide();
        }, 5000);
        return () => clearInterval(timer);
    }, [currentIndex]);

    const slideVariants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 1000 : -1000,
            opacity: 0
        }),
        center: {
            zIndex: 1,
            x: 0,
            opacity: 1
        },
        exit: (direction: number) => ({
            zIndex: 0,
            x: direction < 0 ? 1000 : -1000,
            opacity: 0
        })
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    const paginate = (newDirection: number) => {
        setDirection(newDirection);
        let newIndex = currentIndex + newDirection;
        if (newIndex < 0) newIndex = profileData.testimonials.length - 1;
        if (newIndex >= profileData.testimonials.length) newIndex = 0;
        setCurrentIndex(newIndex);
    };

    const nextSlide = () => paginate(1);
    const prevSlide = () => paginate(-1);

    const currentTestimonial = profileData.testimonials[currentIndex];

    return (
        <section className="py-24 bg-gray-50/50 dark:bg-gray-900/50 overflow-hidden relative border-y border-gray-100 dark:border-gray-800">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <span className="text-primary-600 dark:text-primary-400 font-semibold tracking-wider uppercase text-sm">Success Stories</span>
                    <h2 className="text-3xl md:text-5xl font-bold mt-2 text-gray-900 dark:text-white">
                        Client <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-purple-600">Testimonials</span>
                    </h2>
                </motion.div>

                <div className="relative max-w-4xl mx-auto h-[400px] md:h-[300px] flex items-center justify-center">
                    <AnimatePresence initial={false} custom={direction} mode="wait">
                        <motion.div
                            key={currentIndex}
                            custom={direction}
                            variants={slideVariants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{
                                x: { type: "spring", stiffness: 300, damping: 30 },
                                opacity: { duration: 0.2 }
                            }}
                            drag="x"
                            dragConstraints={{ left: 0, right: 0 }}
                            dragElastic={1}
                            onDragEnd={(_, { offset, velocity }) => {
                                const swipe = swipePower(offset.x, velocity.x);
                                if (swipe < -swipeConfidenceThreshold) {
                                    nextSlide();
                                } else if (swipe > swipeConfidenceThreshold) {
                                    prevSlide();
                                }
                            }}
                            className="absolute w-full px-4"
                        >
                            <div className="bg-white dark:bg-gray-800 rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 dark:border-gray-700 relative mx-auto max-w-3xl">
                                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-primary-500 to-purple-500 p-3 rounded-full shadow-lg">
                                    <Quote className="w-6 h-6 text-white text-center" />
                                </div>

                                <div className="flex flex-col items-center text-center mt-6">
                                    <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 italic mb-8 leading-relaxed">
                                        "{currentTestimonial.content}"
                                    </p>

                                    <div className="flex items-center gap-4">
                                        {/* Avatar with gradient border */}
                                        <div className="p-0.5 bg-gradient-to-br from-primary-500 to-purple-500 rounded-full">
                                            <img
                                                src={currentTestimonial.avatar}
                                                alt={currentTestimonial.name}
                                                className="w-12 h-12 rounded-full object-cover border-2 border-white dark:border-gray-800"
                                            />
                                        </div>
                                        <div className="text-left">
                                            <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                                                {currentTestimonial.name}
                                            </h4>
                                            <p className="text-sm text-primary-600 dark:text-primary-400 font-medium">
                                                {currentTestimonial.role}
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </AnimatePresence>

                    {/* Navigation Buttons */}
                    <div className="absolute top-1/2 -translate-y-1/2 left-0 z-10 hidden md:block">
                        <button
                            onClick={prevSlide}
                            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 transition-all border border-gray-100 dark:border-gray-700"
                            aria-label="Previous testimonial"
                        >
                            <ChevronLeft className="w-6 h-6" />
                        </button>
                    </div>
                    <div className="absolute top-1/2 -translate-y-1/2 right-0 z-10 hidden md:block">
                        <button
                            onClick={nextSlide}
                            className="p-3 bg-white dark:bg-gray-800 rounded-full shadow-lg text-gray-600 dark:text-gray-300 hover:text-primary-600 dark:hover:text-primary-400 hover:scale-110 transition-all border border-gray-100 dark:border-gray-700"
                            aria-label="Next testimonial"
                        >
                            <ChevronRight className="w-6 h-6" />
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex gap-2">
                        {profileData.testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => {
                                    setDirection(index > currentIndex ? 1 : -1);
                                    setCurrentIndex(index);
                                }}
                                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${index === currentIndex
                                    ? 'bg-primary-600 w-8'
                                    : 'bg-gray-300 dark:bg-gray-700'
                                    }`}
                                aria-label={`Go to slide ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
