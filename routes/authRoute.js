import express from "express"
import { loginController, logoutController, registerController } from "../controllers/authController.js"

const router=express.Router()

//register
router.post("/register",registerController)

//login
router.post("/login",loginController)


//logout
router.post("/logout",logoutController)

export default router;