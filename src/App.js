import { Gallery, Countdown, Timeline, Eligibility } from "./views";
import { Navbar } from "./components";

function App() {
	return (
		<>
			<Navbar />
			<Countdown />
			<Eligibility />
			<Timeline />
			<Gallery />
		</>
	);
}

export default App;
