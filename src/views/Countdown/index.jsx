import React from "react";
import CountdownTimer from "./CountdownTimer";
import Logo from "../../asserts/minihackthon2019/logo/mini_hackathon_logo.webp";

const Countdown = () => {
	var myDate = "22-07-2022";
	myDate = myDate.split("-");
	var newDate = new Date(myDate[2], myDate[1] - 1, myDate[0]);
	var month = newDate.toLocaleString("en-us", { month: "long" });
	var date = newDate.getDate();

	return (
		<div className="flex justify-around flex-col md:flex-row">
			{/* Logo */}
			<div className="flex justify-center items-center">
				<img
					src={Logo}
					alt="Mini Hackathon Logo"
					className="min-w-0 max-w-lg md:max-w-2xl"
				/>
			</div>

			{/* Countdown */}
			<CountdownTimer
				countdownTimestampMs={newDate.getTime()}
				month={month}
				date={date}
			/>
		</div>
	);
};

export default Countdown;
