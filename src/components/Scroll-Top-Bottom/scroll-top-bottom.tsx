import { useEffect, useRef, useState } from 'react';
import './styles.css';

type Album = {
  id: number;
  title: string;
};

export default function ScrollTopBottom() {
  const [albums, setAlbums] = useState<Album[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const ref = useRef<HTMLDivElement>(null);
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const scrollToBottom = () => {
    ref.current?.scrollIntoView({
      behavior: 'smooth',
    });
  };

  useEffect(() => {
    const getAlbums = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          import.meta.env.VITE_JSON_PLACEHOLDER_API_URL + '/albums'
        );

        const data = await response.json();
        setAlbums(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setLoading(false);
      }
    };

    getAlbums();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div
      style={{
        padding: '50px',
      }}
    >
      <button className='scroll-btn' onClick={scrollToBottom}>
        Scroll to bottom
      </button>
      {albums.map(({ id, title }) => (
        <p key={id}>{title}</p>
      ))}
      <button className='scroll-btn' onClick={scrollToTop}>
        Scroll to top
      </button>
      <div ref={ref}></div>
    </div>
  );
}
