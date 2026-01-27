import { bankPrisma } from "../../prisma/index.js";
import { CreateBookRequest } from "../../interfaces/CreateBookRequest.js";

class CreateBookService {
  async execute({ title, content, published, createdById, authorId }: CreateBookRequest) { // Recebe os dados para criar um livro

    if (!title?.trim()) { // Validação simples do título
      throw new Error(`O titulo do livro é obrigatorio ${title}`);
    }

    if (!createdById) { // Validação do ID do usuário que criou o livro
      throw new Error(`O id do usuario logado é obrigatorio ${createdById}`);
    }

    if (!authorId) { // Validação do ID do autor do livro
      throw new Error(`O id do author é obrigatorio ${authorId}` );
    }

    return bankPrisma.book.create({ // Cria um novo livro no banco de dados
      data: { // Dados do livro
        title, // título do livro
        content, // conteúdo do livro
        published, // status de publicação do livro
        createdById, // ID do usuário que criou o livro
        authorId // ID do autor do livro
      },
      select: { // Seleciona os campos a serem retornados
        id: true, 
        title: true,
        published: true,
        created_at: true,
        updated_at: true,
        createdBy: {
          select: {
            id: true,
            name: true,
            email: true
          }
        },
        author: { // Inclui os dados do autor relacionado
          select: { // Seleciona os campos do autor
            id: true,
            name: true
          }
        }
      }
    });
  }
}

export default CreateBookService;
