import { renderHook } from '@testing-library/react-hooks';
import { QueryClient, QueryClientProvider } from 'react-query';
import { glossaryEndpoint } from '../../api/glossary/endpoints';
import { mockGlossaryList, rest, server } from '../../mocks';
import { useGlossaryListQuery } from './hooks';

const mockData = mockGlossaryList();
const queryClient = new QueryClient();
const wrapper = ({ children }: any) => (
    <QueryClientProvider client={queryClient}>
        {children}
    </QueryClientProvider>
);

describe('useGlossaryListQuery', () => {
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
    
    describe('when data is successfully retrieved', () => {
        it('with no filter, it should return all data', async () => {
            const { result, waitFor } = renderHook(() => useGlossaryListQuery(), {
                wrapper
            });

            await waitFor(() => result.current.isSuccess);

            expect(result.current.data).toEqual(mockData);
        });
    });
});