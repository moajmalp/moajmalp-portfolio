"use client";

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, X } from 'lucide-react';
import { AnimatePresence } from 'framer-motion';

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

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        const formData = new FormData(e.target as HTMLFormElement);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message'),
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
                setStatus('success');
                setIsSubmitted(true);
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
            className="max-w-2xl mx-auto backdrop-blur-xl bg-white/10 rounded-2xl p-8 border border-white/10 shadow-2xl relative overflow-hidden"
        >
            {/* Decorative gradient */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary-400 via-purple-500 to-primary-600"></div>

            <form
                onSubmit={handleSubmit}
                className="space-y-6"
            >
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-primary-400 ml-1">
                            {formLabels.name}
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all font-medium"
                            placeholder="John Doe"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-medium text-primary-400 ml-1">
                            {formLabels.email}
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all font-medium"
                            placeholder="john@example.com"
                        />
                    </div>
                </div>

                <div className="space-y-2">
                    <label htmlFor="message" className="text-sm font-medium text-primary-400 ml-1">
                        {formLabels.message}
                    </label>
                    <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all resize-none font-medium"
                        placeholder="Tell me about your project..."
                    />
                </div>

                <button
                    type="submit"
                    disabled={status === 'sending' || status === 'success'}
                    className={`w-full py-4 rounded-lg font-bold text-lg flex items-center justify-center gap-2 transition-all ${status === 'success'
                        ? 'bg-green-500/20 text-green-400 border border-green-500/30'
                        : 'bg-gradient-to-r from-primary-500 to-purple-600 hover:from-primary-600 hover:to-purple-700 text-white shadow-lg hover:shadow-primary-500/25'
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
                            <Send className="w-5 h-5" />
                        </>
                    )}
                </button>
            </form>

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
