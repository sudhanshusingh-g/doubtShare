import mongoose from 'mongoose';
import User from './user.models';

const tutorSchema = new mongoose.Schema({
    subjects: [{
        type: String
    }],
    isOnline: {
        type: Boolean,
        default: false
    },
    doubtsAssigned: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Doubt'
    }]
});

const Tutor = User.discriminator('Tutor', tutorSchema);

export default Tutor;
