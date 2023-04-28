import styled from '@emotion/styled';
import React from 'react';
import Board from '../../molecules/board';

import './style.scss';

export default function Likes() {
    return (
        <div className='likes-container'>
            <Board temperature={0} topP={1.0}>
                <Board.Text />
                <Column>
                    <Row>
                        <Board.Question />
                    </Row>
                    <Row>
                        <Board.Input
                            postFix={
                                '\n위 글이 긍정적인지 부정적인지 분석해주세요.'
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
