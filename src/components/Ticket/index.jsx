import React, { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import QRCode from "react-qr-code";
import SessionData from "../../data/Sessions.json";
import MiniHackathonLogo from "../../assets/logo/mini_hackathon_logo.png";

const Ticket = () => {
	const isDebugModeOn = false;
	const ref = useRef(null);

	const onButtonClick = useCallback(() => {
		if (ref.current === null) {
			return;
		}

		toPng(ref.current, { cacheBust: true })
			.then((dataUrl) => {
				const link = document.createElement("a");
				link.download = "my-image-name.png";
				link.href = dataUrl;
				link.click();
			})
			.catch((err) => {
				isDebugModeOn && console.log(err);
			});
	}, [ref, isDebugModeOn]);

	return (
		<div>
			<div className="m-6">
				<div
					ref={ref}
					className="bg-white w-2/6 rounded-lg border-2 border-gray-600"
				>
					<div className="p-4">
						<div className="grid grid-cols-2 gap-0">
							<div>
								<img src={MiniHackathonLogo} alt="logo" width={100} />
								<div className="flex font-semibold text-xl">
									Mini Hackathon 2022
								</div>
								<div>Awareness Session 📣</div>
								<div>26th July @ 7.00 PM</div>
								<div className="text-2xl font-bold mt-3">№ 014747</div>
								<div>Test User</div>
							</div>
							<div>
								<div className="flex justify-end">
									<QRCode value={SessionData.awarenessSessionLink} size={180} />
								</div>
								<div className="flex justify-end">
									<small className="">Scan the code to join</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<button onClick={onButtonClick}>Click me</button>
		</div>
	);
};

export default Ticket;
