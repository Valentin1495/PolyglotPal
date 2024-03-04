import { Moon, Sun } from 'lucide-react';
import { useLocalStorage } from '../../hooks/use-local-storage';

export default function SwitchTheme() {
  const { value: theme, setValue: setTheme } = useLocalStorage(
    'theme',
    'light'
  );

  const toggleTheme = () => {
    setTheme(() => (theme === 'light' ? 'dark' : 'light'));
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 20,
        backgroundColor: theme === 'light' ? 'white' : 'black',
        transition: 'all 300ms ease-in-out',
      }}
    >
      <p
        style={{
          fontWeight: 'bold',
          fontSize: '2rem',
          color: theme === 'light' ? 'black' : 'white',
        }}
      >
        Hello World!
      </p>

      <button
        style={{
          cursor: 'pointer',
        }}
        onClick={toggleTheme}
      >
        {theme === 'light' ? (
          <Sun size={32} strokeWidth={2.5} />
        ) : (
          <Moon size={32} strokeWidth={2.5} color='white' />
        )}
      </button>
    </div>
  );
}
