import { getUrl, getImage, MainUrl } from '@/lib/helper';
import allGames from '@/data/meta/all_games.json';

const BASE_URL = `https://${MainUrl}`;

export async function GET() {
    const games = allGames;

    const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:image="http://www.google.com/schemas/sitemap-image/1.1">
  ${games
            .map((game) => {
                const url = `${BASE_URL}${getUrl(game)}`;
                const imageUrl = getImage(game);

                return `
  <url>
    <loc>${url}</loc>
    <image:image>
      <image:loc>${imageUrl}</image:loc>
      <image:title>${game}</image:title>
    </image:image>
  </url>`;
            })
            .join('')}
</urlset>`;

    return new Response(sitemap, {
        headers: {
            'Content-Type': 'application/xml',
        },
    });
}
