import Company from "../models/company.js";
import User from "../models/user.js";
import AppError from "../utils/error.js";
import STATUS_CODE from "../common/Constant.js";


const addUserToCompany = async (req,next) =>{

    const {user_id ,company_name,city} = req.body;
    try{
        const company = await Company.find({company_name : company_name});
        if(!company || company.length == 0){
            throw new AppError(STATUS_CODE.client_error, "Company  is not present")
        }

        let checkCompany =  company.filter((item) => item.user_id == user_id)

        if(checkCompany.length > 0 ){
            throw new AppError(STATUS_CODE.client_error, "User is present Already in this company")
        }

        let newUserToCompany = new Company({company_name, city, user_id : user_id});

        let res = await newUserToCompany.save()

        return res

    }catch(err){
        next(err)
    }

}
const deleteCompany = async (req,next) =>{

    const {company_name} = req.body;
    try{
        const company = await Company.find({company_name : company_name});
        if(!company || company.length == 0){
            throw new AppError(STATUS_CODE.client_error, "Company  is not present")
        }

        let res = Company.deleteMany({company_name : company_name})
        return res

    }catch(err){
        next(err)
    }

}
const getalluser = async (req,next) =>{

    const {company_name} = req.query;
    try {
        const company = await Company.find({ company_name });
    
        if (!company || company.length === 0) {
            throw new AppError(STATUS_CODE.client_error, "Company is not present");
        }
    
        let allUserData = await Promise.all(
            company.map(async (item) => {
                if (item.user_id) {
                    return await User.find({ _id: item.user_id });
                }
            })
        );
    
        return allUserData;
    } catch (err) {
        next(err);
    }

}



const userServices ={
    addUserToCompany,
    deleteCompany,
    getalluser
}

export default userServices;