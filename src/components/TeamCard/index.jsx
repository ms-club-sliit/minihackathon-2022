import React from "react";

const TeamCard = (props) => {
	return (
		<div className="md:w-1/3 md:ml-5 lg:w-96 p-4 bg-white border-inherit h-52 border rounded-lg mb-5">
			<div className="grid md:flex md:flex-row md:justify-between grid-rows-1 grid-cols-11 items-center p-4 md:p-0 pt-2">
				<div className="col-start-1 col-span-1">
					<img
						src={props.teamImage}
						className="max-w-sm md:h-[2.5rem] rounded-full h-10"
						alt="Team Cats"
					/>
				</div>
				<div className="col-start-3 col-span-6">
					<p className="font-bold md:text-xs">{props.team_name}</p>
				</div>
				<div className="col-start-7 col-span-2">
					<button className="w-24 md:w-20 whitespace-nowrap rounded-full md:text-xs border-2 px-3 py-1 text-base md:text-gray-800">
						{props.round + "st Round"}
					</button>
				</div>
			</div>
			<div className="p-4 pt-0 pl-2 md:pl-0">
				<p className="text-gray-900 text-base font-medium mb-1">
					{props.member01}
				</p>
				<p className="text-gray-900 text-base font-medium mb-1">
					{props.member02}
				</p>
				<p className="text-gray-900 text-base font-medium mb-1">
					{props.member03}
				</p>
				<p className="text-gray-900 text-base font-medium mb-1">
					{props.member04}
				</p>
			</div>
		</div>
	);
};

export default TeamCard;
