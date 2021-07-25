import { useState, useEffect } from 'react';

export const useAsync = (asyncFn, initialVal) => {
  const [result, setResult] = useState(initialVal);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const [isMounted, setIsMounted] = useState(true);
  const callAsyncFn = async (...params) => {
    setLoading(true);
    try {
      const response = await asyncFn(...params);
      setResult(response);

      setLoading(false);
      return response;
    } catch (err) {
      if (!isMounted) {
        return null;
      }
      setError(err);
      setLoading(false);
    } finally {
      if (!isMounted) {
        return null;
      }
    }
  };
  useEffect(() => {
    return () => {
      setIsMounted(false);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return [{ result, isLoading, error }, callAsyncFn];
};
