import { glossaryEndpoint } from '../endpoints';
import { mockGlossaryList, server, rest } from '../mocks';
import { getGlossaryTermsRequest } from './getGlossaryTerms';

// Establish API mocking before all tests.
beforeAll(() => server.listen());
// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers());
// Clean up after the tests are finished.
afterAll(() => server.close());

describe('getGlossaryTerms', () => {
    it('should return glossary terms', async () => {
        // Arrange
        const mockData = mockGlossaryList();
        
        // Act
        server.use(
            rest.get(glossaryEndpoint, (req, res, ctx) => {
                return res(
                    ctx.status(200),
                    ctx.json(mockData),
                    );
                }),
        );

        const response = await getGlossaryTermsRequest();
        
        // Assert
        expect(response).toEqual(mockData);
    });
});