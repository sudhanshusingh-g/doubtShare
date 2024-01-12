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
    const existedUser = await User.findOne({
        $or: [{ email }]
    })
    if (existedUser) {
        throw new ApiError(409, "User already exists")
    }
    // create user object -create entry in db
    const user = await User.create({
        ...userData
    })
    // remove password and refresh token field from response
    let projection = { password: 0, refreshToken: 0 };


    if (role === 'Student') {
        projection.grade= 1;
    }

    const createdUser = await User.findById(user._id).select(projection);




    // check for user creation
    if (!createdUser) {
        throw new ApiError(500, "Something went wrong while registering user");
    }
    // return response
    return res.status(201).json(
        new ApiResponse(200, createdUser, "User created successfully")
    )
})

export { registerUser }