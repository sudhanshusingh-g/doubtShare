import mongoose from 'mongoose';

const doubtSchema = new mongoose.Schema({
    requestedBy: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student',
        required: true
    },
    assignedTo: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Tutor'
    },
    subject: {
        type: String,
        required: true
    },
    doubt: {
        type: String,
        required: true
    },
    solution: {
        type: String
    },
    status: {
        type: String,
        enum: ['Pending', 'Answered'],
        default: 'Pending'
    }
}, { timestamps: true });

export const Doubt = mongoose.model('Doubt', doubtSchema);

