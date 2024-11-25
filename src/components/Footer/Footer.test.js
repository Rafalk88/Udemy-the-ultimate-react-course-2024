import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Footer } from './Footer';

const mockDate = (hours, minutes) => {
  jest.spyOn(global, 'Date').mockImplementation(() => ({
    getHours: () => hours,
    getMinutes: () => minutes,
  }));
};

describe('Footer Component', () => {
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it('renders Footer Component', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it('renders the open message with a button during opening hours', () => {
    mockDate(14, 30);
    render(<Footer />);

    expect(
      screen.getByText("We're open until 22:00. Come visit us or order online.")
    ).toBeInTheDocument();

    const orderButton = screen.getByRole('button', { name: /Order/i });
    expect(orderButton).toBeInTheDocument();
  });

  it('renders the closed message outside opening hours', () => {
    mockDate(23, 15);
    render(<Footer />);
    
    expect(
      screen.getByText("It's 23:15 We're closed! Coming back tomorrow at 12:00.")
    ).toBeInTheDocument();
  });
});