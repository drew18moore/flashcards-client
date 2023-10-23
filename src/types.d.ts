type User = {
  id: number,
  username: string
}

type Deck = {
  id: number,
  userId: number,
  name: string,
  isPrivate: boolean,
  createdAt: Date
}

type AuthResponse = {
  token: string,
  userDTO: User
}

type LoginRequest = {
  username: string,
  password: string
}