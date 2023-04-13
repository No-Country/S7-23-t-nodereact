import express from "express";
import {getDonationByUser, postDonation, acceptWorkDonation} from "../controllers/donation.controller.js";

const router = express.Router();

router.post("/", postDonation);

router.get("/:id", getDonationByUser);

router.put("/:id", acceptWorkDonation);

export default router;
