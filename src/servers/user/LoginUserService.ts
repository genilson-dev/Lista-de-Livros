import { bankPrisma } from "../../prisma/index.js";
import AuthUserRequest from "../../interfaces/middleware/AuthUserRequest.js";
import { compare } from "bcryptjs";
import jwt from "jsonwebtoken";
const { sign } = jwt;

class LoginUserService { // Serviço para autenticar o usuário
  async execute({ email, password }: AuthUserRequest) { // Recebe email e senha
    // Busca o usuário pelo email
    const user = await bankPrisma.user.findUnique({ // Busca o usuário no banco de dados
      where: { email }, // campo email
    });
    
    // Verifica se o usuário existe
    if (!user) { // Se o usuário não existir, lança um erro
      throw new Error("Email or password incorrect"); 
    }

    const passwordMatch = await compare(password, user.password); // Verifica se a senha está correta
     // Verifica se a senha está correta
    if (!passwordMatch) { // Se a senha estiver incorreta, lança um erro
      throw new Error("Email or password incorrect");
    }
    // Verifica se a variável de ambiente JWT_SECRET está definida
    if (!process.env.JWT_SECRET) { // ou SECRET_JWT mas nesse caso fica sendo o jwr_secret
      throw new Error("JWT secret not configured");
    }
    // Gera o token JWT
    const token = sign( // ou jwt.sign
      {
        name: user.name, // payload
        email: user.email, // payload 
      },
      process.env.JWT_SECRET as string, // secret key
      {
        subject: user.id, // subject of the token
        expiresIn: "10d", // expiration time 
      }
    );
      // O que vai ser retornado para o usuário
    return {
      id: user.id, // user ID 
      name: user.name, // user name
      email: user.email, // user email
      token,
    };
  }
}

export { LoginUserService} ; // exportando o serviço
