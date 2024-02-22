import { useState } from 'react';
import './dialog.css';

export default function Dialog() {
  const [open, setOpen] = useState<boolean>(false);
  const openDialog = () => {
    setOpen(true);
  };
  const closeDialog = () => {
    setOpen(false);
  };

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <button
        onClick={openDialog}
        className='dialog-trigger-btn'
        style={{
          zIndex: open ? '0' : '10',
        }}
      >
        Show Dialog
      </button>

      <section
        style={{
          position: 'fixed',
          inset: 0,
          backgroundColor: 'rgba(0, 0, 0, 0.3)',
          opacity: open ? '1' : '0',
          transition: 'opacity 300ms ease-in-out',
        }}
        onClick={closeDialog}
      ></section>
      <section
        style={{
          backgroundColor: 'white',
          position: 'fixed',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          borderRadius: '8px',
          textAlign: 'left',
          padding: '0 20px 20px',
          opacity: open ? '1' : '0',
          transition: 'opacity 100ms ease-in-out',
        }}
      >
        <h3>Are you absolutely sure?</h3>
        <p
          style={{
            fontSize: '0.9rem',
          }}
        >
          This action cannot be undone. This will permanently delete your
          account and remove your data from our servers.
        </p>
        <article
          style={{
            textAlign: 'right',
          }}
        >
          <button
            className='dialog-left-btn'
            onClick={closeDialog}
            disabled={!open}
          >
            Cancel
          </button>
          <button
            className='dialog-right-btn'
            onClick={closeDialog}
            disabled={!open}
          >
            Continue
          </button>
        </article>
      </section>
    </div>
  );
}
