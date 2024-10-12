import { useState } from 'react';

const useCustomHook = (initialValue) => {
  const [value, setValue] = useState(initialValue);

  const increment = () => setValue(value + 1);

  return [value, increment];
};

export default useCustomHook;
