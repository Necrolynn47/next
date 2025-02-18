const mongoose = require('mongoose')
const Scehma = mongoose.Schema
const emailValidator = require('email-validator')


const UserSchema = new Scehma({
    name : {
        firstName : {
            type : String,
            required : true
        },
        lastName : {
            type : String,
            required : true
        }
    },

    userType : {
        type : String,
        required : true,
        enum : ['admin', 'recruiter', 'vendor', 'employee', 'interviewer'] // priveledges - admin, recruiter, vendor, employee, interviewer
    },

    userRole : {
        type : String,
        required : true,
        enum : ['Super-Admin','special','HR', 'Interviewer', 'Vendor', 'BCGVerification', 'Campus', 'Employee', ]
    },// in case special permission, name = special, is to be reffered for access

    hierarchy : {
        type: {
            type :String,
            required : true
        },
        name : {
            type : String,
            required : true
        }
    },

    designation : {
        type : String,
        required : true 
    },

    jobType : {
        type : String,
        required : true,
        enum : ['Internship','Full-Time','Temporary']        
    },// currently internship, full time , temp

    diversity : {
        type : String,
        required : true, // challenged
        enum : ['Physically Challenged', 'Female', 'General']
    },
    
    email : {
        type : String,
        required : true,
        unique : true,
        
        validate(value){
            if(!emailValidator.validate(value)){
                throw new Error("the email is invalid")
            }
        }
        // can be changed later on , used as username

    },

    password : {
        type : String,
        required : true // encryption bcrypt.js, SHA256
    },

    mailPassword : {
        type  : String,
        required : true
    },

    locationID : {
        type : String,
        required : false
    }
})

const UserModel = mongoose.model("User", UserSchema)
module.exports = UserModel


//username password jwt passport