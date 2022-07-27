import React, { useEffect, useState } from "react";
import TeamCard from "../../components/TeamCard";
import { SearchIcon } from "@heroicons/react/outline";
import PaginateButton from "../../components/PaginateButton";
import { getAllTeams } from "../../api/team";

const TeamView = () => {
	const [teamCards, setTeamCards] = useState([]);
	const [teamData, setTeamData] = useState([]);

	const [currentView, setCurrentView] = useState(1);
	const [maxViews, setMaxViews] = useState(0);
	const PAGINATE_LIMIT = 6;

	const [currentTeamCards, setCurrentTeamCards] = useState([]);

	useEffect(() => {
		const start = currentView * PAGINATE_LIMIT - PAGINATE_LIMIT;
		const end = currentView * PAGINATE_LIMIT;

		setCurrentTeamCards(teamCards.slice(start, end));
	}, [currentView, teamCards]);

	const handlePaginateClick = (direction) => {
		if (direction === "NEXT" && currentView < maxViews)
			setCurrentView(currentView + 1);

		if (direction === "PREV" && currentView > 1)
			setCurrentView(currentView - 1);
	};

	useEffect(() => {
		async function effect() {
			let data = await getAllTeams(1);
			setTeamData(data);

			// Initially set all teams in view
			setTeamCards(data);
			const maxpages = Math.floor(data?.length / 6 + 1);
			setMaxViews(() => maxpages);
		}
		effect();
	}, []);

	const searchTeamByName = (teamName) => {
		if (teamName) {
			const searchedTeam = teamData.data.filter((team) =>
				team.team_name.toLowerCase().includes(teamName.toLowerCase())
			);
			setTeamCards(searchedTeam);
		} else {
			setTeamCards(teamData);
		}
	};

	return (
		<>
			<div id="teams">
				<div className="lg:px-20">
					<h1 className="text-4xl md:text-5xl text-center mb-5 mt-10 font-bold">
						Teams
					</h1>
					<div className="flex justify-center mb-6 ml-8 mr-8 md:px-20">
						<SearchIcon className="w-6 h-6 text-gray-600 relative top-3 left-10" />
						<input
							type="text"
							className="w-3/4 p-2 border-2 border-gray-300 rounded-lg pl-12"
							placeholder="Team name"
							onChange={(e) => {
								searchTeamByName(e.target.value);
							}}
						/>
						<button
							type="button"
							className="bg-black text-white hover:bg-gray-300 hover:text-black transition duration-0
                            hover:duration-500 rounded border-0 pt-2 pb-2 pl-4 pr-4 ml-3"
							onClick={searchTeamByName}
						>
							Search
						</button>
					</div>
					<div className="flex flex-wrap justify-between md:justify-center sm:justify-center px-4 md:px-20">
						<div className="flex flex-wrap px-4 justify-center md:px-20">
							{currentTeamCards.map((singleTeamCardDetails) => (
								<div key={singleTeamCardDetails.team_id} className="p-3">
									<TeamCard
										round={singleTeamCardDetails.round}
										team_name={singleTeamCardDetails.team_name}
										member01={singleTeamCardDetails.members.Member1}
										member02={singleTeamCardDetails.members.Member2}
										member03={singleTeamCardDetails.members.Member3}
										member04={singleTeamCardDetails.members.Member4}
										team_id={singleTeamCardDetails.team_id}
									/>
								</div>
							))}
						</div>
						<div className="flex gap-2 justify-center w-100 mt-3">
							<PaginateButton
								handleOnClick={() => handlePaginateClick("PREV")}
								disabled={currentView === 1}
								title="PREV"
							/>

							<PaginateButton
								handleOnClick={() => handlePaginateClick("NEXT")}
								disabled={currentView === maxViews}
								title="NEXT"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default TeamView;
