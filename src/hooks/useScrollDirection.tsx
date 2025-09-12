import { useState, useEffect } from 'react';

type ScrollDirection = 'up' | 'down' | null;

const useScrollDirection = () => {
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(null);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 100) { // scrolled down
        setScrollDirection('down');
      } else if (currentScrollY < lastScrollY) { // scrolled up
        setScrollDirection('up');
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return scrollDirection;
};

export default useScrollDirection;
