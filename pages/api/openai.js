import * as dotenv from 'dotenv';
import { Configuration, OpenAIApi } from 'openai';

dotenv.config({ path: __dirname + '/.env' });

const configuration = new Configuration({
    apiKey: process.env.OPEN_AI_KEY,
});

const openai = new OpenAIApi(configuration);

export default async function handler(req, res) {
    if (!configuration.apiKey) {
        res.status(500).json({
            error: {
                message: 'OpenAI API key not configured',
            },
        });
        return;
    }

    const text = req.body.prompt || '';
    if (text.trim().length === 0) {
        res.status(400).json({
            error: {
                message: 'Text is required',
            },
        });
        return;
    }

    try {
        const response = await openai.createCompletion({
            model: 'text-davinci-003',
            prompt: `다음 질문에 대해서 답변해줘: <${text}>`,
            temperature: 0.8,
            max_tokens: 600,
        });
        res.status(200).json({ result: response.data.choices[0].text });
    } catch (error) {
        if (error.response) {
            console.log(error(error.response.status, error.response.data));
            res.status(error.response.status).json(error.response.data);
        } else {
            console.error(`Error with OpenAI API request: ${error.message}`);
            res.status(500).json({
                error: {
                    message: 'An error occured during your request',
                },
            });
        }
    }
}
