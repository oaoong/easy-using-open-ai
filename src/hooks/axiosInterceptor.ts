import axios, { AxiosResponse } from 'axios';
import React, { useState, useEffect } from 'react';

import { apiAddress, env } from '@/config';

const api = axios.create({
    baseURL: apiAddress[env],
    withCredentials: true,
});

const AxiosInterceptor = ({ children }: { children: React.ReactElement }) => {
    const [isSet, setIsSet] = useState(false);
    useEffect(() => {
        api.interceptors.request.use(
            (config) => {
                return config;
            },
            (error) => {
                return error;
            },
        );

        const interceptor = api.interceptors.response.use(
            (response: AxiosResponse) => {
                return response;
            },
            (error: unknown) => {
                return Promise.reject(error);
            },
        );

        setIsSet(true);

        return () => {
            api.interceptors.response.eject(interceptor);
            api.interceptors.request.eject(interceptor);
        };
    }, []);

    if (isSet) {
        return children;
    } else {
        return null;
    }
};

export default api;
export { AxiosInterceptor };
