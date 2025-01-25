import React from 'react';
import { render, screen } from '@testing-library/react';
import About from '../pages/About';

test('renders About component', () => {
  render(<About />);
const ourGymElement = screen.getByText(/our gym/i);
expect(ourGymElement).toBeInTheDocument();
});