import { render, screen, fireEvent } from '@testing-library/react';
import BackButton from '.';

describe('BackButton 컴포넌트', () => {
    test('renders back button', () => {
        render(<BackButton />);
        const backButton = screen.getByRole('button', { name: 'back-button' });
        expect(backButton).toBeInTheDocument();
    });

    test('clicking back button calls setPageNumber', () => {
        const setPageNumber = jest.fn();
        jest.spyOn(require('recoil'), 'useSetRecoilState').mockReturnValue(
            setPageNumber,
        );
        render(<BackButton />);
        const backButton = screen.getByRole('button', { name: 'back-button' });
        fireEvent.click(backButton);
        expect(setPageNumber).toHaveBeenCalledWith(0);
    });
});
