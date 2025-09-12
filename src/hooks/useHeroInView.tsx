import { useEffect, useState } from "react";

export default function useHeroInView(heroId: string = "hero-section") {
  const [isInView, setIsInView] = useState(true);

  useEffect(() => {
    const hero = document.getElementById(heroId);
    if (!hero) return;

    const observer = new window.IntersectionObserver(
      ([entry]) => setIsInView(entry.isIntersecting && entry.intersectionRatio === 1),
      { threshold: 1.0 }
    );

    observer.observe(hero);

    return () => observer.disconnect();
  }, [heroId]);

  return isInView;
}
