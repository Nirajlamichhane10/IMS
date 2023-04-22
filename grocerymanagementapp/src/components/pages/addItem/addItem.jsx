import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
// import MatTable from './materialtable';
import axios from 'axios';
import Alertbar from '../../Alertbar';
import { addItemSchema } from '../../validationJoi/Validation';
import { grid } from '@mui/system';



 // adding css 
    const  Styles={
        root: {
            display: "flex",
       
        }, 
    addItem:{
        
        color :"red",  
        textAlign:"center",
         margin:"80px 0px 50px 200px",
         width:"220px",
         display:"flex",
    },
     item:{
      margin:"80px 0px 50px 20px",
      width:"220px",
      alignItems: "center",
      display:"flex",

     },
     itembox:{
      margin:"-90px 0px 50px 200px",
      alignItems: "center",
      display:"flex",
      textAlign:"center",

     },

     quantity:{
      margin:"40px 0px 50px 20px",
      width:"220px",
      alignItems: "center",
      display:"flex",

     },
     quantitybox:{
      margin:"-100px 0px 50px 200px",
      alignItems: "center",
      display:"flex",
      textAlign:"center",

     },
     button:{
      margin:"30px 0px 50px 250px",
      width:"220px",
      alignItems: "center",
      display:"flex",

     },
     addItemContainer:{
      margin:"90px 0px 50px -50em",
      // boxShadow: "5px 5px 5px 2px lightblue",
      width:"750px",
   
     },
 


    };


export default function AddItem() {

const [itemName, setItemName]= React.useState("");
const[unitOfItem, setUnitOfItem]=React.useState("");
const[quantity , setQuantity]=React.useState(0);
const[minimum, setMinimum]=React.useState(0);
const[item, setItem]=React.useState({});

const[message, setMessage]= React.useState("");
const[status, setStatus]= React.useState("");
const[open, setOpen]= React.useState(false);



const reset =()=>{
    
  setItemName("");
  setUnitOfItem("");
  setQuantity("");
  setMinimum("");

}

const handleChangeItemName =(event)=>{
  setItemName(event.target.value);
};
const handleChangeUnitOfItem =(event)=>{
  setUnitOfItem(event.target.value);
};
const handleChangeQuantity =(event)=>{
  setQuantity(event.target.value);
};
const handleChangeMinimum =(event)=>{
  setMinimum(event.target.value);
};


 // for Alertbar of Snackbar
   
const handleClose = (event, reason) => {
  if (reason === 'clickaway') {
    return;
  }

  setOpen(false);
  
};

// Validations in Add Items


const handleOnclick=()=>
{
  // setItem({itemName,unitOfItem,quantity,minimum});
  try{
    
    const addItemData ={itemName,unitOfItem,quantity,minimum};
    const result=addItemSchema(addItemData);
    if (result.error){
      setMessage("Validation Error");
      console.log("with error");
      console.log(result);
      setStatus("error");
      setOpen(true);

    }
    if (!result.error){

    const response = axios.post("http://localhost:5000/addItem/item",{itemName,unitOfItem,quantity,minimum});
    console.log("without error ");
    console.log(result);
    setMessage("Items added successfully");
    setStatus("success");
    setOpen(true);
    reset();
  }
}



  catch(e){
    console.log(e);
    setMessage("Error Occurred ! Supplier can't be added ");
    setStatus("error");
    setOpen(true);
  }
}
    return (
   <div className='addItemContainer' style={Styles.addItemContainer}>
    <div>

          <Box sx={{ width: '100%', maxWidth: 500, }}>
            
           <Typography  color="text.secondary" variant="h4" gutterBottom style={Styles.addItem}
        
           >
           Add Item:
           </Typography>
           
          <Typography variant="h5" gutterBottom style={Styles.item}
          >
             Item Name:
          </Typography>

       {/* // box for item name:    */}
           <Box style={Styles.itembox}
      sx={{
        width: 400,
        maxWidth: '60%',
      }}
    >
    
      <TextField  onChange={handleChangeItemName}
      value={itemName}
      fullWidth label="Item Name" id="Item Name" />
    </Box>

      
          <Typography variant="h5" gutterBottom style={Styles.quantity}>
            Unit of Item:
          </Typography>
          
          <Box style={Styles.quantitybox}
      sx={{
        width: 400,
        maxWidth: '60%',
      }}
    >
    
      <TextField onChange={handleChangeUnitOfItem}
      value={unitOfItem}
      fullWidth label="Unit of Item" id="unit" />
    </Box> 

    <Typography variant="h5" gutterBottom style={Styles.quantity}>
            Quantity:
          </Typography>
          
          <Box style={Styles.quantitybox}
      sx={{
        width: 400,
        maxWidth: '60%',
      }}
    >
    
    <TextField
    onChange={handleChangeQuantity}
    value={quantity}
          fullWidth label="In Stock" id="quantity" 
          type="number"
          defaultValue=""
          InputLabelProps={{
            shrink: true,
          }}
        />

          
    </Box> 
    <div>

    <Typography variant="h5" gutterBottom style={Styles.quantity}>
              Minimum:
          </Typography>
          
          <Box style={Styles.quantitybox}
      sx={{
        width: 400,
        maxWidth: '60%',
      }}
    >
    
      <TextField onChange={handleChangeMinimum}
      value={minimum}
      fullWidth label="Minimum" id="minimum" />
    </Box> 
    
    </div>


    <div style={Styles.button}>
        <Button variant="contained" size="large"
        onClick={handleOnclick}>

          ADD ITEM
        </Button>
      </div>
     
        </Box>
      
        {/* <div>
      <MatTable/>
      </div> */}
      {/* <div>
        <p style={{color: "green",margin:"100px 10px 10px 500px",}}> &copy;{new Date().getFullYear()} Nirajlamichhane | All Copyright Reserved "grocery management system" </p>
      </div> */}

      <Alertbar
      message={message}
      status={status}
      open={open}
      handleClose={handleClose}
      />
      </div>
      </div>  

      
      );
  
     
   
    }

  

        
