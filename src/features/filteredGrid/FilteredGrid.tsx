import * as React from 'react';
import { useGlossaryListQuery } from '../../shared/lib';
import { Card } from '../../shared/ui';

export const FilteredGrid: React.FunctionComponent = () => {
    const { data } = useGlossaryListQuery();

    return <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
        {data?.map(item => <Card
            date={item.createdAt}
            description={item.description}
            options={{ caseSensitive: item.caseSensitive, forbidden: item.forbidden, translatable: item.translatable }}
            title={item.title}
            userName={item.createdBy.fullName}
            key={item.id}
        />)}
    </div>;
};
