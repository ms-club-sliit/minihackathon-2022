import React from "react";

const Eligibility = () => {
	return (
		<div id="eligibility">
			<div className="mt-1 mb-14">
				<div>
					<div className="flex justify-center block p-6 rounded-lg">
						<h1 className="font-bold text-3xl md:text-6xl text-center">
							Who Can Participate ?
						</h1>
					</div>
				</div>

				<div className="flex justify-center">
					<p className="text-center font-semibold text-neutral-700">
						Open to Students of Sri Lankan Institute of Information Technology
						(SLIIT)
						<br />
						from the following batches;
						<br />
					</p>
				</div>

				<div className="flex justify-center mt-2">
					<p className="mt-3 text-xl font-bold">
						All 1st Years | All 2nd Years
					</p>
				</div>

				<div className="flex justify-center">
					<a href="/">
						<button className="mt-4 w-48 h-10 rounded-md bg-black text-white">
							Get Full Instructions
						</button>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Eligibility;
