import express from 'express';

const getHello=(req,res)=>{
    res.send ("hello world");
}

export {getHello}