import { render, fireEvent } from '@testing-library/react';
import FormComponent from '../components/FormComponent';

test('should submit form', () => {
  const handleSubmit = jest.fn();
  const { getByText, getByRole } = render(<FormComponent onSubmit={handleSubmit} />);

  fireEvent.change(getByRole('textbox'), { target: { value: 'Hello' } });
  fireEvent.click(getByText(/submit/i));

  expect(handleSubmit).toHaveBeenCalledWith('Hello');
});
