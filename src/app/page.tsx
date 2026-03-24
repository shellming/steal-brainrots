import React from 'react';
import fs from 'fs';
import path from 'path';
import { Metadata } from 'next';
import { Layout } from '@/components/Layout';
import { GamePlayArea } from '@/components/GamePlayArea';
import { GameIntro } from '@/components/GameIntro';
import { RelatedGames } from '@/components/RelatedGames';
import gameData from '@/data/stone-grass.json';
import relatedGames from '@/data/related_games.json';
import { GameConfig } from '@/types';
import { markdownToHtml } from '@/lib/markdownToHtml';

// Cast the JSON data to the GameConfig type to ensure it matches the expected structure
const gameConfig = gameData as GameConfig;

export const metadata: Metadata = {
  title: `${gameConfig.title} - Play Free Online`,
  description: gameConfig.description,
  alternates: {
    canonical: '/',
  },
};

const App = async () => {
  const filePath = path.join(process.cwd(), 'src/data/stone-grass.md');
  const gameContentMarkdown = fs.readFileSync(filePath, 'utf-8');
  const gameContentHtml = await markdownToHtml(gameContentMarkdown);

  return (
    <Layout>
      {/* 
        Using Grid layout for precise 70% / 30% split 
        lg:grid-cols-10 allows us to use col-span-7 (70%) and col-span-3 (30%)
      */}
      <div className="grid grid-cols-1 lg:grid-cols-10 gap-6 lg:gap-8">
        {/* Left Column: Game Area + Intro (Main) - Takes 70% width on large screens */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <GamePlayArea
            gameUrl={gameConfig.gameUrl}
            coverImage={gameConfig.coverImage}
          />

          {/* Game Intro is now always in the main column below the game area */}
          <GameIntro
            title={gameConfig.title}
            description={gameConfig.description}
            tags={gameConfig.tags}
            url={gameConfig.markdownUrl}
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
};

export default App;
