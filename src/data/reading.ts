export const readingStatuses = ['reading', 'finished', 'abandoned', 'paused'] as const;

export type ReadingStatus = (typeof readingStatuses)[number];

export interface BookCover {
  src: string;
  alt: string;
}

export interface Book {
  title: string;
  author: string;
  year: number;
  status: ReadingStatus;
  readingLocation?: 'bedside-table' | 'kindle';
  cover?: BookCover;
  dateStarted?: string;
  dateFinished?: string;
  category?: string;
  rating?: number;
  favourite?: boolean;
  note?: string;
  tags?: string[];
}

export const books: Book[] = [
  {
    title: 'Vehicle: A Verse Novel',
    author: 'Jen Calleja',
    year: 2026,
    status: 'finished',
    category: 'fiction',
  },
  {
    title: 'Web of Vows and Vengeance',
    author: 'Aria Ashbrook',
    year: 2026,
    status: 'reading',
    readingLocation: 'kindle',
    category: 'fiction',
  },
  {
    title: 'Nas palavras dela',
    author: 'Alba de Céspedes',
    year: 2026,
    status: 'reading',
    readingLocation: 'bedside-table',
  },
  {
    title: 'Paradise Logic',
    author: 'Sophie Kemp',
    year: 2026,
    status: 'finished',
    category: 'fiction',
  },
  {
    title: 'Yesteryear',
    author: 'Caro Claire Burke',
    year: 2026,
    status: 'finished',
    category: 'fiction',
  },
  {
    title: 'Mandíbula',
    author: 'Mónica Ojeda',
    year: 2026,
    status: 'finished',
    category: 'fiction',
  },
  {
    title: 'O País dos Outros',
    author: 'Leïla Slimani',
    year: 2026,
    status: 'finished',
    category: 'fiction',
  },
  {
    title: 'Steelborn',
    author: 'Taylor J. LaRue',
    year: 2026,
    status: 'finished',
    category: 'fiction',
  },
  {
    title: 'Story of the Eye',
    author: 'Georges Bataille',
    year: 2026,
    status: 'finished',
    category: 'fiction',
  },
];

export const readingYears = [2026] as const;
