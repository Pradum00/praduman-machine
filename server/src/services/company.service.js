import companyModel from "../models/company.model.js"


export async function checkCompanyExist(_id){
    try {
        const company = await companyModel.findById(_id);
        return company;
    } catch (error) {
        return error;        
    }
}
export async function insertCompany(name,location){
    try {
       const company = await companyModel.create({name,location});
    //    console.log(company);
       return company;
    }catch (error) {
        return error;
    }
}

export async function getCompanyList(){
    try {
        const list =await companyModel.find({});
        return list;
    } catch (error) {
        return error;
        
    }
}