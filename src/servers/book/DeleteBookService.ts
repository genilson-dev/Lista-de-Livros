import { bankPrisma } from "../../prisma/index.js";
import { DeleteBookRequest } from "../../interfaces/book/DeleteBookRequest.js";

class DeleteBookService {
    async execute({ id }: DeleteBookRequest) {
        if (!id) {
            throw new Error("O Livro informado não foi encontrado")
        }
        const clearId = id.trim();
        const findBook = await bankPrisma.book.findUnique({
            where: {
                id: clearId
            }
        })
        console.log("ID recebido para exclusão:", clearId) // Log para verificar o ID recebido
        if (!findBook) {
            throw new Error("Livro não encontrado")
        }
        try {
            const deleteBook = await bankPrisma.book.delete({
                where: {
                    id: clearId
                }
            })
            return deleteBook
        } catch (error) {
            console.error("Erro ao deletar o livro:", error);
            throw new Error("Erro ao deletar o livro");
        }
    }
}
export default DeleteBookService;
