import express from 'express';
import Configuration from 'openai';
import OpenAIApi from 'openai';
import dotenv from 'dotenv';

dotenv.config()

const configuration = new Configuration({
    apiKey:process.env.OPEN_AI_API_KEY
})
const openai=new OpenAIApi(configuration)
const aiResponse=async(req,res)=>{
    try{
        const {prompt} = req.body;
        const response = await openai.images.generate({
            prompt,
            n: 1,
            size: '1024x1024',
            response_format: 'url',
          });
        const image =response.data[0].url
          res.status(200).json({ photo: image }); 
    }
    catch(err){
        console.log(err)
    }
}

export {aiResponse}