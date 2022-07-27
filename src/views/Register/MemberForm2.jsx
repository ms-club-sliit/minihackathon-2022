import React from "react";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { useEffect } from "react";

const memberSchema = yup.object().shape({
	name: yup.string().required("Name is required."),
	email: yup
		.string()
		.email("Enter a valid SLIIT e-mail")
		.test("emailTest", "Email needs to be a valid SLIIT e-mail", (email) => {
			let arr = email.split("@");

			if (arr.length > 1) {
				return arr[1] === "my.sliit.lk";
			}

			return false;
		})
		.required("Email is required."),
	contact_no: yup
		.string()
		.matches(/[0-9]+/gi, "Enter Numbers only.")
		.min(10, "Contact Number must be at least 10 digits")
		.required("Contact number is required"),
	it_number: yup
		.string()
		.test("sliitIdTEst", "Enter a valid SLIIT ID", (itNumber) => {
			let prefixes = ["it", "en", "bm"];

			for (let p of prefixes) {
				if (itNumber.toLowerCase().startsWith(p)) {
					return true;
				}
			}

			return false;
		})
		.required("SLIIT ID is required."),
	academic_year: yup.string().required("Academic Year is required."),
	faculty: yup.string().required("Faculty is required."),
	image: yup.mixed(),
});

function MemberForm2({ formKey, handleSubmitFunc, resetFunc, width }) {
	const {
		register,
		handleSubmit,
		formState: { errors },
		reset,
	} = useForm({
		resolver: yupResolver(memberSchema),
	});
	const padded_key = String(formKey).padStart(2, "0");

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
			<h1 className="text-xl font-bold text-center">
				Member {String(formKey).padStart(2, "0")}{" "}
				{formKey === 1 ? "(Leader Details)" : "Details"}
			</h1>
			<form>
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
					SLIIT Email
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
				<p className="text-red-500 text-[0.8em] font-semibold min-h-[1em] italic">
					{errors.contact_no?.message}
				</p>

				<label className="block font-semibold text-[#969696] text-[1em] md:text-left mb-1 md:mb-0 pr-4">
					SLIIT ID
				</label>
				<input
					{...register("it_number")}
					type="text"
					placeholder="SLIIT ID"
					className="border-2 border-black rounded mb-[0.1em] px-2 py-1 w-full"
				/>
				<p className="text-red-500 text-[0.8em] font-semibold min-h-[1em] italic">
					{errors.it_number?.message}
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
							<option value="Year 01 Semester 01">Year 01 Semester 01</option>
							<option value="Year 01 Semester 02">Year 01 Semester 02</option>
							<option value="Year 02 Semester 01">Year 02 Semester 01</option>
							<option value="Year 02 Semester 02">Year 02 Semester 02</option>
							<option value="Year 03 Semester 01">Year 03 Semester 01</option>
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
							<option value="Faculty of Computing">Faculty of Computing</option>
							<option value="Faculty of Engineering">
								Faculty of Engineering
							</option>
							<option value="Faculty of Business">Faculty of Business</option>
						</select>
						<p className="text-red-500 text-[0.8em] font-semibold min-h-[1em] italic">
							{errors.faculty?.message}
						</p>
					</div>
				</div>
				<label className="block font-semibold text-[#969696] text-[1em] md:text-left mb-1 md:mb-0 pr-4">
					Member {padded_key} Profile Image
				</label>
				<input
					type="file"
					accept="image/*"
					placeholder={`member ${formKey} image`}
					{...register("image")}
				/>
				<p className="text-red-500 text-[0.8em] font-semibold min-h-[1em] italic">
					{errors.image?.message}
				</p>
			</form>
		</div>
	);
}

export default MemberForm2;
