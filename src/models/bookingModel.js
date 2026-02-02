import mongoose from "mongoose"

const bookingSchema = new mongoose.Schema({
    clientId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    date:{
        type:Date,
        required:[true,"please enter date you want to get your service"]
    },
    serviceId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Service"
    },
    time:{
        type:String,
        required:[true,"Please enter time you want to get your service"]
    },
    statuses:{
        type:String,
        enum:['pending','accepted','compeled','canceled'],
        default:'pending',
    },
    notes:{
        type:String,
        required:false
    },
    createAt:{
        type:Date,
        default:new Date(Date.now())
    }
})
bookingSchema.pre(/^find/, function(){
    this.populate([
        {path:"client",select:"names email"},
        {path:"serviceId",select:"title"},
    ])
})
const BookingService = mongoose.model("BookingService",bookingSchema)
export default BookingService