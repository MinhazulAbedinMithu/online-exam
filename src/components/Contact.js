import React from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import CommonBtn from "./CommonBtn";

const Contact = () => {
	return (
		<div>
			<div class="container px-5 py-8 mx-auto">
				<div class="flex flex-col text-center w-full mb-12">
					<h1 class="text-4xl title-font mb-4 font-bold text-purple-900">Contact Us</h1>
					<p class="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify.</p>
				</div>
				<div class="lg:w-1/2 md:w-2/3 mx-auto">
					<div class="flex flex-wrap -m-2">
						<div class="p-2 w-1/2">
							<div class="relative">
								<label for="name" class="leading-7 text-sm text-gray-600">Name</label>
								<input type="text" id="name" name="name" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
							</div>
						</div>
						<div class="p-2 w-1/2">
							<div class="relative">
								<label for="email" class="leading-7 text-sm text-gray-600">Email</label>
								<input type="email" id="email" name="email" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-300 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
							</div>
						</div>
						<div class="p-2 w-full">
							<div class="relative">
								<label for="message" class="leading-7 text-sm text-gray-600">Message</label>
								<textarea id="message" name="message" class="w-full bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-indigo-300 focus:bg-white focus:ring-2 focus:ring-indigo-300 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
							</div>
						</div>
						<div class="p-2 w-full text-center">
						<CommonBtn destination="mailto:example@email.com" title="Submit" />
						</div>
						<div class="p-2 w-full pt-8 mt-8 border-t border-gray-200 text-center">
						<a href="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F%3Ftab%3Drm%26ogbl&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" target="_blank" class="text-gray-500 hover:text-indigo-500">example@email.com</a>
							<p class="leading-normal my-5">49 Smith St. <br />Saint Cloud, MN 56301</p>
							<span class="inline-flex">
								<a href="https://www.facebook.com/" target="_blank" class="text-gray-500 text-xl hover:text-purple-700">
									{<FaFacebook />}
								</a>
								<a href="https://twitter.com/?lang=en" target="_blank" class="ml-4 text-gray-500 text-xl hover:text-purple-700">
									{<FaTwitter />}
								</a>
								<a href="https://www.instagram.com/?hl=en" target="_blank" class="ml-4 text-gray-500 text-xl hover:text-purple-700">
									{<FaInstagram />}
								</a>
								<a href="https://www.instagram.com/?hl=en" target="_blank" class="ml-4 text-gray-500 text-xl hover:text-purple-700">
									{<FaYoutube />}
								</a>
							</span>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
