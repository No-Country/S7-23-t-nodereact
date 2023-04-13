import express from "express";
import {getProjects, postProject, getProjectById, updateProject, PayCard} from "../controllers/project.controller.js";

const router = express.Router();

router.post("/", postProject);

router.get("/", getProjects);
router.get("/:id", getProjectById)
router.get("/pay/:id", PayCard)

router.put("/", updateProject)

export default router;
