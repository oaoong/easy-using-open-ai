import Image from 'next/image';
import { useRouter } from 'next/router';

import './style.scss';

export interface LinkButtonProps {
    title?: string;
    link?: string;
}

export default function LinkButton({
    title = 'Button',
    link = '/',
}: LinkButtonProps) {
    const router = useRouter();
    const onClickButton = () => {
        router.push(link);
    };
    return (
        <button className='button-container' onClick={onClickButton}>
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
