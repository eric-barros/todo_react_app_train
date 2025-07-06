import { render, screen } from '@testing-library/react';
import App from './App'; // Import the component you want to test

test('renders learn react link', () => { // Define your test case
  render(<App />); // Render the component
  const linkElement = screen.getByText(/My Tasks/i); // Query for an element
  expect(linkElement).toBeInTheDocument(); // Assert its presence
});