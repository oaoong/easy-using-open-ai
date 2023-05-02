import Image from 'next/image';
import React, { useState } from 'react';

import { useRecoilState } from 'recoil';
import { pageState } from '@/src/recoil/atom';

import './style.scss';

export default function BackButton() {
    const [beforePage, setBeforePage] = useState(0);
    const [pageNumber, setPageNumber] = useRecoilState(pageState);
    const onClickMenu = () => {
        setPageNumber(pageNumber === 0 ? beforePage : 0);
        setBeforePage(pageNumber);
    };
    return (
        <div className='back-button-container'>
            <button className='back-button' onClick={onClickMenu}>
                <Image
                    src={'/images/menu.png'}
                    width={40}
                    height={40}
                    alt='back-button'
                />
            </button>
        </div>
    );
}
