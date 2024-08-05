import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const dbConnect = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("---CONEXION EXITOSA----");
  } catch (error) {
    console.log("---CONEXION FALLIDA----", error);
    throw error;
  }
};

export { dbConnect };
