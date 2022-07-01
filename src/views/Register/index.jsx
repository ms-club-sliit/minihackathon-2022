import React, { useState } from "react";
import { registerTeam } from "../../api/register";
import MemberForm2 from "./MemberForm2";
import NameForm from "./NameForm";

const Register = () => {
	const [status, setStatus] = useState({ state: "none", message: "" });
	const [currentIndex, setCurrentIndex] = useState(0);
	const form_count = 5;

	const [submitFunctions, setSubmitFunctions] = useState({});
	const [teamInfo, setTeamInfo] = useState({});

	const resetStatus = (timeout) => { 
        setTimeout(() => {
            setStatus({ state: "none", message: "" });
        }, timeout);
    }

	const finish = () => {
		console.log("finish");

		// If there was a missing form, just in case.
		for(let i = 1; i < 5; i++){
			console.log(i);
			if(!teamInfo[`member0${currentIndex}`]){
				setCurrentIndex(currentIndex);
				return;
			}
		}

		if(!teamInfo["teamName"]){
			setCurrentIndex(0);
			return;
		}
		setStatus({ state: "loading", message: "Please wait."});

		registerTeam(teamInfo)
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
			if(currentIndex == 0) {
				new_info = { ...prev, [`teamName`]: data };
			}else{
				new_info = { ...prev, [`member0${currentIndex}`]: data };
			}

			console.log(new_info);

			return new_info;
		})

		setCurrentIndex(prev => {
			if(prev < form_count - 1){
				let new_count = prev + 1;
				
				return new_count;
			}

			if(prev == form_count - 1){
				finish();
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

	return (
		<div className="w-50">
			<div className="w-[22em] md:w-[35em] rounded-[5px] p-[2em] md:p-[4em] relative border-2 border-gray-400 overflow-hidden">
				<div className={`${ status.state === "error" ? "bg-red-400" : "bg-green-400" } ${ status.state === "none" ? "hidden" : "" } absolute flex justify-center items-center top-0 right-0 w-full h-full p-[3em] z-10`}>
					<p className="text-center font-bold text-4xl mb-[1.5em]">{ status.message }</p>
				</div>
				<div className="h-full w-full overflow-hidden">
					<div className="w-[500%] h-full relative flex flex-row transition-all" style={{ transform: `translate(-${(100/form_count)*currentIndex}%)` }}> 
						<NameForm formKey={0} handleSubmitFunc={(i, f) => setSubmitFunctions(prev => { return { ...prev, [i]: f } })}/>
						<MemberForm2 formKey={1} handleSubmitFunc={(i, f) => setSubmitFunctions(prev => { return { ...prev, [i]: f } })}/>
						<MemberForm2 formKey={2} handleSubmitFunc={(i, f) => setSubmitFunctions(prev => { return { ...prev, [i]: f } })}/>
						<MemberForm2 formKey={3} handleSubmitFunc={(i, f) => setSubmitFunctions(prev => { return { ...prev, [i]: f } })}/>
						<MemberForm2 formKey={4} handleSubmitFunc={(i, f) => setSubmitFunctions(prev => { return { ...prev, [i]: f } })}/>
					</div>
				</div>
				
				<div className="w-full flex items-center justify-center">
					<button onClick={previous} className="mt-2 w-48 h-10 rounded bg-black text-white hover:bg-gray-300 hover:text-black transition duration-0 hover:duration-500 mr-4">
						previous
					</button>
					<button onClick={next} className="mt-2 w-48 h-10 rounded bg-black text-white hover:bg-gray-300 hover:text-black transition duration-0 hover:duration-500">
						Next
					</button>
				</div>
			</div>
		</div>
	);
};

export default Register;
