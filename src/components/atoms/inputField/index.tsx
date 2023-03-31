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
        <form onSubmit={onSubmit} className='form'>
            <input
                className='inputField'
                onChange={onChangeInput}
                value={inputValue}
            />
            <input className='submit-button' type='submit' />
        </form>
    );
}
