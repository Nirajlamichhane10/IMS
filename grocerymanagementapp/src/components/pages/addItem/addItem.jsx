import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MatTable from './materialtable';
import axios from 'axios';



 // adding css 
    const  Styles={
        root: {
            display: "flex",
        }, 
    addItem:{
        
        color :"red",  
        textAlign:"center",
         margin:"70px 0px 50px 700px",
         width:"220px",
         display:"flex",
    },
     item:{
      margin:"80px 0px 50px 500px",
      width:"220px",
      alignItems: "center",
      display:"flex",

     },
     itembox:{
      margin:"-90px 0px 50px 650px",
      alignItems: "center",
      display:"flex",
      textAlign:"center",

     },

     quantity:{
      margin:"40px 0px 50px 500px",
      width:"220px",
      alignItems: "center",
      display:"flex",

     },
     quantitybox:{
      margin:"-100px 0px 50px 650px",
      alignItems: "center",
      display:"flex",
      textAlign:"center",

     },
     button:{
      margin:"30px 0px 50px 500px",
      width:"220px",
      alignItems: "center",
      display:"flex",

     },
 


    };


export default function AddItem() {

const [itemName, setItemName]= React.useState("");
const[unitOfItem, setUnitOfItem]=React.useState("");
const[quantity , setQuantity]=React.useState(0);
const[minimum, setMinimum]=React.useState(0);
const[item, setItem]=React.useState({});

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



const handleOnclick=()=>
{
  // setItem({itemName,unitOfItem,quantity,minimum});
  try{
    const response = axios.post(" http://localhost:5000/addItem/add",{itemName,unitOfItem,quantity,minimum});
    console.log(response);
    reset();
  }
  catch(e){
    console.log(e);
  }
}
    return (
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


    <div style={Styles.button}>
        <Button variant="contained" size="large"
        onClick={handleOnclick}>
          ADD ITEM
        </Button>
      </div>
         
        </Box>
        <div>
      <MatTable/>
      </div>
      <div>
        <p style={{color: "green",margin:"100px 10px 10px 500px",}}> &copy;{new Date().getFullYear()} Nirajlamichhane | All Copyright Reserved "grocery management system" </p>
      </div>
      </div>

      
      );
  
     
   
    }

  

        