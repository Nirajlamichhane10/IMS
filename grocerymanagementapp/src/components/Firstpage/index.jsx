import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import styles from "./styles.module.css";
import { useEffect } from "react";

const Login = () => {
	const [data, setData] = useState({ email: "", password: "" });
	const [error, setError] = useState("");

	const handleChange = ({ currentTarget: input }) => {
		setData({ ...data, [input.name]: input.value });
	};


	const handleSubmit = async (e) => {
		e.preventDefault();
		try {
			const url = " http://localhost:5000/auth/authDetails";
			const response = await axios.post(url, data);
			if (response=="User Not Found"|| response=="password incorrect"){
				localStorage.setItem("token", "");
			}else{
				localStorage.setItem("token", response);
			}
			
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
							type="Username"
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
						
						<button type="submit" className={styles.green_btn}>
							Sign In
						</button>

						<button type="submit" className={styles.forget_btn}>
							Forgot Password ?
						</button>

					</form>
				</div>
				
	

		 </div>
		 </div>
	);
};

export default Login;