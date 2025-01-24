import { useState, useEffect } from "react";

/**
 * Custom hook to debounce a value
 * @param value - The value to debounce
 * @param delay - The delay in milliseconds for the debounce (default: 300ms)
 * @returns The debounced value
 */
const useDebounce = <T>(value: T, delay: number = 300): T => {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => {
      clearTimeout(handler); // Cleanup timeout on value or delay change
    };
  }, [value, delay]);

  return debouncedValue;
};

export default useDebounce;
