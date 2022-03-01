import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';
import { SearchInput } from './SearchInput';
import userEvent from '@testing-library/user-event'

describe('the search input', () => {
    it('should render', () => {
        const { getByRole } = render(
            <SearchInput />
        );

        const searchInput = getByRole('searchbox');

        expect(searchInput).toBeInTheDocument();
    });

    it('should accept text', () => {
        const randomText = faker.lorem.word();
        const { getByRole } = render(
            <SearchInput />
        );

        const searchInput = getByRole('searchbox');

        userEvent.type(searchInput, randomText);
        expect(searchInput).toHaveValue(randomText);

        //TODO expect mock call to backend to be fired
    });

    it.skip('should be clearable', () => {
        const randomText = faker.lorem.word();
        const { getByRole } = render(
            <SearchInput />
        );

        const searchInput = getByRole('searchbox');

        userEvent.click(searchInput);
        expect(searchInput).toHaveValue(randomText);

        //TODO expect mock call to backend to be fired
    });
});