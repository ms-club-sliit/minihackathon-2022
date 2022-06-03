import React from "react";
import CountdownTimer from "./CountdownTimer";
import Logo from "../../assets/logo/mini_hackathon_logo.png";

const Countdown = () => {
	var myDate = "22-07-2022";
	myDate = myDate.split("-");
	var newDate = new Date(myDate[2], myDate[1] - 1, myDate[0]);
	var month = newDate.toLocaleString("en-us", { month: "long" });
	var date = newDate.getDate();

	return (
		<div className="flex justify-center flex-col md:flex-row px-3.5 mt-10">
			{/* Logo */}
			<div className="flex justify-center items-center md:p-10">
				<img
					src={Logo}
					alt="Mini Hackathon Logo"
					className="min-w-0 max-w-lg md:max-w-lg"
				/>
			</div>

			<div className="flex justify-center items-center mt-10 md:mt-0 md:p-10">
				{/* Countdown */}
				<CountdownTimer
					countdownTimestampMs={newDate.getTime()}
					month={month}
					date={date}
				/>
			</div>
		</div>
	);
};

export default Countdown;
