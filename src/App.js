import {
	Gallery,
	Header,
	Sponsors,
	Timeline,
	Eligibility,
	PastWinners,
	TeamView
} from "./views";
import { Footer, Navbar } from "./components";

function App() {
	return (
		<>
			<Navbar />
			<Header />
			<Eligibility />
			<Timeline />
			<Gallery />
			<Sponsors />
			<TeamView />
			<PastWinners />
			<Footer />
		</>
	);
}

export default App;
