import React, { useEffect, useRef } from 'react';
import './style.scss';

export interface ICodeInputField {
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    inputValue: string;
    setInputValue: React.Dispatch<React.SetStateAction<string>>;
}

export default function CodeInputField({
    onSubmit,
    inputValue,
    setInputValue,
}: ICodeInputField) {
    const textareaRef = useRef<HTMLTextAreaElement>(null);
    const codeNumberRef = useRef<HTMLTextAreaElement>(null);
    const submitButtonRef = useRef<HTMLInputElement>(null);

    const onChangeInput = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
        setInputValue(e.target.value + '\n위 코드를 리팩토링해주세요.');
    };

    useEffect(() => {
        const textarea = textareaRef.current;
        const submitButton = submitButtonRef.current;
        const codeNumber = codeNumberRef.current;
        if (textarea && submitButton && codeNumber) {
            textarea.style.height = 'auto';
            submitButton.style.height = 'auto';
            codeNumber.style.height = 'auto';
            textarea.style.height = `${textarea.scrollHeight + 6}px`;
            submitButton.style.height = `${textarea.scrollHeight + 6}px`;
            codeNumber.style.height = `${textarea.scrollHeight + 6}px`;

            const lines = inputValue.split(/\r*\n/).length;
            let lineNumbers = '';
            for (let i = 1; i <= lines; i++) {
                lineNumbers += i + '\n';
            }
            codeNumber.value = lineNumbers;
        }
    }, [inputValue]);

    return (
        <form onSubmit={onSubmit} className='form' aria-label='form'>
            <textarea
                ref={codeNumberRef}
                className='codeNumberRow'
                rows={1}
                aria-label='code-number-row'
                readOnly
            />
            <textarea
                ref={textareaRef}
                rows={1}
                className='codeInputField'
                onChange={onChangeInput}
                value={inputValue}
                aria-label='input-field'
            />
            <input
                ref={submitButtonRef}
                className='code-submit-button'
                type='submit'
                aria-label='code-submit-button'
            />
        </form>
    );
}
