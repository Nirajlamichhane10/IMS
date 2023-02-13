
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

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
    margin:"90px 0px 50px 420px",
  },
  purchaseItem:{
        
    color :"red",  
    textAlign:"center",
     margin:"50px 0px 50px 320px",
     width:"270px",
},
button:{
  margin:"20px 0px 50px 700px",
  width:"220px",

 },
 
  table1:{
    alignItems: "center",
    textAlign: "center",
    width:"130%",
    margin:"30px 10px 10px -320px",

 },
 collabtable: {
  margin:"0px 10px 10px 100px",
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


  const handleChangeInvoiceNumber =(event)=>{
    setInvoiceNumber(event.target.value);
  };

  const handleChangeBillDate =(event)=>{
    setBillDate(event.target.value);
  };


  const handleChangeSupplier = (event) => {
    setSupplierName(event.target.value);
  };

  const handleOnclick=()=>{

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
            defaultValue=""
            
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
         {/* Dropdown  */}
         <FormControl fullWidth style={Styles.supplier}>
  <InputLabel id="demo-simple-select-label">Supplier Name</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={supplierName}
    label="Supplier Name"
    onChange={handleChangeSupplier}
  >
    <MenuItem value={10}>Niraj Lamichhane</MenuItem>
    <MenuItem value={20}>Nirmal Lamichhane</MenuItem>
    <MenuItem value={10}>Niraj Lamichhane</MenuItem>
    <MenuItem value={20}>Nirmal Lamichhane</MenuItem>
    <MenuItem value={10}>Niraj Lamichhane</MenuItem>
    <MenuItem value={20}>Nirmal Lamichhane</MenuItem>
   
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
      <div>
        <p style={{color: "green",margin:"100px 10px 10px 500px",}}> &copy;{new Date().getFullYear()} Nirajlamichhane | All Copyright Reserved "grocery management system" </p>
      </div>
      </div>

    );
    
  }
