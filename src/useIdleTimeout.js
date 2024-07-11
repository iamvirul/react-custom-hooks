import { useState, useEffect } from 'react';

const useIdleTimeout = (idleTimeoutMs, onIdle) => {
  const [idle, setIdle] = useState(false);

  useEffect(() => {
    let timeout;

    const resetTimeout = () => {
      if (timeout) {
        clearTimeout(timeout);
      }
      timeout = setTimeout(() => {
        setIdle(true);
        onIdle();
      }, idleTimeoutMs);
    };

    const eventHandler = () => {
      setIdle(false);
      resetTimeout();
    };

    resetTimeout();

    window.addEventListener('mousemove', eventHandler);
    window.addEventListener('keydown', eventHandler);

    return () => {
      window.removeEventListener('mousemove', eventHandler);
      window.removeEventListener('keydown', eventHandler);
      clearTimeout(timeout);
    };
  }, [idleTimeoutMs, onIdle]);

  return idle;
};

export default useIdleTimeout;
