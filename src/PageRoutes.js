import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home, Register } from "./views";

const PageRoutes = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					{/* <Route path="/awareness-session/register" element={} /> */}
					<Route path="/team/register" element={<Register />} />
					<Route path="/" element={<Home />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default PageRoutes;
