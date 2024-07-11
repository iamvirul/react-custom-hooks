import { useEffect } from 'react';

const useAsyncEffect = (asyncEffect, deps) => {
  useEffect(() => {
    asyncEffect();
  }, deps);
};

export default useAsyncEffect;
