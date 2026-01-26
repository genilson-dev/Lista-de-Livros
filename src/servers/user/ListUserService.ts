import { bankPrisma } from "../../prisma/index.js";
class ListUserService {
    async execute() {
        const users = await bankPrisma.user.findMany({
            select:{
                id: true,
                name: true,
                email: true,
                created_at: true,
                updated_at: true,
                password: true

            }
        })
        
        
        return users;
    }
}
export { ListUserService };
