import { NextRequest, NextResponse } from 'next/server';
import { renderMedia, selectComposition } from '@remotion/renderer';
import { bundle } from '@remotion/bundler';
import path from 'path';
import fs from 'fs';

export async function POST(req: NextRequest) {
    try {
        const body = await req.json();
        const { videoUrl, text } = body;

        if (!videoUrl) {
            return NextResponse.json({ error: 'No video URL provided' }, { status: 400 });
        }

        // In a real app, we'd bundle once and reuse, but for this demo:
        const compositionId = 'Main';
        const bundleLocation = await bundle({
            entryPoint: path.resolve('./src/remotion/Root.tsx'),
            // Ensure we don't bundle every time in production!
        });

        const composition = await selectComposition({
            serveUrl: bundleLocation,
            id: compositionId,
            inputProps: { videoUrl, text },
        });

        const outputLocation = path.resolve(`./public/renders/render-${Date.now()}.mp4`);

        // Ensure directory exists
        const dir = path.dirname(outputLocation);
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir, { recursive: true });
        }

        await renderMedia({
            composition,
            serveUrl: bundleLocation,
            codec: 'h264',
            outputLocation,
            inputProps: { videoUrl, text },
        });

        const fileName = path.basename(outputLocation);
        return NextResponse.json({
            success: true,
            downloadUrl: `/renders/${fileName}`
        });
    } catch (error: any) {
        console.error('Render error:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
