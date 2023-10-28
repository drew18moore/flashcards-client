type User = {
  id: number;
  username: string;
};

type Deck = {
  id: number;
  userId: number;
  name: string;
  isPrivate: boolean;
  createdAt: Date;
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
  username: string;
  password: string;
  confirmPassword: string;
};
