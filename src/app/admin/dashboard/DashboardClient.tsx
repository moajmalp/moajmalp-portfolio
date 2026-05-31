"use client";

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

import Sidebar, { TabType } from '../../../components/admin/Sidebar';
import LeadsTab, { Lead } from '../../../components/admin/LeadsTab';
import ProjectsTab, { Project } from '../../../components/admin/ProjectsTab';
import BlogsTab, { Blog } from '../../../components/admin/BlogsTab';
import TestimonialsTab, { Testimonial } from '../../../components/admin/TestimonialsTab';

export interface ToastMessage {
    id: number;
    text: string;
    type: 'success' | 'info' | 'error';
}

export default function DashboardClient() {
    const router = useRouter();
    const [activeTab, setActiveTab] = useState<TabType>('leads');
    const [mounted, setMounted] = useState(false);
    const [isLogoutConfirmOpen, setIsLogoutConfirmOpen] = useState(false);

    // Dynamic catalog states initialized locally
    const [leads, setLeads] = useState<Lead[]>([]);
    const [projects, setProjects] = useState<Project[]>([]);
    const [blogs, setBlogs] = useState<Blog[]>([]);
    const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

    // Toasts state
    const [toasts, setToasts] = useState<ToastMessage[]>([]);

    useEffect(() => {
        setMounted(true);
    }, []);

    // Display custom message alert
    const triggerToast = (text: string, type: 'success' | 'info' | 'error' = 'success') => {
        const newToast: ToastMessage = {
            id: Date.now(),
            text,
            type
        };
        setToasts(prev => [...prev, newToast]);

        // Auto remove toast after 3.5 seconds
        setTimeout(() => {
            setToasts(prev => prev.filter(t => t.id !== newToast.id));
        }, 3500);
    };

    const handleRemoveToast = (id: number) => {
        setToasts(prev => prev.filter(t => t.id !== id));
    };

    // Logout and redirect back to login route
    const handleLogout = () => {
        triggerToast("Logging out...", "info");
        setTimeout(() => {
            router.push('/login');
        }, 1000);
    };

    if (!mounted) {
        return (
            <div className="min-h-screen bg-gray-50 dark:bg-black flex items-center justify-center">
                <div className="w-8 h-8 rounded-full border-2 border-primary-500/30 border-t-primary-500 animate-spin" />
            </div>
        );
    }

    // Counts unread leads to display on sidebar badge
    const unreadLeadsCount = leads.filter(l => l.status === 'unread').length;

    // Renders active workspace tab component
    const renderActiveTabContent = () => {
        switch (activeTab) {
            case 'leads':
                return (
                    <LeadsTab
                        leads={leads}
                        setLeads={setLeads}
                        triggerToast={triggerToast}
                    />
                );
            case 'projects':
                return (
                    <ProjectsTab
                        projects={projects}
                        setProjects={setProjects}
                        triggerToast={triggerToast}
                    />
                );
            case 'blogs':
                return (
                    <BlogsTab
                        blogs={blogs}
                        setBlogs={setBlogs}
                        triggerToast={triggerToast}
                    />
                );
            case 'testimonials':
                return (
                    <TestimonialsTab
                        testimonials={testimonials}
                        setTestimonials={setTestimonials}
                        triggerToast={triggerToast}
                    />
                );
            default:
                return null;
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-[#050505] text-gray-900 dark:text-white transition-colors duration-500 flex">
            {/* Glowing Mesh background blobs */}
            <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/5 blur-[120px] rounded-full"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 blur-[120px] rounded-full"></div>
            </div>

            {/* Admin Side panel Menu */}
            <Sidebar
                activeTab={activeTab}
                setActiveTab={setActiveTab}
                onLogout={() => setIsLogoutConfirmOpen(true)}
                unreadCount={unreadLeadsCount}
            />

            {/* Main Admin Content Container */}
            <main className="flex-1 min-h-screen lg:ml-64 p-6 sm:p-8 pt-24 lg:pt-8 z-10 overflow-x-hidden">
                <div className="max-w-6xl mx-auto space-y-6">
                    {/* Upper breadcrumb info */}
                    <div className="flex flex-wrap items-center justify-between gap-4 border-b border-gray-200/50 dark:border-white/5 pb-5">
                        <div className="text-left">
                            <span className="text-[10px] font-black uppercase tracking-widest text-primary-500 flex items-center gap-1.5 mb-1">
                                Administrator Control
                            </span>
                            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-gray-950 dark:text-white capitalize">
                                {activeTab} Control
                            </h2>
                        </div>
                        <div className="text-xs font-semibold text-gray-400 bg-white dark:bg-[#0c0c0c] border border-gray-200/50 dark:border-white/5 px-4 py-2 rounded-xl shadow-sm">
                            Dashboard Sandbox Mode (Offline memory active)
                        </div>
                    </div>

                    {/* Active tab content block */}
                    <div className="relative">
                        {renderActiveTabContent()}
                    </div>
                </div>
            </main>

            {/* Logout Confirmation Modal */}
            <AnimatePresence>
                {isLogoutConfirmOpen && (
                    <div className="fixed inset-0 z-[1000] flex items-center justify-center p-4 bg-black/60 backdrop-blur-md">
                        <motion.div
                            initial={{ scale: 0.95, opacity: 0, y: 10 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.95, opacity: 0, y: 10 }}
                            className="bg-white dark:bg-[#0c0c0c] border border-gray-200/50 dark:border-white/5 rounded-3xl p-6 sm:p-8 max-w-md w-full shadow-2xl text-center"
                        >
                            <div className="w-14 h-14 bg-red-500/10 text-red-500 rounded-full flex items-center justify-center mx-auto mb-6 text-2xl font-black">
                                ←
                            </div>
                            <h3 className="text-lg sm:text-xl font-black text-gray-900 dark:text-white mb-2">
                                Confirm Logout
                            </h3>
                            <p className="text-sm text-gray-500 dark:text-zinc-400 leading-relaxed mb-6 font-medium">
                                Are you sure you want to log out of the administrator control panel? Your current sandbox session states will remain preserved.
                            </p>
                            <div className="flex gap-3 justify-center">
                                <button
                                    onClick={() => setIsLogoutConfirmOpen(false)}
                                    className="px-5 py-2.5 rounded-xl text-xs font-extrabold text-gray-500 hover:bg-gray-100 dark:hover:bg-white/5 transition-colors focus:outline-none"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={() => {
                                        setIsLogoutConfirmOpen(false);
                                        handleLogout();
                                    }}
                                    className="px-5 py-2.5 bg-red-500 hover:bg-red-600 text-white rounded-xl text-xs font-black uppercase tracking-wider transition-colors shadow-sm focus:outline-none"
                                >
                                    Yes, Logout
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>

            {/* Dynamic Glassmorphic Toast Notifications */}
            <div className="fixed bottom-6 right-6 z-[999] flex flex-col gap-2.5 max-w-sm w-full pointer-events-none">
                <AnimatePresence>
                    {toasts.map((toast) => (
                        <motion.div
                            key={toast.id}
                            initial={{ opacity: 0, y: 15, scale: 0.95 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: -10, scale: 0.95 }}
                            className="pointer-events-auto flex items-center justify-between gap-3 bg-white/95 dark:bg-[#0f0f0f]/95 backdrop-blur-xl border border-gray-250/25 dark:border-white/10 p-4 rounded-2xl shadow-2xl filter drop-shadow-lg text-left"
                        >
                            <div className="flex items-center gap-3">
                                <div className={`w-2 h-2 rounded-full flex-shrink-0 ${
                                    toast.type === 'success' ? 'bg-green-500' :
                                    toast.type === 'info' ? 'bg-blue-500' : 'bg-red-500'
                                }`} />
                                <span className="text-xs font-bold text-gray-800 dark:text-zinc-200">
                                    {toast.text}
                                </span>
                            </div>
                            <button
                                onClick={() => handleRemoveToast(toast.id)}
                                className="p-1 rounded-md text-gray-400 hover:text-gray-950 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5 transition-colors focus:outline-none text-xs font-black"
                            >
                                ✕
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
}
