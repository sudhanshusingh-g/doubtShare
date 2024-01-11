import mongoose from 'mongoose';
import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcrypt';

const userSchema = new mongoose.Schema({
    fullname: {
        type: String,
        required: true,
        trim: true,
        minLength: 4
    },
    email: {
        type: String,
        required: true,
        lowercase: true
    },
    password: {
        type: String,
        required: true,
        minLength: 6
    },
    languages: {
        type: [{
            type: String,
            enum: ["English", "Hindi", "Bengali", "Telugu", "Tamil", "Marathi"]
        }],
        validate: {
            validator: function (value) {
                return value.length > 0; // Ensure at least one language is selected
            },
            message: 'At least one language must be selected.'
        }
    },
    role: {
        type: String,
        required: true,
        enum: ["Student", "Tutor"]
    },
    refreshToken:{
        type:String
    }

}, { timestamps: true })


userSchema.pre("save", async function (next) {
    if (!this.isModified(this.password)) return next();
    this.password = await bcrypt.hash(this.password, 10);
    next()
})

userSchema.methods.isPasswordCorrect = async function (password) {
    return await bcrypt.compare(password, this.password);
}

userSchema.methods.generateAccessToken = function () {
    return jsonwebtoken.sign(
        {
            _id: this._id,
            email: this.email,
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn: process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken = function () {
    return jsonwebtoken.sign(
        {
            _id: this._id
        },
        process.env.REFRESH_TOKEN_SECRET,
        {
            expiresIn: process.env.REFRESH_TOKEN_EXPIRY
        }
    )
}

export const User = mongoose.model("User", userSchema);