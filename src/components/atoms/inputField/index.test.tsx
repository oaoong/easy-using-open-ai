import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import InputField from './';

describe('InputField 컴포넌트', () => {
    test('renders InputField', () => {
        const inputValue = 'test input';
        render(<InputField inputValue={inputValue} onSubmit={jest.fn()} />);
        const input = screen.getByLabelText('input-field') as HTMLInputElement;
        expect(input.value).toBe(inputValue);
    });

    test('calls onSubmit function', () => {
        const onSubmit = jest
            .fn()
            .mockImplementation((e) => e.preventDefault());
        render(<InputField onSubmit={onSubmit} inputValue='' />);
        const submitButton = screen.getByLabelText(
            'submit-button',
        ) as HTMLButtonElement;
        fireEvent.click(submitButton);
        expect(onSubmit).toHaveBeenCalled();
    });
});
