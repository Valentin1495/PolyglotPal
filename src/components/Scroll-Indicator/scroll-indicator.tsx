import { useEffect, useState } from 'react';
import { useScrollPercentage } from '../../hooks/use-scroll-percentage';

type Post = {
  id: number;
  title: string;
};

export default function ScrollIndicator() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const scrollPercentage = useScrollPercentage();

  useEffect(() => {
    const getPosts = async () => {
      try {
        setLoading(true);
        const response = await fetch(
          import.meta.env.VITE_JSON_PLACEHOLDER_API_URL + '/posts'
        );

        const data = await response.json();
        setPosts(data);
      } catch (error) {
        setError(error instanceof Error ? error.message : String(error));
      } finally {
        setLoading(false);
      }
    };

    getPosts();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <div>
      <div
        style={{
          height: '5px',
          backgroundColor: '#2a9492',
          position: 'fixed',
          top: 0,
          width: scrollPercentage + '%',
          transition: 'width 100ms',
        }}
      ></div>
      {posts.map(({ id, title }) => (
        <p key={id}>{title}</p>
      ))}
    </div>
  );
}
