import mongoose from "mongoose";

const employeeSchema = new mongoose.Schema({
    firstname:{
        type:String,
        required:true,
    },
    lastname:{
        type:String,
        required:true,
    },
 
    email:{
        type:String,
        required:true,
        unique:true,
        lowercase:true,
    },
    password:{
        type:String,
        required:true, 
    },
});

const employeeModel = mongoose.model('employee',employeeSchema);
export default employeeModel;