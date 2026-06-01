"use client";

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Send, CheckCircle2, X, Phone, Mail, MapPin } from 'lucide-react';
import { profileData } from '../../data/profileData';

interface ContactFormProps {
    formLabels: {
        name: string;
        email: string;
        message: string;
        submit: string;
        sending: string;
        success: string;
        error: string;
    };
}

const ContactForm = ({ formLabels }: ContactFormProps) => {
    const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [errors, setErrors] = useState<{
        name?: string;
        email?: string;
        message?: string;
    }>({});

    const handleInputChange = (field: 'name' | 'email' | 'message') => {
        if (errors[field]) {
            setErrors(prev => ({ ...prev, [field]: undefined }));
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const form = e.target as HTMLFormElement;
        const formData = new FormData(form);
        const name = (formData.get('name') as string) || '';
        const email = (formData.get('email') as string) || '';
        const message = (formData.get('message') as string) || '';
        
        const newErrors: typeof errors = {};
        
        if (!name.trim()) {
            newErrors.name = "Please fill in this field.";
        }
        
        if (!email.trim()) {
            newErrors.email = "Please fill in this field.";
        } else if (!email.includes('@')) {
            newErrors.email = `Please include an '@' in the email address. '${email}' is missing an '@'.`;
        } else {
            const parts = email.split('@');
            if (!parts[1] || !parts[1].trim()) {
                newErrors.email = `Please enter a part followed by '@'. '${email}' is incomplete.`;
            }
        }
        
        if (!message.trim()) {
            newErrors.message = "Please fill in this field.";
        }
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            // Focus the first invalid element
            if (newErrors.name) {
                document.getElementById('name')?.focus();
            } else if (newErrors.email) {
                document.getElementById('email')?.focus();
            } else if (newErrors.message) {
                document.getElementById('message')?.focus();
            }
            return;
        }

        setStatus('sending');

        const data = {
            name,
            email,
            message,
        };

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data),
            });

            if (response.ok) {
                // Save lead locally in localStorage to sync with the admin dashboard inbox
                try {
                    const existingLeads = JSON.parse(localStorage.getItem('portfolio_leads') || '[]');
                    const newLead = {
                        id: Date.now(),
                        name,
                        email,
                        message,
                        date: new Date().toLocaleString('en-US', {
                            month: 'short',
                            day: '2-digit',
                            year: 'numeric',
                            hour: 'numeric',
                            minute: '2-digit',
                            hour12: true
                        }),
                        status: 'unread'
                    };
                    existingLeads.unshift(newLead);
                    localStorage.setItem('portfolio_leads', JSON.stringify(existingLeads));
                } catch (e) {
                    console.error('Failed to save lead in localStorage:', e);
                }

                setStatus('success');
                setIsSubmitted(true);
                form.reset();
            } else {
                setStatus('error');
            }
        } catch (error) {
            console.error('Submission error:', error);
            setStatus('error');
        }
    };

    const handleClosePopup = () => {
        setIsSubmitted(false);
        setStatus('idle');
    };

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-5xl mx-auto backdrop-blur-xl bg-white/5 dark:bg-zinc-900/30 rounded-3xl p-8 sm:p-12 border border-white/10 dark:border-white/5 shadow-2xl relative overflow-hidden"
        >
            <div className="grid md:grid-cols-5 gap-12 items-start relative z-10">
                {/* Left Column: Contact info */}
                <div className="md:col-span-2 flex flex-col justify-between h-full">
                    <div>
                        <h3 className="text-2xl sm:text-3xl font-bold text-gray-905 dark:text-white tracking-tight leading-tight">
                            Have an awesome project idea?
                        </h3>
                        <span className="text-primary-500 dark:text-primary-400 font-extrabold text-2xl tracking-tight mb-8 block mt-1">
                            Let's Discuss.
                        </span>
                    </div>

                    <div className="space-y-6 mt-6">
                        {/* Phone */}
                        <div className="flex items-center gap-4 group">
                            <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white/5 border border-gray-200/50 dark:border-white/10 flex items-center justify-center text-primary-500 group-hover:border-primary-500/50 group-hover:bg-primary-500/10 transition-all">
                                <Phone className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Phone</p>
                                <a href={`tel:${profileData.personal.phone}`} className="text-sm sm:text-base font-bold text-primary-600 dark:text-primary-400 hover:underline">
                                    +{profileData.personal.phone}
                                </a>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center gap-4 group">
                            <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white/5 border border-gray-200/50 dark:border-white/10 flex items-center justify-center text-primary-500 group-hover:border-primary-500/50 group-hover:bg-primary-500/10 transition-all">
                                <Mail className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Email Address</p>
                                <a href={`mailto:${profileData.personal.email}`} className="text-sm sm:text-base font-bold text-primary-600 dark:text-primary-400 hover:underline break-all">
                                    {profileData.personal.email}
                                </a>
                            </div>
                        </div>

                        {/* Location */}
                        <div className="flex items-center gap-4">
                            <div className="flex-shrink-0 w-11 h-11 rounded-full bg-white/5 border border-gray-200/50 dark:border-white/10 flex items-center justify-center text-primary-500">
                                <MapPin className="w-5 h-5" />
                            </div>
                            <div>
                                <p className="text-xs text-gray-400 font-semibold uppercase tracking-wider mb-0.5">Location</p>
                                <p className="text-sm sm:text-base font-bold text-gray-800 dark:text-gray-200">
                                    {profileData.personal.location}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Right Column: Form fields */}
                <form
                    onSubmit={handleSubmit}
                    noValidate
                    className="md:col-span-3 space-y-6 w-full text-left"
                >
                    <div className="space-y-2 relative">
                        <label htmlFor="name" className="block text-sm font-semibold text-gray-605 dark:text-gray-300 mb-1 ml-1">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            onChange={() => handleInputChange('name')}
                            className={`w-full bg-gray-50 dark:bg-white/5 border ${errors.name ? 'border-amber-500 focus:ring-amber-500/55' : 'border-gray-200 dark:border-white/10 focus:ring-primary-500/50 focus:border-primary-500/50'} rounded-xl px-4 py-3.5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all font-medium`}
                            placeholder="Enter name"
                        />
                        <AnimatePresence>
                            {errors.name && (
                                <motion.div
                                    initial={{ opacity: 0, y: -6, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -6, scale: 0.95 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute top-[calc(100%+4px)] left-4 z-20 flex flex-col items-start filter drop-shadow-md pointer-events-none select-none"
                                >
                                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white dark:border-b-gray-800 ml-5" />
                                    <div className="flex items-center gap-2.5 bg-white dark:bg-gray-800 px-3.5 py-2 rounded-lg border border-gray-250/35 dark:border-white/10 text-gray-900 dark:text-white text-xs font-semibold pointer-events-auto shadow-xl">
                                        <div className="flex-shrink-0 w-4 h-4 rounded bg-[#f58200] flex items-center justify-center text-white font-black text-[10px]">
                                            !
                                        </div>
                                        <span className="leading-tight">{errors.name}</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="space-y-2 relative">
                        <label htmlFor="email" className="block text-sm font-semibold text-gray-605 dark:text-gray-300 mb-1 ml-1">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            onChange={() => handleInputChange('email')}
                            className={`w-full bg-gray-50 dark:bg-white/5 border ${errors.email ? 'border-amber-500 focus:ring-amber-500/55' : 'border-gray-200 dark:border-white/10 focus:ring-primary-500/50 focus:border-primary-500/50'} rounded-xl px-4 py-3.5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all font-medium`}
                            placeholder="Enter email"
                        />
                        <AnimatePresence>
                            {errors.email && (
                                <motion.div
                                    initial={{ opacity: 0, y: -6, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -6, scale: 0.95 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute top-[calc(100%+4px)] left-4 z-20 flex flex-col items-start filter drop-shadow-md pointer-events-none select-none"
                                >
                                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white dark:border-b-gray-800 ml-5" />
                                    <div className="flex items-center gap-2.5 bg-white dark:bg-gray-800 px-3.5 py-2 rounded-lg border border-gray-250/35 dark:border-white/10 text-gray-900 dark:text-white text-xs font-semibold pointer-events-auto shadow-xl">
                                        <div className="flex-shrink-0 w-4 h-4 rounded bg-[#f58200] flex items-center justify-center text-white font-black text-[10px]">
                                            !
                                        </div>
                                        <span className="leading-tight">{errors.email}</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <div className="space-y-2 relative">
                        <label htmlFor="message" className="block text-sm font-semibold text-gray-605 dark:text-gray-300 mb-1 ml-1">
                            Message
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            required
                            rows={5}
                            onChange={() => handleInputChange('message')}
                            className={`w-full bg-gray-50 dark:bg-white/5 border ${errors.message ? 'border-amber-500 focus:ring-amber-500/55' : 'border-gray-200 dark:border-white/10 focus:ring-primary-500/50 focus:border-primary-500/50'} rounded-xl px-4 py-3.5 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 focus:outline-none focus:ring-2 transition-all resize-none font-medium`}
                            placeholder="Enter message"
                        />
                        <AnimatePresence>
                            {errors.message && (
                                <motion.div
                                    initial={{ opacity: 0, y: -6, scale: 0.95 }}
                                    animate={{ opacity: 1, y: 0, scale: 1 }}
                                    exit={{ opacity: 0, y: -6, scale: 0.95 }}
                                    transition={{ duration: 0.15 }}
                                    className="absolute top-[calc(100%+4px)] left-4 z-20 flex flex-col items-start filter drop-shadow-md pointer-events-none select-none"
                                >
                                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[6px] border-b-white dark:border-b-gray-800 ml-5" />
                                    <div className="flex items-center gap-2.5 bg-white dark:bg-gray-800 px-3.5 py-2 rounded-lg border border-gray-250/35 dark:border-white/10 text-gray-900 dark:text-white text-xs font-semibold pointer-events-auto shadow-xl">
                                        <div className="flex-shrink-0 w-4 h-4 rounded bg-[#f58200] flex items-center justify-center text-white font-black text-[10px]">
                                            !
                                        </div>
                                        <span className="leading-tight">{errors.message}</span>
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>

                    <button
                        type="submit"
                        disabled={status === 'sending' || status === 'success'}
                        className={`py-3.5 px-6 rounded-xl font-extrabold text-sm flex items-center gap-2 transition-all ${status === 'success'
                            ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                            : 'bg-primary-500 hover:bg-primary-400 text-slate-950 shadow-lg shadow-primary-500/10 cursor-pointer active:scale-95'
                            } disabled:opacity-70 disabled:cursor-not-allowed`}
                    >
                        {status === 'sending' ? (
                            <span className="animate-pulse">{formLabels.sending}</span>
                        ) : status === 'success' ? (
                            formLabels.success
                        ) : status === 'error' ? (
                            formLabels.error
                        ) : (
                            <>
                                {formLabels.submit}
                                <Send className="w-4 h-4" />
                            </>
                        )}
                    </button>
                </form>
            </div>

            {/* Confirmation Popup */}
            <AnimatePresence>
                {isSubmitted && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0, y: 20 }}
                            animate={{ scale: 1, opacity: 1, y: 0 }}
                            exit={{ scale: 0.9, opacity: 0, y: 20 }}
                            className="relative bg-white dark:bg-[#0a0a0a] rounded-3xl p-8 md:p-12 max-w-lg w-full shadow-2xl border border-white/10 text-center"
                        >
                            <button
                                onClick={handleClosePopup}
                                className="absolute top-6 right-6 p-2 text-gray-400 hover:text-gray-100 transition-colors"
                            >
                                <X className="w-6 h-6" />
                            </button>

                            <div className="w-20 h-20 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-8 animate-bounce">
                                <CheckCircle2 className="w-10 h-10 text-green-500" />
                            </div>

                            <h3 className="text-3xl font-black text-gray-900 dark:text-white mb-4 tracking-tight">
                                Message Sent!
                            </h3>
                            <p className="text-gray-600 dark:text-gray-400 text-lg mb-8 leading-relaxed font-medium">
                                {formLabels.success}
                            </p>

                            <button
                                onClick={handleClosePopup}
                                className="w-full py-4 bg-gradient-to-r from-primary-500 to-purple-600 text-white rounded-xl font-bold text-lg hover:shadow-lg hover:shadow-primary-500/25 transition-all"
                            >
                                Close
                            </button>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );
};

export default ContactForm;
