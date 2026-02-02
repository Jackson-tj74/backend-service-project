import express from 'express'
import ServiceController from '../controller/serviceController.js'
import { VerifyAcess } from '../midleware/verifyAcess.js'
import { ServiceExist } from '../midleware/validation.js'

const router = express.Router()
router.post("/create",VerifyAcess('provider'),ServiceExist,ServiceController.createService)
router.get("/getAllServices",VerifyAcess('client'),ServiceController.getAllServices)
router.delete("/deleteAllServices",ServiceController.deleteAllServices)
router.delete("/deleteOneService/:id",ServiceController.deleteOneService)
router.patch("/updateService/:id",ServiceController.UpdateServices)
router.get("/getOneService/:id",ServiceController.getOneService)

export default router
