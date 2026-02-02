import express from "express"
import BookingController from "../controller/bookingController.js"
import { VerifyAcess } from "../midleware/verifyAcess.js"
import { ExistBookingService } from "../midleware/validation.js"

const router = express.Router()

router.post("/Create",VerifyAcess('client'),ExistBookingService,BookingController.booking)
router.get("/getAllBookings",BookingController.getAllBookings)

router.delete("/deleteAllBookings",BookingController.deleteAllBookings)

router.delete("/deleteOneBooking/:id",BookingController.deleteOneBooking)


router.get("getOneBooking/:id",BookingController.getOneBookig)
router.put("/changeStatus/:id",BookingController.changeStatus)

export default router