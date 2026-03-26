import React from 'react';
import Image from 'next/image';
import { Flame, Sparkles } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { getUrl, getImage } from '@/lib/helper';

interface RelatedGame {
  name: string;
  tag: 'hot' | 'new' | '';
}

interface RelatedGamesProps {
  games: RelatedGame[];
}

export const RelatedGames: React.FC<RelatedGamesProps> = ({ games }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="grid grid-cols-2 gap-3">
        {games.map((game) => (
          <a
            key={game.name}
            href={getUrl(game.name)}
            className="block"
          >
            <Card
              className="bg-slate-800/50 border-slate-700/50 overflow-hidden group relative cursor-pointer hover:border-indigo-500/50 transition-colors p-0 h-full"
            >
              <CardContent className="p-0">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={getImage(game.name)}
                    alt={game.name}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    unoptimized
                  />
                  {/* Badge */}
                  {game.tag === 'new' && (
                    <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 bg-indigo-600/90 border border-indigo-400/60 rounded-md backdrop-blur-sm shadow-lg shadow-indigo-900/50">
                      <Sparkles className="w-3.5 h-3.5 text-white" />
                      <span className="text-white text-xs font-bold leading-none tracking-wide">NEW</span>
                    </div>
                  )}
                  {game.tag === 'hot' && (
                    <div className="absolute top-2 left-2 flex items-center gap-1 px-2 py-1 bg-rose-600/90 border border-rose-400/60 rounded-md backdrop-blur-sm shadow-lg shadow-rose-900/50">
                      <Flame className="w-3.5 h-3.5 text-white" />
                      <span className="text-white text-xs font-bold leading-none tracking-wide">HOT</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                    <span className="font-bold text-slate-100 text-sm text-center leading-tight">
                      {game.name}
                    </span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </a>
        ))}
      </div>
    </div>
  );
};
