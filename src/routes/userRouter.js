import express from "express"
import { EmailExist } from "../midleware/validation.js";
import Controller from "../controller/userController.js";
import { VerifyAcess } from "../midleware/verifyAcess.js";

const router = express.Router();
router.post("/user",EmailExist,Controller.signup)
router.post("/user/login",Controller.login)
router.get("/users",VerifyAcess('admin'),Controller.getAllUsers)


router.delete("/deleteUser/:id",Controller.deleteOneUser)
router.delete("/deleteUsers",Controller.deleteAllUsers)
router.patch("/updateUser/:id" ,Controller.updateUser)

export default router;
