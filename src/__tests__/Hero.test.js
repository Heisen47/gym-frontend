import React from 'react';
import { render, screen } from '@testing-library/react';
import Hero from '../components/Hero';


  test('renders Quote of the Day', () => {
    render(<Hero />);
    const quoteElement = screen.getByText(/Quote of the Day/i);
    expect(quoteElement).toBeInTheDocument();
  });

  test('renders quote text', () => {
    render(<Hero />);
    const quoteTextElement = screen.getByText(/The only person you are destined to become is the person you decide to be/i);
    expect(quoteTextElement).toBeInTheDocument();
  });

  test('renders author name', () => {
    render(<Hero />);
    const authorElement = screen.getByText(/Ralph Waldo Emerson/i);
    expect(authorElement).toBeInTheDocument();
  });
