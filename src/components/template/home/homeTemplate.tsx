import React from 'react';
import { CSSTransition } from 'react-transition-group';
import { useRecoilState } from 'recoil';

import LinkButtonList, {
    LinkButtonListProps,
} from '@/src/components/organisms/linkButtonList';
import { pageState } from '@/src/recoil/atom';
import Ask from '../../organisms/ask';
import Blank from '../../organisms/blank';
import Keyword from '../../organisms/keyword';
import Likes from '../../organisms/likes';
import Refactoring from '../../organisms/refactoring';
import Summary from '../../organisms/summary';
import TitleMaker from '../../organisms/titleMaker';

import './homeTemplate.scss';

export default function HomeTemplate({
    buttonData,
}: Omit<LinkButtonListProps, 'setPage'>) {
    const [page, setPage] = useRecoilState(pageState);

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
                {pageList[page]}
            </div>
        </div>
    );
}
