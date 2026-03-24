'use client';

import React from 'react';
import Image from 'next/image';
import { AspectRatio } from '@/components/ui/aspect-ratio';
import { Maximize } from 'lucide-react';
import { MainName } from '@/lib/helper';

interface GamePlayAreaProps {
  gameUrl?: string;
  coverImage: string;
}

export const GamePlayArea: React.FC<GamePlayAreaProps> = ({ gameUrl, coverImage }) => {
  const [isPlaying, setIsPlaying] = React.useState(false);
  const containerRef = React.useRef<HTMLDivElement>(null);

  const toggleFullscreen = () => {
    if (!containerRef.current) return;

    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().catch((err) => {
        console.error(`Error attempting to enable fullscreen: ${err.message}`);
      });
    } else {
      document.exitFullscreen();
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <div
        ref={containerRef}
        className="w-full rounded-xl overflow-hidden border border-slate-700 shadow-2xl bg-slate-800"
      >
        <AspectRatio ratio={16 / 9}>
          {isPlaying && gameUrl ? (
            <iframe
              src={gameUrl}
              title="Game Content"
              className="w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          ) : (
            <button
              className="w-full h-full relative group overflow-hidden bg-slate-900 cursor-pointer p-0 border-0"
              onClick={() => setIsPlaying(true)}
              aria-label={`Click to Play ${MainName}`}
            >
              {/* Layer 1: Blurred Background */}
              <div className="absolute inset-0 z-0">
                <Image
                  src={coverImage}
                  alt="Background"
                  fill
                  className="object-cover blur-xl opacity-50 scale-105"
                  priority
                  quality={50}
                  unoptimized
                />
                <div className="absolute inset-0 bg-black/40" />
              </div>

              {/* Layer 2: Centered Content (Image + Text) */}
              <div className="absolute inset-0 z-10 flex flex-col items-center justify-center p-6 gap-6">
                <div className="relative h-1/2 w-full flex items-center justify-center">
                  <Image
                    src={coverImage}
                    alt="Game Cover"
                    width={800}
                    height={450}
                    className="h-full w-auto max-w-full object-contain rounded-lg shadow-2xl transition-transform duration-700 group-hover:scale-105"
                    priority
                    unoptimized
                  />
                </div>

                <span className="text-white font-bold tracking-widest text-lg drop-shadow-lg opacity-90 group-hover:opacity-100 transition-opacity animate-pulse">
                  CLICK TO PLAY
                </span>
              </div>

              {/* Layer 4: Overlay Interaction Feedback */}
              <div className="absolute inset-0 z-20 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
            </button>
          )}
        </AspectRatio>
      </div>

      <button
        onClick={toggleFullscreen}
        className="w-full flex items-center justify-center gap-2 py-3 px-4 bg-indigo-600 hover:bg-indigo-700 text-white font-bold rounded-xl transition-all shadow-lg hover:shadow-indigo-500/25 active:scale-[0.98]"
      >
        <Maximize className="w-5 h-5" />
        <span>Fullscreen</span>
      </button>

      <div className="text-center mt-2 px-2">
        <p className="text-sm font-medium text-slate-400">
          The game takes some time to load, please be patient.
        </p>
      </div>
    </div>
  );
};
