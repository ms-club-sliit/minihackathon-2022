import React from "react";

const TeamCard = () => {
    return (
        <div className="md:w-1/2 lg:w-96 p-4 bg-white border-inherit h-52 border rounded-lg mr-5 mb-5">
            <div className="grid grid-rows-1 grid-cols-11 items-center p-4 pt-2 pl-2">
                <div className="col-start-1 col-span-1">
                    <img
                        src="https://www.drodd.com/images16/black-color13.jpg"
                        className="max-w-sm md:h-[2.5rem] rounded-full h-10"
                        alt="Team Cats"
                    />
                </div>
                <div className="col-start-3 col-span-5">
                    <h1 className="text-xl font-bold">Team Cats</h1>
                </div>
                <div className="col-start-9 col-span-2">
                    <button
                        className="w-24 whitespace-nowrap rounded-full border-2 px-3 py-1 text-base md:text-gray-800">
                        1st Round
                    </button>
                </div>
            </div>
            <div className="p-4 pt-0 pl-2">
                <p className="text-gray-900 text-base font-medium mb-1">Senura Jayadeva</p>
                <p className="text-gray-900 text-base font-medium mb-1">
                    Lasal Hettiarachchi
                </p>
                <p className="text-gray-900 text-base font-medium mb-1">Rusiru Abhishek</p>
                <p className="text-gray-900 text-base font-medium mb-1">Dilmi Palliyaguru</p>
            </div>
        </div>
    );
};

export default TeamCard;
