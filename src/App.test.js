import { render, screen } from '@testing-library/react';

test('renders todo item with correct text', () => {
    expect(screen.getByText(/My Tasks/i)).toBeInTheDocument();
});