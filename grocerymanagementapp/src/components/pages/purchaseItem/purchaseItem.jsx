
import * as React from 'react';
import  {useEffect,useState } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import axios from 'axios';
import PurchasedTable from './purchaseTable';
import CollapsibleTable from './newTable';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';





// css 

const Styles={
  root:{
    display :"flex",

  },
  box:{
    margin:"90px 0px 50px -120px",
  },
  purchaseItem:{
        
    color :"red",  
    textAlign:"center",
     margin:"50px 0px 50px 300px",
     width:"270px",
},
button:{
  margin:"20px 0px 50px 900px",
  width:"220px",

 },
 buttonprint:{
  margin:"30px 20px 50px 790px",
  width:"220px",

 },
 
 
  table1:{
    alignItems: "center",
    textAlign: "center",
    width:"150%",
    margin:"30px 10px 10px -180px",

 },
 collabtable: {
  margin:"0px 10px 10px -100px",
  width:"150%",
  alignItems: "center",
  textAlign: "center",

 },
 supplier:{
  width:"20%",
  margin:"6px 8px 0px 0px",

 },



};


export default function PurchaseItem() {

  const [invoiceNumber,setInvoiceNumber]= React.useState('');
  const [supplierName, setSupplierName] = React.useState('');
  const [billDate, setBillDate] = React.useState(null);
  const [items, setItems] = React.useState([{}]);



  // for invoice number 
  React.useEffect(() => {
    const date = new Date();
    const year = date.getFullYear() + 56;
    const month = date.getMonth() + 1;
    const fiscalYear = month <= 3 ? year - 1 : year;
    const generatedInvoiceNumber = `${fiscalYear}-${fiscalYear + 1}-1`;
    const invoicePrefix = "GMSP";

    const invoiceNumber = `${invoicePrefix}-${generatedInvoiceNumber}`;
    console.log(generatedInvoiceNumber); // Check if the generated invoice number is correct
    setInvoiceNumber(invoiceNumber);
  }, []);





  // for supplier fetching data from
  const [suppliers, setSuppliers] = React.useState([]);
  const [selectedSupplier, setSelectedSupplier] = React.useState('');

  useEffect(() => {
    const fetchSuppliers = async () => {
      const res = await axios.get('http://localhost:5000/addSupplier/getSupplier',{supplierName});
      setSuppliers(res.data);
    };

    fetchSuppliers();
    
  }, []);

  const handleChange = (event) => {
    setSelectedSupplier(event.target.value);
    console.log(supplierName);
  };



  
  
const[message, setMessage]= React.useState("");
const[status, setStatus]= React.useState("");
const[open, setOpen]= React.useState(false);

const reset =()=>{
    
  setInvoiceNumber("");
  setSupplierName("");
  setBillDate(null);
  setItems([{}]);

}


  const handleChangeInvoiceNumber =(event)=>{
    setInvoiceNumber(event.target.value);
    
   
  };

  const handleChangeBillDate =(event)=>{
    setBillDate(event.target.value);
  };


  const handleChangeSupplier = (event) => {
    setSupplierName(event.target.value);
  };

  const handleOnclick= async ()=>{
    
    try{
      const response = await axios.post("http://localhost:5000/purchaseItem/purchase",{invoiceNumber,billDate,supplierName,items});
      console.log(response);
      setMessage("Items purchased successfully");
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
  }

    return (
      <div>
      <Box style={Styles.box}
        component="form" 
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' }, 
        }}
        noValidate
        autoComplete="off"
      >
        <div>
        <Typography  color="text.secondary" variant="h4" gutterBottom style={Styles.purchaseItem}>
           Purchased Item:
           </Typography>

{/* // invoice no  */}
          <TextField
            id="outlined-error"
            label="Invoice.No"

            value={invoiceNumber}
          
            onChange={(event) => {
              setInvoiceNumber(event.target.value);
            }}
           
            
          />
          
          

{/* //Date  */}
<LocalizationProvider dateAdapter={AdapterDayjs}>
<DatePicker
          disableFuture
          label="Bill"
          openTo="year"
          views={['year', 'month', 'day']}
          value={billDate}
     
        
          onChange={(newValue) => {
            setBillDate(newValue);
          }}
          renderInput={(params) => <TextField {...params} />}
        />
        </LocalizationProvider>
     

{/* Supplier  name */}

<FormControl fullWidth style={Styles.supplier}>
      <InputLabel id="demo-simple-select-label">Supplier Name</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedSupplier}
        label="Supplier Name"
        onChange={(event) => {
          setSupplierName(event.target.value);
          handleChange(event);
        }}
      >
        {suppliers.map((supplier) => (
          <MenuItem key={supplier._id} value={supplier.supplierName}>
            {supplier.supplierName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>


         
        </div>
      
      <div  style={Styles.table1}>
        <PurchasedTable/>
        </div>
        <div style={Styles.button}>
        <Button onClick={handleOnclick} variant="contained" size="large">
          SAVE ITEM 
        </Button>
      </div>
        
      </Box>
      <div style={Styles.collabtable}>
      <CollapsibleTable/>
      </div>

      <div style={Styles.buttonprint}>
        <Button  variant="contained" size="large">
          PRINT
        </Button>
      </div>

      <div>
        <p style={{color: "green",margin:"100px 10px 10px 500px",}}> &copy;{new Date().getFullYear()} Nirajlamichhane | All Copyright Reserved "grocery management system" </p>
      </div>
      </div>

    );
    
  }


