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

  it('renders', () => {
    render(<Footer />);
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });

  it("renders right info during opening hours", () => {
    mockDate(14, 30);
    render(<Footer />);
    expect(screen.getByText("It's 14:30 We're open!")).toBeInTheDocument();
  });

  it("renders right info outside opening hours", () => {
    mockDate(23, 15);
    render(<Footer />);
    expect(screen.getByText("It's 23:15 We're closed!")).toBeInTheDocument();
  });
});