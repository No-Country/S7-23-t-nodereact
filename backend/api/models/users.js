import mongoose from "mongoose";


const userSchema = mongoose.Schema({
  name: {
    type: String,
    trim: true,
  },
  userName: {
    type: String,
    trim: true,
    unique: true,
  },
  email: {
    type: String,
    trim: true,
    unique: true,
  },
  celphone: {
    type: String,
    trim: true,
  },
  picture: {
    type: String,
    trim:true,
  },
  type: {
    type: String,
    required: true,
    default:"user",
    enum:["user","admin"]
  },
  status: {
    type: String,
    required: true,
    default:"active",
    enum:["active","suspended","banned"]
  },
});


const User = mongoose.model("User",userSchema)
export default User