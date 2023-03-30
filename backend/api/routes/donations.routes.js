import express from "express";
import {getDonation, postDonation} from "../controllers/project.controller.js";

const router = express.Router();

router.post("/", postDonation);

router.get("/", getDonation);

export default router;
