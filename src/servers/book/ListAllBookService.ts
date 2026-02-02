import { bankPrisma } from "../../prisma/index.js";

class ListAllBooksService {
  async execute() {
    const books = await bankPrisma.book.findMany({
      select: {
        id: true,
        title: true,
        content: true,
        published: true,
        created_at: true,

        author: {
          select: {
            id: true, // 
            name: true // ajuste conforme seu model Author
          }
        },

        createdBy: {
          select: {
            id: true,
            name: true,
            email: true
          }
        }
      }
    });

    return books;
  }
}

export default ListAllBooksService;
