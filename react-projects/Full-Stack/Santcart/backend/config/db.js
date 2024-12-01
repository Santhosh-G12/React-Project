import mongoose from "mongoose"

export const connectDB = async()=>{
    try{
        const con = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoConnected ${con.connection.host}`)
    }catch(error){
        console.error(error.message)
        process.exit(1)
    }
}
