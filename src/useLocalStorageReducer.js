import { useReducer, useEffect } from 'react';

const useLocalStorageReducer = (key, reducer, initialState) => {
  const [state, dispatch] = useReducer(reducer, initialState, (initial) => {
    const persisted = localStorage.getItem(key);
    return persisted ? JSON.parse(persisted) : initial;
  });

  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);

  return [state, dispatch];
};

export default useLocalStorageReducer;
