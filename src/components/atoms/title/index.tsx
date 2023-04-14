import React from 'react';
import './style.scss';

interface iTitle {
    text: string;
}

export default function Title({ text }: iTitle) {
    return <div className='title-container'>{text}</div>;
}
