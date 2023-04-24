import styled from '@emotion/styled';
import React from 'react';
import Board from '../../molecules/board';

import './style.scss';

export default function Keyword() {
    return (
        <div className='keyword-container'>
            <Board>
                <Board.Text />
                <Column>
                    <Row>
                        <Board.Question />
                    </Row>
                    <Row>
                        <Board.Input
                            postFix={'\n위 글의 주요 키워드를 분석해주세요.'}
                        />
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
