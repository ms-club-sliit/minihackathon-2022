import React from "react";

const PaginateButton = ({ title, handleOnClick, disabled }) => {
	return (
		<button
			className="border-2 border-black  rounded-full px-3 py-1 hover:bg-black hover:text-white duration-300 disabled:bg-slate-300 disabled:border-slate-300 disabled:text-gray-500"
			onClick={handleOnClick}
			disabled={disabled}
		>
			{title}
		</button>
	);
};

export default PaginateButton;
