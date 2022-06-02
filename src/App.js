import { Gallery, Rules } from "./views";
import { Navbar } from "./components";
import TeamCard from "./components/TeamCard/TeamCard";

function App() {
	return (
		<>
			<Navbar />
			<Rules />
			<Gallery />
			<TeamCard/>
		</>
	);
}

export default App;
