import { bankPrisma } from "../../prisma/index.js";
import { ListAuthorRequest } from "../../interfaces/ListAuthorRequest.js";

class ListAuthorById{
    async execute({id}:ListAuthorRequest){
        if(!id){
            throw new Error("Naofoi possivel listar os autores")
        }
        const authorIdClean = id.trim();
        const authorExists = await bankPrisma.author.findUnique({
            where:{
                id: authorIdClean
            }
        });
        if(!authorExists){
            throw new Error("Ninguem foi encontrado")
        }
        await bankPrisma.author.findMany({
            where:{
                id: id
            },
            select: {
                id: true,
                name: true,
                bio: true,
                created_at: true,
                updated_at: true
            }
        })
        return authorExists;
    }
}
export default ListAuthorById
