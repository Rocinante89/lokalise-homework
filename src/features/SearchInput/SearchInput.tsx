import * as React from 'react';
import { useEffect } from 'react';
import { useGlossaryListQuery } from '../../shared/lib';

export const SearchInput: React.FunctionComponent = () => {
    const [filter, setFilter] = React.useState<string | undefined>(undefined);

    const { refetch } = useGlossaryListQuery(filter ?? undefined);

    useEffect(() => {
        refetch();
    }, [filter, refetch]);

    const handleSearchInput = (event: React.FormEvent<HTMLInputElement>) => {
        event.preventDefault();
        setFilter(event.currentTarget.value ?? undefined);
    };

    return <input
        type="search"
        placeholder='Search...'
        aria-placeholder='Search'
        aria-label="Search"
        className='form-checkbox rounded px-2 py-1 w-full md:w-96'
        onChange={handleSearchInput} />;
};
