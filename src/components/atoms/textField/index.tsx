import React from 'react';
import './style.scss';

export interface TextFieldProps {
    textContents?: string;
}

export default function TextField({
    textContents = '이곳에 결과가 표시됩니다.',
}: TextFieldProps) {
    return (
        <div>
            <textarea
                className='textArea'
                readOnly
                value={textContents}
            ></textarea>
        </div>
    );
}
