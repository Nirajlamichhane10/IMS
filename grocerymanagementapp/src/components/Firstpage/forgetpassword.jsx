import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


// adding css 
const  Styles={
    root: {
        display: "flex",
       
   
    }, 
box:{
  
     textAlign:"center",
     margin:"180px 0px 50px -80em",
     width:"500px",
     height:"400px",
     display:"flex",
     boxShadow: "15px 15px 8px lightblue",
     backgroundColor:"#3bb19b",
     borderRadius:"15px",
   
   
},

button:{
       
        
   
        padding:"10px 0",
        borderRadius: "10px",
        fontWeight: "bold",
        fontSize: "14px",
        cursor: "pointer",
        border: "none",
        outline: "none",
       



},


};


export default function ForgetPassword() {
  return (
    <Box  style={Styles.box}
      component="form"
      sx={{
      display: 'flex',
        flexDirection: 'column',
         
      
        '& > :not(style)': { m: 2, width: '25ch',},
      }}
      noValidate
      autoComplete="off"
    >
       
      <TextField label="Phone Number" color="secondary" focused />
      
       <TextField label="New User Name" color="secondary" focused />
       
      <TextField label="New Password " color="secondary" focused />
     
      	
      <button style={Styles.button} >Submit</button>
      
    </Box>
  );
}