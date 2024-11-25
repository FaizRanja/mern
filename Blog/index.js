import express from 'express'
import mongoose from 'mongoose'
import dotenv from 'dotenv'


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
app.listen(()=>{
console.log(`server is running on port:${process.env.PORT}`)
})


