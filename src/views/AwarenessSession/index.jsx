import React from "react";
import BeatLoader from "react-spinners/BeatLoader";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import {
	registerAwarenessSession,
	saveTicket,
	updateTicket,
} from "../../api/register";
import { useState } from "react";
import { EmailExists } from "../../api/errors/errors";
import sendEmail from "../../utils/emailSend";
import jsx2html from "../../utils/jsx2html";
import EmailTemplate from "./EmailTemplate";
import TicketPopup from "../../components/TicketPopup";

const override = {
	display: "block",
	margin: "0 auto",
	borderColor: "black",
};

const awarenessSchema = yup.object().shape({
	name: yup.string().required("Name is required."),
	email: yup.string().email().required("Email is required."),
	contact_no: yup
		.string()
		.matches(/[0-9]+/gi, "Enter Numbers only.")
		.min(10, "Contact Number must be at least 10 digits")
		.required("Contact number is required"),
	it_no: yup.string().required("SLIIT ID is required."),
	academic_year: yup.string().required("Academic Year is required."),
	faculty: yup.string().required("Faculty is required."),
});

function AwarenessSession() {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(awarenessSchema),
	});

	const [status, setStatus] = useState({ state: "none", message: "" });
	const [ticket, setTicket] = useState({
		display: false,
		it_no: "",
		number: 0,
		name: "",
		link: "",
		onRender: null,
	});

	const resetStatus = (timeout) => {
		setTimeout(() => {
			setStatus({ state: "none", message: "" });
		}, timeout);
	};

	const onSubmit = async (member_data) => {
		try {
			setStatus({ state: "loading" });

			// Registers use and Adds new number and document ref to member details
			let new_data = await registerAwarenessSession(member_data);

			const onRender = async (dataURL) => {
				try {
					let url = await saveTicket(dataURL);
					let str = jsx2html(<EmailTemplate image={url} />);

					// update with the ticket image url
					await updateTicket(new_data.ref, url);

					try {
						await sendEmail(
							new_data.email,
							"Mini hackathon awareness session",
							str
						);
					} catch (error) {
						console.log("Registration success, but email sending failed");
					}

					setStatus({
						state: "success",
						message:
							"Success, You have successfully registered for the Awareness Session.",
					});

					setTicket((prevTicket) => {
						return { ...prevTicket, display: true };
					});

					reset();
				} catch (error) {
					setStatus({
						state: "success",
						message:
							"Success, You have successfully registered for the Awareness Session.",
					});
				}

				resetStatus(3000);
			};

			setTicket({
				...new_data,
				onRender,
				number: new_data.number,
			});
		} catch (error) {
			if (error instanceof EmailExists) {
				setStatus({
					state: "error",
					message: "Email already exists. Try again",
				});
				// TODO - show the already existing ticket
			} else {
				setStatus({
					state: "success",
					message: "Success, You have successfully registered for the Awareness Session.",
				});
			}

			resetStatus(5000);
		}
	};

	const closePopup = () => {
		setTicket((prevTicket) => {
			return { ...prevTicket, display: false };
		});
	};

	return (
		<>
			<div className="fixed z-[-1] w-screen h-screen top-0 left-0 bg-white"></div>
			<div className="w-full h-full flex flex-col justify-center items-center">
				<h1 className="text-center font-bold text-4xl mb-[1.5em] mt-[1.5em]">
					AWARENESS SESSION REGISTRATION
				</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div className="w-[22em] md:w-[35em] rounded-[5px] p-[2em] md:py-[2em] relative border-2 border-gray-400 overflow-hidden mb-5">
						<div
							className={`${
								status.state === "error" ? "bg-white" : "bg-white"
							} ${
								status.state === "none" ? "hidden" : ""
							} absolute flex justify-center items-center top-0 right-0 w-full h-full p-[3em]`}
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
						<label className="block font-semibold text-[#969696] text-[1em] md:text-left mb-1 md:mb-0 pr-4">
							Name
						</label>
						<input
							{...register("name")}
							type="text"
							placeholder="Name"
							className="border-2 border-black rounded mb-[0.1em] px-2 py-1 w-full"
						/>
						<p className="text-red-500 text-[0.8em] font-semibold min-h-[1em] italic">
							{errors.name?.message}
						</p>

						<label className="block font-semibold text-[#969696] text-[1em] md:text-left mb-1 md:mb-0 pr-4">
							Email
						</label>
						<input
							{...register("email")}
							type="text"
							placeholder="Email"
							className="border-2 border-black  rounded mb-[0.1em] px-2 py-1 w-full"
						/>
						<p className="text-red-500 text-[0.8em] font-semibold min-h-[1em] italic">
							{errors.email?.message}
						</p>

						<label className="block font-semibold text-[#969696] text-[1em] md:text-left mb-1 md:mb-0 pr-4">
							Contact Number
						</label>
						<input
							{...register("contact_no")}
							type="text"
							placeholder="Contact No"
							className="border-2 border-black rounded mb-[0.1em] px-2 py-1 w-full"
						/>
						<p className="text-red-500 text-[0.8em] font-semibold h-[1em] italic">
							{errors.contact_no?.message}
						</p>

						<label className="block font-semibold text-[#969696] text-[1em] md:text-left mb-1 md:mb-0 pr-4">
							SLIIT ID
						</label>
						<input
							{...register("it_no")}
							type="text"
							placeholder="SLIIT ID"
							className="border-2 border-black rounded mb-[0.1em] px-2 py-1 w-full"
						/>
						<p className="text-red-500 text-[0.8em] font-semibold min-h-[1em] italic">
							{errors.it_no?.message}
						</p>

						<div className="flex flex-row">
							<div className="mr-2 w-full">
								<label className="block font-semibold text-[#969696] text-[1em] md:text-left mb-1 md:mb-0 pr-4">
									Academic Year
								</label>
								<select
									{...register("academic_year")}
									defaultValue=""
									className="border-2 border-black rounded mb-[0.1em] py-1 px-1 cursor-pointer w-full"
								>
									<option value="">Choose</option>
									<option value="Year 01 Semester 01">
										Year 01 Semester 01
									</option>
									<option value="Year 01 Semester 02">
										Year 01 Semester 02
									</option>
									<option value="Year 02 Semester 01">
										Year 02 Semester 01
									</option>
									<option value="Year 02 Semester 02">
										Year 02 Semester 02
									</option>
									<option value="Year 03 Semester 01">
										Year 03 Semester 01
									</option>
								</select>
								<p className="text-red-500 text-[0.8em] font-semibold min-h-[1em] italic">
									{errors.academic_year?.message}
								</p>
							</div>

							<div className="w-full">
								<label className="block font-semibold text-[#969696] text-[1em] md:text-left mb-1 md:mb-0 pr-4">
									Faculty
								</label>
								<select
									{...register("faculty")}
									defaultValue=""
									className="border-2 border-black rounded mb-[0.1em] py-1 px-1 cursor-pointer w-full"
								>
									<option value="">Choose</option>
									<option value="Faculty of Computing">
										Faculty of Computing
									</option>
									<option value="Faculty of Engineering">
										Faculty of Engineering
									</option>
									<option value="Faculty of Business">
										Faculty of Business
									</option>
								</select>
								<p className="text-red-500 text-[0.8em] font-semibold min-h-[1em] italic">
									{errors.faculty?.message}
								</p>
							</div>
						</div>

						<br></br>
						<div className="w-full flex items-center justify-center">
							<button
								type="submit"
								disabled={status.state === "success"}
								className="mt-2 w-48 h-10 rounded bg-black text-white hover:bg-gray-300 hover:text-black transition duration-0 hover:duration-500"
							>
								Register
							</button>
						</div>
					</div>
				</form>
			</div>
			<TicketPopup
				ticketNo={ticket.number}
				student={{
					studentItNo: ticket.it_no,
					studentName: ticket.name,
				}}
				display={ticket.display}
				onRender={ticket.onRender}
				onClose={closePopup}
				ticketURL={
					"https://teams.microsoft.com/l/meetup-join/19%3ameeting_MWZlZGFhNTEtMWRhMC00MmUxLTkzNDYtMWRlZTBjNzA3ODc2%40thread.v2/0?context=%7b%22Tid%22%3a%2244e3cf94-19c9-4e32-96c3-14f5bf01391a%22%2c%22Oid%22%3a%22b1296a6a-951d-4c0f-ae2e-b9c9362465c6%22%7d"
				}
			/>
		</>
	);
}

export default AwarenessSession;
