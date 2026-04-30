import { useState, useEffect } from 'react';

// Common Unsplash images to represent diverse thumbnails
export const THUMBNAILS = [
  {
    id: 101,
    title: 'The Real Squad Game.',
    category: 'Documentary',
    views: '5.2M+',
    imageUrl: '/The Real Squad Game..jpg',
    featured: true,
  },
  {
    id: 102,
    title: 'The Toxic Truth of the Medical Industry',
    category: 'Documentary',
    views: '3.1M+',
    imageUrl: '/The Toxic Truth of the Medical Industry.jpg',
    featured: true,
  },
  {
    id: 103,
    title: 'CR7 - The True Cost of Greatness',
    category: 'Documentary',
    views: '8.4M+',
    imageUrl: '/CR7 - The True Cost of Greatness.jpg',
    featured: true,
  },
  {
    id: 104,
    title: 'The True Story Behind The Boarding School',
    category: 'Documentary',
    views: '1.9M+',
    imageUrl: '/Robin Westman.jpg',
    featured: true,
  },
  {
    id: 105,
    title: 'My Official Confession',
    category: 'Documentary',
    views: '4.6M+',
    imageUrl: '/My Official Confession.jpg',
    featured: true,
  },
  {
    id: 201,
    title: 'AI Stack On Budget',
    category: 'Finance',
    views: '2.5M+',
    imageUrl: '/AI Stack On Budget.jpg',
    featured: true,
  },
  {
    id: 202,
    title: "This Isn't Gambling?",
    category: 'Finance',
    views: '1.8M+',
    imageUrl: "/This Isn't Gambling?.jpg",
    featured: true,
  },
  {
    id: 203,
    title: 'Revenue $65,000',
    category: 'Finance',
    views: '3.2M+',
    imageUrl: '/Revenue $65,000.jpg',
    featured: true,
  },
  {
    id: 204,
    title: 'Rank #1 Everywhere',
    category: 'Finance',
    views: '4.1M+',
    imageUrl: '/Rank #1 Everywhere.jpg',
    featured: true,
  },
  {
    id: 205,
    title: 'The Rise Of Allocation Economy.',
    category: 'Finance',
    views: '2.9M+',
    imageUrl: '/The Rise Of Allocation Economy..jpg',
    featured: true,
  },
  {
    id: 206,
    title: '$1 Webinar System',
    category: 'Finance',
    views: '1.1M+',
    imageUrl: '/$1 Webinar System.jpg',
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
