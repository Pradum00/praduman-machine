import mongoose from 'mongoose';

const studentSchema = mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    batch:{
        type:String,
        required:true,
    },
    college:{
        type:String,
        required:true,
    },
    placementStatus:{
        type:Boolean,
        default:false,
    },
    dsaScore:{
        type:Number,
        min:0,
        max:100,
        required:true
    },
    webScore:{
        type:Number,
        min:0,
        max:100,
        required:true,
    },
    reactScore:{
        type:Number,
        min:0,
        max:100,
        required:true,
    },
})

const studentModel = mongoose.model("student",studentSchema);
export default studentModel;


