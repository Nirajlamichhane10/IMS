
import * as React from 'react';
import  {useEffect } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
// import SellTable from './sellTable';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SellTable1 from './sellTable1';
import axios from 'axios';

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
  sellItem:{
        
    color :"red",  
    textAlign:"center",
     margin:"50px 0px 50px 600px",
     width:"270px",
},
button:{
  margin:"20px 0px 50px 920px",
  width:"220px",

 },

 customer:{
  width:"20%",
  margin:"6px 8px 0px 0px",

 },



};
export default function SellItem() {

  const [invoiceNumber,setInvoiceNumber]= React.useState('');
  const [billDate, setBillDate] = React.useState(null);
  // const [itemName, setItemName]= React.useState("");
  // const [quantity, setQuantity]= React.useState(0);
  // const [price, setPrice ]= React.useState(0);
  // const [total, setTotal ]=React.useState(0);
  const [customerName, setCustomerName] = React.useState('');
  const [items, setItems] = React.useState([{}]);
  //   // for calender


  

  // for customer fetching data from
  const [customers, setCustomers] = React.useState([]);
  const [selectedCustomer, setSelectedCustomer] = React.useState('');

  useEffect(() => {
    const fetchCustomers = async () => {
      const res = await axios.get('http://localhost:5000/addCustomer/getCustomer',{customerName});
      setCustomers(res.data);
      console.log(res.data);
  
    };

    // for invoice number 
    fetchCustomers();
    generatedInvoiceNumber();

    // const unique_id = uuid();
  	// 			const small_id = unique_id.slice(0,8);
				
		// 		console.log(small_id);
    //     setInvoiceNumber(small_id);
    
  }, []);

  const generatedInvoiceNumber = async () =>{
    try {
      const res = await axios.get(" http://localhost:5000/sellInvoice/getSellInvoice");
      setInvoiceNumber(res.data[0].invoiceNumber);


    }catch(e){
      console.log(e);
    }

  }









  const handleChange = (event) => {
    setSelectedCustomer(event.target.value);
    setCustomerName(event.target.value);
  
    console.log(customerName);
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


const handleChangeCustomer = (event) => {
  setCustomerName(event.target.value);
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
        <div>
        <Typography  color="text.secondary" variant="h4" gutterBottom style={Styles.sellItem}>
           Sell Item:
           </Typography>

{/* // invoice no  */}
          <TextField
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
  

    

{/* Customer  name */}
         {/* Dropdown  */}
         <FormControl fullWidth style={Styles.customer}>
      <InputLabel id="demo-simple-select-label">Customer Name</InputLabel>
      <Select
        labelId="demo-simple-select-label"
        id="demo-simple-select"
        value={selectedCustomer}
        label="Customer Name"
        onChange={handleChange}
      >
        {customers.map((customer) => (
          <MenuItem key={customer._id} value={customer.customerName}>
            {customer.customerName}
          </MenuItem>
        ))}
      </Select>
    </FormControl>


         </div>
        </div>
      
      <div  style={Styles.table1}>
        <SellTable1 invoiceNumber={invoiceNumber} setInvoiceNumber={setInvoiceNumber} billDate={billDate} setBillDate={setBillDate} customerName={customerName} setCustomerName={setCustomerName} setSelectedCustomer={setSelectedCustomer}/>
        </div>
        {/* <div style={Styles.button}>
        <Button onClick={handleOnclick} variant="contained" size="large">
          SAVE ITEM 
        </Button>
      </div> */}
        
      </Box>
      <div style={Styles.collabtable}>
      {/* <SellTable/> */}
      </div>

      {/* <div style={Styles.buttonprint}>
        <Button onClick={handleOnclick} variant="contained" size="large">
          RECEPIT
        </Button>
      </div> */}


    
      </div>

    );
    
  }

