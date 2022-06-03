import { Gallery, Eligibility, Timeline } from "./views";
import { Navbar } from "./components";

function App() {
	return (
		<>
			<Navbar />
			<Eligibility />
			<Timeline />
			<Gallery />
		</>
	);
}

export default App;