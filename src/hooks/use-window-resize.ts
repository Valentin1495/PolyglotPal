import { useEffect, useState } from 'react';

type WindowSize = {
  width: number;
  height: number;
};

export function useWindowResize() {
  const [windowsize, setWindowsize] = useState<WindowSize>({
    width: 0,
    height: 0,
  });

  const handleWindowResize = () => {
    setWindowsize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useEffect(() => {
    handleWindowResize();
    window.addEventListener('resize', handleWindowResize);

    return () => {
      window.removeEventListener('resize', handleWindowResize);
    };
  }, []);

  return windowsize;
}
