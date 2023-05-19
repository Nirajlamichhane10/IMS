import ReactJoiValidations from 'react-joi-validation'
import Joi from 'joi-browser' // or whatever Joi library you are using

 
ReactJoiValidations.setJoi(Joi)

export const supplierSchema = (data)=> {
const Supschema = Joi.object({

    supplierName: Joi.string().min(1).max(20).required(),
    supplierEmail: Joi.string().email().required(),
    supplierContact: Joi.string().regex(/^[0-9]{10}$/).length(10).required(),
    supplierAddress: Joi.string().required(),
    
  });
  return Supschema.validate(data);

}


// customer Schema 

export const customerSchema = (data)=> {
  const Cusschema = Joi.object({
      customerName: Joi.string().min(1).max(20).required(),
      customerEmail: Joi.string().email().required(),
      customerContact: Joi.string().regex(/^[0-9]{10}$/).length(10).required(),
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


// for purchase item validation 

export const purchaseItemSchema = (data) => {
  const purchaseitemschema = Joi.object({
    supplierName: Joi.string().required(),
    payment:  Joi.string().required(),
    items: Joi.array().min(1),
  
  });
  return purchaseitemschema.validate(data);
};


// for sell item validation 

export const sellItemSchema = (data) => {
  const sellitemschema = Joi.object({
    customerName: Joi.string().required(),
    payment:  Joi.string().required(),
    items: Joi.array().min(1),
  
  });
  return sellitemschema.validate(data);
};
