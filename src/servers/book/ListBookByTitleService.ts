import { bankPrisma } from "../../prisma/index.js";
import { ListBookByTitleRequest } from "../../interfaces/book/ListBookByTitleRequest.js";
class ListBooksByTitleService {
  async execute({ title }: ListBookByTitleRequest) {
    const book = await bankPrisma.book.findFirst({
      where: {
        title: title
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

export default ListBooksByTitleService;
