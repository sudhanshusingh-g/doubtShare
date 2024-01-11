import dotnev from 'dotenv'

import express from 'express';
import dbConnection from './db/config.js';

const app=express();
const port=process.env.PORT || 3000;
dotnev.config();
dbConnection();

app.get('/',(req,res)=>{
    res.send("Hello");
})

app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
})

