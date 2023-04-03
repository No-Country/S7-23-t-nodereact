import { required, string } from "joi";
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
    trim: true,
  },
  type: {
    type: String,
    required: true,
    default: "user",
    enum: ["user", "admin"],
  },
  information: {
    linkedin: { type: String ,trim: true},
    github: { type: String ,trim: true},
    tecnologias: { type: String ,trim: true},
    portfolio: { type: String ,trim: true},
  },
  fullAcount:{
    type:String,
    required:true,
    default:false,
    enum:[true,false]
  },
  role: {
    type: String,
    enum: ["frontend", "backend", "fullstack", "UX", "UI", "dataScientist"],
  },
  acountStatus: {
    type: String,
    required: true,
    default: "active",
    enum: ["active", "suspended", "banned"],
  },
});
const User = mongoose.model("User", userSchema);
export default User;
