import React, { useEffect, useRef } from 'react';
import './style.scss';

export interface InputFieldProps {
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    inputValue: string;
}

export default function InputField({ onSubmit, inputValue }: InputFieldProps) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const submitButtonRef = useRef<HTMLInputElement>(null);

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
                rows={0}
                className='inputField'
                value={inputValue}
                aria-label='input-field'
                readOnly
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
