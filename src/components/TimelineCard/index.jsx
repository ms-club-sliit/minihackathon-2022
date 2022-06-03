import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { HiCheckCircle } from "react-icons/hi";

const TimelineComponent = (props) => (
	<VerticalTimelineElement
		className="vertical-timeline-element--work border-none"
		contentStyle={{ color: "#000000" }}
		iconClassName="bg-black text-white"
		icon={<HiCheckCircle />}
	>
		<div className="text-4xl font-bold text-black">
			{props.data && props.data.title}
		</div>
		<div className="text-gray-500 font-semibold text-xl">
			{props.data && props.data.dateTime}
		</div>
		<div className="text-md">{props.data && props.data.description}</div>
	</VerticalTimelineElement>
);

export default TimelineComponent;
