import { useEffect, useRef } from 'react';

const useTimeout = (callback, delay) => {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;
  }, [callback]);

  useEffect(() => {
    if (delay === null) return;
    const tick = () => savedCallback.current();
    const id = setTimeout(tick, delay);
    return () => clearTimeout(id);
  }, [delay]);
};

export default useTimeout;
