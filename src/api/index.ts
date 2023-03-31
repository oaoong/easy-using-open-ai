import api from '../hooks/axiosInterceptor';

export const getOpenAIResponse = async (params: string) => {
    const response = await api.post('/openai', {
        prompt: params,
    });
    return response.data;
};
