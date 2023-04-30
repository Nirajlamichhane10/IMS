import ReactJoiValidations from 'react-joi-validation'
import Joi from 'joi-browser' // or whatever Joi library you are using

 
ReactJoiValidations.setJoi(Joi)

export const supplierSchema = (data)=> {
const Supschema = Joi.object({

    supplierName: Joi.string().min(1).max(20).required(),
    supplierEmail: Joi.string().email().required(),
    supplierContact: Joi.number().required(),
    supplierAddress: Joi.string().required(),
    
  });
  return Supschema.validate(data);

}


// customer Schema 

export const customerSchema = (data)=> {
  const Cusschema = Joi.object({
      customerName: Joi.string().min(1).max(20).required(),
      customerEmail: Joi.string().email().required(),
      // customerContact: Joi.number().length(10).required(),
      customerContact: Joi.number().required(),
      // customerContact: Joi.number().integer().min(10 ** 9).max(10 ** 10 - 1).required(),
      customerAddress: Joi.string().required(),
      
    });
    return Cusschema.validate(data);
    // Joi.validate(schema,data,{ abortEarly: false });
  }
  
 // Add item Validation 

 export const addItemSchema = (data)=> {
  const itemschema = Joi.object({
  itemName: Joi.string().min(1).max(100).required(),
  unitOfItem: Joi.string().min(1).max(20).required(),
  quantity: Joi.number().required(),
  minimum: Joi.number().required(),
  price: Joi.number().required(),
  });
  return itemschema.validate(data);
    
  }


  // user.js 

  // export const userSchema = (data)=> {
  //   const useschema = Joi.object({
      
  //     username: Joi.string().min(1).max(100).required(),
  //     password: Joi.string().min(1).max(100).required(),
  //   });
  //   return useschema.validate(data);


  // }
  
