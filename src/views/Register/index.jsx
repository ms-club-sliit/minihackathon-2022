import React, { useState } from "react";
import { registerTeam } from "../../api/register";
import MemberForm2 from "./MemberForm2";
import NameForm from "./NameForm";

const Register = () => {
	const [status, setStatus] = useState({ state: "none", message: "" });
	const [currentIndex, setCurrentIndex] = useState(0);

	// Members are scalable using the default value. (5 forms, with the first one being team name and team count.)
	const [memberCount, setMemberCount] = useState(4);

	const [submitFunctions, setSubmitFunctions] = useState({});
	const [, setTeamInfo] = useState({});

	const resetStatus = (timeout) => { 
        setTimeout(() => {
            setStatus({ state: "none", message: "" });
        }, timeout);
    }

	const finish = (tInfo) => {
		setStatus({ state: "loading", message: "Please wait."});

		registerTeam(tInfo)
			.then(() => {
				setStatus({ state: "success", message: "Nice job 👏🏼. You have successfully submit the registration form"});
				resetStatus(3000);
			})
			.catch(() => {
				setStatus({ state: "error", message: "Hmm... 🤔 something went wrong. Please try again"});
				resetStatus(3000);
			});
	}

	const next = async() => {
		console.log(currentIndex);
		const data = await submitFunctions[currentIndex]();
		if(!data){
			return;
		}

		setTeamInfo(prev => {
			let new_info;
			// Handle the teamName form
			if(currentIndex === 0) {
				new_info = { ...prev, [`teamName`]: data.teamName };
				setMemberCount(data.count);
			}else{
				new_info = { ...prev, [`member0${currentIndex}`]: data };
			}

			console.log(new_info);
			
			// Finish the form and submit
			if(currentIndex === memberCount){
				finish(new_info);
				return new_info;
			}

			return new_info;
		})

		setCurrentIndex(prev => {
			if(prev < memberCount){
				let new_count = prev + 1;
				
				return new_count;
			}

			return prev;
		});
	}

	const previous = () => {
		setCurrentIndex(prev => {
			console.log(prev);
			if(prev > 0){
				let new_count = prev - 1;
				return new_count;
			}

			return prev
		});
	}

	const arr = new Array(memberCount).fill(null);

	return (
		<div className="w-full h-full flex flex-col justify-center items-center">
			<h1 className="text-center font-bold text-4xl mb-[1.5em] mt-[2em]">Team Registration</h1>
			<div className="rounded-[5px] border-2 border-gray-400 overflow-hidden">
				<div className="w-[22em] md:w-[35em] p-[2em] md:p-[4em] relative overflow-hidden">
					<div className={`${ status.state === "error" ? "bg-red-400" : "bg-green-400" } ${ status.state === "none" ? "hidden" : "" } absolute flex justify-center items-center top-0 right-0 w-full h-full p-[3em] z-10`}>
						<p className="text-center font-bold text-4xl mb-[1.5em]">{ status.message }</p>
					</div>
					<div className="h-full w-full overflow-hidden">
						<div className="h-full relative flex flex-row transition-all" style={{ transform: `translate(-${(100/(memberCount + 1))*currentIndex}%)`, width: `${100*(memberCount + 1)}%` }}> 
							<NameForm formKey={0} width={`${100/(memberCount + 1)}%`} handleSubmitFunc={(i, f) => setSubmitFunctions(prev => { return { ...prev, [i]: f } })}/>
							{
								arr.map((v,i) => {
									return <MemberForm2 key={i} formKey={i+1} width={`${100/(memberCount + 1)}%`} handleSubmitFunc={(i, f) => setSubmitFunctions(prev => { return { ...prev, [i]: f } })}/> 
								})
							}
						</div>
					</div>
					
					<div className="w-full flex items-center justify-center">
						<button onClick={previous} className="mt-2 w-48 h-10 rounded bg-black text-white hover:bg-gray-300 hover:text-black transition duration-0 hover:duration-500 mr-4">
							previous
						</button>
						<button onClick={next} className={`${currentIndex === memberCount ? "bg-[#F2E782] text-black" : "text-white"} mt-2 w-48 h-10 rounded bg-black hover:bg-gray-300 hover:text-black transition duration-0 hover:duration-500`}>
							{ currentIndex === memberCount ? "Finish" : "Next" }
						</button>
					</div>
				</div>
				<div className="h-2 bg-[#F2E782] transition-all" style={{ width: `${currentIndex*100/(memberCount)}%` }}></div>
			</div>
			
		</div>
	);
};

export default Register;
