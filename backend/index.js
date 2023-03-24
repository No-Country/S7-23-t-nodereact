import express from "express";
import dotenv from "dotenv";
import connectDB from "./database/db.js";
import cors from "cors";

import users from './api/routes/users.routes.js'
const app = express();
app.use(express.json());
app.use(cors({
  origin: '*',
      credentials: true,
      allowedHeaders: [
        'Origin',
        'X-Requested-With',
        'Content-Type',
        'Accept',
        'authorization',
      ],
}));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*"); // update to match the domain you will make the request from
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  res.header("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, DELETE");
  next();
});

dotenv.config();
connectDB();

app.get("/", (req, res) => {
  res.json({ message: "¡Bienvenido al servidor!" });
});


app.use("/api/users", users);




const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
app.use((err, req, res, next) => {
  // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});
