import { AxiosError } from 'axios';
import React, { createContext, useState, useContext } from 'react';
import { useMutation } from 'react-query';
import { getOpenAIResponse } from '@/src/api';
import InputField from '../../atoms/inputField';
import TextField from '../../atoms/textField';

interface IBoardContextValue {
    answerText: string;
    setAnswerText?: React.Dispatch<React.SetStateAction<string>>;
    inputValue: string;
    setInputValue?: React.Dispatch<React.SetStateAction<string>>;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

export const BoardContext = createContext<IBoardContextValue | undefined>({
    answerText: 'hi there',
    inputValue: '',
});

export default function Board({ children }: { children?: React.ReactNode }) {
    const [answerText, setAnswerText] = useState('hi there');
    const [inputValue, setInputValue] = useState('');

    const getAnswer = useMutation(
        (inputValue: string) => getOpenAIResponse(inputValue),
        {
            onSuccess: (data) => {
                setAnswerText(data?.result);
            },
            onError: (error: AxiosError) => {
                setAnswerText('error occured');
                console.log(error);
            },
        },
    );

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        getAnswer.mutate(inputValue);
        setInputValue('');
        e.preventDefault();
    };

    return (
        <BoardContext.Provider
            value={{
                answerText,
                setAnswerText,
                inputValue,
                setInputValue,
                onSubmit,
            }}
        >
            {children}
        </BoardContext.Provider>
    );
}

export const Input = function () {
    const { onSubmit, inputValue, setInputValue } = useContext(
        BoardContext,
    ) as IBoardContextValue;
    return (
        <InputField
            onSubmit={onSubmit}
            inputValue={inputValue}
            setInputValue={setInputValue}
        />
    );
};
Board.Input = Input;

export const Text = function () {
    const { answerText } = useContext(BoardContext) as IBoardContextValue;
    return <TextField answerText={answerText} />;
};
Board.Text = Text;
