import express from 'express';
import { getHello } from '../controllers/postController.js';

const postRouter = express.Router();

postRouter.get('/',getHello)

export {postRouter}