import { render, screen } from '@testing-library/react';
import Header from './Header';

test('renders application title', () => {
  render(<Header />);
  const titleElement = screen.getByText(/Widget Corp/i);
  expect(titleElement).toBeInTheDocument();
});
