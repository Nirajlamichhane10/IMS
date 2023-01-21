import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MatTablePurchase from '../Firstpage/materialTablePurchase';



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
     margin:"50px 0px 50px 350px",
     width:"250px",
},
button:{
  margin:"15px 0px 50px 0px",
  width:"220px",

 },
 
  table1:{
    alignItems: "center",
    textAlign: "center",
    width:"130%",
    margin:"30px 10px 10px -320px",

 },
 supplier:{
  width:"20%",
  margin:"8px 0px 0px 0px",

 },



};
export default function SellItem() {

  const [invoiceNumber,setInvoiceNumber]= React.useState('');
  const [billDate,setBillDate]= React.useState('');
  const [carringCharge,setCarringCharge]= React.useState(0);
  const [quantity, setQuantity]= React.useState(0);
  const [price, setPrice ]= React.useState(0);
  const [total, setTotal ]=React.useState(0);
  const [suppliersname, setSuppliersName] = React.useState('');
  const [addItem, setaddItem] = React.useState('');
  //   // for calender
  // const [value, setValue] = React.useState(null);

  // const [purchaseData,setPurchaseData] = React.useState({});

  const purchaseData = React.useRef({});


  const handleChange = (event) => {
    setSuppliersName(event.target.value);
  };
  const handleChangeaddItem = (event) => {
    setaddItem(event.target.value);
  };

  const handeleAddItem=()=>{
    purchaseData.current.value= {invoiceno:invoiceNumber,billdate:billDate,suppliersname,carryingcharge:carringCharge,itemname:addItem,quantity,price,total};
    // console.log([purchaseData.current.value]);
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
           Sell Item:
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

{/* bill date  */}

          <TextField
            id="outlined-error-helper-text"
            label="Bill Date"
            defaultValue=""
             helperText="MM/DD/YY"
             onChange={(event) => {
              setBillDate(event.target.value);
            }} 
          />

{/* 
<LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Bill Date"
        value={value}
        onChange={(newValue) => {
          setValue(newValue);
        }}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider> */}

    

{/* Suppliers name */}
         {/* Dropdown  */}
         <FormControl fullWidth style={Styles.supplier}>
  <InputLabel id="demo-simple-select-label">Suppliers Name</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={suppliersname}
    label="Suppliers Name"
    onChange={handleChange}
  >
    <MenuItem value={10}>Niraj Lamichhane</MenuItem>
    <MenuItem value={20}>Nirmal Lamichhane</MenuItem>
   
  </Select>
</FormControl>
{/* carring charge */}

          <TextField
            id="outlined-error"
            label="Carring Charge"
            defaultValue=""
            onChange={(event) => {
              setCarringCharge(event.target.value);
            }}
          />

{/* Items name */}
         {/* Dropdown  */}
         <FormControl fullWidth style={Styles.supplier}>
  <InputLabel id="demo-simple-select-label">Items Name</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={addItem}
    label="Suppliers Name"
    onChange={handleChangeaddItem }
  >
    <MenuItem value={10}>Grocery Items</MenuItem>
    <MenuItem value={20}>Cold drinks</MenuItem>
    <MenuItem value={20}>Rice</MenuItem>
    <MenuItem value={20}>extra</MenuItem>
   
  </Select>
</FormControl>

   {/* Quantity name */}
          <TextField
            id="outlined-error"
            label="Quanitity"
            defaultValue=""
            onChange={(event) => {
              setQuantity(event.target.value);
            }}
          />
 {/* price */}
          <TextField
            id="outlined-error"
            label="Price"
            defaultValue=""
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
 {/* Totol */}
          <TextField
            id="outlined-error"
            label="Total"
            defaultValue=""
            onChange={(event) => {
              setTotal(event.target.value);
            }}
          />

         
        </div>
        <div style={Styles.button}>
        <Button onClick={handeleAddItem} variant="contained" size="large">
          ADD ITEM
        </Button>
      </div>
      <div  style={Styles.table1}>
        <MatTablePurchase purchaseData={purchaseData}/>
        </div>
      </Box>
      <div>
        <p style={{color: "green",margin:"100px 10px 10px 500px",}}> &copy;{new Date().getFullYear()} Nirajlamichhane | All Copyright Reserved "grocery management system" </p>
      </div>
      </div>

    );
    
  }
