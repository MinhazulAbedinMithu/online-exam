import React from "react";
import AwesomeSlider from "react-awesome-slider";
import withAutoplay from "react-awesome-slider/dist/autoplay";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import "../App.css";

const AutoplaySlider = withAutoplay(AwesomeSlider);

const BannerSlider = () => {
	return (
		<AutoplaySlider
			className=""
			play={true}
			cancelOnInteraction={false}
			interval={6000}
			animation="cubeAnimation"
		>
			<div>
				<h2>This is Slide 1</h2>
			</div>
			<div>
				<h2>This is Slide 2</h2>
			</div>
			<div>
				<h2>This is Slide 3</h2>
			</div>
		</AutoplaySlider>
	);
};

export default BannerSlider;
