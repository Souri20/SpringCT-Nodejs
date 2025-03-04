import express from "express"
import userController from "../controllers/user.controller.js";
import auth from "../middlewares/auth.js";
import { userSchema, userdeleteSchema } from "../middlewares/validationSchema.js/useraddSchema.js";
import validate from "../middlewares/validate.js";


const userMainRouter = express.Router();

// we add jwt authentication but its not implemented here but as for demo i have just return middleware
userMainRouter.post("/add-user-company",validate(userSchema),auth,userController.addUserToCompany);
userMainRouter.delete("/remove-company",validate(userdeleteSchema),auth,userController.deletCompany);
userMainRouter.get("/all-user",auth, userController.getalluser);


export default userMainRouter;