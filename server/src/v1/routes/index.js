import express from 'express';
import { router as postRouter } from './post.js';
import { router as userRouter } from './user.js';

const router = express.Router();

router.use('/post', postRouter);
router.use('/user', userRouter);

export { router };