import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Pizza } from './Pizza';

describe('Pizza Component', () => {
  const pizzaProps = {
    name: 'Margherita',
    ingredients: 'Tomato, Mozzarella',
    price: 8.5,
    photoName: 'margherita.jpg',
    soldOut: false,
  };

  it('renders pizza name, ingredients, and price correctly when available', () => {
    render(<Pizza {...pizzaProps} />);

    expect(screen.getByRole('heading', { level: 3 })).toHaveTextContent('Margherita');

    expect(screen.getByText('Tomato, Mozzarella')).toBeInTheDocument();

    expect(screen.getByText('8.5$')).toBeInTheDocument();

    expect(screen.getByAltText('Margherita')).toBeInTheDocument();
  });

  it('renders "sold out" message and applies "sold-out" class when pizza is sold out', () => {
    const soldOutPizza = { ...pizzaProps, soldOut: true };
    render(<Pizza {...soldOutPizza} />);

    expect(screen.getByText('SOLD OUT')).toBeInTheDocument();

    expect(screen.queryByText('8.5$')).toBeNull();

    expect(screen.getByRole('listitem')).toHaveClass('sold-out');
  });

  it('renders the correct photo for the pizza', () => {
    render(<Pizza {...pizzaProps} />);

    expect(screen.getByAltText('Margherita').src).toContain('margherita.jpg');
  });

  it('does not show "sold out" when pizza is available', () => {
    render(<Pizza {...pizzaProps} />);

    expect(screen.queryByText('SOLD OUT')).toBeNull();
  });

  it('applies the "sold-out" class when pizza is sold out', () => {
    const soldOutPizza = { ...pizzaProps, soldOut: true };
    render(<Pizza {...soldOutPizza} />);

    expect(screen.getByRole('listitem')).toHaveClass('sold-out');
  });

  it('does not apply the "sold-out" class when pizza is available', () => {
    render(<Pizza {...pizzaProps} />);

    expect(screen.getByRole('listitem')).not.toHaveClass('sold-out');
  });
});
