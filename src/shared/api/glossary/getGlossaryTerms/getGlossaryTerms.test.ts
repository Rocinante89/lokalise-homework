import { glossaryEndpoint } from '../endpoints';
import { mockGlossaryList, server, rest } from '../../../mocks';
import { getGlossaryTermsRequest } from './getGlossaryTerms';

const mockData = mockGlossaryList();

describe('getGlossaryTerms', () => {
    beforeEach(() => {
        server.use(
            rest.get(glossaryEndpoint, (req, res, ctx) => {
                return res(
                    ctx.status(200),
                    ctx.json(mockData),
                    );
                }),
        );
    });

    it('should return glossary terms', async () => {
        const response = await getGlossaryTermsRequest();

        expect(response).toEqual(mockData);
    });
});