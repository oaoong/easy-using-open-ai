import React from 'react';
import Board from '../../molecules/board';

import './style.scss';

export default function Summary() {
    return (
        <div className='summary-container'>
            <Board>
                <Board.Text />
                <Board.Input />
            </Board>
        </div>
    );
}
