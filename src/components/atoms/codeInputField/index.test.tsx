import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import CodeInputField from './';

describe('CodeInputField 컴포넌트', () => {
    test('renders CodeInputField', () => {
        const inputValue = 'test input';
        render(
            <CodeInputField
                inputValue={inputValue}
                setInputValue={jest.fn()}
            />,
        );
        const input = screen.getByLabelText('input-field') as HTMLInputElement;
        expect(input.value).toBe(inputValue);
    });

    test('user writing input calls setInputValue', () => {
        const setInputValue = jest.fn();
        const onSubmit = jest.fn();
        const inputValue = 'test input';

        render(
            <CodeInputField
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
            <CodeInputField
                onSubmit={onSubmit}
                inputValue=''
                setInputValue={jest.fn()}
            />,
        );
        const submitButton = screen.getByLabelText(
            'code-submit-button',
        ) as HTMLButtonElement;
        fireEvent.click(submitButton);
        expect(onSubmit).toHaveBeenCalled();
    });
});
