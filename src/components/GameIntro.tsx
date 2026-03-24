'use client';

import React from 'react';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

interface GameIntroProps {
  title: string;
  description: string;
  tags: string[];
  url: string;
  gameContent: string;
  coverImage?: string;
}

export const GameIntro: React.FC<GameIntroProps> = ({
  title,
  tags,
  url,
  gameContent,
  coverImage
}) => {

  return (
    <div className="flex flex-col gap-4 p-6 bg-slate-800/30 rounded-xl border border-slate-700/50">
      <div className="flex items-start justify-between gap-4">
        <div>
          <h1 className="text-2xl md:text-3xl font-bold text-slate-100 mb-2 tracking-tight">
            {title}
          </h1>
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Badge key={tag} variant="secondary" className="bg-slate-700 text-slate-300 hover:bg-slate-600">
                {tag}
              </Badge>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-3 shrink-0">
          <span className="text-sm text-slate-400 font-medium hidden sm:inline-block">Share:</span>
          <div className="flex gap-2">
            {/* Facebook */}
            <Button
              variant="outline"
              size="icon"
              className="bg-[#1877F2] border-[#1877F2] text-white hover:bg-[#1877F2]/90 hover:border-[#1877F2]/90 h-9 w-9"
              onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
              aria-label="Share on Facebook"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="fill-current">
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036c-2.148 0-2.971.956-2.971 3.594v.377h3.356l-.566 3.667h-2.791v7.98h-4.843Z" />
              </svg>
            </Button>

            {/* Twitter / X */}
            <Button
              variant="outline"
              size="icon"
              className="bg-black border-slate-700 text-white hover:bg-black/80 hover:border-slate-600 h-9 w-9"
              onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}&text=${encodeURIComponent(title)}`, '_blank')}
              aria-label="Share on X (Twitter)"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor" className="fill-current">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </Button>

            {/* Pinterest */}
            <Button
              variant="outline"
              size="icon"
              className="bg-[#E60023] border-[#E60023] text-white hover:bg-[#E60023]/90 hover:border-[#E60023]/90 h-9 w-9"
              onClick={() => window.open(`https://pinterest.com/pin/create/button/?url=${encodeURIComponent(window.location.href)}&media=${encodeURIComponent(coverImage || '')}&description=${encodeURIComponent(title)}`, '_blank')}
              aria-label="Share on Pinterest"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor" className="fill-current">
                <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 5.079 3.158 9.417 7.618 11.162-.105-.949-.199-2.403.041-3.439.219-.937 1.406-5.957 1.406-5.957s-.359-.72-.359-1.781c0-1.663.967-2.911 2.168-2.911 1.024 0 1.518.769 1.518 1.688 0 1.029-.653 2.567-.992 3.992-.285 1.193.6 2.165 1.775 2.165 2.128 0 3.768-2.245 3.768-5.487 0-2.861-2.063-4.869-5.008-4.869-3.41 0-5.409 2.562-5.409 5.199 0 1.033.394 2.143.889 2.741.099.12.112.225.085.345-.09.375-.293 1.199-.334 1.363-.053.225-.172.271-.399.165-1.495-.69-2.433-2.852-2.433-4.587 0-3.726 2.705-7.149 7.824-7.149 4.105 0 7.296 2.938 7.296 6.855 0 4.089-2.571 7.38-6.141 7.38-1.198 0-2.324-.621-2.711-1.356l-.736 2.802c-.268 1.035-1.002 2.352-1.498 3.146 1.123.345 2.306.535 3.55.535 6.607 0 11.985-5.365 11.985-11.987C23.97 5.367 18.62 0 12.017 0z" />
              </svg>
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-2 border-t border-slate-700/50 pt-8 text-slate-300">
        <div dangerouslySetInnerHTML={{ __html: gameContent }} />
      </div>
    </div>
  );
};
