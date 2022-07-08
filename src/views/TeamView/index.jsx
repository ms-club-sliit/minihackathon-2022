import React, { useEffect, useState } from "react";
import TeamCard from "../../components/TeamCard";
import teamCardData from "../../data/TeamCard.json";
import { SearchIcon } from "@heroicons/react/outline";
import PaginateButton from "../../components/PaginateButton";

const TeamView = () => {
	const [teamCards, setTeamCards] = useState([]);
	// const [teamName, setTeamName] = useState("");

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
		setTeamCards(teamCardData.data);
		const maxpages = Math.floor(teamCardData.data?.length / 6 + 1);
		setMaxViews(() => maxpages);
	}, []);

	const searchTeamByName = (teamName) => {
		if (teamName) {
			const searchedTeam = teamCardData.data.filter((team) =>
				team.team_name.toLowerCase().includes(teamName.toLowerCase())
			);
			setTeamCards(searchedTeam);
		} else {
			setTeamCards(teamCardData.data);
		}
	};

	return (
		<div id="teamsView">
			<div className="mb-14 lg:px-20">
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
				<div className="flex flex-wrap justify-between px-4 md:px-20">
					{currentTeamCards.map((singleTeamCardDetails) => (
						<TeamCard
							key={singleTeamCardDetails.team_id}
							teamImage={singleTeamCardDetails.team_image}
							round={singleTeamCardDetails.round}
							team_name={singleTeamCardDetails.team_name}
							member01={singleTeamCardDetails.members.Member1}
							member02={singleTeamCardDetails.members.Member2}
							member03={singleTeamCardDetails.members.Member3}
							member04={singleTeamCardDetails.members.Member4}
						/>
					))}
				</div>
				<div className="flex gap-2 justify-center w-100">
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
	);
};

export default TeamView;
