import mongoose from "mongoose";
import colors from "colors"
import dotenv from "dotenv"

dotenv.config()

const connectDB=async()=>{
    try{
      await mongoose.connect(process.env.MONGOURL)
      console.log(`successfully connected to the ${mongoose.connection.host}`.bgGreen.white)
    }catch(err){
        console.log(`Unable to connect to database :${err}`.bgRed.white)
    }
}

export default connectDB;