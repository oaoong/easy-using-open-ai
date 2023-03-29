import { rest } from 'msw';
import { apiAddress, env } from '@/config';
export interface openAIResponse {
    data: {
        response: string;
    };
}

export const handlers = [
    rest.post<openAIResponse>(`${apiAddress[env]}/query`, (req, res, ctx) => {
        console.log('request', req);
        return res(
            ctx.status(200),
            ctx.json({
                data: {
                    response: 'hi return success',
                },
            }),
        );
    }),
];
