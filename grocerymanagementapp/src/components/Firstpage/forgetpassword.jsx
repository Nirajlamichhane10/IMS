// import * as React from 'react';
// import Box from '@mui/material/Box';
// import TextField from '@mui/material/TextField';


// // adding css 
// const  Styles={
//     root: {
//         display: "flex",
       
   
//     }, 
// box:{
  
//      textAlign:"center",
//      margin:"180px 0px 50px -80em",
//      width:"500px",
//      height:"400px",
//      display:"flex",
//      boxShadow: "15px 15px 8px lightblue",
//      backgroundColor:"#3bb19b",
//      borderRadius:"15px",
   
   
// },

// button:{
       
        
   
//         padding:"10px 0",
//         borderRadius: "10px",
//         fontWeight: "bold",
//         fontSize: "14px",
//         cursor: "pointer",
//         border: "none",
//         outline: "none",
       



// },


// };


// export default function ForgetPassword() {
//   return (
//     <Box  style={Styles.box}
//       component="form"
//       sx={{
//       display: 'flex',
//         flexDirection: 'column',
         
      
//         '& > :not(style)': { m: 2, width: '25ch',},
//       }}
//       noValidate
//       autoComplete="off"
//     >
       
//       <TextField label="Phone Number" color="secondary" focused />
      
//        <TextField label="New User Name" color="secondary" focused />
       
//       <TextField label="New Password " color="secondary" focused />
     
      	
//       <button style={Styles.button} >Submit</button>
      
//     </Box>
//   );
// }
import * as React from 'react';
import { useState } from "react";
import axios from "axios";
import Alertbar from '../../components/Alertbar';
import styles from "./styles.module.css";
import { useEffect } from 'react';

import { v4 as uuid } from 'uuid';



const ForgetPassword = (props) => {
	const [data, setData] = useState({});
	const [error, setError] = useState("");
	const [pin, setPin] = useState('');
  const [userName, setUserName] = useState('');
	const [password, setPassword] = useState('');
  const [conPassword, setConPassword] = useState('');



	const[message, setMessage]= React.useState("");
    const[status, setStatus]= React.useState("");
    const[open, setOpen]= React.useState(false);

  
  const handleChangePin =(event)=>{
    setPin(event.target.value)

  };
  const handleChangeUserName =(event)=>{
    setUserName(event.target.value)

  };
  const handleChangePassword =(event)=>{
    setPassword(event.target.value)

  };
  const handleChangeConPassword =(event)=>{
    setConPassword(event.target.value)

  };

  useEffect(() => {
   handleReload();
    
  },[]);

  const handleReload = async()=>{
    const Userdata= await axios.get(" http://localhost:5000/auth/getUser");
    setData(Userdata.data[0]);
    console.log("user data ");
    console.log(Userdata);
    
    

}


	// // for reset 
	// const reset =()=>{
    
	// 	setUsername("");
	// 	setPassword("");
	
	  
	//   }



	// SNACKBAR 
	const handleClose = (reason) => {
		if (reason === 'clickaway') {
			return;
		}
		setOpen(false);
	};
 
  const handleBack = async (e) =>{
    window.location = "/";
  }

	const handleSubmit = async (e) => {
		e.preventDefault();
    if(pin!=data.pin && userName!=data.userName){
      handleClose();
				setMessage("UserName or PIN Incorrect");
                setStatus("error");
                setOpen(true);
    }
    else {
      if(password!=conPassword){
        handleClose();
        setMessage("Password and Confirm Password are not same ");
        setStatus("error");
        setOpen(true);
      }else{
        data.password=conPassword;

				try {
          
          const res = await axios.put(
            `http://localhost:5000/auth/update/user/${data._id}`,
            data,
          );
          window.location = "/";
      
          
         
        } catch (e) {
          console.log(e);
         
        }
  }
  }
	};


	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} >
						<h1>Forget Password </h1>
						<input
							type="pin"
							placeholder="PIN:"
							name="pin"
							onChange={handleChangePin}
							value={pin}
							required
							className={styles.input}
						/>
						<input
							type="uername"
							placeholder="User Name:"
							name="password"
							onChange={handleChangeUserName}
							value={userName}
							required
							className={styles.input}
						/>
            <input
							type="password"
							placeholder="Password:"
							name="password"
							onChange={handleChangePassword}
							value={password}
							required
							className={styles.input}
						/>
             <input
							type="password"
							placeholder="Confirm Password:"
							name="password"
							onChange={handleChangeConPassword}
							value={conPassword}
							required
							className={styles.input}
						/>
						
						<button onClick={handleSubmit} className={styles.green_btn}>
							Submit
						</button>

            <button onClick={handleBack} className={styles.green_btn}>
							Back
						</button>


					</form>
				</div>
				<Alertbar
      message={message}
      status={status}
      open={open}
      handleClose={handleClose}
      />	
	

		 </div>
		 </div>
	);
};

export default ForgetPassword;