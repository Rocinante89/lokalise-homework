import { faker } from '@faker-js/faker';
import { render } from '@testing-library/react';
import { Card } from './Card';

describe('the card', () => {
    const testDate = faker.date.recent();
    const testDescription = faker.lorem.paragraph();
    const testTitle = faker.lorem.sentence();
    const testName = faker.name.findName();

    it('should render a card with the correct details', () => {
        const testOptions = {
            caseSensitive: faker.datatype.boolean(),
            forbidden: faker.datatype.boolean(),
            translatable: faker.datatype.boolean(),
        };

        const { getByText, getByRole } = render(
            <Card
                date={testDate}
                description={testDescription}
                options={testOptions}
                title={testTitle}
                userName={testName}
            />
        );

        expect(getByRole('heading')).toHaveTextContent(testTitle);
        expect(getByText((content) => content.includes(testDescription))).toBeTruthy();
        expect(getByText((content) => content.includes(testName))).toBeTruthy();
        expect(getByText((content) => content.includes(testDate.toLocaleString(undefined, { year: 'numeric', month: 'short', day: 'numeric' })))).toBeTruthy();
    });

    describe('options', () => {
        describe('the caseSensitive boolean', () => {
            it('should render the text Case-sensitive when caseSensitive is true', () => {
                const testOptions = {
                    caseSensitive: true,
                    forbidden: faker.datatype.boolean(),
                    translatable: faker.datatype.boolean(),
                };

                const { getByText } = render(
                    <Card
                        date={testDate}
                        description={testDescription}
                        options={testOptions}
                        title={testTitle}
                        userName={testName}
                    />
                );

                expect(getByText((content) => content.includes('Case-sensitive'))).toBeTruthy();
            });

            it('should render the text Case-insensitive when caseSensitive is false', () => {
                const testOptions = {
                    caseSensitive: false,
                    forbidden: faker.datatype.boolean(),
                    translatable: faker.datatype.boolean(),
                };

                const { getByText } = render(
                    <Card
                        date={testDate}
                        description={testDescription}
                        options={testOptions}
                        title={testTitle}
                        userName={testName}
                    />
                );

                expect(getByText((content) => content.includes('Case-insensitive'))).toBeTruthy();
            });
        });

        describe('the forbidden boolean', () => {
            it('should render the text forbidden when forbidden is true', () => {
                const testOptions = {
                    caseSensitive: faker.datatype.boolean(),
                    forbidden: true,
                    translatable: faker.datatype.boolean(),
                };

                const { getByText } = render(
                    <Card
                        date={testDate}
                        description={testDescription}
                        options={testOptions}
                        title={testTitle}
                        userName={testName}
                    />
                );

                expect(getByText((content) => content.includes('forbidden'))).toBeTruthy();
            });

            it('should render the text Not-forbidden when forbidden is false', () => {
                const testOptions = {
                    caseSensitive: faker.datatype.boolean(),
                    forbidden: false,
                    translatable: faker.datatype.boolean(),
                };

                const { getByText } = render(
                    <Card
                        date={testDate}
                        description={testDescription}
                        options={testOptions}
                        title={testTitle}
                        userName={testName}
                    />
                );

                expect(getByText((content) => content.includes('Not-forbidden'))).toBeTruthy();
            });
        });

        describe('the translatable boolean', () => {
            it('should render the text translatable when translatable is true', () => {
                const testOptions = {
                    caseSensitive: faker.datatype.boolean(),
                    forbidden: faker.datatype.boolean(),
                    translatable: true,
                };

                const { getByText } = render(
                    <Card
                        date={testDate}
                        description={testDescription}
                        options={testOptions}
                        title={testTitle}
                        userName={testName}
                    />
                );

                expect(getByText((content) => content.includes('translatable'))).toBeTruthy();
            });

            it('should render the text Not-translatable when translatable is false', () => {
                const testOptions = {
                    caseSensitive: faker.datatype.boolean(),
                    forbidden: faker.datatype.boolean(),
                    translatable: false,
                };

                const { getByText } = render(
                    <Card
                        date={testDate}
                        description={testDescription}
                        options={testOptions}
                        title={testTitle}
                        userName={testName}
                    />
                );

                expect(getByText((content) => content.includes('Not-translatable'))).toBeTruthy();
            });
        });
    });
});