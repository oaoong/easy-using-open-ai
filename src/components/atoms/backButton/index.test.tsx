import { render, screen, fireEvent } from '@testing-library/react';
import { RecoilRoot } from 'recoil';
import BackButton from '.';

describe('BackButton 컴포넌트', () => {
    test('renders back button', () => {
        render(
            <RecoilRoot>
                <BackButton />
            </RecoilRoot>,
        );
        const backButton = screen.getByRole('button', { name: 'back-button' });
        expect(backButton).toBeInTheDocument();
    });

    test('clicking back button calls setPageNumber', () => {
        const setPageNumber = jest.fn();
        const pageNumber = 1;
        jest.spyOn(require('recoil'), 'useRecoilState').mockReturnValue([
            pageNumber,
            setPageNumber,
        ]);
        render(
            <RecoilRoot>
                <BackButton />
            </RecoilRoot>,
        );
        const backButton = screen.getByRole('button', { name: 'back-button' });
        fireEvent.click(backButton);
        expect(setPageNumber).toHaveBeenCalledWith(0);
    });
});
