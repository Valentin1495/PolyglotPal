import { useWindowResize } from '../../hooks/use-window-resize';

export default function TestHook() {
  const { width, height } = useWindowResize();
  console.log(width, height);

  return (
    <div
      style={{
        height: '100vh',
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
