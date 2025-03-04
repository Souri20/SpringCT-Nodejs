import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    company_name : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true 
    },
    user_id : {
        type : mongoose.Schema.Types.ObjectId,
        required : false
    }

})

const Company = mongoose.model("Company",companySchema)

export default Company;