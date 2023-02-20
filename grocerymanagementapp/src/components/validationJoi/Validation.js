import Joi from "joi-browser";


export const supplierSchema = (data)=> {
const schema = {
    supplierName: Joi.string().min(1).max(20).required(),
    supplierEmail: Joi.string().email().required(),
    supplierContact: Joi.number().min(10).max(10).required(),
    supplierAddress: Joi.string().required(),
    
  };
  Joi.validate(schema,data,{ abortEarly: false });
}


