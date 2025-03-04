import express from "express"
import dotenv from "dotenv"
import userRouter from "./routes/user.route.js"
import connectDB from "./dbconfig/db.js"
import errorHandler from "./middlewares/errorHandler.js"
import userMainRouter from "./routes/user.main.routes.js"
import helmet from "helmet"
dotenv.config()



const port = process.env.PORT

const app = express();
connectDB();

app.use(express.json());
app.use(helmet());

app.use("/api",userRouter);
app.use("/user",userMainRouter)

app.use(errorHandler)
app.listen(port, ()=>{
    console.log(`app runing on ${port}`)
})

