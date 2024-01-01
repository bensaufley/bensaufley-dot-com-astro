const debounce = <A extends any[]>(cb: (...args: A) => void, delay: number): ((...args: A) => void) => {
  let timer: NodeJS.Timeout | null = null;

  return (...args: A): void => {
    if (timer) clearTimeout(timer);

    timer = setTimeout(() => {
      cb(...args);
    }, delay);
  };
};

export default debounce;
