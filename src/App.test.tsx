import { render, screen } from '@testing-library/react';
import Main from './pages/main/Main';

test('renders learn react link', () => {
  render(<Main />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
