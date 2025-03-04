import Joi from "joi"

export const userSchema = Joi.object({
    user_id : Joi.string().required(),
    company_name : Joi.string().required(),
    city : Joi.string().required()
})

export const userdeleteSchema = Joi.object({
    company_name : Joi.string().required(),
}) 