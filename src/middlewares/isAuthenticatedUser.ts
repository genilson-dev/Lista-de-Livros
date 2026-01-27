import { NextFunction, Request, Response } from "express"; // Importa tipos do Express
import jwt from "jsonwebtoken"; // Biblioteca para manipulação de JSON Web Tokens

interface Payload { // Interface para o payload do token JWT
  sub: string; // Identificador do usuário
}

export function IsAuthenticated( // Middleware para verificar autenticação do usuário
  req: Request, // Requisição Express
  res: Response, // Resposta Express
  next: NextFunction // Próxima função de middleware
) {
  const authToken = req.headers.authorization; // Obtém o token de autorização do cabeçalho

  if (!authToken) { // Verifica se o token está presente
    return res.status(401).json({ error: "Usuario nao autorizado" }); // Retorna erro de não autorizado
  }

  const [, token] = authToken.split(" "); // Extrai o token do cabeçalho

  const secret = process.env.JWT_SECRET; // Obtém a chave secreta do ambiente
  if (!secret) { // Verifica se a chave secreta está definida
    return res.status(500).json({ error: "JWT secret not configured" }); // Retorna erro de configuração do servidor
  }

  try { // Tenta verificar o token
    const decoded = jwt.verify(token, secret) as Payload; // Verifica o token e decodifica o payload

    req.userId = decoded.sub; // Adiciona o ID do usuário à requisição

    return next(); // Chama a próxima função de middleware
  } catch { // Captura erros na verificação do token
    return res.status(401).json({ error: "Invalid or expired token" }); // Retorna erro de token inválido ou expirado
  }
}
