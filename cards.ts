export type Card = {
  question: string;
  questionDescription: string;
  answer1: string;
  answerDescription1?: string;
  answer2?: string;
  isViewingAnswer: boolean;
  color: string;
};

const colors = ["#7753F8", "#FFCC00", "#FE8400"];

export const frenchCards: Card[] = [
  {
    question: "le",
    questionDescription: "det",
    answer1: "the",
    answerDescription1: "pron",
    answer2: "him, her, it, them",
    isViewingAnswer: false,
    color: colors[0],
  },
  {
    question: "de",
    questionDescription: "det",
    answer1: "some, any",
    answerDescription1: "prep",
    answer2: "of, from",
    isViewingAnswer: false,
    color: colors[1],
  },
  {
    question: "un",
    questionDescription: "det",
    answer1: "a, an",
    answerDescription1: "adj., pron.",
    answer2: "one",
    isViewingAnswer: false,
    color: colors[2],
  },
  {
    question: "a",
    questionDescription: "prep",
    answer1: "to, at, in",
    isViewingAnswer: false,
    color: colors[0],
  },
  {
    question: "être",
    questionDescription: "verb",
    answer1: "to be",
    answerDescription1: "noun [m.]",
    answer2: "being",
    isViewingAnswer: false,
    color: colors[2],
  },
  {
    question: "et",
    questionDescription: "conj.",
    answer1: "and",
    isViewingAnswer: false,
    color: colors[2],
  },
  {
    question: "en",
    questionDescription: "prep.",
    answer1: "in, by",
    answerDescription1: "adv., pron.",
    isViewingAnswer: false,
    color: colors[2],
  },
];
