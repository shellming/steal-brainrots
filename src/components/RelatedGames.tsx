import React from 'react';
import Image from 'next/image';
import { Card, CardContent } from '@/components/ui/card';
import { getUrl, getImage } from '@/lib/helper';

interface RelatedGamesProps {
  games: string[];
}

export const RelatedGames: React.FC<RelatedGamesProps> = ({ games }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-bold text-white">Related Games</h3>
      </div>

      <div className="grid grid-cols-2 gap-3">
        {games.map((game) => (
          <a
            key={game}
            href={getUrl(game)}
            className="block"
          >
            <Card
              className="bg-slate-800/50 border-slate-700/50 overflow-hidden group relative cursor-pointer hover:border-indigo-500/50 transition-colors p-0 h-full"
            >
              <CardContent className="p-0">
                <div className="relative aspect-video w-full overflow-hidden">
                  <Image
                    src={getImage(game)}
                    alt={game}
                    fill
                    className="object-cover transition-transform duration-300 group-hover:scale-110"
                    sizes="(max-width: 768px) 50vw, 33vw"
                    unoptimized
                  />
                  <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                    <span className="font-bold text-slate-100 text-sm text-center leading-tight">
                      {game}
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
