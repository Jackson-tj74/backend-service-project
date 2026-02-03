
import Joi from "joi"

export const signinValidation = Joi.object({

    email:Joi.string()
    .email()
    .required()
    .messages({
        'any.required':'Email is required',
        'string.base':'Email must be type string',
        'string.base':'Email must be valid email',
        'string.base':'Email must not be empty field'
    }),
    password:Joi.string()
        .min(8)
        .max(30)
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(^a-zA-Z0-9),{8,}{,30}$/)
        .messages({
           'any.required':'Password is required',
           'string.min':'Password must  have minimum of 8',
           'string.max':'Password must  have maximum of 30',
           'string.pattern.base':'Password must contain at least one uppercase,one lowercase,one number and one special character',
           'string.base':'Password must be valid password',
           'string.base':'Password must not be empty'
        }),
    role:Joi.string()
    
    .valid('client','provider','admin')
     .messages({
       'any.only':'Role must be one of this "client","provider","admin" '
    })
})
export const signupValidation =Joi.object({

names:Joi.string()
   .min(4)
   .max(10)
   .pattern(/^(?=.*[a-z])(?=.*[A-Z]),{4,}{,10}$/)
   .required()
   .messages({
       'any.required':'Name is required',
       'string.pattern.base':'Name must exist at least one uppercase and one lower',
       'string.min':'Name must not minimun  4',
       'string.max':'Name must have maximum of 10',
       'string.base':'Name must not be empty'
  }),


email:Joi.string()
    .email()
    .required()
    .messages({
        'any.required':'Email is required',
        'string.base':'Email must be type string',
        'string.base':'Email must be valid email',
        'string.base':'Email must not be empty field'
    }),
    password:Joi.string()
        .min(8)
        .max(30)
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(^a-zA-Z0-9),{8,}{,30}$/)
        .messages({
           'any.required':'Password is required',
           'string.min':'Password must  have minimum of 8',
           'string.max':'Password must  have maximum of 30',
           'string.pattern.base':'Password must contain at least one uppercase,one lowercase,one number and one special character',
           'string.base':'Password must be valid password',
           'string.base':'Password must not be empty'
        }),
    role:Joi.string()
    .min(4)
    .max(10)
    .valid('client','provider','admin')
    .pattern(/^(?=.*[a-z])(?=.*[A-Z])/)
     .messages({
       'string.pattern.base':'Role must contains at least one uppercase and one lower',
       'string.min':'Role must not minimun  4',
       'string.max':'Role must have maximum of 30',
       'any.only':'Role must be one of this "client","provider","admin" '
    })
})
export const createCategoryValidation = Joi.object({
    categoryName:Joi.string()
    .required()
    .valid(' "Plumbing","Application Service","Pharmacy","We Development"')
    .messages({
        'any.required':'categoryName is required',
        'any.only':'categoryName must be one of this "Plumbing","Application Service","Web Development","Pharmacy"',
        'string.base':'categoryName must not be empty'
    })
})