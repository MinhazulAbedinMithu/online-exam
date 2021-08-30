import React from "react";
import { AiOutlineMessage, AiOutlineUser } from "react-icons/ai";
import CommonBtn from "./CommonBtn";

const About = () => {
	return (
		<div class="container px-5 py-8 mx-auto">
			<div class="flex flex-col text-center w-full mb-12">
				<h1 class="text-4xl title-font mb-4 font-bold text-purple-900">About Us</h1>
				<p class="lg:w-2/3 mx-auto leading-relaxed text-base">Online Exam is a company which provides online examination services to coaching institutes. At Online Exam portal any institute can conduct online exam with the help of powerful admin tools. Institue can schedule the exam, reuse the questions, check the results instantly. Online Exam is the best online exam software for coaching institutes. Online Exam offers a pocket friendly plan to small institutes as well as powerful tools to create online exams instantly.</p>
			</div>
			<div class="flex flex-wrap m-4">
				<div class="p-4 lg:w-1/2 md:w-full">
					<div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col bg-gradient-to-t from-blue-50 via-blue-300 to-blue-500">
						<div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 text-4xl">
							{<AiOutlineUser />}
						</div>
						<div class="flex-grow">
							<h2 class="text-gray-900 text-lg title-font font-medium mb-3">Want to Try Online Exam</h2>
							<p class="leading-relaxed text-base mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores maxime laborum asperiores beatae ratione vitae.</p>
							<CommonBtn destination="/signup" title="Sign up" />
						</div>
					</div>
				</div>
				<div class="p-4 lg:w-1/2 md:w-full">
					<div class="flex border-2 rounded-lg border-gray-200 border-opacity-50 p-8 sm:flex-row flex-col bg-gradient-to-t from-purple-50 via-purple-300 to-purple-500">
						<div class="w-16 h-16 sm:mr-8 sm:mb-0 mb-4 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 flex-shrink-0 text-4xl">
							{<AiOutlineMessage />}
						</div>
						<div class="flex-grow">
							<h2 class="text-gray-900 text-lg title-font font-medium mb-3">Want to Contact Us</h2>
							<p class="leading-relaxed text-base mb-4">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores maxime laborum asperiores beatae ratione vitae.</p>
							<CommonBtn destination="/contact" title="Contact us" />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default About;
