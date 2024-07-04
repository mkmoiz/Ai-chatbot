import { summaryController } from "../controllers/openaiController.js";
import express from "express"

const router=express.Router()

 //routes

router.post("/summary",summaryController)
// router.post("/paragraph",paragraphController)


export default router;