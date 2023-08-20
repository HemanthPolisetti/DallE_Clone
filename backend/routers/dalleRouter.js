import express from 'express';
import { aiResponse} from '../controllers/dalleController.js';


const dalleRouter= express.Router()

dalleRouter.post('/',aiResponse)

export {dalleRouter}