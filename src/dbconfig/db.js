import mongoose from 'mongoose';
import dotenv from "dotenv"
dotenv.config()

const mongodb = process.env.DB
  const connectDB = async () => {
    try {
      await mongoose.connect(mongodb);
  
      console.log("✅ MongoDB connected successfully!");
    } catch (error) {
      console.error("❌ MongoDB connection failed:", error);
      process.exit(1);
    }
  };
  
  export default connectDB;