import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Register } from "./views";
import AwarenessSession from "./views/AwarenessSession";

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
					{/* <Route path="/popup" element={<TicketPopup
						ticketNo={1}
						isTeam={false}
						team={{
							team_name: "Hello",
							member01: {
								name: "Dehemi"
							}
						}}
						student={{
							studentItNo:"000",
							studentName: "Dehemi"
						}}
						display={true}
						ticketURL={"https://msclubsliit.org/"}
					/>} />
					<Route path="/share" element={<Share />} /> */}
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default PageRoutes;
