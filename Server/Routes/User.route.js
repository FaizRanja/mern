import  express   from "express";
import { User } from "../Controllars/user.control.js";

const router=express.Router()

router.get('/test', User)

export default router