import api from '../hooks/axiosInterceptor';

interface IopenAIRequest {
    prompt: string;
    temperature: number;
    topP: number;
}

export const getOpenAIResponse = async ({
    prompt,
    temperature,
    topP,
}: IopenAIRequest) => {
    const response = await api.post('/openai', {
        prompt: prompt,
        temperature: temperature,
        topP: topP,
    });
    return response.data;
};
