import { useEffect, useState } from 'react';

type Todos = {
  id: number;
  title: string;
};

export function useFetch(url: string) {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<Todos[]>([]);

  useEffect(() => {
    const getData = async () => {
      try {
        setLoading(true);
        const response = await fetch(url);
        const result = await response.json();
        setData(result);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setLoading(false);
      }
    };

    getData();
  }, [url]);

  return { loading, error, data };
}
