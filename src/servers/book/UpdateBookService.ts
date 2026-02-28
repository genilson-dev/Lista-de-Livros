import { bankPrisma } from "../../prisma/index.js";
import { UpdateBookRequest } from "../../interfaces/book/UpdateBookRequest.js";

class UpdateBookService {
    async execute({ id, title, content, published, authorId, createdById }: UpdateBookRequest) {
        if (!id) {
            throw new Error("The title is required")
        }
        const clearId = id.trim()
        const findBook = await bankPrisma.book.findUnique({
            where: {
                id: clearId
            }
        })
        if (!findBook) {
            throw new Error("Book Not found")
        }

        const data: Partial<UpdateBookRequest> = { // Cria um objeto data do tipo Partial<UpdateBookRequest>, que é uma versão opcional da interface UpdateBookRequest, permitindo que os campos sejam opcionais. Esse objeto será usado para armazenar os dados a serem atualizados no livro.
            title, // O título do livro a ser atualizado, que é passado como um parâmetro para a função execute. Se o título for fornecido, ele será incluído no objeto data.
            content,
            published,
            authorId,
            createdById
        }

        try {
            const updateBook = await bankPrisma.book.update({ // Atualiza o livro no banco de dados usando o método update do Prisma                
                where: { // Especifica a condição para encontrar o livro a ser atualizado, usando o ID fornecido
                    id: clearId
                },
                data, // Os dados a serem atualizados, que são passados como um objeto contendo os campos a serem modificados
                select: {
                    title: true,
                    content: true,
                    published: true,
                    authorId: true,
                    createdById: true
                }
            })

            return updateBook // Retorna o livro atualizado
        } catch (error) {
            console.log("Erro,nao foi possivel editar o Livro", error)
            throw error
        }
    }
}

export default UpdateBookService;
