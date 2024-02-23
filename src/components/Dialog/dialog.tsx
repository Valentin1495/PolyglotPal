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
      <button onClick={openDialog} className='dialog-trigger-btn'>
        Show Dialog
      </button>
      {open && (
        <div className='dialog'>
          <section
            style={{
              position: 'fixed',
              inset: 0,
              backgroundColor: 'rgba(0, 0, 0, 0.3)',
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
              <button className='dialog-left-btn' onClick={closeDialog}>
                Cancel
              </button>
              <button className='dialog-right-btn' onClick={closeDialog}>
                Continue
              </button>
            </article>
          </section>
        </div>
      )}
    </div>
  );
}
