import express from 'express';
import { create, get } from "../controller/controllerTest.js";
const router = express.Router();

router.post("/create", create);
router.get("/", get)

export default router;