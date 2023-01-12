import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { flexbox } from '@mui/system';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


// css 

const Styles={
  root:{
    display :"flex",

  },
  box:{
    margin:"90px 0px 50px 450px",
  },
  purchaseItem:{
        
    color :"red",  
    textAlign:"center",
     margin:"50px 0px 50px 350px",
     width:"250px",
},
button:{
  margin:"-50px 0px 50px 580px",
  width:"220px",

 },



};
export default function PurchaseItem() {
    return (

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
           Purchase Item:
           </Typography>

          <TextField
            id="outlined-error"
            label="Invoice.No"
            defaultValue=""
          />
          <TextField
            id="outlined-error-helper-text"
            label="Bill Date"
            defaultValue=""
             helperText="MM/DD/YY" 
          />
           <TextField
            id="outlined-error"
            label="Total Items"
            defaultValue=""
          />
          <TextField
            id="outlined-error"
            label="Suppliers Name"
            defaultValue=""
          />
          <TextField
            id="outlined-error"
            label="Carring Charge"
            defaultValue=""
          />
          <TextField
            id="outlined-error"
            label="Recieve Date"
            defaultValue=""
          />
          <TextField
            id="outlined-error"
            label="Iten NaME"
            defaultValue=""
          />
          <TextField
            id="outlined-error"
            label="Quanitity"
            defaultValue=""
          />
          <TextField
            id="outlined-error"
            label="Price"
            defaultValue=""
          />
          <TextField
            id="outlined-error"
            label="Total"
            defaultValue=""
          />
        </div>
        <div style={Styles.button}>
        <Button variant="contained" size="large">
          ADD ITEM
        </Button>
      </div>
        
      </Box>
      
    );
    
  }
