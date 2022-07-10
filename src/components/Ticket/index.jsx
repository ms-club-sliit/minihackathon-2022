import React, { useImperativeHandle, useRef } from "react";
import { toPng } from "html-to-image";
import QRCode from "react-qr-code";
import moment from "moment";
import { useEffect } from "react";
import { forwardRef } from "react";

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
	const { onRender } = props;

	const onMove = (e) => {
		const ticketElm = ref.current;
		const { x, y, width, height } = ticketElm.getBoundingClientRect();
		const centerPoint = { x: x + width / 2, y: y + height / 2 };

		const degreeX = (e.clientY - centerPoint.y) * 0.008;
		const degreeY = (e.clientX - centerPoint.x) * -0.008;

		ticketElm.style.transform = `perspective(500px) rotateX(${degreeX}deg) rotateY(${degreeY}deg)`;
	}

	useEffect(() => {
        window.addEventListener('mousemove', onMove);
		return () => {
			window.removeEventListener('mousemove', onMove);
		}
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	useImperativeHandle(this_ref, () => ({
		renderTicket: () => {
			if (ref.current === null) {
				return;
			}

			ref.current.style.transform = "none";
			return toPng(ref.current, { cacheBust: true });
		}
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
		</div>
	);
};

export default forwardRef(Ticket);
