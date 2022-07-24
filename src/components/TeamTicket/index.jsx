import React, { useCallback, useRef } from "react";
import { toPng } from "html-to-image";
import { useEffect } from "react";
import { forwardRef } from "react";
import { useImperativeHandle } from "react";
import { useDisplaySize, usePerspectiveOnMouseMoveEffect } from "../../hooks";

/**
 *
 * @param {{
 * 		headerImage: "",
 * 		ticketNo: "",
 * 		team: "",
 * 		studentItNo: "",
 * 		title: "",
 * 		subTitle: "",
 * 		date: "",
 * 		url: "",
 *      onRender: "",
 * 		onClickSave: "",
 * 		save: ""
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
				studentNames={["Rusiru Abhisheak"]}
				url={SessionInfo.awarenessSessionLink}
			/>
 */
const TeamTicket = (props, this_ref) => {
	const isDebugModeOn = false;
	const ref = useRef(null);
	const htmlRef = useRef(null);
	const { onRender } = props;

	const size = useDisplaySize();

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
		if (onRender && ref.current) {
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

	const getMembers = useCallback(() => {
		if (!props.team) return [];

		let members = [];
		for (let i = 1; i <= 4; i++) {
			let member = props.team[`member0${i}`];

			if (member) members.push({ image: member.image, name: member.name });
		}

		return members;
	}, [props.team]);

	return (
		<div>
			<svg width={size === 0 ? 390 : 727} viewBox="0 0 727 400" ref={ref}>
				<foreignObject
					width={727}
					height={400}
					xmlns="http://www.w3.org/2000/svg"
				>
					<div
						ref={htmlRef}
						className="flex flex-row w-full h-full border-black border-[4px] rounded-[30px] ticket-team-bg bg-white"
					>
						<div className="h-full flex-grow pl-[54px] py-[51px]">
							<div className="flex flex-row h-full justify-center items-center">
								<div className="h-full max-w-[275px] mr-[30px]">
									<div className="flex flex-row items-center mb-[30px]">
										<div className="ticket-team-name line-clamp-2">
											{props.team && props.team.team_name}
										</div>
									</div>

									{getMembers().map((member, index) => {
										return (
											<div
												key={index}
												className="flex flex-row items-center mb-[14px]"
											>
												<div className="w-[40px] h-[40px] flex justify-center items-center flex-shrink-0 rounded-full bg-black mr-[8px] overflow-hidden">
													{member.image === "default" ? (
														<div className="text-white text-xl font-bold">
															{member.name[0].toUpperCase()}
														</div>
													) : (
														<img
															src={member.image}
															alt={member.name}
															className="object-fill h-full w-full"
														/>
													)}
												</div>
												<div className="ticket-team-member line-clamp-2">
													{member.name}
												</div>
											</div>
										);
									})}
								</div>
								<div className="flex-grow"></div>
								<div className="flex flex-col justify-center items-center mr-[40px]">
									<img
										width={190}
										src="/assets/mini_hackathon_logo.webp"
										alt="Mini hackathon logo"
										className="mb-[8px]"
									/>
									<div className="ticket-team-round mb-[28px]">1st Round</div>
									<div className="ticket-team-date mb-[6px]">
										Sunday, July 24, 2022
									</div>
									<div className="ticket-team-time mb-[16px]">
										7PM IST Online
									</div>
									<div className="w-[183px] h-[70px] flex-row justify-center">
										<div className="team-hosted-by whitespace-nowrap mr-[8px] text-sm mb-2">
											Hosted by
										</div>
										<div className="flex justify-center">
											<img
												src="/assets/ms_club_logo.png"
												alt="Mini hackathon logo"
												className="h-[40px] object-contain"
											/>
											<img
												src="/assets/fcsc_logo.png"
												alt="Mini hackathon logo"
												className="h-[40px] object-contain ml-2"
											/>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="team-dashed-line h-full"></div>
						<div className="w-[101px] team-number flex justify-center items-center">
							#{String(props.ticketNo).padStart(4, "0")}
						</div>
					</div>
				</foreignObject>
			</svg>
		</div>
	);
};

export default forwardRef(TeamTicket);
