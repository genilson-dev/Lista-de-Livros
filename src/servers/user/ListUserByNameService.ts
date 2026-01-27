import { bankPrisma } from "../../prisma/index.js";
import { SearchUserRequest } from "../../interfaces/SearchUserRequest.js";

class ListUserByNameService {
    async execute({ name, email }: SearchUserRequest) {
        if (!name && !email) {
            throw new Error("User name or email is required");
        }
        try {
            const users = await bankPrisma.user.findMany({
                where: {
                    name: {
                        contains: name,
                        mode: "insensitive",
                    },
                    email:{
                        contains: email,
                        mode: "insensitive",
                    }
                },
                select: {
                    id: true,
                    name: true,
                    email: true,
                    created_at: true,
                    updated_at: true,
                },
            });
            return users;
        } catch (error: any) {
            throw new Error(`Error fetching users by name: ${error.message}`);
        }
    }
}
export { ListUserByNameService };


