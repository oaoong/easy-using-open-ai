import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import InputField from './';

describe('InputField 컴포넌트', () => {
    test('renders InputField', () => {
        const inputValue = 'test input';
        render(
            <InputField inputValue={inputValue} setInputValue={jest.fn()} />,
        );
        const input = screen.getByLabelText('input-field') as HTMLInputElement;
        expect(input.value).toBe(inputValue);
    });

    test('user writing input calls setInputValue', () => {
        const setInputValue = jest.fn();
        const onSubmit = jest.fn();
        const inputValue = 'test input';

        render(
            <InputField
                inputValue={''}
                setInputValue={setInputValue}
                onSubmit={onSubmit}
            />,
        );
        const input = screen.getByLabelText('input-field') as HTMLInputElement;

        fireEvent.change(input, { target: { value: inputValue } });
        expect(setInputValue).toHaveBeenCalledWith(inputValue);
    });

    test('calls onSubmit function', () => {
        const onSubmit = jest
            .fn()
            .mockImplementation((e) => e.preventDefault());
        render(
            <InputField
                onSubmit={onSubmit}
                inputValue=''
                setInputValue={jest.fn()}
            />,
        );
        const submitButton = screen.getByLabelText(
            'submit-button',
        ) as HTMLButtonElement;
        fireEvent.click(submitButton);
        expect(onSubmit).toHaveBeenCalled();
    });
});
