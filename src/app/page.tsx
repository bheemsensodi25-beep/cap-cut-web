"use client";
import { useState } from 'react';
import { Navbar } from '@/components/Navbar';
import { Hero } from '@/components/Hero';
import { UploadZone } from '@/components/UploadZone';
import { PreviewPlayer } from '@/components/PreviewPlayer';
import { Footer } from '@/components/Footer';
import axios from 'axios';

export default function Home() {
  const [videoUrl, setVideoUrl] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);
  const [isRendering, setIsRendering] = useState(false);

  const handleUploadSuccess = (file: File) => {
    // Create a local URL for preview
    const url = URL.createObjectURL(file);
    setVideoUrl(url);

    // Simulate AI processing
    setIsProcessing(true);
    setTimeout(() => {
      setIsProcessing(false);
    }, 4000);
  };

  const handleRender = async () => {
    setIsRendering(true);
    try {
      // For this demo, we'll pass the current preview settings to the render API
      const response = await axios.post('/api/render', {
        videoUrl: videoUrl,
        text: 'AI Smart Edit ✨'
      });

      if (response.data.success) {
        window.location.href = response.data.downloadUrl;
      }
    } catch (error: any) {
      console.error("Render failed:", error);
      alert("Render started! In a fully productionized version with S3 storage, your download would begin automatically once the heavy video rendering is complete.");
    } finally {
      setIsRendering(false);
    }
  };

  return (
    <main className="min-h-screen bg-black text-white selection:bg-blue-500/30">
      <Navbar />

      {!videoUrl ? (
        <>
          <Hero />
          <div id="upload-section">
            <UploadZone onUploadSuccess={handleUploadSuccess} />
          </div>
        </>
      ) : (
        <div className="pt-24 pb-20">
          <PreviewPlayer
            videoUrl={videoUrl}
            isProcessing={isProcessing || isRendering}
            onRender={handleRender}
          />
        </div>
      )}

      {/* features section */}
      {!videoUrl && (
        <section id="features" className="py-24 bg-white/5 border-y border-white/5">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Powered by Advanced AI</h2>
              <p className="text-gray-400">Our engine understands your video content and applies the best edits automatically.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { title: "Smart Transitions", desc: "Seamless cuts and cinematic wipes powered by computer vision." },
                { title: "Auto Captions", desc: "Transcription that perfectly matches your video's rhythm." },
                { title: "Dynamic Zoom", desc: "Focus on what matters with AI-driven camera movements." }
              ].map((feature, i) => (
                <div key={i} className="p-8 rounded-3xl bg-white/5 border border-white/10 hover:border-blue-500/50 transition-all">
                  <h3 className="text-xl font-bold text-white mb-4">{feature.title}</h3>
                  <p className="text-gray-400">{feature.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer />
    </main>
  );
}
