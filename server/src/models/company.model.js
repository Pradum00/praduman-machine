import mongoose from "mongoose";

const companySchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    location:{
        type:String,
        required:true,
    } 

});

const companyModel = mongoose.model('company',companySchema);
export default companyModel;