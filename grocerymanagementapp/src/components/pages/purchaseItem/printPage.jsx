import * as React from 'react';
import Typography from '@mui/material/Typography';

 // adding css 
    const  Styles={
        root: {
            display: "flex",
       
        }, 
        name:{
            color :"red",  
    textAlign:"center",
     margin:"50px 0px 50px 600px",
     width:"270px",
     backgroundColor:"red",
        }
    };


export default function PrintPurchaseBill() {

    <>
  <Typography style={Styles.name} color="text.secondary" variant="h4" gutterBottom>
    Grocery Management System 
  </Typography>
  <div style={Styles.footer}>
    <p style={{color: "green",margin:"100px 10px 10px 500px",}}>
      &copy;{new Date().getFullYear()} Nirajlamichhane | All Rights Reserved "grocery management system"
    </p>
  </div>
</>
          
           
   
    };

  

        
