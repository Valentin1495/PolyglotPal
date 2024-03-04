import { useWindowResize } from '../../hooks/use-window-resize';

export default function TestHook3() {
  const { width, height } = useWindowResize();

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      width: {width} <br />
      height: {height}
    </div>
  );
}
