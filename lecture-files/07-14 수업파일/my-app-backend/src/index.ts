import express, { Request, Response } from 'express';
import cors from 'cors';

import userRoutes from './routes/user.route';


const app = express();
const PORT: number = 4000;

app.use(express.json());
app.use(cors());
app.use('/users', userRoutes);


app.get("/", (req: Request, res: Response) => {
  res.send("Hello TypeScript with Express!");
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});