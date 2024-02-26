import { useEffect, useState } from 'react';

type Photo = {
  id: string;
  alt_description: string;
  urls: {
    small: string;
  };
};

export default function LoadMore() {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [photos, setPhotos] = useState<Photo[]>([]);
  const [page, setPage] = useState<number>(1);

  useEffect(() => {
    const getPhotos = async (page: number) => {
      try {
        setLoading(true);

        const response = await fetch(
          `${import.meta.env.VITE_UNSPLASH_API_URL}/photos?client_id=${
            import.meta.env.VITE_UNSPLASH_ACCESS_KEY
          }&page=${page}&order_by=popular`
        );
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }

        const data: Photo[] = await response.json();
        setPhotos((prev) => {
          if (!prev.length || prev[0].id !== data[0].id)
            return [...prev, ...data];
          return prev;
        });
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setLoading(false);
      }
    };

    getPhotos(page);
  }, [page]);

  const loadMore = () => {
    setPage((prev) => prev + 1);
  };

  return (
    <div
      style={{
        height: '100vh',
      }}
    >
      <section
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '16px',
          padding: '16px',
        }}
      >
        {photos.map(({ id, urls, alt_description }) => (
          <article
            key={id}
            style={{
              aspectRatio: '1 / 1',
              borderRadius: '8px',
              overflow: 'hidden',
            }}
          >
            <img
              src={urls.small}
              alt={alt_description}
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
            />
          </article>
        ))}
      </section>

      <section
        style={{
          padding: '16px',
        }}
      >
        {loading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <button onClick={loadMore}>Load more</button>
        )}
      </section>
    </div>
  );
}
