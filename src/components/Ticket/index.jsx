import React, { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import QRCode from "react-qr-code";
import moment from "moment";
import { useEffect } from "react";

/**
 *
 * @param {{
 * 		headerImage: "",
 * 		ticketNo: "",
 * 		studentName: "",
 * 		studentItNo: "",
 * 		title: "",
 * 		subTitle: "",
 * 		date: "",
 * 		url: "",
 *      onRender: ""
 * }} props
 * @property url - The url is required to generate the QR code
 * @example 	
	* <Ticket
				headerImage={logo}
				title="Mini Hackathon 2022"
				subTitle="Awareness Session 📣"
				date={new Date()}
				ticketNo="334535"
				studentItNo="IT19104218"
				studentName="Rusiru Abhisheak"
				url={SessionInfo.awarenessSessionLink}
			/>
 */
const Ticket = (props) => {
	const isDebugModeOn = false;
	const ref = useRef(null);

	useEffect(() => {
		if(props.onRender) {
			toPng(ref.current, { cacheBust: true })
			.then((dataUrl) => {
				props.onRender(dataUrl);
			})
			.catch((err) => {
				isDebugModeOn && console.log(err);
			});
		}
	},[ref, isDebugModeOn, props.onRender]); 

	const onButtonClick = useCallback(() => {
		if (ref.current === null) {
			return;
		}

		toPng(ref.current, { cacheBust: true })
			.then((dataUrl) => {
				const link = document.createElement("a");
				link.download = `${props.studentItNo}.png`;
				link.href = dataUrl;
				link.click();
			})
			.catch((err) => {
				isDebugModeOn && console.log(err);
			});
	}, [ref, isDebugModeOn, props.studentItNo]);

	return (
		<div>
			<div className="m-6 flex justify-center">
				<div
					ref={ref}
					className="bg-white w-full rounded-lg border-2 border-gray-600"
				>
					<div className="p-4">
						<div className="grid grid-cols-2 gap-0">
							<div>
								<img src={props.headerImage} alt="logo" width={100} />
								<div className="flex font-semibold text-xl">{props.title}</div>
								<div>{props.subTitle}</div>
								<div>{moment(props.date).format("LLL")}</div>
								<div className="text-2xl font-bold mt-3">
									№ {props.ticketNo}
								</div>
								<div className="flex">
									<div>{props.studentItNo}</div>
									<div className="ml-5">{props.studentName}</div>
								</div>
							</div>
							<div>
								<div className="flex justify-end">
									<QRCode value={props.url} size={180} />
								</div>
								<div className="flex justify-end">
									<small className="">Scan the code to join</small>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className="flex justify-center">
				<button
					onClick={onButtonClick}
					className="bg-black text-white hover:bg-gray-300 hover:text-black transition duration-0 hover:duration-500 rounded border-0 pt-2 pb-2 pl-4 pr-4"
				>
					Save My Ticket
				</button>
			</div>
		</div>
	);
};

export default Ticket;
