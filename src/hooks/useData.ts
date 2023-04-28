import { useState, useEffect } from 'react';

import api, { CanceledError, AxiosRequestConfig } from '../services/api';

interface Response<T> {
  count: number;
  results: T[];
}

const useData = <T>(
  endpoint: string,
  config?: AxiosRequestConfig,
  deps?: unknown[]
) => {
  const [data, setData] = useState<T[]>([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(
    () => {
      const controller = new AbortController();

      setLoading(true);
      api
        .get<Response<T>>(endpoint, { signal: controller.signal, ...config })
        .then((res) => {
          setLoading(false);
          setData(res.data.results);
        })
        .catch((err) => {
          if (err instanceof CanceledError) return;

          setLoading(false);
          setError(err.message);
        });

      return () => controller.abort();
    },
    deps ? [...deps] : []
  );

  return {
    data,
    error,
    loading,
  };
};

export default useData;
