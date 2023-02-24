import Joi from "joi-browser";


export const customerSchema = (data)=> {
const schema = {
    customerName: Joi.string().min(1).max(20).required(),
    customerEmail: Joi.string().email().required(),
    customerContact: Joi.number().min(10).max(10).required(),
    customerAddress: Joi.string().required(),
    
  };
  Joi.validate(schema,data,{ abortEarly: false });
}


