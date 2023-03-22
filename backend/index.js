import express from "express";
import dotenv from 'dotenv';
import connectDB from "./database/db.js";
import cors from 'cors'
const app = express();
app.use(express.json());
app.use(cors())

dotenv.config();
connectDB();

app.get("/", (req, res) => {
    res.json({ message: "¡Bienvenido al servidor!" });
  });


const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
});
