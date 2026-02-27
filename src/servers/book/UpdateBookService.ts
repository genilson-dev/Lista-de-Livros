import { bankPrisma } from "../../prisma/index.js";
import { UpdateBookRequest } from "../../interfaces/book/UpdateBookRequest.js";

class UpdateBookService{
    async execute({id, title, content, published, authorId, createdById}:UpdateBookRequest){
        if(!id){
            throw new Error("The title is required")
        }
        const clearId = id.trim()
        const findBook = await bankPrisma.book.findUnique({
            where: {
                id: clearId
            }
        })
        if(!findBook){
            throw new Error("Book Not found")
        }

        const data: Partial<UpdateBookRequest> = {
            
        }

        try {
            const updateBook = await bankPrisma.book.update({
                where: {
                    id: clearId
                },
                data:{
                    title,
                    content,
                    published,
                    authorId,
                    createdById
                },
                select: {
                    title: true,
                    content:true,
                    published: true,
                    authorId: true,
                    createdById: true
                }
            })

            return updateBook
        } catch (error) {
            console.log("Erro,nao foi possivel editar o Livro", error)
            
        }
    }
}

export default UpdateBookService;
