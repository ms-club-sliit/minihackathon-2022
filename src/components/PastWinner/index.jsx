import React from "react";

const PastWinner = (props) => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 mb-10 md:mb-20">
			{props.data.id % 2 === 0 ? (
				<>
					<div className="flex self-center px-7 hidden md:block">
						<p className="italic  text-xl md:text-2xl text-justify">{`"${props.data.description}"`}</p>
					</div>
					<div className="flex justify-end">
						<img
							src={props.data.imageUrl}
							alt="Mini Hackathon Logo"
							className="min-w-0 max-w-lg md:max-w-lg md:rounded-xl"
						/>
					</div>
					<div className="flex self-center px-7 block md:hidden">
						<p className="italic text-xl md:text-2xl text-justify">{`"${props.data.description}"`}</p>
					</div>
				</>
			) : (
				<>
					<div className="flex justify-start">
						<img
							src={props.data.imageUrl}
							alt="Mini Hackathon Logo"
							className="min-w-0 max-w-lg md:max-w-lg md:rounded-xl"
						/>
					</div>
					<div className="flex self-center px-7">
						<p className="italic text-xl md:text-2xl text-justify">{`"${props.data.description}"`}</p>
					</div>
				</>
			)}
		</div>
	);
};

export default PastWinner;
