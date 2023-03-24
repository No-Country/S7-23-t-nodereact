import express from "express";
import {getProjects, postProject} from "../controllers/project.controller.js";

const router = express.Router();

router.post("/", postProject);

router.get("/", getProjects);

export default router;
