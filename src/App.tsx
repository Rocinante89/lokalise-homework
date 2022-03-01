import React from 'react';
import { FilteredGrid } from './features';
import { SearchInput } from './shared/ui';

function App() {
  return (
    <div className='min-h-screen flex flex-col gap-y-4 mx-auto px-4 py-4 sm:px-6 sm:py-6 sm:gap-y-6 lg:px-8 lg:py-8 lg:gap-y-8'>
        <SearchInput />
        <FilteredGrid />
    </div>
  );
}

export default App;
