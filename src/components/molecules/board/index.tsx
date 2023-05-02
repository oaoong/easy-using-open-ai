import { AxiosError } from 'axios';
import React, { createContext, useState, useContext, useEffect } from 'react';
import { useMutation } from 'react-query';
import { getOpenAIResponse } from '@/src/api';
import { exceptionData, formData, inputData, roleData } from '@/src/constants';
import CodeInputField from '../../atoms/codeInputField';
import InputField from '../../atoms/inputField';
import Selector from '../../atoms/selector';
import TextField from '../../atoms/textField';

interface IBoardProps {
    children: React.ReactNode;
    temperature: number;
    topP: number;
}

interface IBoardContextValue {
    answerText: string;
    setAnswerText?: React.Dispatch<React.SetStateAction<string>>;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>> | (() => void);
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    role: string;
    setRole: React.Dispatch<React.SetStateAction<string>>;
    example: string;
    setExample: React.Dispatch<React.SetStateAction<string>>;
    exception: string;
    setException: React.Dispatch<React.SetStateAction<string>>;
    query: string;
}

export const BoardContext = createContext<IBoardContextValue | undefined>({
    answerText: 'hi there',
    inputValue: '',
    setInputValue: () => {
        /**/
    },
    role: '',
    example: '',
    exception: '',
    setRole: () => {
        /**/
    },
    setExample: () => {
        /**/
    },
    setException: () => {
        /**/
    },
    query: '',
});

export default function Board({ children, temperature, topP }: IBoardProps) {
    const [answerText, setAnswerText] = useState('hi there');
    const [query, setQuery] = useState('');
    const [inputValue, setInputValue] = useState('');
    const [role, setRole] = useState('');
    const [example, setExample] = useState('');
    const [exception, setException] = useState('');

    useEffect(() => {
        setQuery(`${inputValue} ${role} ${example} ${exception}`);
    }, [role, inputValue, example, exception]);

    const getAnswer = useMutation(
        (text: string) =>
            getOpenAIResponse({
                prompt: text,
                temperature: temperature,
                topP: topP,
            }),
        {
            onMutate: () => {
                setAnswerText('답변을 생성 중입니다. 잠시만 기다려주세요.');
            },
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
        getAnswer.mutate(query);
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
                role,
                setRole,
                example,
                setExample,
                exception,
                setException,
                query,
            }}
        >
            {children}
        </BoardContext.Provider>
    );
}

export const Question = function () {
    const { query, onSubmit } = useContext(BoardContext) as IBoardContextValue;
    return <InputField onSubmit={onSubmit} inputValue={query} />;
};
Board.Question = Question;

export const Input = function ({ postFix }: { postFix: string }) {
    const { inputValue, setInputValue } = useContext(
        BoardContext,
    ) as IBoardContextValue;
    return (
        <Selector
            value={inputValue}
            setValue={setInputValue}
            postfix={postFix}
            valueExample={inputData}
        />
    );
};
Board.Input = Input;

export const CodeInput = function () {
    const { onSubmit, inputValue, setInputValue } = useContext(
        BoardContext,
    ) as IBoardContextValue;
    return (
        <CodeInputField
            onSubmit={onSubmit}
            inputValue={inputValue}
            setInputValue={setInputValue}
        />
    );
};
Board.CodeInput = CodeInput;

export const Text = function () {
    const { answerText } = useContext(BoardContext) as IBoardContextValue;
    return <TextField answerText={answerText} />;
};
Board.Text = Text;

export const RoleSelector = function () {
    const { role, setRole } = useContext(BoardContext) as IBoardContextValue;
    return (
        <Selector
            value={role}
            setValue={setRole}
            postfix={'의 입장에서 작성해주세요.'}
            valueExample={roleData}
        />
    );
};
Board.RoleSelector = RoleSelector;

export const ExampleSelector = function () {
    const { example, setExample } = useContext(
        BoardContext,
    ) as IBoardContextValue;
    return (
        <Selector
            value={example}
            setValue={setExample}
            postfix={'의 형식으로 작성해주세요.'}
            valueExample={formData}
        />
    );
};
Board.ExampleSelector = ExampleSelector;

export const ExceptionSelector = function () {
    const { exception, setException } = useContext(
        BoardContext,
    ) as IBoardContextValue;
    return (
        <Selector
            value={exception}
            setValue={setException}
            postfix={'의 사항을 제외해주세요.'}
            valueExample={exceptionData}
        />
    );
};
Board.ExceptionSelector = ExceptionSelector;
