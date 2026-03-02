import Link from 'next/link';
import { Scissors } from 'lucide-react';

export const Navbar = () => {
    return (
        <nav className="fixed top-0 w-full z-50 bg-black/50 backdrop-blur-md border-b border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    <div className="flex items-center gap-2">
                        <Scissors className="w-8 h-8 text-blue-500" />
                        <span className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-600 bg-clip-text text-transparent">
                            CapCut AI
                        </span>
                    </div>
                    <div className="hidden md:block">
                        <div className="ml-10 flex items-baseline space-x-4">
                            <Link href="/" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</Link>
                            <Link href="#features" className="text-gray-300 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Features</Link>
                            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-full text-sm font-medium transition-all shadow-lg shadow-blue-500/20">
                                Get Started
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};
