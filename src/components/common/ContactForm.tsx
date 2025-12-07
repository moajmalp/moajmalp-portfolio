import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

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

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');
        // Simulate API call
        setTimeout(() => {
            setStatus('success');
            // Reset after 3 seconds
            setTimeout(() => setStatus('idle'), 3000);
        }, 1500);
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

            <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-medium text-primary-400 ml-1">
                            {formLabels.name}
                        </label>
                        <input
                            type="text"
                            id="name"
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all"
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
                            required
                            className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all"
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
                        required
                        rows={5}
                        className="w-full bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary-500/50 focus:border-primary-500/50 transition-all resize-none"
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
                    ) : (
                        <>
                            {formLabels.submit}
                            <Send className="w-5 h-5" />
                        </>
                    )}
                </button>
            </form>
        </motion.div>
    );
};

export default ContactForm;
