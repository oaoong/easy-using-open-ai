import { render, screen } from '@testing-library/react';

import Title from '.';

describe('Title 컴포넌트', () => {
    test('renders Title', () => {
        const text = 'test title';
        render(<Title text={text} />);
        const title = screen.getByText(text);
        expect(title).toBeInTheDocument();
    });
});
