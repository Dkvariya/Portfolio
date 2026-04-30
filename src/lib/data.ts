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
    title: 'AI Tools 101 Build Your Stack Without Breaking the Bank',
    category: 'Finance',
    views: '2.5M+',
    imageUrl: '/AI Tools 101 Build Your Stack Without Breaking the Bank.jpg',
    featured: true,
  },
  {
    id: 202,
    title: 'Gambling',
    category: 'Finance',
    views: '1.8M+',
    imageUrl: '/Gambling.jpg',
    featured: true,
  },
  {
    id: 203,
    title: 'How Shopify preorders turned a viral moment into $65,000 in revenue',
    category: 'Finance',
    views: '3.2M+',
    imageUrl: '/How Shopify preorders turned a viral moment into $65,000 in revenue.jpg',
    featured: true,
  },
  {
    id: 204,
    title: 'The AI Search Takeover',
    category: 'Finance',
    views: '4.1M+',
    imageUrl: '/The AI Search Takeover.jpg',
    featured: true,
  },
  {
    id: 205,
    title: 'The Knowledge Economy Is Over',
    category: 'Finance',
    views: '2.9M+',
    imageUrl: '/The Knowledge Economy Is Over.jpg',
    featured: true,
  },
  {
    id: 206,
    title: 'Webinar',
    category: 'Finance',
    views: '1.1M+',
    imageUrl: '/Webinar.jpg',
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
