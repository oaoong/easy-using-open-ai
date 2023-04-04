import { render, fireEvent, screen } from '@testing-library/react';
import React from 'react';
import InputField from './';

describe('InputField 컴포넌트', () => {
    test('inputValue가 제대로 출력되는지 확인', () => {
        const inputValue = 'test input';
        render(<InputField inputValue={inputValue} />);
        const input = screen.getByLabelText('input-field') as HTMLInputElement;
        expect(input.value).toBe(inputValue);
    });

    test('입력한 값이 inputValue에 전달되는지 확인', () => {
        const inputValue = 'test input';

        render(<InputField inputValue={inputValue} />);
        const input = screen.getByLabelText('input-field') as HTMLInputElement;
        fireEvent.change(input, { target: { value: inputValue } });
        expect(input.value).toBe(inputValue);
    });

    test('onSubmit 함수가 호출되는지 확인', () => {
        const onSubmit = jest.fn();
        render(<InputField onSubmit={onSubmit} inputValue='' />);
        const submitButton = screen.getByLabelText(
            'submit-button',
        ) as HTMLButtonElement;
        fireEvent.click(submitButton);
        expect(onSubmit).toHaveBeenCalled();
    });
});
