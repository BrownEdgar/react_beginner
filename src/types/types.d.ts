export interface IBlog {
  id: number;
  title: string;
  content: string;
  image: string;
  author: string;
  date: string;
}

export interface IPost {
  id: string;
  title: string;
  desc: string;
}

export interface ITodo {
  id: number;
  message: string;
  completed: boolean;
}

export interface IUser {
  id: number;
  name: string;
  password: string;
  createdAt: string;
  show?: boolean;
}

export interface IFirst {
  a: string;
  b: string;
}