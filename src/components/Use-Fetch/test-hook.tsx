import { useFetch } from '../../hooks/use-fetch';

export default function TestHook() {
  const { loading, error, data } = useFetch(
    import.meta.env.VITE_JSON_PLACEHOLDER_API_URL + '/todos'
  );

  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;
  return (
    <div>
      {data.map((el) => (
        <p key={el.id}>{el.title}</p>
      ))}
    </div>
  );
}
