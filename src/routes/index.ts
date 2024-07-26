import { Router } from 'express';
import { authRouter } from './auth';
import { userRouter } from './user';
import { postRouter } from './post';

const v1Router = Router();

v1Router.use('/auth', authRouter);
v1Router.use('/user', userRouter);
v1Router.use('/post', postRouter);
// All routes go here

export { v1Router };
