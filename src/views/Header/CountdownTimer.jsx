import { useState, useEffect } from "react";
import { getRemainingTimeUntilMsTimestamp } from "../../utils/countdownTimerUtils";

const defaultRemainingTime = {
	seconds: "00",
	minutes: "00",
	hours: "00",
	days: "00",
};

const CountdownTimer = ({ countdownTimestampMs, month, date }) => {
	const [remainingTime, setRemainingTime] = useState(defaultRemainingTime);

	useEffect(() => {
		const intervalId = setInterval(() => {
			updateRemainingTime(countdownTimestampMs);
		}, 1000);
		return () => clearInterval(intervalId);
	}, [countdownTimestampMs]);

	function updateRemainingTime(countdown) {
		setRemainingTime(getRemainingTimeUntilMsTimestamp(countdown));
	}

	return (
		<div className="flex flex-col justify-center text-center">
			<div className="font-extrabold text-6xl md:text-8xl mb-6">
				{month} {date}
			</div>

			<div className="flex flex-row justify-center">
				<div>
					<div className="font-bold text-2xl sm:text-3xl md:text-4xl p-4 border rounded-l-lg">
						{remainingTime.days}
					</div>
					<div className="">Day</div>
				</div>

				<div>
					<div className="font-bold text-2xl sm:text-3xl md:text-4xl p-4 border-t border-b border-r">
						{remainingTime.hours}
					</div>
					<div className="">Hour</div>
				</div>

				<div>
					<div className="font-bold text-2xl sm:text-3xl md:text-4xl p-4 border-t border-b border-r">
						{remainingTime.minutes}
					</div>
					<div className="">Min</div>
				</div>

				<div>
					<div className="font-bold text-2xl sm:text-3xl md:text-4xl p-4 border-t border-b border-r rounded-r-lg">
						{remainingTime.seconds}
					</div>
					<div className="">Sec</div>
				</div>
			</div>
		</div>
	);
};

export default CountdownTimer;
