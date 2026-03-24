import React from 'react';
import fs from 'fs';
import path from 'path';
import { notFound } from 'next/navigation';
import { Layout } from '@/components/Layout';
import { GamePlayArea } from '@/components/GamePlayArea';
import { GameIntro } from '@/components/GameIntro';
import { RelatedGames } from '@/components/RelatedGames';
import allGames from '@/data/all_games.json';
import relatedGames from '@/data/related_games.json';
import { GameConfig } from '@/types';
import { markdownToHtml } from '@/lib/markdownToHtml';
import { normalizeGameName } from '@/lib/helper';

// Helper to normalized game name to slug (e.g. "Coin Clicker" -> "coin-clicker")
// This assumes the JSON/MD files are named with slugs
// If files are named "Coin Clicker.json", then we just use the name directly or decodeURIComponent
// The user said "url parameter is game's norm name"
// Let's assume the URL is /coin-clicker and the file is coin-clicker.json
// But existing all_games.json has "Coin Clicker"
// We need to map "Coin Clicker" to "coin-clicker" for the URL?
// Or does the URL come in as "Coin Clicker"? Next.js handles encoding.
// Let's assume standard slugification for URLs: lowercase, spaces to dashes.

const getGameData = async (slug: string) => {
    try {
        const jsonPath = path.join(process.cwd(), `src/data/${slug}.json`);
        const mdPath = path.join(process.cwd(), `src/data/${slug}.md`);

        if (!fs.existsSync(jsonPath) || !fs.existsSync(mdPath)) {
            return null;
        }

        const gameConfig = JSON.parse(fs.readFileSync(jsonPath, 'utf-8')) as GameConfig;
        const gameContentMarkdown = fs.readFileSync(mdPath, 'utf-8');
        const gameContentHtml = await markdownToHtml(gameContentMarkdown);

        return { gameConfig, gameContentHtml };
    } catch (error) {
        console.error(`Error loading game data for ${slug}:`, error);
        return null;
    }
};

export async function generateMetadata({ params }: { params: Promise<{ game: string }> }) {
    const { game } = await params;
    const data = await getGameData(game);

    if (!data) {
        return {
            title: 'Game Not Found',
        };
    }

    return {
        title: `${data.gameConfig.title} - Play Free Online`,
        description: data.gameConfig.description,
        alternates: {
            canonical: `/${game}`,
        },
    };
}

export async function generateStaticParams() {
    // Generate params for all known games
    // We assume the items in all_games.json are the display names
    // and the files are named with the slugified version
    return allGames.map((game) => ({
        game: normalizeGameName(game),
    }));
}

export default async function GamePage({ params }: { params: Promise<{ game: string }> }) {
    const { game } = await params;
    const data = await getGameData(game);

    if (!data) {
        notFound();
    }

    const { gameConfig, gameContentHtml } = data;

    // Filter related games to exclude current game? 
    // For now, just show the global related games list as per requirement "same as homepage"

    return (
        <Layout>
            <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
                {/* Left Column: Game Area + Intro (Main) - Takes 70% width on large screens */}
                <div className="lg:col-span-7 flex flex-col gap-6">
                    <GamePlayArea
                        gameUrl={gameConfig.gameUrl}
                        coverImage={gameConfig.coverImage}
                    />

                    <GameIntro
                        title={gameConfig.title}
                        description={gameConfig.description}
                        tags={gameConfig.tags || []}
                        url={gameConfig.markdownUrl || ''}
                        gameContent={gameContentHtml}
                        coverImage={gameConfig.coverImage}
                    />
                </div>

                {/* Right Column: Sidebar (Related Games) - Takes 30% width on large screens */}
                <div className="lg:col-span-3 flex flex-col gap-6">
                    <RelatedGames games={relatedGames} />
                </div>
            </div>
        </Layout>
    );
}
