const express=require("express");
const colors=require("colors");
const cors=require("cors");
const cookieParser=require("cookie-parser");
const dotenv=require("dotenv");
const connectDB=require("./config/db");
const authRoutes=require("./routes/authRoutes");

dotenv.config();
connectDB();
const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cookieParser());
app.use(cors({
    origin:"http://localhost:5173",
    credentials:true
}))

app.use("/auth",authRoutes);


const port=process.env.port||8080

app.listen(port,()=>{
    console.log(`server is running on ${port}`.bgGreen);
})
