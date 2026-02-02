import { bankPrisma } from "../../prisma/index.js";
import { UpdateAuthorRequest } from "../../interfaces/author/UpdateAuthorRequest.js";

class UpdateAuthorService {
    async execute({ id, authorId, name, bio }: UpdateAuthorRequest & { authorId: string }) {

        if (!id && !authorId) {
            throw new Error("O autor informado nao exxiste ou nao tem ninguem logado");
        }
        const clearId = id.trim();
        // const clearIdAuthor = authorId.trim();

        const authorExists = await bankPrisma.author.findUnique({
            where: {
                id: clearId
            }
        });
        if (!authorExists) {
            throw new Error("Autor nao encontrado");
        }
        const data: Partial<UpdateAuthorRequest> = {
            name: name ? name.trim() : authorExists.name, // 
            bio: bio ? bio.trim() : (authorExists.bio ?? ""),
        };
        if (name) data.name = name;
        if (bio) data.bio = bio;
        try {
            const updatedAuthor = await bankPrisma.author.update({
                where: { id: clearId },
                data,
                select: {
                    id: true,
                    name: true,
                    bio: true,
                    created_at: true,
                    updated_at: true,
                }
            })
            return updatedAuthor;
        } catch (error) {
            throw new Error(`Erro ao atualizar autor: ${(error as Error).message}`);
        }

    }
}

export { UpdateAuthorService };
