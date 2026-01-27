import { bankPrisma } from "../../prisma/index.js";
import { DelereUserRequest } from "../../interfaces/DelereUserRequest.js";  


class DeleteUserServer {
    async execute({ id }: DelereUserRequest) {
        // Verifica se o usuário existe
        const user = await bankPrisma.user.findUnique({
            where: { id },
        });
        if (!user) {
            throw new Error("User not found");
        }
        // Deleta o usuário
        await bankPrisma.user.delete({
            where: { id },  
        });

        return { message: "User deleted successfully" };
    }   
}
export { DeleteUserServer };

