import React from 'react';
import './style.scss';

export interface InputFieldProps {
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
    inputValue: string;
    setInputValue?: React.Dispatch<React.SetStateAction<string>>;
}

export default function InputField({
    onSubmit,
    inputValue,
    setInputValue,
}: InputFieldProps) {
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue && setInputValue(e.target.value);
        e.preventDefault();
    };

    return (
        <form onSubmit={onSubmit} className='form' aria-label='form'>
            <input
                className='inputField'
                onChange={onChangeInput}
                value={inputValue}
                aria-label='input-field'
            />
            <input
                className='submit-button'
                type='submit'
                aria-label='submit-button'
            />
        </form>
    );
}
