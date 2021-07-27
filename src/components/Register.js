import React, { useState } from "react";
import "../App.css";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Register = () => {
	const history = useHistory();

	const [user, setUser] = useState({
		name: "",
		email: "",
		password: "",
		reEnterPassword: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setUser({
			...user,
			[name]: value,
		});
	};

	const register = () => {
		const { name, email, password, reEnterPassword } = user;
		if (name && email && password && password === reEnterPassword) {
			axios.post("http://localhost:9002/register", user).then((res) => {
				alert(res.data.message);
				history.push("/login");
			});
		} else {
			alert("invlid input");
		}
	};

	return (
		<div className="register">
			{console.log("User", user)}
			<h1>Register</h1>
			<input
				type="text"
				name="name"
				value={user.name}
				placeholder="Your Name"
				onChange={handleChange}
			></input>
			<input
				type="text"
				name="email"
				value={user.email}
				placeholder="Your Email"
				onChange={handleChange}
			></input>
			<input
				type="password"
				name="password"
				value={user.password}
				placeholder="Your Password"
				onChange={handleChange}
			></input>
			<input
				type="password"
				name="reEnterPassword"
				value={user.reEnterPassword}
				placeholder="Re-enter Password"
				onChange={handleChange}
			></input>
			<div className="button" onClick={register}>
				Register
			</div>
			<div>or</div>
			<div className="button" onClick={() => history.push("/login")}>
				Login
			</div>
		</div>
	);
};

export default Register;

//Login start:::
// import React, { useState } from "react";
// import "../App.css";
// import axios from "axios";
// import { useHistory } from "react-router-dom";

// const Login = ({ setLoginUser }) => {
// 	const history = useHistory();

// 	const [user, setUser] = useState({
// 		email: "",
// 		password: "",
// 	});

// 	const handleChange = (e) => {
// 		const { name, value } = e.target;
// 		setUser({
// 			...user,
// 			[name]: value,
// 		});
// 	};

// 	const login = () => {
// 		axios.post("http://localhost:9002/login", user).then((res) => {
// 			alert(res.data.message);
// 			setLoginUser(res.data.user);
// 			history.push("/");
// 		});
// 	};

// 	return (
// 		<div className="login">
// 			<h1>Login</h1>
// 			<input
// 				type="text"
// 				name="email"
// 				value={user.email}
// 				onChange={handleChange}
// 				placeholder="Enter your Email"
// 			></input>
// 			<input
// 				type="password"
// 				name="password"
// 				value={user.password}
// 				onChange={handleChange}
// 				placeholder="Enter your Password"
// 			></input>
// 			<div className="button" onClick={login}>
// 				Login
// 			</div>
// 			<div>or</div>
// 			<div className="button" onClick={() => history.push("/register")}>
// 				Register
// 			</div>
// 		</div>
// 	);
// };

// export default Login;
