import {
	Gallery,
	Header,
	Sponsors,
	Timeline,
	Eligibility,
	PastWinners,
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
			<PastWinners />
			<Footer />
		</>
	);
}

export default App;
