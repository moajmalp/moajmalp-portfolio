"use client";

import { motion } from 'framer-motion';
import { MessageCircle, Lightbulb, Zap, BookOpen, MapPin } from 'lucide-react';
import { profileData } from '../../data/profileData';
import PageHeader from '../../components/common/PageHeader';
import CardFeature from '../../components/common/CardFeature';
import TimelineCard from '../../components/common/TimelineCard';

export default function About() {
    const features = [
        {
            icon: MessageCircle,
            title: 'Communication',
            description: 'Excellent communication skills with clients and team members, ensuring clear understanding and smooth collaboration.',
            gradient: 'from-blue-500/20 to-cyan-500/20',
            iconColor: 'text-blue-400',
        },
        {
            icon: Lightbulb,
            title: 'Problem Solver',
            description: 'Creative problem-solving approach with analytical thinking to overcome challenges and deliver innovative solutions.',
            gradient: 'from-yellow-500/20 to-orange-500/20',
            iconColor: 'text-yellow-400',
        },
        {
            icon: Zap,
            title: 'Adaptable',
            description: 'Quick to adapt to new technologies, methodologies, and changing project requirements with flexibility.',
            gradient: 'from-purple-500/20 to-pink-500/20',
            iconColor: 'text-purple-400',
        },
        {
            icon: BookOpen,
            title: 'Fast Learner',
            description: 'Eager to learn new skills and continuously improve, staying updated with latest industry trends and best practices.',
            gradient: 'from-green-500/20 to-emerald-500/20',
            iconColor: 'text-green-400',
        },
    ];

    const journey = [
        {
            title: 'Started Web Development',
            date: '2020',
            description: 'Began learning HTML, CSS, and JavaScript fundamentals while pursuing my BA in Sociology.',
        },
        {
            title: 'WordPress Specialization',
            date: '2023',
            description: 'Focused on WordPress development, creating custom themes and plugins for various clients.',
        },
        {
            title: 'SEO Expertise',
            date: '2024',
            description: 'Expanded skills to include SEO optimization, helping businesses improve their online visibility.',
        },
        {
            title: 'Current Focus',
            date: '2024 - Present',
            description: 'Working as WordPress Developer & SEO Contributor while pursuing MA in Arabic Literature.',
        },
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <PageHeader
                    subtitle="ABOUT US"
                    title="About Me"
                    highlight="Me"
                    description="Get to know more about my background, skills, and journey in web development and SEO."
                />

                {/* Main Content - Photo & Details */}
                <div className="grid md:grid-cols-2 gap-12 mb-20 mt-12">
                    {/* Photo/Avatar */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative w-full h-96 rounded-3xl overflow-hidden bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 shadow-xl flex items-center justify-center">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary-500/5 to-purple-500/5"></div>
                            <div className="absolute inset-0 flex items-center justify-center">
                                <div className="text-8xl font-black text-primary-500/10 dark:text-white/10">
                                    {profileData.personal.name.split(' ').map(n => n[0]).join('')}
                                </div>
                            </div>
                            {/* Shine Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-500/5 to-transparent animate-shine" />
                        </div>
                    </motion.div>

                    {/* Details */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <div className="bg-white dark:bg-gray-900 rounded-3xl p-8 border border-gray-200 dark:border-gray-800 shadow-xl">
                            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                                I AM AVAILABLE FOR{' '}
                                <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">
                                    UI/UX DESIGN PROJECT
                                </span>
                            </h2>
                            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6 font-medium">
                                {profileData.biography}
                            </p>
                            <div className="flex items-center gap-2 p-4 bg-primary-500/5 dark:bg-primary-500/10 rounded-xl border border-primary-500/10 dark:border-primary-400/20">
                                <MapPin className="w-5 h-5 text-primary-500 dark:text-primary-400" />
                                <span className="text-gray-800 dark:text-white font-semibold">
                                    <strong>Location:</strong> {profileData.personal.location}
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Feature Tiles */}
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
                    >
                        Key <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">Strengths</span>
                    </motion.h2>
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {features.map((feature, index) => (
                            <CardFeature
                                key={feature.title}
                                icon={feature.icon}
                                title={feature.title}
                                description={feature.description}
                                iconColor={feature.iconColor}
                                index={index}
                            />
                        ))}
                    </div>
                </div>

                {/* My Journey Timeline */}
                <div>
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white text-center mb-12"
                    >
                        My <span className="bg-gradient-to-r from-primary-500 to-primary-600 bg-clip-text text-transparent">Journey</span>
                    </motion.h2>
                    <div className="max-w-3xl mx-auto">
                        {journey.map((item, index) => (
                            <TimelineCard
                                key={index}
                                title={item.title}
                                date={item.date}
                                description={item.description}
                                index={index}
                                isLast={index === journey.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
