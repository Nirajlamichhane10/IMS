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
      // customerContact: Joi.string().pattern(/^\d{10}$/).required(),
      customerContact: Joi.number().required(),
      customerAddress: Joi.string().required(),
      
    });
    return Cusschema.validate(data);
    // Joi.validate(schema,data,{ abortEarly: false });
  }
  
 // Add item Validation 

 export const addItemSchema = (data)=> {
  const itemchema = Joi.object({
  itemName: Joi.string().min(1).max(20).required(),
  unitOfItem: Joi.string().min(1).max(10).required(),
  quantity: Joi.number().required(),
  minimum: Joi.number().required(),
  });
  return itemchema.validate(data);
    
  }


  // Purchased Item Validations 
  
