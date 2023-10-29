type User = {
  id: number;
  displayName: string;
  username: string;
  createdAt: Date;
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
  displayName: string;
  username: string;
  password: string;
  confirmPassword: string;
};
