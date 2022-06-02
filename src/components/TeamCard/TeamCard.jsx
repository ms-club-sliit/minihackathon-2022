import React from "react";

export default function TeamCard() {
	return (
		<div class="block px-6 py-4 rounded-lg  bg-white md:w-[36rem]  md:h-[18rem] border-2 object-cover">
			<div className="md:flex items-center px-8 py-2">
				<img
					src="https://www.drodd.com/images16/black-color13.jpg"
					class="max-w-sm  md:h-[5rem] rounded-full object-cover h-48"
					alt="Team Cats"
				/>
				<h1 className=" ml-5 text-3xl font-bold mr-12">Team Cats</h1>
				<button class="ml-8 rounded-full border-2 px-5 py-1 text-lg md:text-gray-800 object-cover">
					1st Round
				</button>
			</div>
			<div class="p-4">
				<p class="text-gray-900 text-xl font-medium mb-2">Senura Jayadeva</p>
				<p class="text-gray-900 text-xl font-medium mb-2">
					Lasal Hettiarachchi
				</p>
				<p class="text-gray-900 text-xl font-medium mb-2">Rusiru Abhishek</p>
				<p class="text-gray-900 text-xl font-medium mb-2">Dilmi Palliyaguru</p>
			</div>
		</div>
	);
}
