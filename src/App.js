import { Gallery, Countdown, Sponsers, Timeline, Eligibility } from "./views";
import { Footer, Navbar } from "./components";

function App() {
	return (
		<>
			<Navbar />
			<Countdown />
			<Eligibility />
			<Timeline />
			<Gallery />
			<Sponsers />
			<Footer />
		</>
	);
}

export default App;
