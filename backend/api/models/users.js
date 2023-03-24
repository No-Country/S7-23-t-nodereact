import mongoose from "mongoose";
import generateJWT from "../helpers/generateJWT";


const userSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  },
  lastName: {
    type: String,
   
    trim: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    trim: true,
  },
  celphone: {
    type: String,
    trim: true,
  },
  token: {
    type: String,
    // default: generateJWT(),
  },
  type: {
    type: String,
    required: true,
    enum:["user","admin"]
  },
});


const User = mongoose.model("User",userSchema)
export default User