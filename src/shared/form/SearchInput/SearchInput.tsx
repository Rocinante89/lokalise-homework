import * as React from 'react';

interface ISearchInputProps {
}

export const SearchInput: React.FunctionComponent<ISearchInputProps> = (props) => {
    return <input
        type="search"
        placeholder='Search...'
        aria-placeholder='Search'
        aria-label="Search"
        className='form-checkbox rounded px-2 py-1 w-full md:w-96'
        onInput={(event) => {
            // event.preventDefault();
            // TODO: call backend
        }} />;
};
