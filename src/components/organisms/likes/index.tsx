import React from 'react';
import Board from '../../molecules/board';

import './style.scss';

export default function Likes() {
    return (
        <div className='likes-container'>
            <Board>
                <Board.Text />
                <Board.Input />
            </Board>
        </div>
    );
}
