import * as React from 'react';
import { determineBadgeColour } from './helpers/determineBadgeColour';

interface IBadgeProps {
    label: string;
    colour: 'red' | 'blue' | 'gray';
}

export const Badge: React.FunctionComponent<IBadgeProps> = ({ colour, label }) => {
    return <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${determineBadgeColour(colour)} text-white`}>
        {label}
    </span>;
};
