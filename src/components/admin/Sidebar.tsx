"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import ThemeToggle from '../ThemeToggle';
import { profileData } from '../../data/profileData';

export type TabType = 'leads' | 'projects' | 'blogs' | 'testimonials';

interface SidebarProps {
    activeTab: TabType;
    setActiveTab: (tab: TabType) => void;
    onLogout: () => void;
    unreadCount: number;
}

export default function Sidebar({ activeTab, setActiveTab, onLogout, unreadCount }: SidebarProps) {
    const [isMobileOpen, setIsMobileOpen] = useState(false);

    const menuItems = [
        { id: 'leads' as TabType, label: 'Leads Inbox', badge: unreadCount > 0 ? unreadCount : undefined },
        { id: 'projects' as TabType, label: 'Projects' },
        { id: 'blogs' as TabType, label: 'Blog Posts' },
        { id: 'testimonials' as TabType, label: 'Testimonials' },
    ];

    const handleTabClick = (tabId: TabType) => {
        setActiveTab(tabId);
        setIsMobileOpen(false);
    };

    return (
        <>
            {/* Desktop Sidebar */}
            <aside className="hidden lg:flex flex-col w-64 min-h-screen bg-gray-50/50 dark:bg-[#080808]/50 border-r border-gray-200/50 dark:border-white/5 backdrop-blur-xl p-6 fixed left-0 top-0 h-full z-30">
                {/* Admin Header Branding */}
                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200/50 dark:border-white/5">
                    <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center font-black text-white text-sm shadow-md">
                            A
                        </div>
                        <span className="font-black text-sm uppercase tracking-widest text-gray-900 dark:text-white">
                            Console
                        </span>
                    </div>
                    <ThemeToggle />
                </div>

                {/* Profile Card */}
                <div className="flex items-center gap-3 p-3 bg-gray-100/50 dark:bg-white/5 border border-gray-200/20 dark:border-white/5 rounded-2xl mb-8">
                    <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center border border-primary-500/20 text-primary-500 flex-shrink-0 font-black text-sm">
                        {profileData.personal.shortName?.charAt(0) ?? 'A'}
                    </div>
                    <div className="min-w-0 text-left">
                        <p className="text-xs font-black text-gray-800 dark:text-white truncate">
                            {profileData.personal.shortName}
                        </p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                            Administrator
                        </p>
                    </div>
                </div>

                {/* Sidebar Menu Items */}
                <nav className="flex-1 space-y-1.5 text-left">
                    {menuItems.map((item) => {
                        const isActive = activeTab === item.id;
                        return (
                            <button
                                key={item.id}
                                onClick={() => handleTabClick(item.id)}
                                className={`relative w-full flex items-center justify-between px-4 py-3 rounded-xl font-extrabold text-sm transition-all focus:outline-none ${
                                    isActive
                                        ? 'text-primary-600 dark:text-primary-400 bg-primary-500/5'
                                        : 'text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100/50 dark:hover:bg-white/5'
                                }`}
                            >
                                {isActive && (
                                    <motion.div
                                        layoutId="activeTabIndicator"
                                        className="absolute inset-0 bg-primary-500/5 dark:bg-primary-500/10 rounded-xl border-l-[3px] border-primary-500"
                                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                                    />
                                )}
                                <span className="relative z-10">{item.label}</span>
                                {item.badge !== undefined && (
                                    <span className="relative z-10 px-2 py-0.5 rounded-full text-[10px] font-black bg-primary-500 text-slate-950 shadow-sm animate-pulse">
                                        {item.badge}
                                    </span>
                                )}
                            </button>
                        );
                    })}
                </nav>

                {/* Sidebar Footer / Logout */}
                <div className="pt-4 border-t border-gray-200/50 dark:border-white/5 text-left">
                    <button
                        onClick={onLogout}
                        className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-extrabold text-sm text-red-500 hover:bg-red-500/5 transition-all focus:outline-none"
                    >
                        <span>Logout</span>
                    </button>
                </div>
            </aside>

            {/* Mobile Header */}
            <header className="lg:hidden flex items-center justify-between px-6 py-4 bg-gray-50/80 dark:bg-[#050505]/80 backdrop-blur-md border-b border-gray-200/50 dark:border-white/5 fixed top-0 left-0 w-full z-30">
                <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center font-black text-white text-sm">
                        A
                    </div>
                    <span className="font-black text-sm uppercase tracking-widest text-gray-900 dark:text-white">
                        Console
                    </span>
                </div>
                <div className="flex items-center gap-2">
                    <ThemeToggle />
                    <button
                        onClick={() => setIsMobileOpen(true)}
                        className="px-3 py-1.5 rounded-lg text-xs font-black text-gray-500 dark:text-zinc-400 hover:text-gray-950 dark:hover:text-white border border-gray-200/50 dark:border-white/10"
                        aria-label="Open sidebar"
                    >
                        Menu
                    </button>
                </div>
            </header>

            {/* Mobile Drawer Slide-out overlay */}
            <AnimatePresence>
                {isMobileOpen && (
                    <>
                        {/* Overlay backdrop */}
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={() => setIsMobileOpen(false)}
                            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
                        />

                        {/* Slide drawer container */}
                        <motion.aside
                            initial={{ x: '-100%' }}
                            animate={{ x: 0 }}
                            exit={{ x: '-100%' }}
                            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                            className="fixed left-0 top-0 h-full w-72 bg-gray-50 dark:bg-[#0c0c0c] border-r border-gray-200/50 dark:border-white/5 p-6 z-50 flex flex-col justify-between lg:hidden"
                        >
                            <div>
                                <div className="flex items-center justify-between mb-8 pb-4 border-b border-gray-200/50 dark:border-white/5">
                                    <div className="flex items-center gap-2">
                                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-primary-500 to-purple-600 flex items-center justify-center font-black text-white text-sm">
                                            A
                                        </div>
                                        <span className="font-black text-sm uppercase tracking-widest text-gray-900 dark:text-white">
                                            Console
                                        </span>
                                    </div>
                                    <button
                                        onClick={() => setIsMobileOpen(false)}
                                        className="px-2.5 py-1 rounded-lg text-xs font-black text-gray-500 dark:text-zinc-400 hover:bg-gray-100 dark:hover:bg-white/5"
                                        aria-label="Close sidebar"
                                    >
                                        ✕
                                    </button>
                                </div>

                                {/* Profile info */}
                                <div className="flex items-center gap-3 p-3 bg-gray-100 dark:bg-white/5 border border-gray-200/20 dark:border-white/5 rounded-2xl mb-8">
                                    <div className="w-10 h-10 rounded-full bg-primary-500/10 flex items-center justify-center text-primary-500 flex-shrink-0 font-black text-sm">
                                        {profileData.personal.name?.charAt(0) ?? 'A'}
                                    </div>
                                    <div className="min-w-0 text-left">
                                        <p className="text-xs font-black text-gray-800 dark:text-white truncate">
                                            {profileData.personal.name}
                                        </p>
                                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">
                                            Administrator
                                        </p>
                                    </div>
                                </div>

                                {/* Menu Items */}
                                <nav className="space-y-1.5 text-left">
                                    {menuItems.map((item) => {
                                        const isActive = activeTab === item.id;
                                        return (
                                            <button
                                                key={item.id}
                                                onClick={() => handleTabClick(item.id)}
                                                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl font-extrabold text-sm transition-all focus:outline-none ${
                                                    isActive
                                                        ? 'text-primary-600 dark:text-primary-400 bg-primary-500/10 border-l-[3px] border-primary-500'
                                                        : 'text-gray-500 dark:text-zinc-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5'
                                                }`}
                                            >
                                                <span>{item.label}</span>
                                                {item.badge !== undefined && (
                                                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-primary-500 text-slate-950 animate-pulse">
                                                        {item.badge}
                                                    </span>
                                                )}
                                            </button>
                                        );
                                    })}
                                </nav>
                            </div>

                            {/* Logout panel */}
                            <div className="pt-4 border-t border-gray-200/50 dark:border-white/5 text-left">
                                <button
                                    onClick={() => {
                                        setIsMobileOpen(false);
                                        onLogout();
                                    }}
                                    className="w-full flex items-center gap-3 px-4 py-3 rounded-xl font-extrabold text-sm text-red-500 hover:bg-red-500/5 transition-all focus:outline-none"
                                >
                                    <span>Logout</span>
                                </button>
                            </div>
                        </motion.aside>
                    </>
                )}
            </AnimatePresence>
        </>
    );
}
