import { asyncHandler } from '../utils/asyncHandler.js';
import { ApiError } from '../utils/ApiError.js'
import { User } from '../models/user.models.js';
import { ApiResponse } from '../utils/ApiResponse.js';
const registerUser = asyncHandler(async (req, res) => {
    // res.status(200).json({
    //     message:"doubtshare"
    // })






    // get user details
    const { fullname, email, password, languages, role } = req.body
    // console.log("languages :",languages);
    const userData = {
        fullname,
        email,
        password,
        languages,
        role,
        ...(role === 'Student' && { grade: req.body.grade }), // Include grade only for students
    };
    // validations
    if (fullname === "") {
        throw new ApiError(400, "fullname is required");
    }
    // check user already exists
    const existedUser = User.findOne({
        $or: [{ email }]
    })
    if (existedUser) {
        throw new ApiError(409, "User already exists")
    }
    // create user object -create entry in db
    const user = await User.create({
        userData
    })
    // remove password and refresh token field from response
    const createdUSer = await User.findById(user._id).select("-password -refreshToken")


    // check for user creation
    if (!createdUSer) {
        throw new ApiError(500, "Something went wrong while registering user");
    }
    // return response
    return res.status(201).json(
        new ApiResponse(200, createdUSer, "User created successfully")
    )
})

export { registerUser }