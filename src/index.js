// require('dotenv').config({path: './env'})
import dotenv from "dotenv" //for better code consistency

import mongoose from "mongoose";
import {DB_NAME} from './constants';
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})

//2nd approach====>

connectDB()











// import express from 'express'

// const app = express ()

// ( async () => {
//     try {
//         await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
//         app.on("error", (error) => {
//             console.log("ERROR: ", error);
//             throw error
//         })


//         app.listen(process.env.PORT,() => {
//             console.log(`App is listening on port ${process.env.PORT}`)
//         })


//     } catch (error) {
//         console.error("ERROR:", error)
//     }
// })() 
//iife  function writing approach
