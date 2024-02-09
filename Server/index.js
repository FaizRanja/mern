import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'
import useRoute from '../Server/Routes/User.route.js'
import authRoute from '../Server/Routes/auth.js'


dotenv.config()

mongoose.connect(
process.env.MongoDb

)
.then(()=>{
    console.log('MongoDB is Connect on the cloud')
}).catch((err)=>{
console.log(err)
})
const app =express()

app.use(express.json())
app.listen(process.env.PORT,()=>{
console.log(`server is running on port :${process.env.PORT}`)
})

app.use('/api/user', useRoute)
app.use('/api/auth', authRoute)


app.use((err,req,res,next)=>{
const statuscode=err.statuscode || '500'
const message=err.message || 'Internal server error'
res.status(statuscode).json({
    success:false,
    statuscode,
    message,
})
})



