import { useState, useEffect } from 'react';

const useScript = (src) => {
  const [loaded, setLoaded] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = src;
    script.async = true;

    const onLoad = () => {
      setLoaded(true);
    };

    const onError = () => {
      setError(true);
    };

    script.addEventListener('load', onLoad);
    script.addEventListener('error', onError);

    document.body.appendChild(script);

    return () => {
      script.removeEventListener('load', onLoad);
      script.removeEventListener('error', onError);
      document.body.removeChild(script);
    };
  }, [src]);

  return [loaded, error];
};

export default useScript;
