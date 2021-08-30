import React, { useState } from "react";
import { Link } from "react-router-dom";
import { CgMenuGridR } from "react-icons/cg";
import NavItems from "./NavItems";

const Navbar = () => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="bg-blue-50">
			<nav className="flex justify-between container mx-auto py-4 text-2xl font-bold px-2">
				<Link to="/">Online Exam</Link>
				<div
					className="lg:hidden block text-4xl"
					onClick={() => {
						setIsOpen(!isOpen);
					}}
				>
				<CgMenuGridR />
				</div>
				<div className="lg:block hidden">
					<NavItems />
				</div>
			</nav>
			<div
				className={
					isOpen
						? "grid grid-rows-4 text-center items-center text-4xl font-bold"
						: "hidden"
				}
			>
				<NavItems />
			</div>
		</div>
	);
};

export default Navbar;
