import Image from 'next/image';
import React from 'react';

import { useSetRecoilState } from 'recoil';
import { pageState } from '@/src/recoil/atom';

import './style.scss';

export default function BackButton() {
    const setPageNumber = useSetRecoilState(pageState);
    const onBackButtonClick = () => {
        setPageNumber(0);
    };
    return (
        <div className='back-button-container'>
            <button className='back-button' onClick={onBackButtonClick}>
                <Image
                    src={'/images/back.png'}
                    width={30}
                    height={30}
                    alt='back-button'
                />
            </button>
        </div>
    );
}
