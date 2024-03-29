import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import CustomerTable from './addCustomerTable';
import Typography from '@mui/material/Typography';
import axios from 'axios';
import Alertbar from '../../Alertbar';
import { customerSchema } from '../../validationJoi/Validation';
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
      margin:"400px 0px 50px -490px",
      
    },
    botton:{
      margin:"30px 0px 0px -880px",
    },
 
};
export default function AddCustomers() {

  const[customerName, setCustomerName]= React.useState("");
  const[customerContact, setCustomerContact]= React.useState(0);
  const[customerEmail, setCustomerEmail]= React.useState("");
  const[customerAddress, setCustomerAddress]= React.useState("");
  const[customer, setCustomer]= React.useState({});
  const[label, setLabel] = React.useState("");
  const[reloadData, setReloadData] = React.useState([]);
  
  
  const[message, setMessage] = React.useState("");
  const[status, setStatus] = React.useState("");
  const[open, setOpen] = React.useState(false);


// for reset 
  const reset =()=>{
    
    setCustomerName("");
    setCustomerContact(0);
    setCustomerEmail("");
    setCustomerAddress("");

  }

  const handleChangeCustomerName =(event)=>{
    setCustomerName(event.target.value)
  };

  const handleChangeCustomerContact =(event)=>{
    setCustomerContact(event.target.value)
  };

  const handleChangeCustomerEmail =(event)=>{
    setCustomerEmail(event.target.value)
  };

  const handleChangeCustomerAddress =(event)=>{
    setCustomerAddress(event.target.value)
  };
  const handleChange = (event) => {
    setLabel(event.target.value);
  };

  
  
  //handle reload 
  useEffect(() => {
    handleReload();
  },[]);

// reloading 
  
    const handleReload = async()=>{
      const CustomerData= await axios.get("http://localhost:5000/addCustomer/getCustomer");
      setReloadData([...CustomerData.data]);
      // console.log(CustomerData.data);
      

  }


   
  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return;
    }

    setOpen(false);
    
  };

  // validation of customer data 

  const handleOnclick =async()=>{
    try{
      const customerData ={customerName,customerContact,customerEmail,customerAddress};
      const result=customerSchema(customerData);
      if (result.error){
        setMessage("Validation Error");
        console.log("with error");
        console.log(result);
        setStatus("error"); 
        setOpen(true);

      }
      if (!result.error){
        
      const response = await axios.post(" http://localhost:5000/addcustomer/customer",{customerName,customerContact,customerEmail,customerAddress});
      console.log("without error ");
      console.log(result);
      setMessage("Customer added successfully");
      setStatus("success");
      setOpen(true);
      handleReload();
      reset();

      }
    }
  
    
    catch(e){
      console.log(e);
      setMessage("Error Occurred ! Customer can't be added ");
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
           CUSTOMER DETAILS
           </Typography>

      <TextField 
      onChange={handleChangeCustomerName}
      value={customerName}
      label={"CustomerName"}
       id="customername" 
       />
     
      <TextField
      onChange={handleChangeCustomerContact}
      value={customerContact}
       label={"Customer Contact"} id="customercontact" margin="dense" />
     
      <TextField
      onChange={handleChangeCustomerEmail}
      value={customerEmail}
      label={"Customer Email"} id="customeremail" margin="normal" />

      <TextField 
      onChange={handleChangeCustomerAddress}
      value={customerAddress}
      label={"Customer Address"} id="customeraddress" />
      <div style={Styles.button}>
      
        <Button 
        onClick={handleOnclick}
        variant="contained" size="large" style={Styles.botton}>
        
          ADD CUSTOMER
        </Button>
       
      </div>
    </Box>
    <div >
        <CustomerTable  reloadData={reloadData} setReloadData={setReloadData}/>
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