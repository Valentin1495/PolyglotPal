import { useEffect, useState } from 'react';

export function useScrollPercentage() {
  const [scrollPercentage, setScrollPercentage] = useState<number>(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.body.offsetHeight - window.innerHeight;
      setScrollPercentage(
        scrollHeight > 0 ? Math.floor((window.scrollY / scrollHeight) * 100) : 0
      );
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return scrollPercentage;
}
