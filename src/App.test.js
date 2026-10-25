// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders NftZephyr title', () => {
    render(<App />);
    const titleElement = screen.getByText(/NftZephyr/i);
    expect(titleElement).toBeInTheDocument();
});
