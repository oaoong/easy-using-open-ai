import React from 'react';
import Board from '../../molecules/board';

import './style.scss';

export default function Ask() {
    return (
        <div className='ask-container'>
            <Board>
                <Board.Text />
                <Board.Input />
            </Board>
        </div>
    );
}
