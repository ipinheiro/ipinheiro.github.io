export type CareerPhase = 'education' | 'publishing' | 'next';

export interface Apprenticeship {
  readonly years: string;
  readonly title: string;
  readonly context: string;
  readonly qualification: string;
}

export interface CareerEntry {
  readonly years: string;
  readonly title: string;
  readonly place: string;
  readonly phase: CareerPhase;
  readonly apprenticeship?: Apprenticeship;
}

export const career: readonly CareerEntry[] = [
  {
    years: '2009–2013',
    title: 'BA Communication & Media Studies',
    place: 'UCP · Lisbon, Portugal',
    phase: 'education',
  },
  {
    years: '2013–2014',
    title: 'MA Publishing',
    place: 'UCL · London, UK',
    phase: 'education',
  },
  {
    years: '2014–2018',
    title: 'Development Editor',
    place: 'ICE Publishing',
    phase: 'publishing',
  },
  {
    years: '2018–2020',
    title: 'Junior Metadata Analyst',
    place: 'Penguin Random House UK',
    phase: 'publishing',
  },
  {
    years: '2020–2022',
    title: 'Insight Analyst',
    place: 'Penguin Random House UK',
    phase: 'publishing',
    apprenticeship: {
      years: '2020–2022',
      title: 'Level 7 Data Science & AI Specialist',
      context: 'Alongside the Insight Analyst role',
      qualification: 'UK Government apprenticeship · Master’s equivalent',
    },
  },
  {
    years: '2022–2024',
    title: 'Data Scientist',
    place: 'Penguin Random House UK',
    phase: 'publishing',
  },
  {
    years: '2024–2026',
    title: 'Senior Data Scientist',
    place: 'Penguin Random House UK',
    phase: 'publishing',
  },
  {
    years: '21 Sep 2026',
    title: 'Data Science Manager',
    place: 'Feedzai',
    phase: 'next',
  },
];
