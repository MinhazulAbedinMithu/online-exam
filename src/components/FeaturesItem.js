import React from "react";

const FeaturesItem = ({ icon, heading }) => {
	return (
		<div className="p-4 rounded-md shadow-xl text-center h-44 w-44 break-words hover:bg-purple-500 hover:text-white">
			<div className="text-8xl text-center inline-block">{icon}</div>
			<h4 className="text-center font-bold">{heading}</h4>
		</div>
	);
};

export default FeaturesItem;
