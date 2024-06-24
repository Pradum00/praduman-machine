import studentModel from "../models/student.model.js";


export async function checkStudentExist(_id){
    try {
        const student = await studentModel.findById(_id);
        return student;
    } catch (error) {
        
    }
}

export async function insertStudent(name,batch,college,placementStatus,dsaScore,webScore,reactScore){
    try {
       const student = await studentModel.create({name,batch,college,placementStatus,dsaScore,webScore,reactScore});
       return student;
    } catch (error) {
        return error;
        
    }
}

export async function getStudentList(){
    try {
        const students = await studentModel.find({});
        return students;
    } catch (error) {
        return error;
    }
}