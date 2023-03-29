import React from 'react';
import './style.scss';

export interface TextFieldProps {
    answerText?: string;
}

export default function TextField({
    answerText = '이곳에 결과가 표시됩니다.',
}: TextFieldProps) {
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
