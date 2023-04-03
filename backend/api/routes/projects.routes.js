import express from "express";
import {getProjects, postProject, getProjectById, updateProject} from "../controllers/project.controller.js";

const router = express.Router();

router.post("/", postProject);

router.get("/", getProjects);
router.get("/:id", getProjectById)

router.put("/", updateProject)

export default router;
