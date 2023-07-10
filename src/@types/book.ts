import { randomUUID } from "crypto";

export interface Book {
  id: `${string}-${string}-${string}-${string}-${string}`;
  title: string;
  author: string;
}