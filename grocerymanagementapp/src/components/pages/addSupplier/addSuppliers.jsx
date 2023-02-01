import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SupplierTable from './addSupplierTable';
import Typography from '@mui/material/Typography';


const Styles={
    root:{
      display :"flex",
  
    },
    addItem:{
        
        color :"red",  
        textAlign:"center",
         margin:"-250px 0px 50px 550px",
         width:"350px",
         display:"flex",
    },
    box:{
      margin:"400px 0px 50px 250px",
      
    },
    botton:{
        margin:"30px 0px 0px 0px",
    },
 
};
export default function AddSuppliers() {
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

      <TextField label={"Supplier Name"} id="suppliername" />
     
      <TextField label={"Supplier Contact"} id="suppliercontact" margin="dense" />
     
      <TextField label={"Supplier Email"} id="supplieremail" margin="normal" />

      <TextField label={"Supplier Address"} id="supplieraddress" />
      <div style={Styles.button}>
        <Button variant="contained" size="large" style={Styles.botton}>
          ADD SUPPLIER
        </Button>
      </div>
    </Box>
    <div >
        <SupplierTable/>
      </div>
      <div>
        <p style={{color: "green",margin:"100px 10px 10px 500px",}}> &copy;{new Date().getFullYear()} Nirajlamichhane | All Copyright Reserved "grocery management system" </p>
      </div>

    </div>
  );
}