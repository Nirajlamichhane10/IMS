import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SupplierTable from './addSupplierTable';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Alertbar from '../../Alertbar';


const Styles={
    root:{
      display :"flex",
  
    },
    addItem:{
        
        color :"red",  
        textAlign:"center",
         margin:"-250px 0px 50px 550px",
         width:"350px",
         display:"flex",
    },
    box:{
      margin:"400px 0px 50px 250px",
      
    },
    botton:{
        margin:"30px 0px 0px 0px",
    },
 
};
export default function AddSuppliers() {

  const[supplierName, setSupplierName]= React.useState("");
  const[supplierContact, setSupplierContact]= React.useState(0);
  const[supplierEmail, setSupplierEmail]= React.useState("");
  const[supplierAddress, setSupplierAddress]= React.useState("");
  const[supplier, setSupplier]= React.useState({});
  const[label, setLabel] = React.useState("");
  
  const[message, setMessage] = React.useState("");
  const[status, setStatus] = React.useState("");
  const[open, setOpen] = React.useState(false);



  const reset =()=>{
    
    setSupplierName("");
    setSupplierContact(0);
    setSupplierEmail("");
    setSupplierAddress("");

  }

  const handleChangeSupplierName =(event)=>{
    setSupplierName(event.target.value)
  };

  const handleChangeSupplierContact =(event)=>{
    setSupplierContact(event.target.value)
  };

  const handleChangeSupplierEmail =(event)=>{
    setSupplierEmail(event.target.value)
  };

  const handleChangeSupplierAddress =(event)=>{
    setSupplierAddress(event.target.value)
  };
  const handleChange = (event) => {
    setLabel(event.target.value);
  };

  
   
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    
  };


  const handleOnclick =async()=>{
    try{
      const response = await axios.post(" http://localhost:5000/addSupplier/supplier",{supplierName,supplierContact,supplierEmail,supplierAddress});
      console.log(response);
      setMessage("Supplier added successfully");
      setStatus("success");
      setOpen(true);
      reset();
     
    }
    
    catch(e){
      console.log(e);
      setMessage("Error Occurred ! Supplier can't be added ");
      setStatus("error");
      setOpen(true);
    }
   
  };

  return (
    <div>

    <Box style={Styles.box} 
      sx={{
        display: 'flex',
        flexDirection: 'column',
        '& .MuiTextField-root': { width: '25ch' },
      }}
    >
       <Typography  color="text.secondary" variant="h4" gutterBottom style={Styles.addItem}>
           SUPPLIER DETAILS
           </Typography>

      <TextField 
      onChange={handleChangeSupplierName}
      value={supplierName}
      label={"Supplier Name"}
       id="suppliername" 
       />
     
      <TextField
      onChange={handleChangeSupplierContact}
      value={supplierContact}
       label={"Supplier Contact"} id="suppliercontact" margin="dense" />
     
      <TextField
      onChange={handleChangeSupplierEmail}
      value={supplierEmail}
      label={"Supplier Email"} id="supplieremail" margin="normal" />

      <TextField 
      onChange={handleChangeSupplierAddress}
      value={supplierAddress}
      label={"Supplier Address"} id="supplieraddress" />
      <div style={Styles.button}>
      
        <Button 
        onClick={handleOnclick}
        variant="contained" size="large" style={Styles.botton}>
        
          ADD SUPPLIER
        </Button>
       
      </div>
    </Box>
    <div >
        <SupplierTable/>
      </div>
      <div>
        <p style={{color: "green",margin:"100px 10px 10px 500px",}}> &copy;{new Date().getFullYear()} Nirajlamichhane | All Copyright Reserved "grocery management system" </p>
      </div>
<Alertbar
message={message}
status={status}
open={open}
handleClose={handleClose}
/>

    </div>
  );
}