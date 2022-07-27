import React, { useImperativeHandle, useRef } from "react";
import { toPng } from "html-to-image";
import QRCode from "react-qr-code";
import moment from "moment";
import { useEffect } from "react";
import { forwardRef } from "react";
import { useDisplaySize, usePerspectiveOnMouseMoveEffect } from "../../hooks";

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
const Ticket = (props, this_ref) => {
	const isDebugModeOn = false;
	const ref = useRef(null);
	const htmlRef = useRef(null);
	const { onRender } = props;

	usePerspectiveOnMouseMoveEffect(ref);

	useImperativeHandle(this_ref, () => ({
		renderTicket: () => {
			if (ref.current === null) {
				return;
			}

			ref.current.style.transform = "none";
			return toPng(htmlRef.current, { cacheBust: true });
		},
	}));

	useEffect(() => {
		if (onRender) {
			ref.current.style.transform = "none";

			toPng(ref.current, { cacheBust: true })
				.then((dataUrl) => {
					ref.current.style.transform = "none";
					onRender(dataUrl);
				})
				.catch((err) => {
					isDebugModeOn && console.log(err);
				});
		}
	}, [ref, isDebugModeOn, onRender]);

	const size = useDisplaySize();

	return (
		<div>
			<svg width={size === 0 ? 390 : 727} viewBox="0 0 500 250" ref={ref}>
				<foreignObject
					width={500}
					height={250}
					xmlns="http://www.w3.org/2000/svg"
				>
					<div
						className="flex justify-center w-[500px] h-[250px]"
						ref={htmlRef}
					>
						<div className="bg-white w-full h-full rounded-lg border-2 border-gray-600">
							<div className="p-4">
								<div className="grid grid-cols-2 gap-0">
									<div>
										<div className="flex">
											<img src={props.headerImage} alt="logo" width={100} />
											<img
												src={props.headerImage2}
												alt="logo"
												width={100}
												className="pl-2"
											/>
										</div>
										<div className="flex font-semibold text-xl mt-2">
											{props.title}
										</div>
										<div>{props.subTitle}</div>
										<div>{moment(props.date).format("LLL")}</div>
										<div className="text-2xl font-bold mt-3">
											№ {String(props.ticketNo).padStart(4, "0")}
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
				</foreignObject>
			</svg>
		</div>
	);
};

export default forwardRef(Ticket);
