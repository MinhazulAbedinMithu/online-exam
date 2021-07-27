import React from "react";

const FeaturesItem = ({ icon, heading }) => {
	return (
		<div className="items-center border-2 p-4 rounded-md bg-pink-300 text-center">
			<div className="text-8xl text-center">{icon}</div>
			<h4>{heading}</h4>
		</div>
	);
};

export default FeaturesItem;
