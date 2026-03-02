import { Scissors, Github, Twitter, Linkedin } from 'lucide-react';

export const Footer = () => {
    return (
        <footer className="bg-black border-t border-white/10 pt-16 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                    <div className="col-span-1 md:col-span-2">
                        <div className="flex items-center gap-2 mb-6">
                            <Scissors className="w-8 h-8 text-blue-500" />
                            <span className="text-xl font-bold text-white">CapCut AI</span>
                        </div>
                        <p className="text-gray-400 max-w-sm">
                            The world's most advanced AI-powered video editing platform.
                            Transform your content with the power of intelligence.
                        </p>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Product</h4>
                        <ul className="space-y-4 text-gray-400">
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Features</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">Pricing</a></li>
                            <li><a href="#" className="hover:text-blue-500 transition-colors">AI Engine</a></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-white font-bold mb-6">Connect</h4>
                        <div className="flex gap-4">
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-500 transition-all">
                                <Github className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-500 transition-all">
                                <Twitter className="w-5 h-5" />
                            </a>
                            <a href="#" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-blue-500/20 hover:text-blue-500 transition-all">
                                <Linkedin className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/5 pt-8 flex flex-col md:row items-center justify-between gap-4">
                    <p className="text-gray-500 text-sm">
                        © 2026 CapCut AI. Built with Remotion & Next.js.
                    </p>
                    <div className="flex gap-8 text-sm text-gray-500">
                        <a href="#" className="hover:text-white">Privacy Policy</a>
                        <a href="#" className="hover:text-white">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
