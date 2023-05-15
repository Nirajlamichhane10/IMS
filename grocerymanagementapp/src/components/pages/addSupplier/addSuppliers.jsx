import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SupplierTable from './addSupplierTable';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Alertbar from '../../Alertbar';
import {supplierSchema} from '../../validationJoi/Validation';
import { useEffect } from 'react';




const Styles={
    root:{
      display :"flex",
  
    },
    addItem:{
        
        color :"red",  
        textAlign:"center",
         margin:"-290px 0px 50px 450px",
         width:"350px",
         display:"flex",
    },
    box:{
      margin:"400px 0px 50px -550px",
      
    },
    botton:{
        margin:"30px 0px 0px -900px",
    },
 
};
export default function AddSuppliers() {

  const[supplierName, setSupplierName]= React.useState("");
  const[supplierContact, setSupplierContact]= React.useState(0);
  const[supplierEmail, setSupplierEmail]= React.useState("");
  const[supplierAddress, setSupplierAddress]= React.useState("");
  const[supplier, setSupplier]= React.useState({});
  const[label, setLabel] = React.useState("");
  const[reloadData, setReloadData] = React.useState([]);
  
  const[message, setMessage] = React.useState("");
  const[status, setStatus] = React.useState("");
  const[open, setOpen] = React.useState(false);



// for text clear 
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

  const [data, setData] = React.useState([
      
  ]);

  
  //handle reload 
  useEffect(() => {
    handleReload();
  },[]);


  // reloading and sorting
  const handleReload = async () => {
    try {
      const SupplierData = await axios.get("http://localhost:5000/addSupplier/getSupplier");
      const sortedData = SupplierData.data.sort((a, b) => b.id - a.id); // sort data in reverse order
      setData([...sortedData]);
      setReloadData([...sortedData]); // update the state variable used for reloading
    } catch (e) {
      console.log(e);
      setMessage("Error Occurred while reloading data!");
      setStatus("error");
      setOpen(true);
    }
  } 



  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    
  };

  // Validations

  const handleOnclick =async()=>{
    try{
      const supplierData ={supplierName,supplierContact,supplierEmail,supplierAddress};
      const result=supplierSchema(supplierData);
      
      if (result.error){
        setMessage("Validation Error");
        console.log("with error");
        console.log(result);
        setStatus("error");
        setOpen(true);
      }
      if (!result.error){

      const response = await axios.post(" http://localhost:5000/addSupplier/supplier",{supplierName,supplierContact,supplierEmail,supplierAddress});
      console.log("without error ");
      console.log(result);
      setMessage("Supplier added successfully");
      setStatus("success");
      setOpen(true);
      handleReload();
      reset();

      }
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
        <SupplierTable reloadData={reloadData} setReloadData={setReloadData}/>
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