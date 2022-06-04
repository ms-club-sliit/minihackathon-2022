import React from "react";

const MemberForm = (props) => {
	return (
		<div>
			<h6>Member {props.id}</h6>
			<label className="block text-gray-500 font-light text-sm md:text-left mb-1 md:mb-0 pr-4">
				Name
			</label>
			<input
				type="text"
				placeholder={`member ${props.id} name`}
				value={props.name}
				onChange={(e) => props.onNameChange(e.target.value)}
				className="bg-gray-200 border-2 rounded px-2 mb-1"
			/>

			<label className="block text-gray-500 font-light text-sm md:text-left mb-1 md:mb-0 pr-4">
				Email
			</label>
			<input
				type="text"
				placeholder={`member ${props.id} email`}
				value={props.email}
				onChange={(e) => props.onEmailChange(e.target.value)}
				className="bg-gray-200 border-2 rounded px-2 mb-1"
			/>

			<label className="block text-gray-500 font-light text-sm md:text-left mb-1 md:mb-0 pr-4">
				Contact No
			</label>
			<input
				type="text"
				placeholder={`member ${props.id} contact no`}
				value={props.contactNumber}
				onChange={(e) => props.onContactNoChange(e.target.value)}
				className="bg-gray-200 border-2 rounded px- mb-1"
			/>

			<label className="block text-gray-500 font-light text-sm md:text-left mb-1 md:mb-0 pr-4">
				IT Number
			</label>
			<input
				type="text"
				placeholder={`member ${props.id} IT no`}
				value={props.itNumber}
				onChange={(e) => props.onItNoChange(e.target.value)}
				className="bg-gray-200 border-2 rounded px-2 mb-1"
			/>

			<label className="block text-gray-500 font-light text-sm md:text-left mb-1 md:mb-0 pr-4">
				Academic Year
			</label>
			<select
				value={props.academicYear}
				onChange={(e) => props.onAcademicChange(e.target.value)}
				className="bg-gray-200 border-2 rounded px-1 mb-1"
			>
				<option value="Year 01 Semester 01">Year 01 Semester 01</option>
				<option value="Year 01 Semester 02">Year 01 Semester 02</option>
				<option value="Year 02 Semester 01">Year 02 Semester 01</option>
				<option value="Year 02 Semester 02">Year 02 Semester 02</option>
				<option value="Year 03 Semester 01">Year 03 Semester 01</option>
			</select>

			<label className="block text-gray-500 font-light text-sm md:text-left mb-1 md:mb-0 pr-4">
				Faculty
			</label>
			<select
				value={props.faculty}
				onChange={(e) => props.onFacultyChange(e.target.value)}
				className="bg-gray-200 border-2 rounded px-1 mb-1"
			>
				<option value="Faculty of Computing">Faculty of Computing</option>
				<option value="Faculty of Engineering">Faculty of Engineering</option>
				<option value="Faculty of Business">Faculty of Business</option>
			</select>

			<label className="block text-gray-500 font-light text-sm md:text-left mb-1 md:mb-0 pr-4">
				Member {props.id} Profile Image
			</label>
			<input
				type="file"
				accept="image/*"
				placeholder={`member ${props.id} image`}
				onChange={(e) => props.onImageChange(e.target.files[0])}
			/>
		</div>
	);
};

export default MemberForm;
