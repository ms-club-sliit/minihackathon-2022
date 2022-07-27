import React from "react";
import CountdownTimer from "./CountdownTimer";
import Logo from "../../assets/logo/mini_hackathon_logo.webp";

const Countdown = () => {
	const isAwarenessSession = true;
	let myDate = "30-07-2022";
	myDate = myDate.split("-");
	let newDate = new Date(myDate[2], myDate[1] - 1, myDate[0]);
	let month = newDate.toLocaleString("en-us", { month: "long" });
	let date = newDate.getDate();

	return (
		<div className="flex justify-center flex-col md:flex-row px-3.5 mt-10">
			<div className="flex justify-center items-center md:p-10 md:w-1/2 logoDiv">
				<img
					src={Logo}
					alt="Mini Hackathon Logo"
					className="min-w-0 max-w-lg md:max-w-lg"
				/>
			</div>

			<div className="justify-center items-center mt-0 md:mt-0 md:p-10">
				<div>
					<CountdownTimer
						countdownTimestampMs={newDate.getTime()}
						month={month}
						date={date}
					/>
				</div>
				<div className="text-center mt-5">
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
				</div>
			</div>
		</div>
	);
};

export default Countdown;
