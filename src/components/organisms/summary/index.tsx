import React from 'react';
import Board from '../../molecules/board';

import './style.scss';

export default function Summary() {
    // TODO: onsubmit, value의 context 처리 방안, mock api 연결 및 테스트 코드 작성, nextjs api (mutation) 연결 및 interceptor 처리
    return (
        <div className='summary-container'>
            <Board>
                <Board.Text />
                <Board.Input />
            </Board>
        </div>
    );
}
