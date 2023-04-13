
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import MatTable from '../addItem/materialtable';

import Typography from '@mui/material/Typography';
// import StockTable from './stockTable';

// css 

const Styles={
  root:{
    display :"flex",

  },

 supplier:{
  width:"30%",
  margin:"0px 8px 0px -72em",

 },

 purchaseItem:{
        
    color :"red",  
    textAlign:"center",
     margin:"90px 0px 50px 200px",
     width:"270px",
},
table:{
    // margin:"80% 0% 0% 150%",
    width:"1100px",
    margin:"50px 10px 10px -60px",
    height:"350px",
    
},

};
export default function MyStock() {


  const [supplierName, setSupplierName] = React.useState('');



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
           My Stocks:
           </Typography>


{/* Supplier  name */}
         {/* Dropdown  */}
         {/* <FormControl fullWidth style={Styles.supplier}>
  <InputLabel id="demo-simple-select-label">Items Name</InputLabel>
  <Select
    labelId="demo-simple-select-label"
    id="demo-simple-select"
    value={supplierName}
    label="Items Name"
    onChange={handleChangeSupplier}
  >
    <MenuItem value={10}>Coke</MenuItem>
    <MenuItem value={20}>Rice</MenuItem>
    <MenuItem value={10}>Fruits</MenuItem>
 
  </Select>
</FormControl> */}


         
        </div>
      

      </Box>
      <div style={Styles.table}>
       {/* <StockTable/>  */}
       <MatTable/>
       </div>
      
      
      </div>

    );
    
  }

