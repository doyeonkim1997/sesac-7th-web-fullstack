import express, { Request, Response, Router } from 'express';

import { User } from '../types/user';


const router = express.Router();


router.get('/', (req: Request, res: Response) => {
  const users: string[] = ['Alice', 'Bob', 'Charlie'];
  res.json(users);
});

router.post('/', (req: Request, res: Response) => {
  const { name } = req.body as { name: string };
  const newUser: User = {
    id: 1,
    name: "test",
    email: "test@test.com"
  }

  if (!name) {
    return res.status(400).json({ error: 'Name is required' });
  }
  res.status(201).json({ message: `User ${name} created successfully!` });
});


export default router;