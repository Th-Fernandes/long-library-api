import { randomUUID } from "crypto";
import { Book } from "./@types/book";


export const books : Book[] = [
  {
    id: randomUUID(),
    title: 'Lorem ipsum',
    author: 'John Doe'
  }
]