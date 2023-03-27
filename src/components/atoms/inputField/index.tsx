import React, { useState } from 'react';
import './style.scss';

export interface InputFieldProps {
    onSubmit?: React.FormEventHandler<HTMLFormElement>;
}

export default function InputField() {
    const [inputValue, setInputValue] = useState('');
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        setInputValue('');
        e.preventDefault();
        console.log('Submitted!');
    };
    const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(e.target.value);
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
