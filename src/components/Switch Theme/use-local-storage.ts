import { useEffect, useState } from 'react';

export function useLocalStorage(key: string, defaultValue: string) {
  const [value, setValue] = useState(() => {
    let currentValue = localStorage.getItem(key);

    if (currentValue) return currentValue;
    return defaultValue;
  });

  useEffect(() => {
    localStorage.setItem(key, value);
  }, [key, value]);

  return { value, setValue };
}
