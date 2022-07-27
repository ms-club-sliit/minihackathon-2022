import React, { useState } from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { registerTeam, saveTicket, updateTicket } from "../../api/register";
import TicketPopup from "../../components/TicketPopup";
import sendEmail from "../../utils/emailSend";
import jsx2html from "../../utils/jsx2html";
import EmailTemplate from "./EmailTemplate";
import MemberForm2 from "./MemberForm2";
import NameForm from "./NameForm";

const override = {
	display: "block",
	margin: "0 auto",
	borderColor: "black",
};

const Register = () => {
	const [status, setStatus] = useState({ state: "none", message: "" });
	const [currentIndex, setCurrentIndex] = useState(0);

	// Members are scalable using the default value. (5 forms, with the first one being team name and team count.)
	const [memberCount, setMemberCount] = useState(4);

	const [submitFunctions, setSubmitFunctions] = useState({});
	const [resetFunctions, setResetFunctions] = useState({});

	const [, setTeamInfo] = useState({});
	const [ticket, setTicket] = useState({
		display: false,
		team: null,
		number: 0,
		link: "",
		onRender: null,
	});

	const resetStatus = (timeout) => {
		setTimeout(() => {
			setStatus({ state: "none", message: "" });
		}, timeout);
	};

	const finish = async (tInfo) => {
		setStatus({ state: "loading" });
		try {
			// Get the file objects and convert those to BLOB Urls
			let files = {};

			for (let i = 1; i <= 4; i++) {
				let member = tInfo[`member0${i}`];

				if (member) {
					try {
						files[`member0${i}`] = await fileToBlobURL(member.image[0]);
					} catch (e) {}
				}
			}

			let teamData = await registerTeam(tInfo);
			let emails = [];

			for (let i = 1; i <= 4; i++) {
				let member = teamData[`member0${i}`];

				if (member) {
					// Restore the file URLs back to the teamData
					member.image = files[`member0${i}`] || "default";
					emails.push(member.email);
				}
			}

			const onRender = async (dataURL) => {
				try {
					let url = await saveTicket(dataURL);
					let str = jsx2html(<EmailTemplate image={url} />);

					// update with the ticket image url
					await updateTicket(teamData.ref, url);

					// We don't care if the email gets to everyone
					try {
						let tasks = emails.map((v) =>
							sendEmail(v, "Mini hackathon by MS Club", str)
						);

						await Promise.all(tasks);
					} catch (e) {}

					for (const func of Object.values(resetFunctions)) {
						try {
							func();
						} catch (e) {}
					}
					setCurrentIndex(0);

					setStatus({
						state: "success",
						message:
							"Nice job 👏🏼. You have successfully submit the registration form",
					});

					setTicket((prevTicket) => {
						return { ...prevTicket, display: true, onRender: null };
					});
				} catch (error) {
					setStatus({
						state: "error",
						message:
							"Failed to register, Something went wrong. Try again later",
					});
				}

				resetStatus(3000);
			};

			setTicket({
				team: teamData,
				onRender,
				number: teamData.number,
			});
		} catch (e) {
			setStatus({
				state: "error",
				message: "Hmm... 🤔 something went wrong. Please try again",
			});

			resetStatus(3000);
		}
	};

	const next = async () => {
		const data = await submitFunctions[currentIndex]();
		if (!data) {
			return;
		}

		setTeamInfo((prev) => {
			let new_info;
			// Handle the teamName form
			if (currentIndex === 0) {
				new_info = { ...prev, ...data };
				setMemberCount(data.team_size);
			} else {
				new_info = { ...prev, [`member0${currentIndex}`]: data };
			}

			// Finish the form and submit
			if (currentIndex === memberCount) {
				finish(new_info);
				return new_info;
			}

			return new_info;
		});

		setCurrentIndex((prev) => {
			if (prev < memberCount) {
				let new_count = prev + 1;

				return new_count;
			}

			return prev;
		});
	};

	const previous = () => {
		setCurrentIndex((prev) => {
			if (prev > 0) {
				let new_count = prev - 1;
				return new_count;
			}

			return prev;
		});
	};

	const closePopup = () => {
		setTicket((prevTicket) => {
			return { ...prevTicket, display: false };
		});
	};

	const arr = new Array(memberCount).fill(null);

	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<h1 className="text-center font-bold text-4xl mb-[1.5em] mt-[1.5em]">
				TEAM REGISTRATION
			</h1>
			<div className="rounded-[5px] border-2 border-gray-400 overflow-hidden mb-5">
				<div className="w-[22em] md:w-[35em] p-[2em] md:py-[2em] relative overflow-hidden">
					<div
						className={`${status.state === "error" ? "bg-white" : "bg-white"} ${
							status.state === "none" ? "hidden" : ""
						} absolute flex justify-center items-center top-0 right-0 w-full h-full p-[3em] z-10`}
					>
						<p className="text-center font-bold text-4xl mb-[1.5em]">
							<BeatLoader
								color="#000000"
								loading={status.state === "error" ? false : true}
								cssOverride={override}
								size={20}
							/>
							{status.message}
						</p>
					</div>
					<div className="h-full w-full overflow-hidden">
						<div
							className="h-full relative flex flex-row transition-all"
							style={{
								transform: `translate(-${
									(100 / (memberCount + 1)) * currentIndex
								}%)`,
								width: `${100 * (memberCount + 1)}%`,
							}}
						>
							<NameForm
								formKey={0}
								width={`${100 / (memberCount + 1)}%`}
								handleSubmitFunc={(i, f) =>
									setSubmitFunctions((prev) => {
										return { ...prev, [i]: f };
									})
								}
								resetFunc={(i, f) =>
									setResetFunctions((prev) => {
										return { ...prev, [i]: f };
									})
								}
							/>
							{arr.map((v, i) => {
								return (
									<MemberForm2
										key={i}
										formKey={i + 1}
										width={`${100 / (memberCount + 1)}%`}
										handleSubmitFunc={(i, f) =>
											setSubmitFunctions((prev) => {
												return { ...prev, [i]: f };
											})
										}
										resetFunc={(i, f) =>
											setResetFunctions((prev) => {
												return { ...prev, [i]: f };
											})
										}
									/>
								);
							})}
						</div>
					</div>

					<div className="w-full flex items-center justify-center">
						<button
							onClick={previous}
							className="mt-2 w-48 h-10 rounded bg-black text-white hover:bg-gray-300 hover:text-black transition duration-0 hover:duration-500 mr-4"
						>
							Back
						</button>
						<button
							onClick={next}
							className={`${
								currentIndex === memberCount
									? "bg-[#F2E782] text-black"
									: "text-white"
							} mt-2 w-48 h-10 rounded bg-black hover:bg-gray-300 hover:text-black transition duration-0 hover:duration-500`}
						>
							{currentIndex === memberCount ? "Finish" : "Next"}
						</button>
					</div>
				</div>
				<div
					className="h-2 bg-[#F2E782] transition-all"
					style={{ width: `${(currentIndex * 100) / memberCount}%` }}
				></div>
			</div>
			<TicketPopup
				ticketNo={ticket.number}
				isTeam={true}
				team={ticket.team}
				display={ticket.display}
				onRender={ticket.onRender}
				onClose={closePopup}
			/>
		</div>
	);
};

export default Register;

function fileToBlobURL(file) {
	return new Promise((resolve, reject) => {
		let reader = new FileReader();
		reader.onload = function (e) {
			try {
				const blob = new Blob([new Uint8Array(e.target.result)], {
					type: file.type,
				});
				const url = URL.createObjectURL(blob);
				resolve(url);
			} catch (e) {
				reject(e);
			}
		};

		reader.onerror = function (e) {
			reject(e);
		};

		try {
			reader.readAsArrayBuffer(file);
		} catch (e) {
			reject(e);
		}
	});
}
