import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import MatTable from '../Firstpage/materialtable';

 // adding css 
    const  Styles={
        root: {
            display: "flex",
        }, 
    addItem:{
        
        color :"red",  
        textAlign:"center",
         margin:"90px 0px 50px 700px",
         width:"220px",
         display:"flex",
    },
     item:{
      margin:"80px 0px 50px 500px",
      width:"220px",
      alignItems: "center",
      display:"flex",

     },
     itembox:{
      margin:"-90px 0px 50px 650px",
      alignItems: "center",
      display:"flex",
      textAlign:"center",

     },

     quantity:{
      margin:"40px 0px 50px 500px",
      width:"220px",
      alignItems: "center",
      display:"flex",

     },
     quantitybox:{
      margin:"-100px 0px 50px 650px",
      alignItems: "center",
      display:"flex",
      textAlign:"center",

     },
     button:{
      margin:"30px 0px 50px 500px",
      width:"220px",
      alignItems: "center",
      display:"flx",

     },
 


    };

export default function AddItem() {
  
    return (
   <div>

          <Box sx={{ width: '100%', maxWidth: 500, }}>
            
           <Typography  color="text.secondary" variant="h4" gutterBottom style={Styles.addItem}>
           Add Item:
           </Typography>
           
          <Typography variant="h5" gutterBottom style={Styles.item}>
             Item Name:
          </Typography>

       {/* // box for item name:    */}
           <Box style={Styles.itembox}
      sx={{
        width: 400,
        maxWidth: '70%',
      }}
    >
    
      <TextField fullWidth label="Item Name" id="Item Name" />
    </Box>

      
          <Typography variant="h5" gutterBottom style={Styles.quantity}>
            Quantity:
          </Typography>
          
          <Box style={Styles.quantitybox}
      sx={{
        width: 400,
        maxWidth: '70%',
      }}
    >
    
      <TextField fullWidth label="Quantity" id="quantity" />
    </Box> 
    <div style={Styles.button}>
        <Button variant="contained" size="large">
          ADD ITEM
        </Button>
      </div>
         
        </Box>
        <div>
      <MatTable/>
      </div>
      <div>
        <p style={{color: "green",margin:"100px 10px 10px 500px",}}> &copy;{new Date().getFullYear()} Nirajlamichhane | All Copyright Reserved "grocery management system" </p>
      </div>
      </div>

      
      );
  
     
   
    }

  

        
