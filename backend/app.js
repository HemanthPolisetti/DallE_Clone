import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { postRouter } from './routers/postRouter.js';
import { dalleRouter } from './routers/dalleRouter.js';
import connectDB from './config/configDB.js';
const app=express()

dotenv.config();
connectDB(process.env.MONGO_URI)
app.use(cors())
app.use(express.json())
app.use('/post',postRouter)
app.use('/api',dalleRouter)
app.listen(process.env.PORT||5000,()=>{
    console.log(`SERVER IS RUNNING ON PORT ${process.env.PORT}`)
})