export interface CreateBookRequest {
  title: string;
  content?: string;
  published?: boolean;
  createdById: string; // User
  authorId: string;    // Author
}
