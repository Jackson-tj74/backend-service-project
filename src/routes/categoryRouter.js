import express from "express"
import CategoryController from "../controller/categoryController.js"
import { CategoryExist } from "../midleware/validation.js"

const router = express.Router()
router.post("/create",CategoryExist,CategoryController.createCategory)

export default router