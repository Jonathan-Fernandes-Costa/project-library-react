/* eslint-disable @typescript-eslint/no-explicit-any */
export function debounce<T extends any[]>(fn: (...args: T) => void, delay: number) {
  let timeoutId: number | undefined;
  return function (...args: T) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      fn(...args);
    }, delay);
  };
}
