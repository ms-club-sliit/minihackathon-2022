import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { HiCheckCircle } from "react-icons/hi";

const TimelineComponent = (props) => (
	<VerticalTimelineElement
		className="vertical-timeline-element--work border-none"
		contentStyle={{ color: "#000000" }}
		iconClassName="bg-black text-white mt-3 md:mt-4"
		icon={<HiCheckCircle />}
	>
		<div className="text-xl font-semibold text-black lg:text-4xl md:text-3xl">
			{props.data && props.data.title}
		</div>
		<div className="text-gray-500 font-semibold text-md lg:text-2xl md:text-2xl">
			{props.data && props.data.dateTime}
		</div>
		<div className="text-sm lg:text-xl md:text-lg">
			{props.data && props.data.description}
		</div>
		{props.data.id === 1 && (
			<button className="mt-3 bg-white text-black border border-black hover:bg-gray-100 rounded lg:text-lg pl-4 pr-4 pt-1 pb-1 transition duration-0 hover:duration-500">
				📣 Book your tickets now
			</button>
		)}
		{props.data.id === 3 && (
			<button className="mt-3 bg-white text-black border border-black hover:bg-gray-100 rounded lg:text-lg pl-4 pr-4 pt-1 pb-1 transition duration-0 hover:duration-500">
				✍🏼 Register your team
			</button>
		)}
	</VerticalTimelineElement>
);

export default TimelineComponent;
