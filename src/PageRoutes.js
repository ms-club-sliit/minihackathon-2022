import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Register } from "./views";
import AwarenessSession from "./views/AwarenessSession";
import TicketView from "./components/TicketView";
import Instructions from "./views/Instructions";

const PageRoutes = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route
					path="/awareness-session/register"
					element={<AwarenessSession />}
				/>
				<Route path="/team/register" element={<Register />} />
				<Route path="/" element={<Home />} />
				<Route path="/test" element={<TicketView number={1} isTeam />} />
				<Route path="/instructions" element={<Instructions />} />
			</Routes>
		</BrowserRouter>
	);
};

export default PageRoutes;
