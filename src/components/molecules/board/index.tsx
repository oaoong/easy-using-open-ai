import React, { createContext, useState, useContext } from 'react';
import { useQuery } from 'react-query';
import { getOpenAIResponse } from '@/src/api';
import InputField from '../../atoms/inputField';
import TextField, { TextFieldProps } from '../../atoms/textField';

interface IBoardContextValue {
    answerText: string;
    setAnswerText?: React.Dispatch<React.SetStateAction<string>>;
    inputValue: string;
    setInputValue?: React.Dispatch<React.SetStateAction<string>>;
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

const BoardContext = createContext<IBoardContextValue | undefined>({
    answerText: 'hi there',
    inputValue: '',
});

export default function Board({ children }: { children?: React.ReactNode }) {
    const [answerText, setAnswerText] = useState('hi there');
    const [inputValue, setInputValue] = useState('');
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setInputValue('');
        e.preventDefault();
        console.log('Submitted!');
    };

    useQuery({
        queryKey: ['getSummaryAnswer', inputValue],
        queryFn: () =>
            getOpenAIResponse({
                prompt: inputValue,
            }),
        onSuccess: (data) => {
            setAnswerText(data.data.response);
            // eslint-disable-next-line no-console
            console.log(data.data.response);
        },
    });

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
