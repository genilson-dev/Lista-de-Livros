import { bankPrisma } from "../../prisma/index.js";
import { ListRequestAuthor } from "../../interfaces/ListRequestAuthor.js";

class ListAuthorByNameService {
    async execute({ name }: ListRequestAuthor) {
        if (!name) {
            throw new Error("O nome informado nao existe no banco de dados")
        }
        const listAuthor = await bankPrisma.author.findMany({
            where: {
                name: name
            }
        })
        console.log(listAuthor);

        if (!listAuthor) {
            throw new Error("Nenhuma pessoa foi encontrada")
        }

        const author = await bankPrisma.author.findMany({
            where: {
                name: {
                    contains: name,
                    mode: "insensitive"
                }
            },
            select: {
                id: true,
                name: true,
                bio: true
            },
            orderBy: {
                created_at: "asc"

            }
        })
        console.log(author);
        return author;


    }
}

export default ListAuthorByNameService;

