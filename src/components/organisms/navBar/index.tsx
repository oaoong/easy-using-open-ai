import React from 'react';
import { useSetRecoilState } from 'recoil';
import { pageState } from '@/src/recoil/atom';
import BackButton from '../../atoms/backButton';
import './_style.scss';

export default function NavBar() {
    const setPage = useSetRecoilState(pageState);

    const onClickTitle = () => {
        setPage(0);
    };

    return (
        <div className='nav-container'>
            <div className='nav-left'>
                <BackButton />
            </div>
            <div className='nav-title' onClick={onClickTitle}>
                EUOAI
            </div>
        </div>
    );
}
