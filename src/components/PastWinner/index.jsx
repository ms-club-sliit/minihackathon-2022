import React from "react";
import IMG1 from "../../assets/pastwinners/BringTheSolution.png";

const PastWinner = (props) => {
	return (
		<div class="grid grid-cols-1 md:grid-cols-2 gap-4">
			<div className="flex justify-center ">
				<img
					src={props.data.imageUrl}
					alt="Mini Hackathon Logo"
					className="min-w-0 max-w-lg md:max-w-lg rounded-xl"
				/>
			</div>
			<div className="flex self-center px-7">
				<p className="italic text-2xl">{props.data.description}</p>
			</div>
		</div>
	);
};

export default PastWinner;
