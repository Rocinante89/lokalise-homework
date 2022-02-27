import faker from '@faker-js/faker';
import { render } from '@testing-library/react';
import { Badge } from './Badge';

describe('the badge', () => {
    it('should render a badge with the correct label', () => {
        const testLabel = faker.lorem.sentence();

        const { getByText } = render(
            <Badge colour='gray' label={testLabel} />
        );

        expect(getByText(testLabel)).toBeInTheDocument();
    });

    it('should render a badge with the correct colour when gray is selected', () => {
        const testLabel = 'Test Label';

        const { getByText } = render(
            <Badge colour='gray' label={testLabel} />
        );

        expect(getByText(testLabel)).toHaveClass('bg-gray-500');
    });

    it('should render a badge with the correct colour when blue is selected', () => {
        const testLabel = 'Test Label';

        const { getByText } = render(
            <Badge colour='blue' label={testLabel} />
        );

        expect(getByText(testLabel)).toHaveClass('bg-blue-500');
    });

    it('should render a badge with the correct colour when red is selected', () => {
        const testLabel = 'Test Label';

        const { getByText } = render(
            <Badge colour='red' label={testLabel} />
        );

        expect(getByText(testLabel)).toHaveClass('bg-red-500');
    });
});