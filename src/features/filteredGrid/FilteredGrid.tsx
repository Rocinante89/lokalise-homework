import * as React from 'react';
import { SearchInput } from '../../shared/form';

const FilteredGrid: React.FunctionComponent = () => {
    return <div className='flex flex-col gap-y-4 sm:gap-y-6 lg:gap-y-8'>
        <SearchInput />
        <div className='grid grid-cols-1 gap-2 md:grid-cols-2 lg:grid-cols-3'>
        </div>
    </div>;
};

export default FilteredGrid;
