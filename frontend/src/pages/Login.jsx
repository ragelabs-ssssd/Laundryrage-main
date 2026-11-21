import React, { useState } from 'react';
import { Mail, Lock, User, ArrowRight, Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

const Login = () => {
  const [isSignUp, setIsSignUp] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const navigate = useNavigate();
  const { login, signup } = useAuth();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setIsLoading(true);

    try {
      if (isSignUp) {
        if (!formData.name.trim()) throw new Error('Please enter your name');
        if (!formData.email.trim()) throw new Error('Please enter your email');
        if (formData.password.length < 6) throw new Error('Password must be at least 6 characters');
        await signup(formData.name, formData.email, formData.password);
        setSuccess('Account created! Redirecting...');
      } else {
        if (!formData.email.trim()) throw new Error('Please enter your email');
        if (!formData.password.trim()) throw new Error('Please enter your password');
        await login(formData.email, formData.password);
        setSuccess('Welcome back! Redirecting...');
      }
      setTimeout(() => navigate('/'), 1200);
    } catch (err) {
      setError(err.message || 'Something went wrong');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="pt-24 md:pt-32 pb-16 min-h-screen flex items-center justify-center relative bg-grid">
      {/* Decorative blobs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-yellow-300/20 rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-yellow-400/15 rounded-full blur-[120px]" />

      <div className="container mx-auto px-6 relative z-10 flex justify-center">
        <motion.div
          className="glass-card bg-white p-8 md:p-12 w-full max-w-md relative overflow-hidden shadow-2xl border border-gray-100"
          initial={{ opacity: 0, y: 20, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          {/* Decorative corner accent */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-yellow-400/10 to-transparent rounded-bl-full" />

          {/* Toggle: Sign In / Sign Up */}
          <div className="flex justify-center mb-10 bg-gray-100 rounded-2xl p-1.5 border border-gray-200 w-64 mx-auto relative shadow-inner">
            <button
              id="toggle-sign-in"
              type="button"
              className={`flex-1 py-2.5 rounded-xl font-bold transition-all duration-300 z-10 text-sm ${
                !isSignUp ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
              }`}
              onClick={() => { setIsSignUp(false); setError(''); setSuccess(''); }}
            >
              Sign In
            </button>
            <button
              id="toggle-sign-up"
              type="button"
              className={`flex-1 py-2.5 rounded-xl font-bold transition-all duration-300 z-10 text-sm ${
                isSignUp ? 'text-gray-900' : 'text-gray-400 hover:text-gray-600'
              }`}
              onClick={() => { setIsSignUp(true); setError(''); setSuccess(''); }}
            >
              Sign Up
            </button>
            {/* Sliding pill background */}
            <motion.div
              className="absolute top-1.5 bottom-1.5 left-1.5 w-[calc(50%-6px)] bg-white rounded-xl z-0 shadow-md border border-gray-100"
              initial={false}
              animate={{ x: isSignUp ? '100%' : '0%' }}
              transition={{ type: 'spring', stiffness: 400, damping: 35 }}
            />
          </div>

          {/* Heading */}
          <div className="text-center mb-8 relative z-10">
            <h1 className="text-3xl font-black font-poppins mb-2 text-gray-900">
              {isSignUp ? 'Create Account' : 'Welcome Back'}
            </h1>
            <p className="text-gray-500 text-sm font-medium">
              {isSignUp
                ? 'Join the premium laundry experience in Jagamara.'
                : 'Sign in to track your orders.'}
            </p>
          </div>

          {/* Error / Success messages */}
          <AnimatePresence mode="wait">
            {error && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-5 flex items-center gap-2 px-4 py-3 rounded-xl bg-red-50 border border-red-200 text-red-600 text-sm font-semibold"
              >
                <AlertCircle className="w-4 h-4 shrink-0" />
                {error}
              </motion.div>
            )}
            {success && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                className="mb-5 flex items-center gap-2 px-4 py-3 rounded-xl bg-green-50 border border-green-200 text-green-600 text-sm font-semibold"
              >
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                {success}
              </motion.div>
            )}
          </AnimatePresence>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            <AnimatePresence mode="wait">
              {isSignUp && (
                <motion.div
                  key="name-field"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="relative overflow-hidden"
                >
                  <label className="text-xs font-bold text-gray-600 ml-1 block mb-1.5">
                    Full Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500 w-5 h-5 pointer-events-none" />
                    <input
                      id="input-name"
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="John Doe"
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-gray-900 font-medium focus:outline-none focus:border-yellow-400 focus:bg-white focus:ring-2 focus:ring-yellow-400/20 transition-all"
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            <div>
              <label className="text-xs font-bold text-gray-600 ml-1 block mb-1.5">
                Email Address
              </label>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-yellow-500 w-5 h-5 pointer-events-none" />
                <input
                  id="input-email"
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-gray-900 font-medium focus:outline-none focus:border-yellow-400 focus:bg-white focus:ring-2 focus:ring-yellow-400/20 transition-all"
                />
              </div>
            </div>

            <div>
              <div className="flex justify-between items-center mb-1.5">
                <label className="text-xs font-bold text-gray-600 ml-1 block">
                  Password
                </label>
                {!isSignUp && (
                  <a
                    href="#"
                    className="text-xs text-yellow-600 font-bold hover:text-yellow-700 transition-colors"
                  >
                    Forgot?
                  </a>
                )}
              </div>
              <div className="relative">
                <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5 pointer-events-none" />
                <input
                  id="input-password"
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full bg-gray-50 border border-gray-200 rounded-xl py-3.5 pl-12 pr-4 text-gray-900 font-medium focus:outline-none focus:border-yellow-400 focus:bg-white focus:ring-2 focus:ring-yellow-400/20 transition-all"
                />
              </div>
            </div>

            <button
              id="submit-auth"
              type="submit"
              disabled={isLoading}
              className="primary-button w-full mt-6 flex gap-2 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:scale-100"
            >
              {isLoading ? (
                <Loader2 className="w-5 h-5 animate-spin" />
              ) : (
                <>
                  {isSignUp ? 'Create Account' : 'Sign In'}
                  <ArrowRight size={18} />
                </>
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="mt-8 text-center text-sm font-bold text-gray-400 flex items-center justify-center">
            <span className="w-12 h-px bg-gray-200 inline-block mr-4" />
            Or continue with
            <span className="w-12 h-px bg-gray-200 inline-block ml-4" />
          </div>

          {/* Social login */}
          <div className="mt-6 flex gap-4">
            <button
              id="google-sign-in"
              className="flex-1 bg-white border-2 border-gray-200 hover:border-yellow-400 hover:bg-yellow-50 transition-all duration-300 py-3 rounded-xl flex items-center justify-center font-bold text-gray-700 shadow-sm hover:shadow-md"
            >
              <img
                src="https://www.svgrepo.com/show/475656/google-color.svg"
                alt="Google"
                className="w-5 h-5 mr-2"
              />
              Google
            </button>
          </div>

          {/* Bottom toggle text */}
          <p className="mt-6 text-center text-sm text-gray-500 font-medium">
            {isSignUp ? 'Already have an account? ' : "Don't have an account? "}
            <button
              onClick={() => { setIsSignUp(!isSignUp); setError(''); setSuccess(''); }}
              className="text-yellow-600 font-bold hover:text-yellow-700 transition-colors"
            >
              {isSignUp ? 'Sign In' : 'Sign Up'}
            </button>
          </p>
        </motion.div>
      </div>
    </div>
  );
};

export default Login;
