import React from "react";
import { PastWinner } from "../../components";
import PastWinnersData from "../../data/PastWinners.json";

const PastWinners = () => {
	return (
		<div className="lg:px-20 my-20">
			<div>
				<div className="flex justify-center p-6 rounded-lg my-10">
					<h1 className="font-bold text-4xl md:text-5xl text-center">
						Past Winners
					</h1>
				</div>
			</div>
			{PastWinnersData.data.map((winner) => (
				<PastWinner data={winner} />
			))}
		</div>
	);
};

export default PastWinners;
