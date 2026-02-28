import express from "express";
import dotenv from "dotenv"; // Importa o módulo dotenv para carregar variáveis de ambiente a partir de um arquivo .env
dotenv.config(); // Carrega as variáveis de ambiente do arquivo .env para process.env

import cors from "cors"; // Importa o módulo cors para habilitar o Cross-Origin Resource Sharing (CORS) e permitir que o servidor aceite requisições de diferentes origens

import { userRoutes, bookRoutes, authorRoutes } from "./routes/index.routes.js"; // Importa as rotas de usuário, livro e autor a partir do arquivo index.routes.js, que centraliza todas as rotas da aplicação

const app = express(); // Cria uma nova instância do aplicativo Express, que é o framework web utilizado para criar o servidor e definir as rotas da aplicação
app.use(express.json()); // Habilita o middleware express.json() para que o servidor possa entender e processar requisições com payloads JSON, permitindo que os dados sejam enviados no corpo das requisições HTTP.
app.use(cors()); // Habilita o middleware cors() para permitir que o servidor aceite requisições de diferentes origens, o que é útil para permitir que clientes em domínios diferentes acessem os recursos do servidor.

app.use(userRoutes);
app.use(bookRoutes);
app.use(authorRoutes);

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
  console.log(`O servidor esta rodando na port Padrão ${PORT} ou na port definida no .env 9999`);
});
