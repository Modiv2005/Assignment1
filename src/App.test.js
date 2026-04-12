import { render, screen } from '@testing-library/react';
import App from './App';

test('renders library management heading', () => {
  render(<App />);
  const headingElement = screen.getByText(/library management system/i);
  expect(headingElement).toBeInTheDocument();
});
