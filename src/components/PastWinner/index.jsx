import React from "react";
import IMG1 from "../../assets/pastwinners/BringTheSolution.png";

const PastWinner = (props) => {
	return (
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4 mb-5">
			{props.data.id % 2 == 0 ? (
				<>
					<div className="flex self-center px-7 hidden md:block">
						<p className="italic text-2xl text-justify">{props.data.description}</p>
					</div>
					<div className="flex justify-center">
						<img
							src={props.data.imageUrl}
							alt="Mini Hackathon Logo"
							className="min-w-0 max-w-lg md:max-w-lg rounded-xl"
						/>
					</div>
					<div className="flex self-center px-7 block md:hidden">
						<p className="italic text-2xl text-justify">{props.data.description}</p>
					</div>
				</>
			) : (
				<>
					<div className="flex justify-center ">
						<img
							src={props.data.imageUrl}
							alt="Mini Hackathon Logo"
							className="min-w-0 max-w-lg md:max-w-lg rounded-xl"
						/>
					</div>
					<div className="flex self-center px-7">
						<p className="italic text-2xl text-justify">{props.data.description}</p>
					</div>
				</>
			)}
		</div>
	);
};

export default PastWinner;
