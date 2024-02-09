import  express  from "express";
import { signup } from "../Controllars/auth.control.js";

const  router=express.Router()

router.post('/signup',signup)


export default router