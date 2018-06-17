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
  glossaryText: string;
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
    glossaryText: 'Ability to do well the important things you need to do in life',
    number: 1,
    subscale: 'competence',
    text: 'Competence',
  },
  {
    glossaryText: 'Gladness, pleasure; satisfaction with life',
    number: 2,
    subscale: 'selfEsteem',
    text: 'Happiness',
  },
  {
    glossaryText: 'Not dependent on, or not always needing help from, someone or something',
    number: 3,
    subscale: 'competence',
    text: 'Independence',
  },
  {
    glossaryText: 'Capable of handling life situations, and handling little crises',
    number: 4,
    subscale: 'competence',
    text: 'Adequacy',
  },
  {
    glossaryText: 'Unable to think clearly, act decisively',
    isNegative: true,
    number: 5,
    subscale: 'competence',
    text: 'Confusion',
  },
  {
    glossaryText: 'Effective management of day to day tasks',
    number: 6,
    subscale: 'competence',
    text: 'Efficiency',
  },
  {
    glossaryText: 'How you feel about yourself, and like yourself as a person',
    number: 7,
    subscale: 'selfEsteem',
    text: 'Self-esteem',
  },
  {
    glossaryText: 'Able to get more things done in a day',
    number: 8,
    subscale: 'competence',
    text: 'Productivity',
  },
  {
    glossaryText: 'Feeling safe rather than feeling vulnerable or insecure',
    number: 9,
    subscale: 'selfEsteem',
    text: 'Security',
  },
  {
    glossaryText: 'Being upset about lack of progress in achieving your desires; feeling disappointed',
    isNegative: true,
    number: 10,
    subscale: 'selfEsteem',
    text: 'Frustration',
  },
  {
    glossaryText: 'Helpful to yourself and others; can get things done',
    number: 11,
    subscale: 'competence',
    text: 'Usefulness',
  },
  {
    glossaryText: 'Self-reliance; trust in yourself and your abilities ',
    number: 12,
    subscale: 'selfEsteem',
    text: 'Self-confidence',
  },
  {
    glossaryText: 'Knowledge in a particular area or occupation',
    number: 13,
    subscale: 'competence',
    text: 'Expertise',
  },
  {
    glossaryText: 'Able to show your expertise; perform tasks well',
    number: 14,
    subscale: 'competence',
    text: 'Skillfulness',
  },
  {
    glossaryText: 'Feeling well; optimistic about your life and future',
    number: 15,
    subscale: 'adaptability',
    text: 'Well-being',
  },
  {
    glossaryText: 'Feeling more capable; able to cope',
    number: 16,
    subscale: 'competence',
    text: 'Capability',
  },
  {
    glossaryText: 'How good your life is',
    number: 17,
    subscale: 'competence',
    text: 'Quality of life',
  },
  {
    glossaryText: 'Able to demonstrate your skills',
    number: 18,
    subscale: 'competence',
    text: 'Performance',
  },
  {
    glossaryText: 'Sense of inner strength; feeling that you have significant influence over your life',
    number: 19,
    subscale: 'selfEsteem',
    text: 'Sense of power',
  },
  {
    glossaryText: 'Sense of being able to do what you want in your environment',
    number: 20,
    subscale: 'selfEsteem',
    text: 'Sense of control',
  },
  {
    glossaryText: 'Feeling awkward or ashamed',
    isNegative: true,
    number: 21,
    subscale: 'selfEsteem',
    text: 'Embarassment',
  },
  {
    glossaryText: 'Willing to take some risks; willing to take on new challenges',
    number: 22,
    subscale: 'adaptability',
    text: 'Willingness to take chances',
  },
  {
    glossaryText: 'Ability to join in activities with other people',
    number: 23,
    subscale: 'adaptability',
    text: 'Ability to participate',
  },
  {
    glossaryText: 'Feeling adventuresome and open to new experiences',
    number: 24,
    subscale: 'adaptability',
    text: 'Eagerness to try new things',
  },
  {
    glossaryText: 'Ability to cope with change; ability to make basic tasks more manageable',
    number: 25,
    subscale: 'adaptability',
    text: 'Ability to adapt to the activities of daily living',
  },
  {
    glossaryText: 'Ability to act quickly and confidently when there is a chance to improve something in your life',
    number: 26,
    subscale: 'adaptability',
    text: 'Ability to take advantage of opportunities',
  },
];

function countSubscale(subscale: Subscale): number {
  return questions.filter(q => q.subscale === subscale).length;
}

const subscaleCounts: ISubscaleTotals = {
  adaptability: countSubscale('adaptability'),
  competence: countSubscale('competence'),
  selfEsteem: countSubscale('selfEsteem')
};

// Note that this won't transpile down to ES5 because
// transpilers like Babel don't support extending
// built-in classes: https://stackoverflow.com/a/29436039/2422398
export class AnswerMap extends Map<IQuestion, number> {
  public getTotals(): ISubscaleTotals {
    return {
      adaptability: this.sumSubscale('adaptability') / subscaleCounts.adaptability,
      competence: this.sumSubscale('competence') / subscaleCounts.competence,
      selfEsteem: this.sumSubscale('selfEsteem') / subscaleCounts.selfEsteem
    };
  }

  private sumSubscale(subscale: Subscale): number {
    return questions.reduce((sum, q) => {
      const answer = this.get(q);
      if (answer !== undefined && q.subscale === subscale) {
        if (q.isNegative) {
          return sum + -answer;
        } else {
          return sum + answer;
        }
      }
      return sum;
    }, 0);
  }
}
