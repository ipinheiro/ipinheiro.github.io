export const readingYears = [2026] as const;

export type ReadingLocation = 'bedside-table' | 'kindle';
export type ReadingYear = (typeof readingYears)[number];
export type Rating = 1 | 2 | 3 | 4 | 5;

export const currentReadingYear = 2026 satisfies ReadingYear;
export type ISODate = `${number}-${number}-${number}`;

export interface BookCover {
  readonly src: string;
  readonly alt: string;
}

interface BookBase {
  readonly title: string;
  readonly author: string;
  readonly year: ReadingYear;
  readonly cover?: BookCover;
  readonly dateStarted?: ISODate;
  readonly category?: string;
  readonly rating?: Rating;
  readonly note?: string;
  readonly tags?: readonly string[];
}

export interface ReadingBook extends BookBase {
  readonly status: 'reading';
  readonly readingLocation?: ReadingLocation;
  readonly dateFinished?: never;
  readonly favourite?: never;
}

export interface FinishedBook extends BookBase {
  readonly status: 'finished';
  readonly readingLocation?: never;
  readonly dateFinished?: ISODate;
  readonly favourite?: boolean;
}

export interface AbandonedBook extends BookBase {
  readonly status: 'abandoned';
  readonly readingLocation?: never;
  readonly dateFinished?: never;
  readonly favourite?: never;
}

export interface PausedBook extends BookBase {
  readonly status: 'paused';
  readonly readingLocation?: never;
  readonly dateFinished?: never;
  readonly favourite?: never;
}

export type Book = ReadingBook | FinishedBook | AbandonedBook | PausedBook;
export type ReadingStatus = Book['status'];

export interface ReadingArchive {
  all: readonly Book[];
  currentlyReading: readonly ReadingBook[];
  finished: readonly FinishedBook[];
  favourites: readonly FinishedBook[];
}

const readingLocationLabels = {
  'bedside-table': 'Open on the bedside table',
  kindle: 'Open in the Kindle',
} satisfies Record<ReadingLocation, string>;

export const books: readonly Book[] = [
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

export function getReadingArchive(year: ReadingYear): ReadingArchive {
  const all = books.filter((book) => book.year === year);
  const currentlyReading = all.filter((book): book is ReadingBook => book.status === 'reading');
  const finished = all.filter((book): book is FinishedBook => book.status === 'finished');

  return {
    all,
    currentlyReading,
    finished,
    favourites: finished.filter((book) => book.favourite),
  };
}

export function getReadingLocationLabel(location?: ReadingLocation): string {
  return location ? readingLocationLabels[location] : 'Currently reading';
}
