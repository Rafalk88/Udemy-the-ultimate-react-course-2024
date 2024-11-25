import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Header } from './Header';

describe('Header Component', () => {
  it('renders the header element', () => {
    render(<Header />);
    expect(screen.getByRole('banner')).toBeInTheDocument();
  });

  it('renders the company name inside an <h1> element', () => {
    render(<Header />);
    const heading = screen.getByRole('heading', { level: 1 });
    expect(heading).toBeInTheDocument();
    expect(heading).toHaveTextContent('Fast React Pizza Co.');
  });

  it('has the correct class applied to the header element', () => {
    render(<Header />);
    const header = screen.getByRole('banner');
    expect(header).toHaveClass('header');
  });
});
