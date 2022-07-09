import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";
import { Ticket } from "..";
import TeamTicket from "../TeamTicket";
/**T
 * @param {Object} param
 * @param {number} param.ticketNo
 * @param {number} param.isTeam
 * @param {Object} param.student
 * @param {string} param.student.studentItNo
 * @param {string} param.student.studentName
 * @param {Object} param.team
 * @param {string} param.team.studentNames
 * @param {boolean} param.display
 */

function TicketPopup({
	ticketNo,
    isTeam,
	student,
    team,
	display,
	onRender,
	onClose,
    ticketURL,
}) {

    const [opacity, setOpacity] = useState(0);
    const ticketRef = useRef(null);

    useEffect(() => {
        if(display){
            setTimeout(() => {
                setOpacity(1)
            }, 500);
        }else{
            setOpacity(0)
        }
    }, [display]);

    const saveTicket = async() => {
        if(!ticketRef.current)
            return;
        
        try{
            let dataURL = await ticketRef.current.renderTicket();
            const link = document.createElement("a");
            link.download = `ticket.png`;
            link.href = dataURL;
            link.click();
        }catch(e){

        }
    }

	return (
		<div
			className={`fixed w-screen h-screen top-0 left-0 bg-[#000000d9] pb-[4em] flex flex-col items-center backdrop-blur-md overflow-y-auto ${
				display ? "z-[10]" : "z-[-2]"
			}`}
            style={{
                opacity: opacity,
                transition: "opacity 500ms"
            }}
		>
			<h1 className="text-center font-bold text-4xl mb-[2em] mt-[3em] text-white px-4">
				You have successfully registered {isTeam ? "for the Mini Hackathon 2022" : "for the Awareness Session"}! <br></br>Here's your
				ticket. Share everywhere!
			</h1>
			<h2 className="text-md text-white mb-[1em]">
				{" "}
				Check your email for more information.
			</h2>
			<div>
				{ isTeam ? 
                    <TeamTicket
                        headerImage={"/assets/ms_club_logo.png"}
                        title="Mini Hackathon 2022"
                        subTitle="Team Registration 📣"
                        date={new Date()}
                        ticketNo={ticketNo}
                        team={team}
                        onRender={onRender}
                        url={ticketURL}
                        ref={ticketRef}
                    /> 
                    : 
                    <Ticket
                        headerImage={"/assets/ms_club_logo.png"}
                        title="Mini Hackathon 2022"
                        subTitle="Awareness Session 📣"
                        date={new Date()}
                        ticketNo={ticketNo}
                        studentItNo={student.studentItNo}
                        studentName={student.studentName}
                        onRender={onRender}
                        url={ticketURL}
                        ref={ticketRef}
                    />
                }
			</div>
            <div className="mt-5">
                <button
                    onClick={saveTicket}
                    type="submit"
                    className="flex-shrink-0 mt-2 mr-5 w-24 h-10 rounded bg-black text-white hover:bg-gray-300 hover:text-black transition duration-0 hover:duration-500"
                >
                    Save
                </button>
                <button
                    onClick={() => onClose && onClose()}
                    type="submit"
                    className="flex-shrink-0 mt-2 w-24 h-10 rounded bg-black text-white hover:bg-gray-300 hover:text-black transition duration-0 hover:duration-500"
                >
                    Close
                </button>
            </div>
		</div>
	);
}

export default TicketPopup;