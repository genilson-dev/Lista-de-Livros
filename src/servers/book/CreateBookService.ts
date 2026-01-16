import { bankPrisma } from "../../prisma/index.js";
import { CreateBookRequest } from "../../interfaces/CreateBookRequest.js";

class CreateBookService {
    async execute({ title, content, published, authorId }: CreateBookRequest) {
        if(!title){
            throw new Error("Title is required");
        }
        try {
            const createNewBook = await bankPrisma.book.create({
                data: {
                   
                    title,
                    content,
                    published,
                    authorId
                },
                select: {
                    id: true,
                    title: true,
                    content: true,
                    published: true,
                    authorId: true,
                    createdAt: true,
                    updatedAt: true,
                }
            });
            console.log(createNewBook);
            return createNewBook;
        } catch (error) {
            console.error("Error creating book:", (error as Error).message);
            throw new Error("Error creating book");

            
        }

    }
}

export default CreateBookService;
