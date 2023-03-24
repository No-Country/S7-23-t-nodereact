import User from "../models/users.js";



export const findOneByElement = async (name) => {
    return User.findOne({name});
};