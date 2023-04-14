import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRecoilState } from 'recoil';

import LinkButtonList from '@/src/components/organisms/linkButtonList';
import { buttonData } from '@/src/constants';
import { pageState } from '@/src/recoil/atom';
import Title from '../../atoms/title';
import Ask from '../../organisms/ask';
import Blank from '../../organisms/blank';
import Keyword from '../../organisms/keyword';
import Likes from '../../organisms/likes';
import Refactoring from '../../organisms/refactoring';
import Summary from '../../organisms/summary';
import TitleMaker from '../../organisms/titleMaker';

import './homeTemplate.scss';

const titles = buttonData.map((data) => data.title);

export default function HomeTemplate() {
    const [page, setPage] = useRecoilState(pageState);

    const titleIndex = page - 1;

    const pageList = [
        <Blank key={0} />,
        <Summary key={1} />,
        <Refactoring key={2} />,
        <Likes key={3} />,
        <Keyword key={4} />,
        <Ask key={5} />,
        <TitleMaker key={6} />,
    ];

    return (
        <div className='home-template-container'>
            <CSSTransition
                in={page !== 0}
                appear={true}
                timeout={500}
                classNames='slide'
                key={buttonData.length}
            >
                <div className='button-list'>
                    <LinkButtonList
                        buttonData={buttonData}
                        setPage={setPage}
                        key={0}
                    />
                </div>
            </CSSTransition>
            <div className={`page ${page !== 0 && 'show'}`}>
                <div className='title-container'>
                    <Title text={titles[titleIndex]} />
                </div>
                {pageList[page]}
            </div>
        </div>
    );
}
