import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { routerTest } from './routes/index.routes.js';

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());
app.use('/api', routerTest);

const PORT = process.env.PORT || 9999;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


