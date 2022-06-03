import { Gallery, Countdown, Timeline, Eligibility } from "./views";
import { Footer, Navbar } from "./components";

function App() {
	return (
		<>
			<Navbar />
			<Countdown />
			<Eligibility />
			<Timeline />
			<Gallery />
			<Footer />
		</>
	);
}

export default App;
