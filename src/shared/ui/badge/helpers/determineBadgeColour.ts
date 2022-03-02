const formatBadgeColorMap = {
    red: 'bg-lokalise-red',
    blue: 'bg-lokalise-blue',
    gray: 'bg-lokalise-gray',
}

export type BadgeColour = keyof typeof formatBadgeColorMap;

export const determineBadgeColour = (colour: BadgeColour): string => formatBadgeColorMap[colour];