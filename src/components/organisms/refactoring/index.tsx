import React from 'react';
import Board from '../../molecules/board';

import './style.scss';

export default function Refactoring() {
    return (
        <div className='refactoring-container'>
            <Board>
                <Board.Text />
                <Board.Input />
            </Board>
        </div>
    );
}
