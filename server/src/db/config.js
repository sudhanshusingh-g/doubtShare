import mongoose from 'mongoose';
import { DB_NAME } from '../constant.js';

const dbConnection=async()=>{
    try {
        const connctionInstance=await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Database connected DB HOST: ${connctionInstance.connection.host}`);
    } catch (error) {
        console.error("Error: ",error);
    }
}

export default dbConnection