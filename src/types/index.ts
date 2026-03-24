export interface GameConfig {
  title: string;
  seo: {
    title: string;
    description: string;
  };
  description: string;
  tags: string[];
  gameUrl: string;
  coverImage: string;
  markdownUrl: string;
  relatedGames: string[];
}
