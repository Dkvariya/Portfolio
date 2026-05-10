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
  },
  {
    id: 2,
    title: 'CR7 - The True Cost of Greatness',
    category: 'Documentary',
    views: '8.4M+',
    imageUrl: 'https://drive.google.com/thumbnail?id=1d2HBuWskVa-G2faqpsEwgXxUjoNJKGbk&sz=w1200',
    featured: true,
  },
  {
    id: 3,
    title: 'The Real Squad Game',
    category: 'Documentary',
    views: '5.2M+',
    imageUrl: 'https://drive.google.com/thumbnail?id=1ZWtTiAMepR9w06tNT4aI9Mdrkzy-Vhi7&sz=w1200',
    featured: true,
  },
  {
    id: 4,
    title: 'The Toxic Truth of the Medical Industry',
    category: 'Documentary',
    views: '3.1M+',
    imageUrl: 'https://drive.google.com/thumbnail?id=15I9fXypcSZz6Pf5wu27qi8-jWu43OoyI&sz=w1200',
    featured: true,
  },
  {
    id: 5,
    title: 'The True Story Behind The Boarding School',
    category: 'Documentary',
    views: '1.9M+',
    imageUrl: 'https://drive.google.com/thumbnail?id=1yiVVlE8rQjHP-qSCwdGC29u0kG-7_-ZD&sz=w1200',
    featured: true,
  },
  {
    id: 6,
    title: 'AI Stack On Budget',
    category: 'Finance',
    views: '2.5M+',
    imageUrl: 'https://drive.google.com/thumbnail?id=1aEP1aGqeY7JzvBAaKROr7fF74KJ_ZnDQ&sz=w1200',
    featured: true,
  },
  {
    id: 7,
    title: "This Isn't Gambling?",
    category: 'Finance',
    views: '1.8M+',
    imageUrl: 'https://drive.google.com/thumbnail?id=1xMzJiu_R_C4lV9afd-ORy0egcRImWL4G&sz=w1200',
    featured: true,
  },
  {
    id: 8,
    title: 'Revenue $65,000',
    category: 'Finance',
    views: '3.2M+',
    imageUrl: 'https://drive.google.com/thumbnail?id=13xQv11n3RYBzUzZerwRtW3EhUc_QAumo&sz=w1200',
    featured: true,
  },
  {
    id: 9,
    title: 'Rank #1 Everywhere',
    category: 'Finance',
    views: '4.1M+',
    imageUrl: 'https://drive.google.com/thumbnail?id=1b-doEt1c4F-T7nktNh0HBEfBHuzOgmb3&sz=w1200',
    featured: true,
  },
  {
    id: 10,
    title: 'The Rise Of Allocation Economy.',
    category: 'Finance',
    views: '2.9M+',
    imageUrl: 'https://drive.google.com/thumbnail?id=1D9UG72ClFSzF_kIEYjhLzEmiloI5ldzr&sz=w1200',
    featured: true,
  },
  {
    id: 11,
    title: '$1 Webinar System',
    category: 'Finance',
    views: '1.1M+',
    imageUrl: 'https://drive.google.com/thumbnail?id=1i0B560jg3l_74Xy_jlVEs53NTDyk3JME&sz=w1200',
    featured: true,
  },
  {
    id: 12,
    title: 'Scaling Your Online Business',
    category: 'Finance',
    views: '3.5M+',
    imageUrl: 'https://drive.google.com/thumbnail?id=1SIxXfaT4PGGa7snkoLJLjiQZxLJbEJOh&sz=w1200',
    featured: true,
  },
  {
    id: 13,
    title: 'Movie 1',
    category: 'Movies',
    views: '1M+',
    imageUrl: 'https://drive.google.com/thumbnail?id=1PM6ShZ3EW0dzHQcUWSELR6sPlWXa-mq6&sz=w1200',
    featured: true,
  },
  {
    id: 14,
    title: 'Movie 2',
    category: 'Movies',
    views: '1M+',
    imageUrl: 'https://drive.google.com/thumbnail?id=1Tlcq-9jxPpMziok26R8m_Lnkw4Ao2GBY&sz=w1200',
    featured: true,
  },
  {
    id: 15,
    title: 'Movie 3',
    category: 'Movies',
    views: '1M+',
    imageUrl: 'https://drive.google.com/thumbnail?id=1vJtxBryk1RjLbX3Pv6nixO5nHcWb0l1K&sz=w1200',
    featured: true,
  },
  {
    id: 16,
    title: 'Movie 4',
    category: 'Movies',
    views: '1M+',
    imageUrl: 'https://drive.google.com/thumbnail?id=1u9trqbhOz29-B5XAmupPdcF75u6z70q8&sz=w1200',
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
