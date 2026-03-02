import { AbsoluteFill, Video, interpolate, useCurrentFrame, useVideoConfig } from 'remotion';

export interface MainCompositionProps {
    videoUrl: string;
    text: string;
}

export const MainComposition: React.FC<MainCompositionProps> = ({ videoUrl, text }) => {
    const frame = useCurrentFrame();
    const { fps, durationInFrames, width, height } = useVideoConfig();

    const opacity = interpolate(
        frame,
        [0, 30],
        [0, 1],
        { extrapolateLeft: 'clamp', extrapolateRight: 'clamp' }
    );

    const scale = interpolate(
        frame,
        [0, durationInFrames],
        [1, 1.1]
    );

    return (
        <AbsoluteFill className="bg-black">
            {videoUrl && (
                <div style={{ transform: `scale(${scale})` }} className="w-full h-full">
                    <Video src={videoUrl} className="w-full h-full object-cover" />
                </div>
            )}

            <AbsoluteFill className="flex items-center justify-center">
                <h1
                    className="text-white text-7xl font-bold drop-shadow-lg"
                    style={{ opacity }}
                >
                    {text}
                </h1>
            </AbsoluteFill>

            {/* Smart Effect: Simple overlay gradient */}
            <AbsoluteFill className="bg-gradient-to-t from-black/50 to-transparent pointer-events-none" />
        </AbsoluteFill>
    );
};
