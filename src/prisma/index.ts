import { PrismaClient } from "@prisma/client";
import { PrismaPg } from "@prisma/adapter-pg";
import dotenv from "dotenv";

dotenv.config(); // Carrega variáveis de ambiente do arquivo .env

const adapter = new PrismaPg({ // Configuração do adaptador PostgreSQL para Prisma
  connectionString: process.env.DATABASE_URL!, // String de conexão com o banco de dados
});

export const bankPrisma = new PrismaClient({ // Instancia o cliente Prisma com o adaptador PostgreSQL
  adapter, // Define o adaptador
});
