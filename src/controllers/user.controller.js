import catchAsync from "../utils/catchasync.js"
import userServices from "../services/user.services.js"
import STATUS_CODE from "../common/Constant.js";

const addUserToCompany = catchAsync(async (req, res, next) =>{

    const result = await userServices.addUserToCompany(req, next);

    if(result){
        res.status(STATUS_CODE.success).json({
            success : true,
            msg : "user registered with company",
            data : result
        })
    }


})
const deletCompany = catchAsync(async (req, res, next) =>{

    const result = await userServices.deleteCompany(req, next);

    if(result){
        res.status(STATUS_CODE.success).json({
            success : true,
            msg : "Company is deleted",
            data : result
        })
    }
})
const getalluser = catchAsync(async (req, res, next) =>{

    const result = await userServices.getalluser(req, next);

    if(result){
        res.status(STATUS_CODE.success).json({
            success : true,
            msg : "User information",
            data : result
        })
    }
})



const userController ={
    addUserToCompany,
    deletCompany,
    getalluser
}

export default userController;