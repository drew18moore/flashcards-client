type User = {
  id: number;
  displayName: string;
  username: string;
  createdAt: string;
};

type Deck = {
  id: number;
  userId: number;
  name: string;
  isPrivate: boolean;
  createdAt: string;
  numCards: number;
};

type Card = {
  id: number;
  userId: number;
  deckId: number;
  frontText: string;
  backText: string;
  createdAt: string;
}

type AuthResponse = {
  token: string;
  userDTO: User;
};

type LoginRequest = {
  username: string;
  password: string;
};

type SignupRequest = {
  displayName: string;
  username: string;
  password: string;
  confirmPassword: string;
};

type EditUserRequest = {
  userId: number;
  displayName: string;
  username: string;
}

type NewDeckRequest = {
  name: string;
  isPrivate: boolean;
}

type EditDeckRequest = {
  deckId: number;
  name: string;
  isPrivate: boolean;
}

type NewCardRequest = {
  deckId: number;
  frontText: string;
  backText: string;
}

type EditCardRequest = {
  cardId: number;
  frontText: string;
  backText: string;
}

enum QuestionType {
  TRUE_FALSE = "TRUE_FALSE",
  MULTIPLE_CHOICE = "MULTIPLE_CHOICE",
  WRITTEN = "WRITTEN",
}

interface Question {
  questionText: string;
  questionType: QuestionType;
}

interface MultipleChoiceQuestion extends Question {
  options: string[];
  answer: number;
}

interface TrueFalseQuestion extends Question {
  option: string;
  answer: boolean
}

interface WrittenQuestion extends Question {
  answer: string;
}

type GetTestQuestionsRequest = {
  deckId: number;
  numQuestions: number;
  trueFalse: boolean;
  multipleChoice: boolean;
  written: boolean;
}

type Answer = {
  questionIndex: number;
  response: string | boolean | number
}

type Search = {
  decks: Deck[];
  users: User[];
}