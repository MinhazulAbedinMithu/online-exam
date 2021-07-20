import React from "react";
import FeaturesItem from "./FeaturesItem";
import { FaUserGraduate } from "react-icons/fa";

const FeatureShort = () => {
	return (
		<div className="container mx-auto">
			<h2>Features</h2>
			<div className="grid grid-cols-4 gap-1 justify-items-center">
				<FeaturesItem
					icon={<FaUserGraduate />}
					heading="Student Self Registration"
				/>
				<FeaturesItem
					icon={<FaUserGraduate />}
					heading="Student Self Registration"
				/>
				<FeaturesItem
					icon={<FaUserGraduate />}
					heading="Student Self Registration"
				/>
				<FeaturesItem
					icon={<FaUserGraduate />}
					heading="Student Self Registration"
				/>
				<FeaturesItem
					icon={<FaUserGraduate />}
					heading="Student Self Registration"
				/>
				<FeaturesItem
					icon={<FaUserGraduate />}
					heading="Student Self Registration"
				/>
				<FeaturesItem
					icon={<FaUserGraduate />}
					heading="Student Self Registration"
				/>
				<FeaturesItem
					icon={<FaUserGraduate />}
					heading="Student Self Registration"
				/>
			</div>
		</div>
	);
};

export default FeatureShort;
