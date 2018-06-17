export interface ISubscaleTotals {
  competence: number;
  adaptability: number;
  selfEsteem: number;
};

export type Subscale = keyof ISubscaleTotals;

export interface IQuestion {
  number: number;
  text: string;
  subscale: Subscale;
  isNegative?: boolean;
};

export const answers: number[] = [
  -3,
  -2,
  -1,
  0,
  1,
  2,
  3
];

export const questions: IQuestion[] = [
  {
    number: 1,
    subscale: 'competence',
    text: 'Competence',
  },
  {
    number: 2,
    subscale: 'selfEsteem',
    text: 'Happiness',
  },
  {
    number: 3,
    subscale: 'competence',
    text: 'Independence',
  },
  {
    number: 4,
    subscale: 'competence',
    text: 'Adequacy',
  },
  {
    isNegative: true,
    number: 5,
    subscale: 'competence',
    text: 'Confusion',
  },
  {
    number: 6,
    subscale: 'competence',
    text: 'Efficiency',
  },
  {
    number: 7,
    subscale: 'selfEsteem',
    text: 'Self-esteem',
  },
  {
    number: 8,
    subscale: 'competence',
    text: 'Productivity',
  },
  {
    number: 9,
    subscale: 'selfEsteem',
    text: 'Security',
  },
  {
    isNegative: true,
    number: 10,
    subscale: 'selfEsteem',
    text: 'Frustration',
  },
  {
    number: 11,
    subscale: 'competence',
    text: 'Usefulness',
  },
  {
    number: 12,
    subscale: 'selfEsteem',
    text: 'Self-confidence',
  },
  {
    number: 13,
    subscale: 'competence',
    text: 'Expertise',
  },
  {
    number: 14,
    subscale: 'competence',
    text: 'Skillfulness',
  },
  {
    number: 15,
    subscale: 'adaptability',
    text: 'Well-being',
  },
  {
    number: 16,
    subscale: 'competence',
    text: 'Capability',
  },
  {
    number: 17,
    subscale: 'competence',
    text: 'Quality of life',
  },
  {
    number: 18,
    subscale: 'competence',
    text: 'Performance',
  },
  {
    number: 19,
    subscale: 'selfEsteem',
    text: 'Sense of power',
  },
  {
    number: 20,
    subscale: 'selfEsteem',
    text: 'Sense of control',
  },
  {
    isNegative: true,
    number: 21,
    subscale: 'selfEsteem',
    text: 'Embarassment',
  },
  {
    number: 22,
    subscale: 'adaptability',
    text: 'Willingness to take chances',
  },
  {
    number: 23,
    subscale: 'adaptability',
    text: 'Ability to participate',
  },
  {
    number: 24,
    subscale: 'adaptability',
    text: 'Eagerness to try new things',
  },
  {
    number: 25,
    subscale: 'adaptability',
    text: 'Ability to adapt to the activities of daily living',
  },
  {
    number: 26,
    subscale: 'adaptability',
    text: 'Ability to take advantage of opportunities',
  },
];
