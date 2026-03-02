"use client";
import { Player } from "@remotion/player";
import { MainComposition } from "@/remotion/Main";
import { motion } from "framer-motion";
import { Download, Sparkles } from "lucide-react";

interface PreviewPlayerProps {
    videoUrl: string;
    isProcessing: boolean;
    onRender: () => void;
}

export const PreviewPlayer = ({ videoUrl, isProcessing, onRender }: PreviewPlayerProps) => {
    if (!videoUrl) return null;

    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full max-w-5xl mx-auto px-4 py-8"
        >
            <div className="bg-white/5 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <div className="aspect-video bg-black relative">
                    <Player
                        component={MainComposition}
                        durationInFrames={150}
                        compositionWidth={1920}
                        compositionHeight={1080}
                        fps={30}
                        inputProps={{
                            videoUrl: videoUrl,
                            text: "AI Smart Edit ✨",
                        }}
                        controls
                        loop
                        className="w-full h-full"
                    />

                    {isProcessing && (
                        <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex flex-col items-center justify-center z-10">
                            <Sparkles className="w-12 h-12 text-blue-500 animate-pulse mb-4" />
                            <p className="text-xl font-bold text-white">AI is applying magic edits...</p>
                            <div className="w-48 h-1 bg-white/10 rounded-full mt-6 overflow-hidden">
                                <motion.div
                                    className="h-full bg-blue-500"
                                    initial={{ width: 0 }}
                                    animate={{ width: "100%" }}
                                    transition={{ duration: 3, repeat: Infinity }}
                                />
                            </div>
                        </div>
                    )}
                </div>

                <div className="p-6 flex flex-col sm:flex-row items-center justify-between gap-4 bg-white/5">
                    <div>
                        <h3 className="text-xl font-bold text-white mb-1">Preview Your Masterpiece</h3>
                        <p className="text-gray-400 text-sm">AI transitions and text overlays have been applied.</p>
                    </div>

                    <div className="flex gap-3">
                        <button
                            onClick={onRender}
                            disabled={isProcessing}
                            className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700 disabled:bg-blue-800 text-white px-6 py-3 rounded-xl font-bold transition-all"
                        >
                            <Download className="w-5 h-5" />
                            Download MP4
                        </button>
                    </div>
                </div>
            </div>
        </motion.div>
    );
};
