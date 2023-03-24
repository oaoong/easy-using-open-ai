import Image from 'next/image';

import './style.scss';

export interface LinkButtonProps {
    title?: string;
    page?: number;
    setPage: React.Dispatch<React.SetStateAction<number>>;
}

export default function PageButton({
    title = 'Button',
    page = 0,
    setPage,
}: LinkButtonProps) {
    const onClickButton = () => {
        setPage(page);
    };
    return (
        <button className={'button-container-' + page} onClick={onClickButton}>
            <div className='title'>{title}</div>
            <div className='arrow'>
                <Image
                    src='/images/arrow.png'
                    width={20}
                    height={20}
                    alt='arrow'
                />
            </div>
        </button>
    );
}
