import { useState, FormEvent } from 'react';
import { motion } from 'framer-motion';
import { Helmet } from 'react-helmet-async';
import { Mail, Lock, User, Eye, EyeOff } from 'lucide-react';
import { Link } from 'react-router-dom';
import { profileData } from '../data/profileData';

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    rememberMe: false
  });

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login:', formData);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  return (
    <>
      <Helmet>
        <title>Login - {profileData.personal.name}</title>
        <meta name="description" content="Login to access your account" />
        <link rel="canonical" href={`${profileData.seo.baseUrl}/login`} />
      </Helmet>

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

              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Email Field */}
                <div>
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
                      className="block w-full pl-10 pr-3 py-3 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-600/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>

                {/* Password Field */}
                <div>
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
                      className="block w-full pl-10 pr-12 py-3 bg-white/10 dark:bg-gray-800/20 backdrop-blur-sm border border-white/20 dark:border-gray-600/30 rounded-xl text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-transparent transition-all"
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
                    to="#"
                    className="text-sm text-white/80 hover:text-white transition-colors"
                  >
                    Forgot Password?
                  </Link>
                </div>

                {/* Login Button */}
                <motion.button
                  type="submit"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 px-4 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-xl transition-all focus:outline-none focus:ring-2 focus:ring-purple-500/50"
                >
                  LOGIN
                </motion.button>

                {/* Sign Up Link */}
                <p className="text-center text-sm text-white/70">
                  Don't have an account?{' '}
                  <Link
                    to="/contact"
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
    </>
  );
};

export default Login;

