import { useOnClickOutside } from '../../hooks/use-on-click-outside';

export default function TestHook2() {
  const { open, setOpen, ref } = useOnClickOutside();

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {open ? (
        <div
          ref={ref}
          style={{
            backgroundColor: 'rgba(0,0,0,0.1)',
            width: '50%',
            height: '50%',
          }}
        ></div>
      ) : (
        <button className='btn' onClick={() => setOpen(true)}>
          Open
        </button>
      )}
    </div>
  );
}
