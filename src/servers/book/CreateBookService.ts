import { bankPrisma } from "../../prisma/index.js";
import { CreateBookRequest } from "../../interfaces/CreateBookRequest.js";

class CreateBookService {
  async execute({
    title,
    content,
    published,
    createdById,
    authorId
  }: CreateBookRequest) {

    if (!title?.trim()) {
      throw new Error("Title is required");
    }

    if (!createdById) {
      throw new Error("User (createdById) is required");
    }

    if (!authorId) {
      throw new Error("Author (authorId) is required");
    }

    return bankPrisma.book.create({
      data: {
        title,
        content,
        published,
        createdById,
        authorId
      },
      select: {
        id: true,
        title: true,
        published: true,
        created_at: true,
        updated_at: true,
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        author: {
          select: {
            id: true,
            name: true
          }
        }
      }
    });
  }
}

export default CreateBookService;
