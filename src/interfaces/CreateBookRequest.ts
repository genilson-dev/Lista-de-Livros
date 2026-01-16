import { User, Autor } from "@prisma/client";

export interface CreateBookRequest {
  id?:        string;
  title:     string;
  content:   string;
  published: boolean;
  createdAt?: Date;
  updatedAt?: Date;
  author?:    User;          // relacionamento com User
  authorId:  string;        // FK para User
  autor?:    Autor | null;  // relacionamento opcional com Autor
  autorId?:  string | null; // FK opcional para Autor
}

