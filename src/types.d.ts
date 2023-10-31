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
