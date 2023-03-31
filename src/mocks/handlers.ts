import { rest } from 'msw';
import { apiAddress, env } from '@/config';
export interface openAIResponse {
    data: {
        response: string;
    };
}

export const handlers = [
    rest.post<openAIResponse>(`${apiAddress[env]}/openai`, (req, res, ctx) => {
        return res(
            ctx.status(200),
            ctx.json({
                result: 'hi return success',
            }),
        );
    }),
];
