import React from "react";
import { Navbar, Footer } from "../../components";
import Header from "../Header";
import Eligibility from "../Eligibility";
import Timeline from "../Timeline";
import Gallery from "../Gallery";
import Sponsors from "../Sponsors";

const Home = () => {
	return (
		<>
			<Navbar />
			<Header />
			<Eligibility />
			<Timeline />
			<Gallery />
			<Sponsors />
			<Footer />
		</>
	);
};

export default Home;
