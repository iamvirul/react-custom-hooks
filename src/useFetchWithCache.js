import { useState, useEffect } from 'react';

const cache = {};

const useFetchWithCache = (url) => {
  const [data, setData] = useState(cache[url] || null);
  const [loading, setLoading] = useState(!cache[url]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!url) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        if (cache[url]) {
          setData(cache[url]);
        } else {
          const response = await fetch(url);
          if (!response.ok) throw new Error('Network response was not ok');
          const result = await response.json();
          cache[url] = result;
          setData(result);
        }
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetchWithCache;
