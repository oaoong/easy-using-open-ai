import HomeTemplate from '@/src/components/template/home/homeTemplate';

export default function Home() {
    const buttonData = [
        {
            title: 'Button 1',
            link: '/',
        },
        {
            title: 'Button 2',
            link: '/',
        },
    ];

    return <HomeTemplate buttonData={buttonData} />;
}
