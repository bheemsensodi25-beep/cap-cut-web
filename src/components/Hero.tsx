"use client";
import { motion } from 'framer-motion';
import { Sparkles, Play, Wand2 } from 'lucide-react';

export const Hero = () => {
    return (
        <div className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Orbs */}
            <div className="absolute top-0 -left-4 w-72 h-72 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
            <div className="absolute top-0 -right-4 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                <div className="text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                        className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 mb-8"
                    >
                        <Sparkles className="w-4 h-4 text-yellow-500" />
                        <span className="text-sm font-medium text-gray-300">Next-Gen Video Editing</span>
                    </motion.div>

                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="text-5xl md:text-7xl font-extrabold tracking-tight text-white mb-6"
                    >
                        Edit Videos with <br />
                        <span className="bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                            AI Powered Magic
                        </span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="max-w-2xl mx-auto text-lg text-gray-400 mb-10"
                    >
                        Transform your raw footage into professional content in seconds.
                        Smart transitions, auto-captions, and cinematic effects, all automated by AI.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        className="flex flex-col sm:flex-row items-center justify-center gap-4"
                    >
                        <button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold transition-all transform hover:scale-105 shadow-xl shadow-blue-500/25">
                            <Wand2 className="w-5 h-5" />
                            Start Editing for Free
                        </button>
                        <button className="flex items-center gap-2 bg-white/5 hover:bg-white/10 text-white px-8 py-4 rounded-full font-bold transition-all border border-white/10">
                            <Play className="w-5 h-5 text-gray-400" />
                            Watch Demo
                        </button>
                    </motion.div>
                </div>
            </div>
        </div>
    );
};
