import React from "react";
import firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../firebase.config";
import { useState } from "react";
import {Link} from "react-router-dom";
// import CommonBtn from "./CommonBtn";

firebase.initializeApp(firebaseConfig);

const Login = () => {
	const [newUser, setNewUser] = useState(false);
	const [user, setUser] = useState({
		isSignIn: false,
		name: "",
		email: "",
		password: "",
		photo: "",
		errorMessage: "",
		successMgs: false,
	});
	const googleProvider = new firebase.auth.GoogleAuthProvider();

	const handleGoogleSignIn = () => {
		firebase
			.auth()
			.signInWithPopup(googleProvider)
			.then((res) => {
				const { displayName, email, photoURL } = res.user;
				const signInUser = {
					isSignIn: true,
					name: displayName,
					email: email,
					photo: photoURL,
				};
				setUser(signInUser);
			})
			.catch((err) => {
				const errMgs = err.message;
				console.log(errMgs);
			});
	};

	const handleGoogleSignOut = () => {
		firebase
			.auth()
			.signOut()
			.then(() => {
				const signOutUser = {
					isSignIn: false,
					name: "",
					email: "",
					password: "",
					photo: "",
				};
				setUser(signOutUser);
			})
			.catch((err) => {
				console.log(err);
			});
	};
	

	//handle Blur on input field ===>
	const handleBlur = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		let isFieldValid = true;
		if (name === "email") {
			isFieldValid = /\S+@\S+\.\S+/.test(value);
		}
		if (name === "password") {
			isFieldValid = /((?=.*\d)(?=.*[A-Z])(?=.*[a-z])(?=.*\W).{8,})/.test(
				value
			);
		}
		if (isFieldValid) {
			const newUserInfo = { ...user };
			newUserInfo[name] = value;
			setUser(newUserInfo);
		}
	};
	handleGoogleSignOut();
	//handle Success ===>
	const handleSuccess = (res) => {
		const newUser = { ...user };
		newUser.errorMessage = "";
		newUser.successMessage = true;
		setUser(newUser);
	};

	//handle Error ===>
	const handleError = (error) => {
		var errorMessage = error.message;
		const newUser = { ...user };
		newUser.successMessage = false;
		newUser.errorMessage = errorMessage;
		setUser(newUser);
	};

	//handle Email SignIn & SignUp ===>
	const handleEmailSignIn = (event) => {
		if (newUser && user.email && user.password) {
			firebase
				.auth()
				.createUserWithEmailAndPassword(user.email, user.password)
				.then((res) => {
					handleSuccess(res);
				})
				.catch((error) => {
					handleError(error);
				});
		}
		if (!newUser && user.email && user.password) {
			firebase
				.auth()
				.signInWithEmailAndPassword(user.email, user.password)
				.then((res) => {
					handleSuccess(res);
				})
				.catch((error) => {
					handleError(error);
				});
		}
		event.preventDefault();
	};

	return (
		<div className="flex flex-col">
			<div className="bg-blue-50 w-full lg:w-1/3 md:w-2/3 mx-auto rounded-lg my-20 px-4 py-4 shadow-lg">
				{newUser ? (
				<h2 className="text-4xl title-font text-center my-5 font-bold text-purple-900">Sign Up</h2>
			) : (
				<h2 className="text-4xl title-font text-center my-5 font-bold text-purple-900">Sign In</h2>
			)}
				<form action="">
					{newUser && (
						<input type='text' placeholder="Full name" onBlur={handleBlur}
					className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-300" />
					)}
					<input type='text' placeholder="Email or Phone Number" onBlur={handleBlur} 
						className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-300" />
					<input type='password' placeholder="Password" onBlur={handleBlur}
						className="w-full mb-3 px-4 py-3 border rounded-lg text-gray-700 focus:outline-none focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-300" />
						{newUser && (
							<p className="text-red-500 text-xs italic pl-4">
								Your password must be bigger than 8 characters, contain
								uppercase, lowercase, digits and special character
							</p>
						)}
					<div className="w-full text-center mt-2">
					<input
							className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
							type="button"
							value={newUser ? "Sign Up" : "Sign In"}
							onClick="handleEmailSignIn"
						/>
					</div>
				</form>
				<div className="flex justify-center my-4">
					<Link to="" className="text-blue-500 text-sm" href="#">Forgot account?</Link>
				</div>
				<hr />
				<div className="flex justify-center my-4">
						<button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded mx-4" type="button" onClick={handleGoogleSignIn}>Google</button>
						<button className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded" type="button" onClick={handleGoogleSignIn}>Facebook</button>
				</div>
				<div className="text-center my-6">
					<p>{newUser ? "Do you have Account" : "Don't have account?"} <button className="text-purple font-bold" onClick={() => setNewUser(!newUser)}>{newUser ? "Sign In" : "Sign Up"}</button></p>
				</div>
			</div>
		</div>
	);
};

export default Login;
