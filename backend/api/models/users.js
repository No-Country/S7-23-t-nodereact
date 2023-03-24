import mongoose from "mongoose";
// import generateJWT from "../helpers/generateJWT.js";


const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  lastName: {
    type: String,
    trim: true,
  },
  userName: {
    type: String,
    trim: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  email: {
    type: String,
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
  status: {
    type: String,
    required: true,
    enum:["active","suspended","banned"]
  },
});


const User = mongoose.model("User",userSchema)
export default User