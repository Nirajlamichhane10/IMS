import * as React from 'react';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';



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
    },
     item:{
      margin:"80px 0px 50px 500px",
      width:"220px",

     },
     itembox:{
      margin:"-90px 0px 50px 650px",

     },

     price:{
      margin:"40px 0px 50px 500px",
      width:"220px",

     },
     pricebox:{
      margin:"-100px 0px 50px 650px",

     },
     button:{
      margin:"30px 0px 50px 500px",
      width:"220px",

     },



    };

export default function EditItem() {
    return (
   

          <Box sx={{ width: '100%', maxWidth: 500, }}>
            
           <Typography  color="text.secondary" variant="h4" gutterBottom style={Styles.addItem}>
           Edit Item:
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

      
          <Typography variant="h5" gutterBottom style={Styles.price}>
            Price:
          </Typography>
          
          <Box style={Styles.pricebox}
      sx={{
        width: 400,
        maxWidth: '70%',
      }}
    >
    
      <TextField fullWidth label="Price Name" id="Price Name" />
    </Box>
    <div style={Styles.button}>
        <Button variant="contained" size="large">
          UPDATE ITEM
        </Button>
      </div>
         
        </Box>
        
      );
    }

  

        
