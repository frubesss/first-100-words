export type Card = {
  question: string;
  description: string;
  answer: string;
  isViewingAnswer: boolean;
  color: string;
};

const colors = ["#7753F8", "#12A5EC", "#FFCC00", "#FE8400"];

export const frenchCards: Card[] = [
  {
    question: "le",
    description: "femme",
    answer: "him, her, it, them",
    isViewingAnswer: false,
    color: colors[0],
  },
  {
    question: "de",
    description: "femme",
    answer: "of, from",
    isViewingAnswer: false,
    color: colors[1],
  },
  {
    question: "un",
    description: "femme",
    answer: "one",
    isViewingAnswer: false,
    color: colors[2],
  },
  {
    question: "a",
    description: "femme",
    color: colors[3],
    answer: "to, at, in",
    isViewingAnswer: false,
  },
];
