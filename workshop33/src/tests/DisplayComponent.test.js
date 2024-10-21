import { render } from '@testing-library/react';
import DisplayComponent from '../components/DisplayComponent';

test('should render with text', () => {
  const { getByText } = render(<DisplayComponent text="Test" />);
  expect(getByText(/Test/i)).toBeInTheDocument();
});
