import User from "../models/user.model.js"
import bcryptjs from 'bcryptjs';
import { errorHandler} from "../utals/error.js";

export const signup=async(req,res,next)=>{
const {username,email,password}=req.body

// Error for cannot add all thing required 

if(!username || !email || !password || username ==='' ||email===''|| password==='' ){
next (errorHandler(400,'All field are requird'))
}
// Hashed password score from bcryptjs 
const hashedpassword=bcryptjs.hashSync(password,10)
// New User Add 
const newUser= new User({
    username,
    email,
    password :hashedpassword,
})
// Error Message for duplicate Email and password
try {
    await newUser.save()
    
res.json("Signup Successfully")
} catch (error) {
    next(error)
}

}