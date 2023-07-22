import React from "react";

const Eligibility = () => {
	return (
		<div id="eligibility">
			<div className="mb-14">
				<div>
					<div className="flex justify-center p-6 rounded-lg">
						<div className="font-bold text-3xl md:text-4xl lg:text-5xl text-center">
							Who Can Participate ?
						</div>
					</div>
				</div>

				<div className="flex justify-center">
					<div className="text-center text-neutral-800 lg:text-xl">
						Open to Students of Sri Lankan Institute of Information Technology
						(SLIIT) from the following batches
					</div>
				</div>

				<div className="text-center mt-2">
					<div className="pt-2 text-xl font-medium">
						🎓 All 1st Year Students
					</div>
					<div className="pt-2 text-xl font-medium">
						🎓 All 2nd Year Students
					</div>
					<div className="pt-2 text-xl font-medium">
						🎓 All 3rd Year 1st Semester Students
					</div>
				</div>

				<div className="flex justify-center">
					<button className="mt-4 w-48 h-10 rounded bg-black text-white hover:bg-gray-300 hover:text-black transition duration-0 hover:duration-500">
						<a
							href="http://bit.ly/minihackathon23Guideline"
							target="_blank"
							rel="noopener noreferrer"
						>
							Get Full Instructions{" "}
						</a>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Eligibility;
