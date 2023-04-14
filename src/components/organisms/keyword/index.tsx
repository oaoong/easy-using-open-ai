import React from 'react';
import Board from '../../molecules/board';

import './style.scss';

export default function Keyword() {
    return (
        <div className='keyword-container'>
            <Board>
                <Board.Text />
                <Board.Input />
            </Board>
        </div>
    );
}
