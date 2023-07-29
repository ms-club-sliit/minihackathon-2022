import React from "react";
import CountdownTimer from "./CountdownTimer";
import Logo from "../../assets/logo/mini_hackathon_logo_2023.png";

const Countdown = () => {
	// const isAwarenessSession = false;
	let myDate = "30-08-2023";
	myDate = myDate.split("-");
	let newDate = new Date(myDate[2], myDate[1] - 1, myDate[0]);
	let month = newDate.toLocaleString("en-us", { month: "long" });
	// let date = newDate.getDate();

	return (
		<div className="flex justify-center flex-col md:flex-row px-3.5 mt-10 ">
			<div className="flex justify-center items-center md:p-10 ">
				<img
					src={Logo}
					alt="Mini Hackathon Logo"
					className="min-w-0 max-w-lg md:max-w-lg"
				/>
			</div>

			<div className="justify-center items-center mt-0 md:mt-0 md:p-10 ml-20">
				<div>
					<CountdownTimer
						countdownTimestampMs={1693333800000}
						month={month}
						date={30}
					/>
				</div>

				<div className="text-center mt-7">

						<a
							href="https://msclubsliit.org/"
							target="_blank"
							rel="noopener noreferrer"
							className=" bg-black text-white border border-black hover:bg-gray-100 hover:text-black rounded lg:text-lg pl-4 pr-4 pt-1 pb-1 transition duration-0 hover:duration-500"
						>
							  Awareness Session
						</a>
						</div>
				{ /*<div className="text-center mt-7">
					{isAwarenessSession ? (
						<a
							href="/awareness-session/register"
							target="_blank"
							rel="noopener noreferrer"
							className=" bg-white text-black border border-black hover:bg-gray-100 rounded lg:text-lg pl-4 pr-4 pt-1 pb-1 transition duration-0 hover:duration-500"
						>
							📣 Tickets for Awareness Session
						</a>
					) : (
						<a
							href="/team/register"
							target="_blank"
							rel="noopener noreferrer"
							className=" bg-white text-black border border-black hover:bg-gray-100 rounded lg:text-lg pl-4 pr-4 pt-1 pb-1 transition duration-0 hover:duration-500"
						>
							✍🏼 Register your team
						</a>
					)}
					</div> */}
			</div>
		</div>
	);
};

export default Countdown;
