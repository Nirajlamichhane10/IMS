
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





// css 

const Styles={
  root:{
    display :"flex",

  },
  box:{
    margin:"90px 0px 50px -110px",
  },
  purchaseItem:{
        
    color :"red",  
    textAlign:"center",
     margin:"50px 0px 50px 600px",
     width:"270px",
},
button:{
  margin:"20px 0px 50px 920px",
  width:"220px",

 },


 supplier:{
  width:"20%",
  margin:"6px 8px 0px 0px",

 },
 payment:{
 
  margin:"6px 8px 0px 0px",

 },
 invoice:{
  margin:"6px 8px 0px 100px",

 },




};


export default function PurchaseItem() {

  const [invoiceNumber,setInvoiceNumber]= React.useState('');
  const [supplierName, setSupplierName] = React.useState('');
  const [billDate, setBillDate] = React.useState(new Date());
  const [items, setItems] = React.useState([{}]);
  const [payment, setPayment] = React.useState('');
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
     generatedInvoiceNumber();
    // const unique_id = uuid();
  	// 			const small_id = unique_id.slice(0,8);
		// 		// localStorage.setItem("invoiceNumber",small_id);
		// 		console.log(small_id);
    //     // setInvoiceNumber(small_id);
    
  }, []);


  const generatedInvoiceNumber = async () =>{
    try {
      const res = await axios.get(" http://localhost:5000/purchaseInvoice/getPurchaseInvoice");
      setInvoiceNumber(res.data[0].invoiceNumber);
      // let tempInvoiceNumber = res.data[0].invoiceNumber;
      
      // let parts = tempInvoiceNumber.split('-'); // split the string by hyphens
      // let numericPart = parts[3]; // extract the last part (01)
      // let incrementedNumericPart = (parseInt(numericPart, 10) + 1).toString().padStart(2, '0'); // increment the numeric part and pad it with leading zeros
      // parts[3] = incrementedNumericPart; // update the numeric part in the array
      // let newInvoiceNumber = parts.join('-'); // join the array back into a string
      // console.log(newInvoiceNumber); // "GMS-P-2080-81-02"

      // const updateRes = await axios.post("http://localhost:5000/purchaseInvoice/updatePurchaseInvoice",{id:res.data[0]._id,invoiceNumber:newInvoiceNumber});
      // console.log(updateRes);



    }catch(e){
      console.log(e);
    }

  }
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

  const handleChangePayement = (event) => {
    setPayment(event.target.value);
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
          <TextField style={Styles.invoice}
           disabled
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


    <FormControl 
    fullWidth sx={{ width: 280 }} style={Styles.payment}>
  <InputLabel id="demo-simple-select-label">Payment Methods</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={payment}
    label="Payment"
    onChange={(event) => {
      setPayment(event.target.value);
      // handleChange(event);
    }}
  >
    <MenuItem value={'Cash'}>Cash</MenuItem>
    <MenuItem value={'Online Payment'}> Online Payment</MenuItem>
  </Select>
</FormControl>

      
      </div>
      <div  style={Styles.table1}> 
    
        <PurchasedTable itemNames={itemNames} invoiceNumber={invoiceNumber} setInvoiceNumber={setInvoiceNumber} billDate={billDate} setBillDate={setBillDate} supplierName={supplierName} payment={payment}  setPayment={setPayment} setSupplierName={setSupplierName}  setSelectedSupplier={setSelectedSupplier}/>

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


