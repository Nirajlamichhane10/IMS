import { useState } from "react";

import styles from "./styles.module.css";

const Login = () => {
	const [data] = useState({ username: "", 
    password: "" 
});
	

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
							value={data.username}
							required
							className={styles.input}
						/>
						<input
							type="password"
							placeholder="Password:"
							name="password"
							
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