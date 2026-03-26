import React from 'react';
import Image from 'next/image';
import { Layout } from '@/components/Layout';
import { Card, CardContent } from '@/components/ui/card';
import { getUrl, getImage, MainName } from '@/lib/helper';
import allGames from '@/data/meta/hot_games.json';

export const metadata = {
    title: `Hot Games - ${MainName}`,
    description: 'Check out the most popular games right now.',
    alternates: {
        canonical: '/hot_games',
    },
};

export default function HotGamesPage() {
    return (
        <Layout>
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold text-slate-900 dark:text-white mb-8">Hot Games</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                    {allGames.map((game) => (
                        <a
                            key={game}
                            href={getUrl(game)}
                            className="block"
                        >
                            <Card
                                className="bg-white dark:bg-slate-800/50 border-slate-200 dark:border-slate-700/50 overflow-hidden group relative cursor-pointer hover:border-indigo-500/50 transition-colors p-0 h-full"
                            >
                                <CardContent className="p-0">
                                    <div className="relative aspect-video w-full overflow-hidden">
                                        <Image
                                            src={getImage(game)}
                                            alt={game}
                                            fill
                                            className="object-cover transition-transform duration-300 group-hover:scale-110"
                                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            unoptimized
                                        />
                                        <div className="absolute inset-0 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center p-2">
                                            <span className="font-bold text-slate-100 text-lg text-center leading-tight">
                                                {game}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-slate-900 dark:text-slate-100 font-semibold text-center truncate">{game}</h3>
                                    </div>
                                </CardContent>
                            </Card>
                        </a>
                    ))}
                </div>
            </div>
        </Layout>
    );
}
