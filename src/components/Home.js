import React from "react";
import Banner from "./Banner";
import Contact from "./Contact";
import FeatureShort from "./FeatureShort";
import Testimonial from "./Testimonial";

const Home = () => {
	return (
		<div>
			<Banner />
			<FeatureShort />
			<Testimonial />
			<Contact />
		</div>
	);
};

export default Home;
