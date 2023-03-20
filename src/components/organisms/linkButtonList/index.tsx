import React from 'react';
import LinkButton, { LinkButtonProps } from '../../molecules/linkButton';

import './style.scss';

export interface LinkButtonListProps {
    buttonData: LinkButtonProps[];
}

export default function LinkButtonList({ buttonData }: LinkButtonListProps) {
    const renderLinkButtons = buttonData?.map((data) => {
        return (
            <div className='button-divider' key={data.title}>
                <LinkButton title={data.title} link={data.link} />
            </div>
        );
    });

    return <div className='list-container'>{renderLinkButtons}</div>;
}
