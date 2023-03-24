import express from "express";
import { userProfile, newUser } from "../controllers/user.controller.js";

const router = express.Router();

router.post("/new", newUser);

router.get("/profile", userProfile);

export default router;
