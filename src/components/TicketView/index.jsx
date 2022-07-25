import React, { useEffect, useState } from "react";
import { getTeam } from "../../api/team";
import TicketPopup from "../TicketPopup"
import { GrClose } from "react-icons/gr";

function TicketView({ number, isTeam, onClose }) {
    const [currentView, setCurrentView] = useState(null);

    useEffect(() => {
        async function effect() {
            if(isTeam) {
                setCurrentView(await getTeamTicket(number));
            }
        }

        effect()
    }, [])

    const getTeamTicket = async (number) => {
        let data = await getTeam(number);
        return (
            <TicketPopup
                team={data}
                ticketNo={data.number} 
                isTeam   
                display={true}
                minimal
                onClose={onClose}
            />
        )
    }

    return (
        <div className="fixed top-0 right-0 w-full h-full items-center p-4">
            <div className="w-full h-full bg-[#000000cc] backdrop-blur-md rounded-lg overflow-auto">
                <div className="w-full flex">
                    <div className="flex-grow"></div>
                    <button className="p-3 m-2 rounded bg-white cursor-pointer" onClick={() => { onClose && onClose() }}>
                        <GrClose size={48} color="white"/>
                    </button>
                </div>

                <div className="w-full flex-grow mt-10 flex flex-col justify-center">
                    {currentView}
                </div>
            </div>
        </div>
    )
}

export default TicketView;