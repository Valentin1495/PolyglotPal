import { ChangeEvent, FormEvent, useEffect, useMemo, useState } from 'react';
import './search-filter.css';
import { Search } from 'lucide-react';

type Email = {
  id: number;
  email: string;
};

export default function SearchFilter() {
  const [emailList, setEmailList] = useState<Email[]>([]);
  const [query, setQuery] = useState<string>('');
  const [selected, setSelected] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [errMsg, setErrMsg] = useState<string>('');

  useEffect(() => {
    const getEmailId = async () => {
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/comments'
      );
      const data: Email[] = await response.json();

      setEmailList(
        data.map(({ email, id }) => {
          const idx = email.indexOf('@');
          return {
            email: email.slice(0, idx),
            id,
          };
        })
      );
    };

    try {
      setLoading(true);
      getEmailId();
      setLoading(false);
    } catch (error) {
      console.error(error);
      setErrMsg('Something went wrong.');
      setLoading(false);
    }
  }, []);

  const filteredEmails = useMemo(
    () =>
      emailList.filter(({ email }) =>
        email.toLowerCase().includes(query.toLowerCase())
      ),
    [emailList, query]
  );

  const searchEmailId = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setQuery(e.target.value);
    setSelected(false);
  };

  const handleClick = (email: string) => {
    setQuery(email);
    setSelected(true);
  };

  if (loading) return <p>Loading...</p>;
  if (errMsg) return <p>{errMsg}</p>;
  return (
    <div
      style={{
        padding: '50px',
      }}
    >
      <form
        onSubmit={searchEmailId}
        style={{
          border: '1px solid lightgray',
          width: '70%',
          borderRadius: '9999px',
          marginLeft: '100px',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <input
          style={{
            all: 'unset',
            textAlign: 'left',
            paddingLeft: '20px',
            paddingRight: '5px',
            width: '100%',
          }}
          type='search'
          placeholder='Search'
          autoFocus
          value={query}
          onChange={handleChange}
        />
        <button type='submit' className='submit-btn' disabled={!query.trim()}>
          <Search color='black' size={20} strokeWidth={1.5} />
        </button>
      </form>
      {query.trim() && (
        <section
          style={{
            display: selected ? 'none' : 'flex',
            flexDirection: 'column',
            boxShadow: '0px 0px 8px rgba(0, 0, 0, 0.25)',
            width: 'calc(70% - 62px)',
            marginTop: '10px',
            marginLeft: '102px',
            borderRadius: '10px',
            padding: '10px 0px',
            textAlign: 'left',
          }}
        >
          {filteredEmails.length ? (
            filteredEmails.map(({ email, id }) => (
              <article
                key={id}
                className='filtered-email'
                onClick={() => handleClick(email)}
              >
                {email}
              </article>
            ))
          ) : (
            <article
              style={{
                padding: '0 10px',
              }}
            >
              No results
            </article>
          )}
        </section>
      )}
    </div>
  );
}
