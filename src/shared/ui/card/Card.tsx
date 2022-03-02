import format from 'date-fns/format';
import * as React from 'react';
import { Badge } from '../badge/Badge';

interface ICardProps {
    title: string;
    description: string;
    date: string;
    userName: string;
    options: ICardOptionsProps;
}

interface ICardOptionsProps {
    caseSensitive: boolean;
    translatable: boolean;
    forbidden: boolean;
}

export const Card: React.FunctionComponent<ICardProps> = ({ date, description, title, userName, options }) => {
    return <>
        <div className="w-full h-full rounded bg-gray-100 flex flex-col justify-start gap-y-2 p-4">
            <h2 className="text-blue-600 text-xl font-medium">{title}</h2>
            <span className='grow text-sm'>{description}</span>
            <div className='flex justify-start gap-1'>
                <Badge colour='gray' label={`${options.translatable ? "" : "Not-"}translatable`} />
                <Badge colour='blue' label={`Case-${options.caseSensitive ? "sensitive" : "insensitive"}`} />
                <Badge colour='red' label={`${options.forbidden ? "" : "Not-"}forbidden`} />
            </div>
            <span className='text-xs'>{format(new Date(date), "dd MMM',' yyyy")} • {userName}</span>
        </div>
    </>;
};
