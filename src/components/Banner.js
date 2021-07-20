import React from "react";
import { Link } from "react-router-dom";
import bannerImg from "../images/banner.png";

const Banner = () => {
	return (
		<div className="bg-gradient-to-r from-green-400 via-red-300 to-pink-500">
			<div className="container mx-auto py-8 flex">
				<div className="banner-left w-3/5 py-24">
					<h2 className="text-5xl font-bold text-purple-800">
						Online Examination Application
					</h2>
					<p className="text-xl pt-4 pb-8">
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero Lorem
						ipsum dolor sit amet consectetur adipisicing elit. Voluptatum eius
						praesentium debitis facilis enim asperiores et laboriosam earum id
						laborum. sapiente vitae dolore doloremque sint eos?
					</p>
					<Link
						to="/features"
						className="p-2 border-2 border-yellow-600 rounded-md text-xl font-bold text-purple-900 bg-pink-200"
					>
						Features
					</Link>
				</div>
				<div className="banner-right w-2/5">
					<img src={bannerImg} alt="banner" />
				</div>
			</div>
		</div>
	);
};

export default Banner;
