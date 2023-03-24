import User from "../models/users.js";
import {
  findElement,
  findOneElement,
} from "../utils/users.utils.js";

const userProfile = async (req, res) => {
  const query = req.query;
  const profile = await findElement(query);
  try {
    if (profile) {
      res.json(profile);
    } else {
      res.status(404).json({ message: "Perfil no encontrado" });
    }
  } catch (error) {
    res.status(500).json({ message: "Error al buscar el perfil" });
  }
};

const newUser = async (req, res) => {
  const query = req.body;
  const profile = await findOneElement(query);
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
    res.status(400).json(error)
  }
};

const editUser = async (req, res) => {
  const { id } = req.params;

  try {
    const userUpdate = await User.findOneAndUpdate({ _id: id }, req.body, {
      new: true,
    });
    res.status(200).json(userUpdate);
  } catch (error) {
    console.log(error)
    res.status(400).json(error);
  }
};

export { userProfile, newUser, editUser };
