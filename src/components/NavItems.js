import React from "react";
import { Link } from "react-router-dom";

const NavItems = () => {
	return (
		<>
			<Link className="p-4 active:border-b-4 border-purple-600 m-2" to="/">
				Home
			</Link>
			<Link className="p-4 active:border-b-4 border-purple-600 m-2" to="/about">
				About
			</Link>
			<Link
				className="p-4 active:border-b-4 border-purple-600 m-2"
				to="/features"
			>
				Features
			</Link>
			<Link
				className="p-4 active:border-b-4 border-purple-600 m-2"
				to="/contact"
			>
				Contact
			</Link>
			<Link className="p-4 active:border-b-4 border-purple-600 m-2" to="/login">
				Login
			</Link>
		</>
	);
};

export default NavItems;
