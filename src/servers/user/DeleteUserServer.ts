import { bankPrisma } from "../../prisma/index.js";
import { DelereUserRequest } from "../../interfaces/DelereUserRequest.js";  


class DeleteUserServer { // Classe para deletar um usuário
    async execute({ id }: DelereUserRequest) { // Recebe o ID do usuário a ser deletado
        // Verifica se o usuário existe
        const user = await bankPrisma.user.findUnique({ // Busca o usuário pelo ID
            where: { id }, // campo id 
        });
        if (!user) { // Se o usuário não existir, lança um erro
            throw new Error("User not found"); // Mensagem de erro
        }
        // Deleta o usuário
        await bankPrisma.user.delete({ // Deleta o usuário do banco de dados
            where: { id },   // campo id
        });

        return { message: "User deleted successfully" }; // Retorna uma mensagem de sucesso
    }   
}
export { DeleteUserServer }; // Exporta a classe DeleteUserServer

