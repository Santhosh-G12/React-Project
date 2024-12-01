import express from "express";
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js";
import productRoutes from "./routes/products.routes.js";

dotenv.config()
const app = express()
app.use(express.json())
app.use("/products",productRoutes)

app.get("/",(req,res)=>{
    res.send("Welcome to server")
})
app.listen(5001,()=>{
    connectDB()
    console.log("server started hell0" )
})
