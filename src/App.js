import {Timeline} from "./views";

function App() {
	return (
		<div className="grid place-items-center mt-10">
			<h1 className="text-3xl font-bold">Mini Hackathon 2022</h1>
			<h2 className="text-2xl mt-5">Coding Standards</h2>
			<div className="grid place-items-start">
				<ul className="list-disc">
					<li>
						First letter of the React component should be capital. Ex:
						<code>Header.jsx, TeamCard.jsx</code>
					</li>
					<li>Code should not contain unused variables</li>
					<li>
						Use{" "}
						<a
							href="https://tailwindui.com/documentation"
							target="_blank"
							rel="noreferrer"
							className="text-blue-500"
						>
							tailwind CSS
						</a>{" "}
						for styling
					</li>
				</ul>
			</div>
			<div>
				<Timeline />
			</div>
		</div>
	);
}

export default App;
