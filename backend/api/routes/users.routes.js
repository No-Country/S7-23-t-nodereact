import express from "express";
import { userProfile, newUser, editUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/new", newUser);
router.get("/profile", userProfile);
router.put("/edit/:id", editUser);

export default router;
