import User from "../models/users.js";
import { findOneByElement } from "../utils/users.utils.js";

const userProfile = async (req, res) => {
  const name = req.query.name;
  console.log("soye id" +name);
  const profile = await findOneByElement(name);
  console.log(profile)
  try {
    if (profile) {
      res.json(profile);
    }
  } catch (error) {
    res.json(error);
  }
};
const newUser = async (req, res) => {
  const { email } = req.body;
  const profile = await findOneByElement(email);
  try {
    if (profile) {
      return res.status(400).json({
        message: "El cliente ya existe",
      });
    }
    const user = new User(req.body);
    const savedUser = await user.save();
    res.json(savedUser);
  } catch (error) {
    console.log(error);
  }
};
// const editUser = async (req,res)=>{
// const {email}= req.body
// const profile = await findOneByElement(email);
// if(!profile){
//   res.status(400).json({
//     message:"El perfil no fue encontrado"
//   })
// }
// profile.name = req.body.name || profile.name;
// profile.lastName = req.body.lastName || profile.lastName;
// profile.email = req.body.email || profile.email;

//   try {
//     const turnoEditado = turno.save();
//     res.json(turnoEditado);
//   } catch (error) {
//     console.log(error);
//   }


// }

export { userProfile, newUser };
