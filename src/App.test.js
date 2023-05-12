import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Math Magicians website', () => {
  render(<App />);
  expect(render(<App />)).toContainHTML;
});
