import React from "react";

const Sponsers = (props) => {
	return (
		<div id="sponsers" className="lg:px-20">
			<h1 className="text-4xl md:text-5xl text-center my-10 font-bold">
				{props.type} Sponsers
			</h1>
			<div
				className={`grid grid-cols-1 md:grid-cols-${
					props.sponsors.data.length < 4 ? props.sponsors.data.length : 4
				} gap-4`}
			>
				{props.sponsors.data.map((sponsor) => (
					<div className="flex justify-center my-5">
						<a href="https://msclubsliit.org/" className="mb-4 sm:mb-0">
							<img
								src={sponsor.imageUrl}
								className="h-40"
								alt={sponsor.companyName}
							/>
						</a>
					</div>
				))}
			</div>
		</div>
	);
};

export default Sponsers;
