import { Github, Linkedin, Mail, Twitter, Heart, ArrowUp } from 'lucide-react';
import { profileData } from '../../data/profileData';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    const socialLinks = [
        { icon: Github, href: '#', label: 'GitHub' },
        { icon: Linkedin, href: '#', label: 'LinkedIn' },
        { icon: Twitter, href: '#', label: 'Twitter' },
        { icon: Mail, href: `mailto:${profileData.personal.email}`, label: 'Email' }
    ];

    return (
        <footer className="relative bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-gray-800 pt-16 pb-8 overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary-100 dark:bg-primary-900/10 rounded-full blur-3xl opacity-30"></div>
                <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-100 dark:bg-purple-900/10 rounded-full blur-3xl opacity-30"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-3 gap-12 mb-12 items-start">

                    {/* Brand */}
                    <div className="text-center md:text-left">
                        <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400 mb-4">
                            {profileData.personal.shortName}
                        </h2>
                        <p className="text-gray-600 dark:text-gray-400 max-w-xs mx-auto md:mx-0 leading-relaxed">
                            {profileData.hero.subtitle.split('.')[0]}. Let's build something amazing together.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div className="text-center">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">Quick Links</h3>
                        <ul className="space-y-4">
                            {['Home', 'About', 'Skills', 'Projects'].map((item) => (
                                <li key={item}>
                                    <a
                                        href={item === "Home" ? "/" : `/${item.toLowerCase()}`}
                                        className="text-gray-600 dark:text-gray-400 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Socials */}
                    <div className="text-center md:text-right">
                        <h3 className="text-sm font-semibold text-gray-900 dark:text-white uppercase tracking-wider mb-6">Connect</h3>
                        <div className="flex gap-4 justify-center md:justify-end mb-6">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="p-3 bg-gray-50 dark:bg-gray-800 text-gray-600 dark:text-gray-400 rounded-xl hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-600 dark:hover:text-primary-400 transition-all hover:scale-110"
                                        aria-label={social.label}
                                    >
                                        <Icon className="w-5 h-5" />
                                    </a>
                                );
                            })}
                        </div>
                        <button
                            onClick={scrollToTop}
                            className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-gray-500 hover:text-primary-600 dark:hover:text-primary-400 transition-colors"
                        >
                            Back to Top <ArrowUp className="w-4 h-4" />
                        </button>
                    </div>
                </div>

                {/* Divider with gradient */}
                <div className="h-px w-full bg-gradient-to-r from-transparent via-gray-200 dark:via-gray-800 to-transparent mb-8"></div>

                {/* Bottom Bar */}
                <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-gray-500 dark:text-gray-500">
                    <p>
                        © {currentYear} {profileData.personal.name}. All rights reserved.
                    </p>
                    <p className="flex items-center gap-1.5">
                        Made with <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" /> by {profileData.personal.shortName}
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
