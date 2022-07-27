import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

const memberSchema = yup.object().shape({
	team_name: yup.string().required("Team Name is required."),
	team_size: yup
		.number()
		.required("Please enter the team size.")
		.min(3, "Team size needs to be 3 or 4.")
		.max(4),
	link: yup
		.string()
		.test("is-url-valid", "Enter a correct URL", (url) => {
			try {
				new URL(url);
			} catch (e) {
				return false;
			}
			return true;
		})
		.required("URL is required"),
});

function NameForm({ formKey, handleSubmitFunc, width, resetFunc }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(memberSchema),
	});

	useEffect(() => {
		handleSubmitFunc &&
			handleSubmitFunc(formKey, () => {
				return new Promise((resolve, reject) => {
					handleSubmit(
						(data) => {
							resolve(data);
						},
						() => {
							resolve(null);
						}
					)();
				});
			});

		resetFunc && resetFunc(formKey, reset);
	}, []); // eslint-disable-line react-hooks/exhaustive-deps

	return (
		<div className="h-full" style={{ width: width || "20%" }}>
			<h1 className="text-xl font-bold text-center">Team details</h1>
			<label className="block font-semibold text-[#969696] text-[1em] md:text-left mb-1 md:mb-0 pr-4">
				Team Name
			</label>
			<input
				{...register("team_name")}
				type="text"
				placeholder="Team Name"
				className="border-2 border-black rounded mb-[0.1em] px-2 py-1 w-full"
			/>
			<p className="text-red-500 text-[0.8em] font-semibold min-h-[1em] italic">
				{errors.team_name?.message}
			</p>

			<label className="block font-semibold text-[#969696] text-[1em] md:text-left mb-1 md:mb-0 pr-4">
				Team Size
			</label>
			<select
				{...register("team_size")}
				defaultValue=""
				className="border-2 border-black rounded mb-[0.1em] py-1 px-1 cursor-pointer w-full"
			>
				<option value="0">Choose</option>
				<option value="3">3</option>
				<option value="4">4</option>
			</select>
			<p className="text-red-500 text-[0.8em] font-semibold min-h-[1em] italic">
				{errors.team_size?.message}
			</p>

			<label className="block font-semibold text-[#969696] text-[1em] md:text-left mb-1 md:mb-0 pr-4">
				OneDrive / Google Drive link
			</label>
			<input
				{...register("link")}
				type="text"
				placeholder="Link"
				className="border-2 border-black rounded mb-[0.1em] px-2 py-1 w-full"
			/>
			<p className="text-red-500 text-[0.8em] font-semibold min-h-[1em] italic">
				{errors.link?.message}
			</p>
		</div>
	);
}

export default NameForm;
