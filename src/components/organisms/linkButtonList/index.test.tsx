import { fireEvent, render, screen } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import { pageState } from '@/src/recoil/atom';
import { RecoilObserver } from '@/src/recoil/observer';
import LinkButtonList from './index';

describe('linkButtonList', () => {
    it('button 선택 시 pageState 변경', () => {
        const onChange = jest.fn();
        const buttonData = [
            {
                title: 'title1',
                page: 1,
            },
            {
                title: 'title2',
                page: 2,
            },
        ];

        const { container } = render(
            <RecoilRoot>
                <RecoilObserver node={pageState} onChange={onChange} />
                <LinkButtonList buttonData={buttonData} setPage={onChange} />
            </RecoilRoot>,
        );

        expect(onChange).toBeCalledWith(0);
        for (let i = 0; i < buttonData.length; i++) {
            // expect(screen.getByText(buttonData[i].title)).toBeInTheDocument();
            // eslint-disable-next-line testing-library/no-container, testing-library/no-node-access
            const component = container.getElementsByClassName(
                `button-container-${buttonData[i].page}`,
            );
            fireEvent.click(component[0]);
            expect(onChange).toBeCalledWith(buttonData[i].page);
            expect(screen.getByText(buttonData[i].title)).toBeInTheDocument();
        }
    });
});
