import HomeTemplate from '@/src/components/template/home/homeTemplate';

export default function Home() {
    const buttonData = [
        {
            title: '내용 요약하기',
            page: 1,
        },
        {
            title: '코드 리팩토링',
            page: 2,
        },
        {
            title: '긍・부정 분석',
            page: 3,
        },
        {
            title: '키워드 분석',
            page: 4,
        },
        {
            title: '질문 답변하기',
            page: 5,
        },
        {
            title: '제목 생성기',
            page: 6,
        },
    ];

    return <HomeTemplate buttonData={buttonData} />;
}
