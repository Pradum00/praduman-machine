import { getCompanyList, insertCompany } from "../services/company.service.js";
import { success } from "../utills/responseWrapper.js";

export async function createCompanyController(req,res){
    try {
        const{name ,location} = req.body;
        if(!name || !location){
            return res.send(400,"all fields are required");
        }
        const company = await insertCompany(name,location);
        console.log(company);
        return res.send(success(201,'company added successfully'))
    } catch (err) {
        return res.send(500,err.message);        
    }
}

export async function getAllCompaniesController(req,res){
    try {
        const companylist = await getCompanyList();
        return res.send(success(200,{companylist}));
    } catch (error) {
        return error;
        
    }
}