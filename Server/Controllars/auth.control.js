import User from "../models/user.model.js";
import bcryptjs from "bcryptjs";
import { errorHandler } from "../utals/error.js";
import jwt from 'jsonwebtoken';

export const signup = async (req, res, next) => {
  const { username, email, password } = req.body;

  // Error for cannot add all thing required

  if (
    !username ||
    !email ||
    !password ||
    username === "" ||
    email === "" ||
    password === ""
  ) {
    next(errorHandler(400, "All field are requird"));
  }
  // Hashed password score from bcryptjs
  const hashedpassword = bcrypt.hashSync(password, 10);
  // New User Add
  const newUser = new User({
    username,
    email,
    password: hashedpassword,
  });
  // Error Message for duplicate Email and password
  try {
    await newUser.save();
    res.json("Signup Successfully");
  } catch (error) {
    next(error);
  }
};

export const signin = async (req, res, next) => {
    const { email, password } = req.body;
  
    if (!email || !password || email === '' || password === '') {
      next(errorHandler(400, 'All fields are required'));
    }
  
    try {
      const validUser = await User.findOne({ email });
      if (!validUser) {
        return next(errorHandler(404, 'User not found'));
      }
      const validPassword = bcryptjs.compareSync(password, validUser.password);
      if (!validPassword) {
        return next(errorHandler(400, 'Invalid password'));
      }
      const token = jwt.sign(
        { id: validUser._id, isAdmin: validUser.isAdmin },
        process.env.JWT_SECRET
      );
      const { password: pass, ...rest } = validUser._doc;
      res
        .status(200)
        .cookie('access_token', token, {
          httpOnly: true,
        })
        .json(rest);
    } catch (error) {
      next(error);
    }
  };
  