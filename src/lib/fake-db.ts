// 🔥 Fake DB en memoria

export interface User {
  id: number;
  email: string;
  password: string;
  name: string;
}

export const users: User[] = [
  {
    id: 1,
    email: "admin@test.com",
    password: "123456",
    name: "Erick",
  },
];