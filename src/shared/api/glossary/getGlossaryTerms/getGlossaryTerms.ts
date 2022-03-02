import { glossaryEndpoint } from '../endpoints';
import { GlossaryItem } from '../interfaces';

interface GetGlossaryTermsPayload {
    search?: string;
}

export const getGlossaryTermsRequest = async (payload?: GetGlossaryTermsPayload): Promise<Array<GlossaryItem>> => {
    const response  = await fetch(`${glossaryEndpoint}${payload?.search ? `?${new URLSearchParams({
        search: payload.search,
    })}` : ''}`, {
        method: 'GET',
    });
    
    const json = await response.json();

    if (response.ok) {
        return json as Array<GlossaryItem>;
    } else {
        const error = json as { message: string };
        const errorMessage = new Error(error?.message ?? 'Something went wrong');
        return Promise.reject(errorMessage)
    }
}