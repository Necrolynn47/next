const mongoose = require("mongoose")
const Schema = mongoose.Schema
// contains the locations of all the branches of the office or the location of employees, used to run searches in the dropdowns
const LocationSchema = new Schema({
    Branch : {
        type : String,
        required : true
    },
    Head: {
        type: String,
        required: true,
        enum: ['Super-Admin','special','HR', 'Interviewer', 'Vendor', 'BCGVerification', 'Campus', 'Employee']
    },
    BranchID: {
        type: String,
        required: true
    }
})

const LocationModel = mongoose.model("Location", LocationSchema);
module.exports = LocationModel;