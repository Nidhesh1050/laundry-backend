import UserModel from "../models/adminModel.js"
import jwt from 'jsonwebtoken'

const genertedRefreshToken = async(userId)=>{
    const token = await jwt.sign({ id : userId},
        process.env.SECRET_KEY_REFRESH_TOKEN,
        { expiresIn : '7d'}
    )


    return token
}

export default genertedRefreshToken