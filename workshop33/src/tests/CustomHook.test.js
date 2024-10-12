import { renderHook, act } from '@testing-library/react-hooks';
import useCustomHook from '../components/CustomHook';

test('should increment value', () => {
  const { result } = renderHook(() => useCustomHook(0));

  act(() => {
    result.current[1]();
  });

  expect(result.current[0]).toBe(1);
});
