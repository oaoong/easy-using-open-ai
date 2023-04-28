import styled from '@emotion/styled';
import React from 'react';
import Board from '../../molecules/board';

import './style.scss';

export default function TitleMaker() {
    return (
        <div className='title-maker-container'>
            <Board temperature={0.8} topP={1.0}>
                <Board.Text />
                <Column>
                    <Row>
                        <Board.Question />
                    </Row>
                    <Row>
                        <Board.Input
                            postFix={
                                '\n위 설명에 대해서 적절한 제목을 지어주세요.'
                            }
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
