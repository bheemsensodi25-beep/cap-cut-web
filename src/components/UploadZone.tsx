"use client";
import { useState, useCallback } from 'react';
import { Upload, FileIcon, X, CheckCircle2, Loader2 } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const UploadZone = ({ onUploadSuccess }: { onUploadSuccess: (file: File) => void }) => {
    const [isDragging, setIsDragging] = useState(false);
    const [file, setFile] = useState<File | null>(null);
    const [isUploading, setIsUploading] = useState(false);

    const handleDrag = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setIsDragging(true);
        } else if (e.type === 'dragleave') {
            setIsDragging(false);
        }
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setIsDragging(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            const droppedFile = e.dataTransfer.files[0];
            if (droppedFile.type.startsWith('video/')) {
                setFile(droppedFile);
                simulateUpload(droppedFile);
            }
        }
    }, []);

    const handleFileInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            const selectedFile = e.target.files[0];
            setFile(selectedFile);
            simulateUpload(selectedFile);
        }
    };

    const simulateUpload = (file: File) => {
        setIsUploading(true);
        // Simulate API call
        setTimeout(() => {
            setIsUploading(false);
            onUploadSuccess(file);
        }, 2000);
    };

    return (
        <div className="w-full max-w-4xl mx-auto px-4 py-12">
            <div
                onDragEnter={handleDrag}
                onDragLeave={handleDrag}
                onDragOver={handleDrag}
                onDrop={handleDrop}
                className={`relative group cursor-pointer transition-all duration-300 rounded-2xl border-2 border-dashed 
          ${isDragging ? 'border-blue-500 bg-blue-500/10' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
            >
                <input
                    type="file"
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    onChange={handleFileInput}
                    accept="video/*"
                />

                <div className="p-12 flex flex-col items-center justify-center text-center">
                    <AnimatePresence mode="wait">
                        {!file ? (
                            <motion.div
                                key="empty"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                className="flex flex-col items-center"
                            >
                                <div className="w-16 h-16 rounded-full bg-blue-500/10 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                                    <Upload className="w-8 h-8 text-blue-500" />
                                </div>
                                <h3 className="text-xl font-semibold text-white mb-2">Drag & Drop Video</h3>
                                <p className="text-gray-400">MP4, MOV or WebM (Max 50MB)</p>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="uploading"
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                className="flex flex-col items-center"
                            >
                                {isUploading ? (
                                    <div className="flex flex-col items-center">
                                        <Loader2 className="w-12 h-12 text-blue-500 animate-spin mb-4" />
                                        <p className="text-white font-medium">Uploading {file.name}...</p>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center">
                                        <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mb-4">
                                            <CheckCircle2 className="w-8 h-8 text-green-500" />
                                        </div>
                                        <p className="text-white font-medium">{file.name}</p>
                                        <button
                                            onClick={(e) => { e.stopPropagation(); setFile(null); }}
                                            className="mt-4 text-sm text-gray-500 hover:text-white flex items-center gap-1"
                                        >
                                            <X className="w-4 h-4" /> Remove
                                        </button>
                                    </div>
                                )}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </div>
    );
};
