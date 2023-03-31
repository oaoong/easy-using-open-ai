import React from 'react';
import './style.scss';

export interface TextFieldProps {
    answerText?: string;
}

export default function TextField({ answerText = '' }: TextFieldProps) {
    return (
        <div>
            <textarea
                className='textArea'
                readOnly
                value={answerText}
            ></textarea>
        </div>
    );
}
