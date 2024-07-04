import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import morgan from "morgan"
import dotenv from "dotenv"
import colors from "colors"
import connectDB from "./configuration/db.js"
import { errorHandler } from "./middlewares/errorMiddleware.js"

//routes path
import authRoutes from "./routes/authRoute.js"
import aiRoutes from "./routes/openaiRoutes.js"


dotenv.config()

connectDB()

const app=express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({extended:false}))
app.use(morgan('dev'))
app.use(errorHandler)

const port=process.env.PORT || 8080
//routes
app.use("/api/v1/auth",authRoutes)
app.use("/api/v1/openai",aiRoutes)

app.listen(port,()=>{
    console.log(`server is running in  ${process.env.MODE} and started running on ${port}`.bgYellow.black)
})