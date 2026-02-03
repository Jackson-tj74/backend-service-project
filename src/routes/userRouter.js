import express from "express"
import { EmailExist } from "../midleware/validation.js";
import Controller from "../controller/userController.js";
import { VerifyAcess } from "../midleware/verifyAcess.js";
import { routeBodyValidation } from "../midleware/requestValidation.js";
import { signupValidation,signinValidation } from "../validation/validation.js";

const router = express.Router();
router.post("/create",routeBodyValidation(signupValidation),EmailExist,Controller.signup)
router.post("/login",routeBodyValidation(signinValidation),Controller.login)
router.get("/users",Controller.getAllUsers)


router.delete("/deleteUser/:id",Controller.deleteOneUser)
router.delete("/deleteUsers",Controller.deleteAllUsers)
router.patch("/updateUser/:id" ,Controller.updateUser)

export default router;
