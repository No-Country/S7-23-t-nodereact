import express from "express";
import {getDonation, postDonation, acceptWorkDonation} from "../controllers/donation.controller.js";

const router = express.Router();

router.post("/", postDonation);

router.get("/", getDonation);

router.put("/", acceptWorkDonation);

export default router;
