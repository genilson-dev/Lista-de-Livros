import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
// import router from './routes/userRoutes/user.routes.js';
import { userRoutes, bookRoutes, authorRoutes } from './routes/index.routes.js';
dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
// app.use(routerTest, userRoutes);
app.use(
    userRoutes, 
    bookRoutes, 
    authorRoutes
);

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


