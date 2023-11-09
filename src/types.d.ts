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
