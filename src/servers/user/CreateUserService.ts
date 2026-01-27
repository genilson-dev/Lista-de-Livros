import { hash } from "bcryptjs";
import { bankPrisma } from "../../prisma/index.js";
import { CreateUserRequest } from "../../interfaces/CreateUserRequest.js";
import jwt from "jsonwebtoken";

class CreateUserService { // Serviço para criar um novo usuário
  async execute({ name, email, password }: CreateUserRequest) { // Recebe os dados necessários para criar um usuário
    if (!email) { // Validação simples do email
      throw new Error("Um email é obrigatorio");
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; // Expressão regular para validar o formato do email
    if (!emailRegex.test(email)) { // Verifica se o email está no formato correto
      throw new Error("Invalid email format"); 
    }

    const emailAlreadyExists = await bankPrisma.user.findUnique({ // Verifica se o email já está cadastrado
      where: { email }, // campo email 
    });

    if (emailAlreadyExists) { // Se o email já existir, lança um erro
      throw new Error(`Email ${email} já cadastrado `);
    }

    const passwordHash = await hash(password, 8); // Hash da senha para segurança 

    const user = await bankPrisma.user.create({ // Cria o novo usuário no banco de dados
      data: { // Dados do usuário
        name, // nome do usuário
        email, // email do usuário
        password: passwordHash, // senha hasheada
      },
    });

    // 🔐 GERA O TOKEN AQUI
    const secret = process.env.JWT_SECRET; // Obtém a chave secreta do JWT a partir das variáveis de ambiente

    if (!secret) { // Verifica se a chave secreta está definida
      throw new Error("JWT secret not configured"); // Lança um erro se não estiver definida
    }

    const token = jwt.sign( // Gera o token JWT 
      {
        name: user.name, // payload do token 
        email: user.email, // payload do token
      },
      secret, // chave secreta
      {
        subject: user.id, // subject do token
        expiresIn: "10min", // tempo de expiração do token
      }
    );

    return {
      id: user.id, // ID do usuário
      name: user.name,  // nome do usuário
      email: user.email, // email do usuário
      token, // token JWT gerado
    };
  }
}

export { CreateUserService }; // Exporta o serviço de criação de usuário
