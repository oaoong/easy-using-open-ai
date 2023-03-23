import React from 'react';

import { useRecoilState } from 'recoil';

import LinkButtonList, {
    LinkButtonListProps,
} from '@/src/components/organisms/linkButtonList';
import { pageState } from '@/src/recoil/atom';
import Ask from '../../organisms/ask';
import Keyword from '../../organisms/keyword';
import Likes from '../../organisms/likes';
import Refactoring from '../../organisms/refactoring';
import Summary from '../../organisms/summary';
import TitleMaker from '../../organisms/titleMaker';

export default function HomeTemplate({
    buttonData,
}: Omit<LinkButtonListProps, 'setPage'>) {
    const [page, setPage] = useRecoilState(pageState);

    const pageList = [
        <LinkButtonList buttonData={buttonData} setPage={setPage} key={0} />,
        <Summary key={1} />,
        <Refactoring key={2} />,
        <Likes key={3} />,
        <Keyword key={4} />,
        <Ask key={5} />,
        <TitleMaker key={6} />,
    ];

    return pageList[page];
}
