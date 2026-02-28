import { bankPrisma } from "../../prisma/index.js";

class ListBooksByIdService {
  async execute(id: string) {
    const book = await bankPrisma.book.findUnique({
      where: {
        id: id
      },
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
        }       
      }
    });

    return book;
  }
}

export default ListBooksByIdService;
