import express from "express"
import { EmailExist } from "../midleware/validation.js";
import Controller from "../controller/userController.js";

import { routeBodyValidation } from "../midleware/requestValidation.js";
import { signupValidation,signinValidation } from "../validation/validation.js";
import { VerifyAcess } from "../midleware/verifyAcess.js";

const router = express.Router();
router.post("/create",routeBodyValidation(signupValidation),EmailExist,Controller.signUp)
router.post("/login",routeBodyValidation(signinValidation),Controller.login)
router.get("/users",VerifyAcess('Admin'),Controller.findAllUsers)


router.delete("/deleteUser/:id",VerifyAcess('Admin'),Controller.deleteOneUser)
router.delete("/deleteUsers",VerifyAcess('Admin'),Controller.deleteAllUsers)
router.patch("/updateUser/:id" ,VerifyAcess('Admin'),Controller.updateUser)

export default router;
