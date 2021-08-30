import React from "react";
import FeaturesItem from "./FeaturesItem";
import { FaCalculator, FaCheckCircle } from "react-icons/fa";
import { BiTimer, BiTimeFive } from "react-icons/bi";
import { BsQuestionCircleFill, BsCardImage } from "react-icons/bs";
import { RiWifiOffLine } from "react-icons/ri";
import { AiFillLock } from "react-icons/ai";
import CommonBtn from "./CommonBtn";

const FeatureShort = () => {
	return (
		<div className="container mx-auto mb-9">
			<h2 className="text-center my-9 text-4xl font-bold text-purple-900">Features</h2>
			<div className="grid gap-y-5 md:grid-cols-4 justify-items-center mb-20">
				<FeaturesItem
					icon={<AiFillLock />}
					heading="Screen Lock"
				/>
				<FeaturesItem
					icon={<BiTimer />}
					heading="Set Timer"
				/>
				<FeaturesItem
					icon={<FaCalculator />}
					heading="Calculator"
				/>
				<FeaturesItem
					icon={<BsQuestionCircleFill />}
					heading="Reuseable Question"
				/>
				<FeaturesItem
					icon={<RiWifiOffLine />}
					heading="Offline Mode"
				/>
				<FeaturesItem
					icon={<FaCheckCircle />}
					heading="Instant Result"
				/>
				<FeaturesItem
					icon={<BiTimeFive />}
					heading="Set Duration"
				/>
				<FeaturesItem
					icon={<BsCardImage />}
					heading="Support Images"
				/>
			</div>
			<div className="text-center">
			<CommonBtn destination="/features" title="See All Features" />
			</div>
		</div>
	);
};

export default FeatureShort;
