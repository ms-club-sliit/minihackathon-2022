import React from "react";

const Teamcard = () => {
	return (
		<div class="block px-5 py-3 rounded-lg  bg-white md:w-[36rem]  md:h-[18rem] border-2 absolute">
			<div className="grid grid-rows-1 grid-cols-9 gap-4 md:flex items-center p-4">
				<div class="col-span-1">
					<img
						src="https://www.drodd.com/images16/black-color13.jpg"
						class="max-w-sm md:h-[4rem] rounded-full h-20"
						alt="Team Cats"
					/>
				</div>
				<div class="col-span-4">
					<h1 className="ml-4 pl-3 text-3xl font-bold mr-14">Team Cats</h1>
				</div>
				<div>
					<button class=" ml-8 whitespace-nowrap rounded-full border-2 px-3 py-1 text-lg md:text-gray-800">
						1st Round
					</button>
				</div>
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
};

export default Teamcard;
