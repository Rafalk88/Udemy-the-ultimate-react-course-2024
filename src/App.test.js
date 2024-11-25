import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import App from './App';

describe('App Component', () => {
  it('renders the App component and contains the Header, Menu, and Footer components', () => {
    render(<App />);

    expect(screen.getByRole('banner')).toBeInTheDocument();

    expect(screen.getByRole('main')).toBeInTheDocument();

    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
