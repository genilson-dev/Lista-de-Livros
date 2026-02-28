export interface UpdateBookRequest {
    id: string
    title: string;
    content: string;
    published: boolean;
    createdById: string
    authorId: string
}