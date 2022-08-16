import { render, screen } from '@testing-library/react';
import App from './App';
import { AnimationsCatalog } from './components/AnimationsCatalog';

test('renders the header title', () => {
  render(<App />);
  const headerElement = screen.getByText(/Studio Ghibli Animation Films Catalog/i);
  expect(headerElement).toBeInTheDocument();
});

test('renders all buttons', () => {
  render(<AnimationsCatalog />);
  const showAllBtn = screen.getAllByRole('button');
  expect(showAllBtn.length).toBe(4);
});

test(`renders the "show all" button`, () => {
  render(<AnimationsCatalog />);
  const showAllBtn = screen.getAllByTestId('show-all-btn');
  expect(showAllBtn.length).toBe(1);
});
