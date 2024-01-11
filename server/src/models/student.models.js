import mongoose from 'mongoose';
import User from './user.models';

const studentSchema = new mongoose.Schema({
    doubts: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doubt'
    }],
    grade:{
        type:String,
        required:true
    }
});

const Student = User.discriminator('Student', studentSchema);

export default Student;
