import React from "react";
import { Navbar, Footer } from "../../components";
import Header from "../Header";
import Eligibility from "../Eligibility";
import Timeline from "../Timeline";
import Gallery from "../Gallery";
import PastWinners from "../PastWinners";

const Home = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Eligibility />
			<Timeline />
			{/* <Sponsors type="Platinum" sponsors={GoldSponsors} />
			<TeamView title="Round 1" teamsList={teamCardData} /> */}
			<Gallery />
			{/* <Sponsors type="Gold" sponsors={GoldSponsors} /> */}
			<PastWinners />
			{/* <Sponsors type="Silver" sponsors={GoldSponsors} /> */}
			<Footer />
		</>
	);
};

export default Home;
