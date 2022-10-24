import express from "express";
const router = express.Router();

import { signin, signup, getUsers } from "../controllers/user.js";

router.post("/signin", signin);
router.post("/signup", signup);
router.get("/", getUsers);

export default router;