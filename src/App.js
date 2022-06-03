import { Gallery, Rules, Timeline } from "./views";
import { Navbar, TeamCard } from "./components";

function App() {
	return (
		<>
			<Navbar />
			<Rules />
			<Timeline />
			<Gallery />
			<TeamCard />
		</>
	);
}

export default App;
