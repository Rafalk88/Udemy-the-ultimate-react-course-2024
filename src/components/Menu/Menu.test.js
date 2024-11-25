import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Menu } from './Menu';


describe('Menu Component', () => {
  afterEach(() => {
    jest.resetModules();
  });

  it('renders the menu heading', () => {
    render(<Menu />);
    expect(screen.getByRole('heading', { level: 2 })).toHaveTextContent('Our Menu');
  });

  it('displays a message when no pizzas are available', () => {
    jest.doMock('../../data', () => ({
      pizzaData: []
    }));
    
    const { Menu } = require('./Menu');
    render(<Menu />);
    
    expect(screen.getByText('No pizzas available at the moment.')).toBeInTheDocument();
  });

  it('renders a description and list of pizzas when data is available', () => {
    jest.mock('../../data', () => {
      const actualData = jest.requireActual('../../data');
      return {
        ...actualData
      };
    });

    render(<Menu />);

    expect(
      screen.getByText(
        'Authentic Italian cuisine. 6 creative dishes to choose from. All from our stone oven, all organic, all delicious'
      )
    ).toBeInTheDocument();
  });

  it('renders the correct class name for the main container', () => {
    render(<Menu />);
    expect(screen.getByRole('main')).toHaveClass('menu');
  });
});
