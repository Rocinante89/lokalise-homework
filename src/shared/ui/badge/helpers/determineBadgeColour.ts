export const determineBadgeColour = (colour: 'red' | 'blue' | 'gray'): string => {
    switch (colour) {
        case 'red': return 'bg-red-500';
        case 'blue': return 'bg-blue-500';
        case 'gray': return 'bg-gray-500';
        default:
            return 'bg-gray-500';
    }
};