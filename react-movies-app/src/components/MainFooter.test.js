import React from 'react';
import { render, screen } from '@testing-library/react';
import { MainFooter } from './MainFooter';

test("renders Diego Silveira text", () => {
    render(<MainFooter />)
    const linkElement = screen.getByText(/Diego Silveira/i);
    expect(linkElement).toBeInTheDocument();
});