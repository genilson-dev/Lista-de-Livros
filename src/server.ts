import express from "express";
import dotenv from "dotenv";
dotenv.config();

import cors from "cors";

import { userRoutes, bookRoutes, authorRoutes } from "./routes/index.routes.js";

const app = express();
app.use(express.json());
app.use(cors());

app.use(userRoutes);
app.use(bookRoutes);
app.use(authorRoutes);

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
  console.log(`O servidor esta rodando na port Padrão ${PORT} ou na port definida no .env 9999`);
});
