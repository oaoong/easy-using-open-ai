import styled from '@emotion/styled';
import React from 'react';
import Board from '../../molecules/board';

import './style.scss';

export default function Summary() {
    return (
        <div className='summary-container'>
            <Board>
                <Board.Text />
                <Column>
                    <Row>
                        <Board.Question />
                    </Row>
                    <Row>
                        <Board.Input />
                        <Board.RoleSelector />
                    </Row>
                    <Row>
                        <Board.ExampleSelector />
                        <Board.ExceptionSelector />
                    </Row>
                </Column>
            </Board>
        </div>
    );
}

const Column = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 1rem;
`;

const Row = styled.div`
    margin: 1rem;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;
