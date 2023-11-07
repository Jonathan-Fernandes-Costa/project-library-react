/* eslint-disable @typescript-eslint/no-explicit-any */
export function debounce(fn: (dados:any | void)=> void, delay: number) {
    let timeoutId: number | undefined;
    return function (...args) {
      if (timeoutId) {
        clearTimeout(timeoutId);
      }
      timeoutId = setTimeout(() => {
        fn(...args);
      }, delay);
    };
  }