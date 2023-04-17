import React, { useEffect, useRef } from 'react';
import './style.scss';

export interface InputFieldProps {
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputField({
    onSubmit,
    inputValue,
    setInputValue,
}: InputFieldProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const submitButtonRef = useRef<HTMLInputElement>(null);
    const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value);
    };

    useEffect(() => {
        const textarea = textareaRef.current;
        const submitButton = submitButtonRef.current;
        if (textarea && submitButton) {
            textarea.style.height = 'auto';
            submitButton.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight + 6}px`;
            submitButton.style.height = `${textarea.scrollHeight + 6}px`;
        }
    }, [inputValue]);

    return (
        <form onSubmit={onSubmit} className='form' aria-label='form'>
            <textarea
                ref={textareaRef}
                rows={1}
                className='inputField'
                onChange={onChangeInput}
                value={inputValue}
                aria-label='input-field'
            />
            <input
                ref={submitButtonRef}
                className='submit-button'
                type='submit'
                aria-label='submit-button'
            />
        </form>
    );
}
