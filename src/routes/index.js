import express from "express";
import userRouter from "./userRouter.js"
import categoryRouter from "./categoryRouter.js"

const router = express.Router()
router.use("/user",userRouter)
router.use("/category",categoryRouter)

export default router