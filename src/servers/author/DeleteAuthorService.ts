import { bankPrisma } from "../../prisma/index.js";
import { DeleteAuthorRequest } from "../../interfaces/author/DeleteAuthorRequest.js";

class DeleteAuthorService {
  async execute({ id }: DeleteAuthorRequest) {

    if (!id) {
      return null;
    }

    const clearId = id.trim();

    const authorExists = await bankPrisma.author.findUnique({
      where: { id: clearId },
    });

    if (!authorExists) {
      return null;
    }

    await bankPrisma.author.delete({
      where: { id: clearId },
    });

    return authorExists;
  }
}

export { DeleteAuthorService };
