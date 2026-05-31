"use client";

import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Instagram, Mail } from 'lucide-react';
import { profileData } from '../../data/profileData';
import PageHeader from '../../components/common/PageHeader';
import ContactForm from '../../components/common/ContactForm';

export default function Contact() {
    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub', color: 'hover:text-gray-300' },
        { icon: Linkedin, href: '#', label: 'LinkedIn', color: 'hover:text-blue-400' },
        { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
        { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-400' },
        { icon: Mail, href: `mailto:${profileData.personal.email}`, label: 'Email', color: 'hover:text-primary-400' },
    ];

    return (
        <div className="pt-24 pb-16 min-h-screen bg-gray-50 dark:bg-slate-900">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
                <PageHeader
                    subtitle="GET IN TOUCH"
                    title="Contact me."
                    highlight="me."
                    description={profileData.contact.subtitle}
                />

                <ContactForm formLabels={profileData.contact.form} />

                {/* Social Links Grid */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                    className="mt-16"
                >
                    <h3 className="text-2xl font-semibold text-gray-900 dark:text-white text-center mb-8">
                        Connect With Me
                    </h3>
                    <div className="flex justify-center gap-6">
                        {socialLinks.map((social, index) => {
                            const Icon = social.icon;
                            return (
                                <motion.a
                                    key={social.label}
                                    href={social.href}
                                    target={social.href.startsWith('mailto:') ? undefined : '_blank'}
                                    rel={social.href.startsWith('mailto:') ? undefined : 'noopener noreferrer'}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    whileHover={{ scale: 1.2, y: -5, rotate: 5 }}
                                    whileTap={{ scale: 0.9 }}
                                    className={`w-14 h-14 bg-white dark:bg-gray-900 rounded-full flex items-center justify-center border border-gray-200 dark:border-gray-800 hover:border-primary-500/50 dark:hover:border-primary-500/50 shadow-md transition-all ${social.color} text-gray-700 dark:text-white`}
                                    aria-label={social.label}
                                >
                                    <Icon className="w-6 h-6" />
                                </motion.a>
                            );
                        })}
                    </div>
                </motion.div>
            </div>
        </div>
    );
}
