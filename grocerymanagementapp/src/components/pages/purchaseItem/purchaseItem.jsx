
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
// import CollapsibleTable from './newTable';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { v4 as uuid } from 'uuid';
import { log } from 'joi-browser';




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
  // const[itemNames,setItemNames]=React.useState({0:"Select Items"});
  const [itemNames, setItemNames] = React.useState([]);



  // for invoice number 
  // React.useEffect(() => {
  //   const date = new Date();
  //   const year = date.getFullYear() + 56;
  //   const month = date.getMonth() + 1;
  //   const fiscalYear = month <= 3 ? year - 1 : year;
  //   const generatedInvoiceNumber = `${fiscalYear}-${fiscalYear + 1}-1`;
  //   const invoicePrefix = "GMSP";

  //   const invoiceNumber = `${invoicePrefix}-${generatedInvoiceNumber}`;
  //   console.log(generatedInvoiceNumber); // Check if the generated invoice number is correct
  //   setInvoiceNumber(invoiceNumber);
  // }, []);


  // const test = () => {
  //   const date = new Date();
  //   const year = date.getFullYear() + 56;
  //   const month = date.getMonth() + 1;
  //   const fiscalYear = month <= 3 ? year - 1 : year;
  //   const generatedInvoiceNumber = `${fiscalYear}-${fiscalYear + 1}-1`;
  //   const invoicePrefix = "GMSP";

  //   const invoiceNumber = `${invoicePrefix}-${generatedInvoiceNumber}`;
  //   console.log(generatedInvoiceNumber); // Check if the generated invoice number is correct
  //   setInvoiceNumber(invoiceNumber);
  //   console.log(items)
  // }



  // for supplier fetching data from
  const [suppliers, setSuppliers] = React.useState([]);
  const [selectedSupplier, setSelectedSupplier] = React.useState('');

  useEffect(() => {
    // fetchItemName();
    const fetchSuppliers = async () => {
      const res = await axios.get('http://localhost:5000/addSupplier/getSupplier',{supplierName});
      setSuppliers(res.data);
      console.log("suppliernames");
      console.log(res.data);
    };


    // for invoice number 
     fetchSuppliers();
    const unique_id = uuid();
  				const small_id = unique_id.slice(0,8);
				// localStorage.setItem("invoiceNumber",small_id);
				console.log(small_id);
        setInvoiceNumber(small_id);
    
  }, []);

// const fetchItemName=async () => {
//      try{
    
//         const res = await axios.get(' http://localhost:5000/addItem/getItemName');
//   //       // setItemNameArray(res.data); 
//   //       let obj = {0: "Select Item"};
//   //     let count=1;

//   // // Loop through the array and append key-value pairs to the object
//   //        res.data.map((item) => {
//   //         obj[count] = item.itemName;
//   //         count++;
//   //          });
//   //         //  const str = JSON.stringify(obj); // convert the object to a JSON string
//   //         // const parsedObj = JSON.parse(str);
//   //        setItemNames(obj);
//   //       console.log("item Names");
//   return res.data;
        
//    }

//     catch(e){
//       console.log(e);
      

//     }
//   }

  const handleChange = (event) => {
    setSelectedSupplier(event.target.value);
    console.log(supplierName);
  };



  
  
const[message, setMessage]= React.useState("");
const[status, setStatus]= React.useState("");
const[open, setOpen]= React.useState(false);



  const handleChangeInvoiceNumber =(event)=>{
    setInvoiceNumber(event.target.value);
    
   
  };

  const handleChangeBillDate =(event)=>{
    setBillDate(event.target.value);
  };


  const handleChangeSupplier = (event) => {
    setSupplierName(event.target.value);
  };



    return (
      <div>
        <style>{`@media print {.no-show{display: none;}}`}</style>
       

        
          

      <Box style={Styles.box}

        component="form" 
        sx={{
          '& .MuiTextField-root': { m: 1, width: '25ch' }, 
        }}
        noValidate
        autoComplete="off"
      >
         <div className="no-show">
         
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
    
        <PurchasedTable itemNames={itemNames} invoiceNumber={invoiceNumber} setInvoiceNumber={setInvoiceNumber} billDate={billDate} setBillDate={setBillDate} supplierName={supplierName} setSupplierName={setSupplierName} setSelectedSupplier={setSelectedSupplier}/>

        </div>
        {/* <div style={Styles.button}>
        <Button onClick={handleOnclick} variant="contained" size="large">
          SAVE ITEM 
        </Button>
      </div> */}
      </Box>
  
      <div style={Styles.collabtable}>
      {/* <CollapsibleTable invoiceNumber={invoiceNumber}/> */}
      </div>

   

   {/* <Button onClick={test} >
      Test
        </Button> */}

   
      </div>


    );
    
  }


