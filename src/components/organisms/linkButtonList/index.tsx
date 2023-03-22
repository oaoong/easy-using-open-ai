import React from 'react';
import LinkButton, { LinkButtonProps } from '../../molecules/linkButton';

import './style.scss';

export interface LinkButtonListProps {
    buttonData: Omit<LinkButtonProps, 'setPage'>[];
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function LinkButtonList({
    buttonData,
    setPage,
}: LinkButtonListProps) {
    const renderLinkButtons = buttonData?.map((data) => {
        return (
            <div className='button-divider' key={data.title}>
                <LinkButton
                    title={data.title}
                    page={data.page}
                    setPage={setPage}
                />
            </div>
        );
    });

    return <div className='list-container'>{renderLinkButtons}</div>;
}
