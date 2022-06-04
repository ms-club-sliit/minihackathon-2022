import React, { useState } from "react";
import MemberForm from "./MemberForm";
import { saveTeamInfo } from "../../api/register";

const Register = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [teamName, setTeamName] = useState("");
	const [member01Name, setMember01Name] = useState("");
	const [member01Email, setMember01Email] = useState("");
	const [member01ContactNo, setMember01ContactNo] = useState("");
	const [member01ItNo, setMember01ItNo] = useState("");
	const [member01AcademicYear, setMember01AcademicYear] = useState(
		"Year 01 Semester 01"
	);
	const [member01Faculty, setMember01Faculty] = useState(
		"Faculty of Computing"
	);
	const [member01Image, setMember01Image] = useState(null);

	const [member02Name, setMember02Name] = useState("");
	const [member02Email, setMember02Email] = useState("");
	const [member02ContactNo, setMember02ContactNo] = useState("");
	const [member02ItNo, setMember02ItNo] = useState("");
	const [member02AcademicYear, setMember02AcademicYear] = useState(
		"Year 01 Semester 01"
	);
	const [member02Faculty, setMember02Faculty] = useState(
		"Faculty of Computing"
	);
	const [member02Image, setMember02Image] = useState(null);

	const [member03Name, setMember03Name] = useState("");
	const [member03Email, setMember03Email] = useState("");
	const [member03ContactNo, setMember03ContactNo] = useState("");
	const [member03ItNo, setMember03ItNo] = useState("");
	const [member03AcademicYear, setMember03AcademicYear] = useState(
		"Year 01 Semester 01"
	);
	const [member03Faculty, setMember03Faculty] = useState(
		"Faculty of Computing"
	);
	const [member03Image, setMember03Image] = useState(null);

	const [member04Name, setMember04Name] = useState("");
	const [member04Email, setMember04Email] = useState("");
	const [member04ContactNo, setMember04ContactNo] = useState("");
	const [member04ItNo, setMember04ItNo] = useState("");
	const [member04AcademicYear, setMember04AcademicYear] = useState(
		"Year 01 Semester 01"
	);
	const [member04Faculty, setMember04Faculty] = useState(
		"Faculty of Computing"
	);
	const [member04Image, setMember04Image] = useState(null);

	const onSubmit = (event) => {
		event.preventDefault();

		setIsLoading(true);
		const teamInfo = {
			teamName: teamName,
			member01: {
				name: member01Name,
				email: member01Email,
				contactNumber: member01ContactNo,
				itNumber: member01ItNo,
				academicYear: member01AcademicYear,
				image: member01Image,
				faculty: member01Faculty,
			},
			member02: {
				name: member02Name,
				email: member02Email,
				contactNumber: member02ContactNo,
				itNumber: member02ItNo,
				academicYear: member02AcademicYear,
				image: member02Image,
				faculty: member02Faculty,
			},
			member03: {
				name: member03Name,
				email: member03Email,
				contactNumber: member03ContactNo,
				itNumber: member03ItNo,
				academicYear: member03AcademicYear,
				image: member03Image,
				faculty: member03Faculty,
			},
			member04: {
				name: member04Name,
				email: member04Email,
				contactNumber: member04ContactNo,
				itNumber: member04ItNo,
				academicYear: member04AcademicYear,
				image: member04Image,
				faculty: member04Faculty,
			},
		};

		saveTeamInfo(teamInfo)
			.then(() => {
				setIsLoading(false);
				alert(
					"Nice job 👏🏼. You have successfully submit the registration form"
				);
			})
			.catch(() => {
				setIsLoading(false);
				alert("Hmm... 🤔 something went wrong. Please try again");
			});
	};

	return (
		<div className="w-50">
			<div className="flex justify-center">
				<label className="block text-gray-500 font-light text-sm md:text-left mb-1 md:mb-0 pr-4">
					Team Name
				</label>
				<input
					type="text"
					placeholder="team name"
					value={teamName}
					onChange={(e) => setTeamName(e.target.value)}
					className="bg-gray-200 border-2 rounded px-2 mb-3"
				/>
			</div>

			<div className="row">
				<div className="flex">
					<MemberForm
						id="01"
						name={member01Name}
						email={member01Email}
						contactNumber={member01ContactNo}
						itNumber={member01ItNo}
						academicYear={member01AcademicYear}
						faculty={member01Faculty}
						onNameChange={(value) => setMember01Name(value)}
						onEmailChange={(value) => setMember01Email(value)}
						onContactNoChange={(value) => setMember01ContactNo(value)}
						onItNoChange={(value) => setMember01ItNo(value)}
						onAcademicChange={(value) => setMember01AcademicYear(value)}
						onFacultyChange={(value) => setMember01Faculty(value)}
						onImageChange={(value) => setMember01Image(value)}
					/>

					<MemberForm
						id="02"
						name={member02Name}
						email={member02Email}
						contactNumber={member02ContactNo}
						itNumber={member02ItNo}
						academicYear={member02AcademicYear}
						faculty={member02Faculty}
						onNameChange={(value) => setMember02Name(value)}
						onEmailChange={(value) => setMember02Email(value)}
						onContactNoChange={(value) => setMember02ContactNo(value)}
						onItNoChange={(value) => setMember02ItNo(value)}
						onAcademicChange={(value) => setMember02AcademicYear(value)}
						onFacultyChange={(value) => setMember02Faculty(value)}
						onImageChange={(value) => setMember02Image(value)}
					/>
				</div>
				<div className="flex mt-8">
					<MemberForm
						id="03"
						name={member03Name}
						email={member03Email}
						contactNumber={member03ContactNo}
						itNumber={member03ItNo}
						academicYear={member03AcademicYear}
						faculty={member03Faculty}
						onNameChange={(value) => setMember03Name(value)}
						onEmailChange={(value) => setMember03Email(value)}
						onContactNoChange={(value) => setMember03ContactNo(value)}
						onItNoChange={(value) => setMember03ItNo(value)}
						onAcademicChange={(value) => setMember03AcademicYear(value)}
						onFacultyChange={(value) => setMember03Faculty(value)}
						onImageChange={(value) => setMember03Image(value)}
					/>

					<MemberForm
						id="04"
						name={member04Name}
						email={member04Email}
						contactNumber={member04ContactNo}
						itNumber={member04ItNo}
						academicYear={member04AcademicYear}
						faculty={member04Faculty}
						onNameChange={(value) => setMember04Name(value)}
						onEmailChange={(value) => setMember04Email(value)}
						onContactNoChange={(value) => setMember04ContactNo(value)}
						onItNoChange={(value) => setMember04ItNo(value)}
						onAcademicChange={(value) => setMember04AcademicYear(value)}
						onFacultyChange={(value) => setMember04Faculty(value)}
						onImageChange={(value) => setMember04Image(value)}
					/>
				</div>
			</div>

			<div className="flex justify-center mt-8">
				<button
					className="bg-blue-400 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
					onClick={(e) => onSubmit(e)}
					disabled={isLoading}
				>
					{isLoading ? "Submitting..." : "Submit Application"}
				</button>
			</div>
		</div>
	);
};

export default Register;
