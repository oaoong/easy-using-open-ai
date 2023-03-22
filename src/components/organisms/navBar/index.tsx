import React from 'react';
import BackButton from '../../atoms/backButton/indext';
import './_style.scss';

export default function NavBar() {
    return (
        <div className='nav-container'>
            <div className='nav-left'>
                <BackButton />
            </div>
            <div className='nav-title'>EUOAI</div>
        </div>
    );
}
