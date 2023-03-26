import express from "express";
import { userProfile, newUser, editUser,deleteUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/new", newUser);
router.get("/profile", userProfile);
router.put("/edit/:id", editUser);
router.delete("/:id", deleteUser);

export default router;
