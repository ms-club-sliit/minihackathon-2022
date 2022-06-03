import React from "react";

const Rules = () => {
	return (
		<div>
			<div className="my-10">
				<div>
					<div className="flex justify-center p-6 rounded-lg">
						<h1 className="font-bold text-4xl text-center">
							Who Can Participate ?
						</h1>
					</div>
				</div>

				<div className="flex justify-center">
					<p className="text-center text-xl max-w-2xl">
						Open to Students of Sri Lankan Institute of Information Technology
						(SLIIT) from the following batches
					</p>
				</div>

				<div className="mt-2 text-center">
					<div className="text-2xl">🎓 All 1st Year Students</div>
					<div className="text-2xl pt-1">🎓 All 2nd Year Students</div>
					<div className="text-2xl pt-1">
						🎓 All 3rd Year 1st Semester Students
					</div>
				</div>

				<div className="flex justify-center">
					<a href="/">
						<button className="mt-4 w-48 h-10 font-medium rounded-md bg-black text-white hover:bg-gray-300 hover:text-black">
							Get Full Instructions
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Rules;
