import { render, screen } from '@testing-library/react';
import React from 'react';
import TextField from '.';

describe('TextField 컴포넌트', () => {
    it('should render without crashing', () => {
        render(<TextField />);
        expect(screen.getByRole('textbox')).toBeInTheDocument();
    });

    it('should display answer text', () => {
        const answerText = 'Lorem ipsum dolor sit amet';
        render(<TextField answerText={answerText} />);
        expect(screen.getByText(answerText)).toBeInTheDocument();
    });
});
