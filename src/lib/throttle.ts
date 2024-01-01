const throttle = <A extends any[], R extends any>(
  cb: (...args: A) => R,
  delay: number,
  finalCall = true,
): ((...args: A) => void) => {
  let lastCall = 0;
  let timer: NodeJS.Timeout | null = null;

  return (...args: A): void => {
    const now = Date.now();
    if (now - lastCall < delay) {
      if (finalCall) {
        if (timer) clearTimeout(timer);
        timer = setTimeout(() => {
          cb(...args);
        }, delay);
      }

      return;
    }

    lastCall = now;
    cb(...args);
  };
};

export default throttle;
