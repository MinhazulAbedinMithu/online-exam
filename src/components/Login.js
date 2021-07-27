import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../firebase.config";
import { useState } from "react";

firebase.initializeApp(firebaseConfig);

const Login = () => {
	const [user, setUser] = useState({
		isSignIn: false,
		name: "",
		email: "",
		photo: "",
	});
	const provider = new firebase.auth.GoogleAuthProvider();

	const handleSignIn = () => {
		firebase
			.auth()
			.signInWithPopup(provider)
			.then((res) => {
				const { displayName, email, photoURL } = res.user;
				const signInUser = {
					isSignIn: true,
					name: displayName,
					email: email,
					photoURL: photoURL,
				};
				setUser(signInUser);
			})
			.catch((err) => {
				const errMgs = err.message;
				const errEmail = err.email;
			});
	};
	return (
		<div>
			<h2>Login</h2>
			<button onClick={handleSignIn}>Sign in</button>
			<p>{user.name}</p>
		</div>
	);
};

export default Login;
