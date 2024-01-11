import dotnev from 'dotenv'
const port=process.env.PORT || 3000;
import { app } from './app.js';
import dbConnection from './db/config.js';

dotnev.config();
dbConnection()
.then(()=>{
    app.listen(port,()=>{
        console.log(`Server running on port ${port}`);
    })
    
})
.catch((error)=>{
    console.log("Database connection failed :-> " ,error);
})




