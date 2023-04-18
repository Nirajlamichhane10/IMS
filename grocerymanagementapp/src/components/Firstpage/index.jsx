import { useState } from "react";
import axios from "axios";

import styles from "./styles.module.css";

import { v4 as uuid } from 'uuid';


const Login = (props) => {
	const [data, setData] = useState({ username: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};



	const handleSubmit = async (e) => {
		e.preventDefault();
		
		try {
			console.log("Hey submit button worked");
			const options = {
				headers: {
					'Content-Type': 'application/json',
					'username':data.username,
					'password':data.password,
				}
			  };
			const url = " http://localhost:5000/auth/authDetails";
			const response = await axios.get(url,options );

			if (response.data.message === "authenticated"){

				// unique key generated 
				const unique_id = uuid();
  				const small_id = unique_id.slice(0,16);
				localStorage.setItem("token", small_id);
				// props.setUniqueId(small_id);
				props.tokenId.current=small_id;
				props.setLogin(true);
				console.log(small_id);

			}
			// else{
			// 	localStorage.setItem("token", "not_authenticated");
			// }
			console.log(response.message);
			
			window.location = "/";
		} catch (error) {
			if (
				error.response &&
				error.response.status >= 400 &&
				error.response.status <= 500
			) {
				setError(error.response.data.message);
			}
		}
	};


	return (
		<div className={styles.login_container}>
			<div className={styles.login_form_container}>
				<div className={styles.left}>
					<form className={styles.form_container} >
						<h1> Welcome to Grocery Management System </h1>
						<input
							type="username"
							placeholder="UserName:"
							name="username"
							onChange={handleChange}
							value={data.username}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password:"
							name="password"
							onChange={handleChange}
							value={data.password}
							required
							className={styles.input}
						/>
						
						<button type="submit" onClick={handleSubmit} className={styles.green_btn}>
							Sign In
						</button>

						<button type="submit"  className={styles.forget_btn}>
							Forgot Password ?
						</button>

					</form>
				</div>
				
	

		 </div>
		 </div>
	);
};

export default Login;