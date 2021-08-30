import React from "react";
import { Link } from "react-router-dom";
import CommonBtn from "./CommonBtn";

const NavItems = () => {
	return (
		<>
			<Link className="p-4 active:border-b-4 border-purple-600 text-xl hover:text-purple-800 m-2" to="/">
				Home
			</Link>
			<Link className="p-4 active:border-b-4 border-purple-600 text-xl hover:text-purple-800 m-2" to="/about">
				About
			</Link>
			<Link
				className="p-4 active:border-b-4 border-purple-600 text-xl hover:text-purple-800 m-2"
				to="/features"
			>
				Features
			</Link>
			<Link
				className="p-4 active:border-b-4 border-purple-600 text-xl hover:text-purple-800 m-2"
				to="/contact"
			>
				Contact
			</Link>
			<CommonBtn className="" destination="/login" title="Login" />
		</>
	);
};

export default NavItems;
