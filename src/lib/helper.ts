
export const MainName = 'Steal Brainrots';
export const MainUrl = 'steal-brainrots.com';

export function getImage(game: string) {
    return 'https://image.' + MainUrl + '/' + normalizeGameName(game) + '.avif'
}

export function getUrl(game: string) {
    if (game == MainName) {
        return '/';
    } else {
        return '/' + normalizeGameName(game);
    }
}
export function normalizeGameName(name: string) {
    return name.replaceAll(' ', '-').replaceAll('|', '-').replaceAll(':', '-').toLowerCase()
}