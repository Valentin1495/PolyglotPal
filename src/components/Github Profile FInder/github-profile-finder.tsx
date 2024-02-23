import { FormEvent, useState } from 'react';
import './github-profile-finder.css';
import { formatDate } from './format-date';

type User = {
  id: number;
  avatar_url: string;
  created_at: string;
  location: string;
  name: string;
  html_url: string;
};

export default function GithubProfileFinder() {
  const [input, setInput] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);
  const [errMSg, setErrMsg] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);

  const searchUser = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      setLoading(true);
      const response = await fetch('https://api.github.com/users/' + input);
      const data = await response.json();

      if (data.message) {
        setUser(null);
        setErrMsg(data.message);
      } else {
        const { id, avatar_url, created_at, location, name, html_url } = data;

        setUser({
          id,
          avatar_url,
          created_at,
          location,
          name,
          html_url,
        });
        setErrMsg('');
      }
      setLoading(false);
    } catch (error) {
      console.error(error);
      setErrMsg('');
      setLoading(false);
    }
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <form
        onSubmit={searchUser}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'start',
          gap: '10px',
          padding: '50px',
        }}
      >
        <label htmlFor='username'>Username</label>
        <input
          id='username'
          type='text'
          placeholder='Valentin1495'
          style={{
            all: 'unset',
            border: '1px solid lightgray',
            textAlign: 'left',
            borderRadius: '3px',
            padding: '5px 10px',
          }}
          autoFocus
          value={input}
          onChange={(e) => setInput(e.target.value)}
        />
        <button
          type='submit'
          className='submit-btn'
          disabled={loading || !input.trim()}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
      {user && (
        <section>
          <img
            src={user.avatar_url}
            alt='profile picture'
            width={200}
            height={200}
            style={{
              objectFit: 'cover',
              borderRadius: '9999px',
            }}
          />
          <h3>name: {user.name ?? 'unknown'}</h3>
          <h4>location: {user.location ?? 'unknown'}</h4>
          <h4>joined {formatDate(user.created_at)}</h4>
          <a href={user.html_url} target='blank'>
            Github
          </a>
        </section>
      )}
      {errMSg && <p>{errMSg}</p>}
    </div>
  );
}
