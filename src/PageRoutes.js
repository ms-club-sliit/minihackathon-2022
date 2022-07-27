import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Register } from "./views";
import AwarenessSession from "./views/AwarenessSession";
import TicketView from "./components/TicketView";

const PageRoutes = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route
						path="/awareness-session/register"
						element={<AwarenessSession />}
					/>
					<Route path="/team/register" element={<Register />} />
					<Route path="/" element={<Home />} />
					<Route path="/test" element={<TicketView number={1} isTeam />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default PageRoutes;
