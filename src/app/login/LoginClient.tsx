"use client";

import { useState, FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';


export default function Login() {
    const router = useRouter();
    const [showPassword, setShowPassword] = useState(false);
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        email: '',
        password: '',
        rememberMe: false
    });
    const [errors, setErrors] = useState<{
        email?: string;
        password?: string;
    }>({});

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        
        const newErrors: typeof errors = {};
        
        if (!formData.email.trim()) {
            newErrors.email = "Please fill in this field.";
        } else if (!formData.email.includes('@')) {
            newErrors.email = `Please include an '@' in the email address. '${formData.email}' is missing an '@'.`;
        }
        
        if (!formData.password.trim()) {
            newErrors.password = "Please fill in this field.";
        }
        
        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
            if (newErrors.email) {
                document.getElementById('email')?.focus();
            } else if (newErrors.password) {
                document.getElementById('password')?.focus();
            }
            return;
        }

        setLoading(true);
        // Simulate a smooth authentication delay
        setTimeout(() => {
            router.push('/admin/dashboard');
        }, 1200);
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
        if (errors[name as 'email' | 'password']) {
            setErrors(prev => ({ ...prev, [name]: undefined }));
        }
    };

    return (
        <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 pt-20">
            {/* Animated Background Blobs */}
            <div className="absolute inset-0 overflow-hidden">
                <motion.div
                    animate={{
                        x: [0, 100, 0],
                        y: [0, 50, 0],
                        scale: [1, 1.2, 1]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                    className="absolute top-20 left-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl"
                />
                <motion.div
                    animate={{
                        x: [0, -100, 0],
                        y: [0, -50, 0],
                        scale: [1, 1.3, 1]
                    }}
                    transition={{
                        duration: 25,
                        repeat: Infinity,
                        ease: 'linear'
                    }}
                    className="absolute bottom-20 right-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl"
                />
            </div>

            <div className="relative z-10 w-full max-w-md px-4">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="relative"
                >
                    {/* Glassmorphism Card */}
                    <div className="backdrop-blur-xl bg-white/10 dark:bg-gray-900/20 rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-gray-700/30">
                        {/* User Icon */}
                        <div className="flex justify-center mb-6">
                            <div className="w-20 h-20 rounded-full bg-gradient-to-br from-purple-500/20 to-blue-500/20 backdrop-blur-md border-2 border-white/30 dark:border-gray-600/30 flex items-center justify-center">
                                <User className="w-10 h-10 text-white/80" />
                            </div>
                        </div>

                        <h2 className="text-3xl font-bold text-center text-white mb-2">Welcome Back</h2>
                        <p className="text-center text-white/70 mb-8">Sign in to your account</p>

                        <form onSubmit={handleSubmit} noValidate className="space-y-6">
                            {/* Email Field */}
                            <div className="relative">
                                <label htmlFor="email" className="block text-sm font-medium text-white/90 mb-2">
                                    Email ID
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Mail className="h-5 w-5 text-white/50" />
                                    </div>
                                    <input
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className={`block w-full pl-10 pr-3 py-3 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border ${errors.email ? 'border-amber-500 focus:ring-amber-500/50' : 'border-white/20 dark:border-gray-600/30'} rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                                        placeholder="Enter your email"
                                    />
                                </div>
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

                            {/* Password Field */}
                            <div className="relative">
                                <label htmlFor="password" className="block text-sm font-medium text-white/90 mb-2">
                                    Password
                                </label>
                                <div className="relative">
                                    <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                        <Lock className="h-5 w-5 text-white/50" />
                                    </div>
                                    <input
                                        type={showPassword ? 'text' : 'password'}
                                        id="password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        required
                                        className={`block w-full pl-10 pr-12 py-3 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border ${errors.password ? 'border-amber-500 focus:ring-amber-500/50' : 'border-white/20 dark:border-gray-600/30'} rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:border-transparent transition-all`}
                                        placeholder="Enter your password"
                                    />
                                    <button
                                        type="button"
                                        onClick={() => setShowPassword(!showPassword)}
                                        className="absolute inset-y-0 right-0 pr-3 flex items-center"
                                    >
                                        {showPassword ? (
                                            <EyeOff className="h-5 w-5 text-white/50 hover:text-white/80 transition-colors" />
                                        ) : (
                                            <Eye className="h-5 w-5 text-white/50 hover:text-white/80 transition-colors" />
                                        )}
                                    </button>
                                </div>
                                <AnimatePresence>
                                    {errors.password && (
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
                                                <span className="leading-tight">{errors.password}</span>
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>

                            {/* Remember Me & Forgot Password */}
                            <div className="flex items-center justify-between">
                                <label className="flex items-center">
                                    <input
                                        type="checkbox"
                                        name="rememberMe"
                                        checked={formData.rememberMe}
                                        onChange={handleChange}
                                        className="w-4 h-4 rounded border-white/30 bg-white/10 text-purple-600 focus:ring-purple-500/50 focus:ring-offset-0"
                                    />
                                    <span className="ml-2 text-sm text-white/80">Remember me</span>
                                </label>
                                <Link
                                    href="#"
                                    className="text-sm text-white/80 hover:text-white transition-colors"
                                >
                                    Forgot Password?
                                </Link>
                            </div>

                            {/* Login Button */}
                            <motion.button
                                type="submit"
                                disabled={loading}
                                whileHover={{ scale: loading ? 1 : 1.02 }}
                                whileTap={{ scale: loading ? 1 : 0.98 }}
                                className={`w-full py-3 px-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50 flex items-center justify-center gap-2 ${loading ? 'opacity-85 cursor-not-allowed' : ''}`}
                            >
                                {loading ? (
                                    <>
                                        <div className="w-5 h-5 rounded-full border-2 border-white/30 border-t-white animate-spin" />
                                        SIGNING IN...
                                    </>
                                ) : (
                                    "LOGIN"
                                )}
                            </motion.button>

                            {/* Sign Up Link */}
                            <p className="text-center text-sm text-white/70">
                                Don't have an account?{' '}
                                <Link
                                    href="/contact"
                                    className="text-white hover:text-purple-300 font-semibold transition-colors"
                                >
                                    Sign Up
                                </Link>
                            </p>
                        </form>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
