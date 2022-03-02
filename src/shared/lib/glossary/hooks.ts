import {
  useQuery,
} from 'react-query'
import { getGlossaryTermsRequest } from '../../api';

export const useGlossaryListQuery = (filter?: string) => {
  
    return useQuery('glossaryList', () => getGlossaryTermsRequest({search: filter}));
  };