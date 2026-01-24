import { bankPrisma } from "../../prisma/index.js";
import { CreateAuthorRequest } from "../../interfaces/CreateAuthorRequest.js";

class CreateAuthorService {
    async execute({ name, bio }: CreateAuthorRequest) {
        try {
            if (!name) {
                throw new Error("Name is required");
            }
            const createNewBook = await bankPrisma.author.create({
                data: {                    
                    name,
                    bio
                },
                select: {
                    id: true,
                    name: true,
                    bio: true
                }
            });
            console.log(createNewBook);
            return createNewBook;
        } catch (error) {
            console.error("Error creating book:", (error as Error).message);
            return null;
        }

    }
}

export default CreateAuthorService;

