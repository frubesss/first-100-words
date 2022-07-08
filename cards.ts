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

export const signLanguageCards = [
  {
    question: "/thankYou.gif",
    answer: "Thank You",
    isViewingAnswer: false,
    color: colors[0],
  },
  {
    question: "/happy.gif",
    answer: "Happy",
    isViewingAnswer: false,
    color: colors[1],
  },
  {
    question: "/wonderful.gif",
    answer: "Wonderful",
    isViewingAnswer: false,
    color: colors[2],
  },
  {
    question: "/loveYou.gif",
    answer: "Love You",
    isViewingAnswer: false,
    color: colors[0],
  },
  {
    question: "/howAreYou.gif",
    answer: "How are you?",
    isViewingAnswer: false,
    color: colors[1],
  },
  {
    question: "/sorry.gif",
    answer: "Sorry",
    isViewingAnswer: false,
    color: colors[2],
  },
  {
    question: "/yes.gif",
    answer: "Yes",
    isViewingAnswer: false,
    color: colors[0],
  },
];

export const frenchCards: Card[] = [
  {
    question: "le",
    questionDescription: "determinative",
    answer1: "the",
    answerDescription1: "pronoun",
    answer2: "him, her, it, them",
    isViewingAnswer: false,
    color: colors[0],
  },
  {
    question: "de",
    questionDescription: "determinative",
    answer1: "some, any",
    answerDescription1: "preposition",
    answer2: "of, from",
    isViewingAnswer: false,
    color: colors[1],
  },
  {
    question: "un",
    questionDescription: "determinative",
    answer1: "a, an",
    answerDescription1: "adjective, pronoun.",
    answer2: "one",
    isViewingAnswer: false,
    color: colors[2],
  },
  {
    question: "a",
    questionDescription: "preposition",
    answer1: "to, at, in",
    isViewingAnswer: false,
    color: colors[0],
  },
  {
    question: "être",
    questionDescription: "verb",
    answer1: "to be",
    answerDescription1: "noun",
    answer2: "being",
    isViewingAnswer: false,
    color: colors[2],
  },
  {
    question: "et",
    questionDescription: "conjunction",
    answer1: "and",
    isViewingAnswer: false,
    color: colors[0],
  },
  {
    question: "en",
    questionDescription: "preposition",
    answer1: "in, by",
    answerDescription1: "adverb, pronoun",
    isViewingAnswer: false,
    color: colors[1],
  },
  {
    question: "avoir",
    questionDescription: "verb",
    answer1: "to have",
    isViewingAnswer: false,
    color: colors[0],
  },
  {
    question: "que",
    questionDescription: "adverb, pronoun, conjunction",
    answer1: "that, which, who, whom",
    isViewingAnswer: false,
    color: colors[1],
  },
  {
    question: "pour",
    questionDescription: "preposition",
    answer1: "for, in order to",
    isViewingAnswer: false,
    color: colors[2],
  },
  {
    question: "dans",
    questionDescription: "preposition",
    answer1: "in, into, from",
    isViewingAnswer: false,
    color: colors[0],
  },
  {
    question: "ce",
    questionDescription: "pronoun",
    answer1: "this, that",
    isViewingAnswer: false,
    color: colors[0],
  },
  {
    question: "il",
    questionDescription: "pronoun",
    answer1: "he, it",
    isViewingAnswer: false,
    color: colors[1],
  },
  {
    question: "qui",
    questionDescription: "pronoun",
    answer1: "who, whom",
    isViewingAnswer: false,
    color: colors[2],
  },
  {
    question: "ne",
    questionDescription: "adverb",
    answer1: "not",
    isViewingAnswer: false,
    color: colors[1],
  },
  {
    question: "sur",
    questionDescription: "adverb",
    answer1: "on, upon",
    isViewingAnswer: false,
    color: colors[0],
  },
  {
    question: "se",
    questionDescription: "pronoun",
    answer1: "oneself, himself, herself, itself, themselves",
    isViewingAnswer: false,
    color: colors[1],
  },
  {
    question: "pas",
    questionDescription: "adverb",
    answer1: "not",
    isViewingAnswer: false,
    color: colors[2],
  },
  {
    question: "plus",
    questionDescription: "adverb",
    answer1: "more, no more",
    isViewingAnswer: false,
    color: colors[0],
  },
];
