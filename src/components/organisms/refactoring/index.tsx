import styled from '@emotion/styled';
import React from 'react';
import Board from '../../molecules/board';

import './style.scss';

export default function Refactoring() {
    return (
        <div className='refactoring-container'>
            <Board>
                <Board.Text />
                <Board.CodeInput />
                <Column>
                    <Row>
                        <Board.RoleSelector />
                        <Board.ExampleSelector />
                    </Row>
                    <Row>
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
