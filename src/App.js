import { Gallery, Header, Sponsors, Timeline, Eligibility } from "./views";
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
			<Footer />
		</>
	);
}

export default App;
