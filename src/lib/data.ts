import { useState, useEffect } from 'react';

// Common Unsplash images to represent diverse thumbnails
export const THUMBNAILS: any[] = [
  {
    id: 1,
    title: 'New Documentary',
    category: 'Documentary',
    views: '1.2M+',
    imageUrl: 'https://drive.google.com/thumbnail?id=18-D_6vKI3QrKdXns4kBqhy-4ris6ovKQ&sz=w1200',
    featured: true,
  }
];

export const CATEGORIES = ['All', 'Documentary', 'Podcast', 'Finance', 'History', 'Movies', 'Royal family', 'Discovery'];

export function useScroll() {
  const [scrollY, setScrollY] = useState(0);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight}`;
      setScrollProgress(Number(scroll));
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return { scrollY, scrollProgress };
}
