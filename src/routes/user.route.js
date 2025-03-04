import express from "express"
import User from "../models/user.js";
import Company from "../models/company.js";

const userRouter = express.Router();


// this route file is created to add adduser and company without using database direct all other main routes are written in another file user.main.routes.js

userRouter.post('/adduser', async(req, res, next)=>{

    const {name, email, phone} = req.body;

    try{
        const newuser = new User({name, email, phone});
        const result = await newuser.save()
        if(result){
            res.status(200).json({
                success : true,
                msg : "user added successfully",
                data : result

            })
        }

    }catch(err){
        res.status(400).json({
            success : false,
            msg : "user has not added",
        
        })
    }

});


userRouter.post('/addcompany', async(req, res, next)=>{

    const {company_name, city} = req.body;

    try{
        const newCompany = new Company({company_name, city});
        const result = await newCompany.save()
        if(result){
            res.status(200).json({
                success : true,
                msg : "Company added successfully",
                data : result

            })
        }

    }catch(err){
        res.status(400).json({
            success : false,
            msg : "Company has not added",
        
        })
    }

});


export default userRouter;