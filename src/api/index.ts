import api from '../hooks/axiosInterceptor';

export const getOpenAIResponse = async (params: object) => {
    const response = await api.post('/query', {
        params: {
            params,
        },
    });
    return response.data;
};
