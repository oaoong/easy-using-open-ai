import React from 'react';
import Board from '../../molecules/board';

import './style.scss';

export default function TitleMaker() {
    return (
        <div className='title-maker-container'>
            <Board>
                <Board.Text />
                <Board.Input />
            </Board>
        </div>
    );
}
