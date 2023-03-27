import React from 'react';
import InputField, { InputFieldProps } from '../../atoms/inputField';
import TextField, { TextFieldProps } from '../../atoms/textField';

export interface BoardProps {
    children?: React.ReactNode;
    onSubmit?: React.FormEventHandler<HTMLDivElement>;
}

export default function Board({ children, onSubmit, ...props }: BoardProps) {
    return (
        <div className='board-container' onSubmit={onSubmit} {...props}>
            {children}
        </div>
    );
}

export const Input = function () {
    return <InputField />;
};
Board.Input = Input;

export const Text = function ({ textContents }: TextFieldProps) {
    return <TextField textContents={textContents} />;
};
Board.Text = Text;
