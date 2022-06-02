import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { HiCheckCircle } from "react-icons/hi";

const TimelineComponent = (props) => (
	<VerticalTimelineElement
		className="vertical-timeline-element--work"
		contentStyle={{ color: "#000000" }}
		iconStyle={{ background: "#000000", color: "#fff" }}
		icon={<HiCheckCircle/>}
	>
		<h2 className="vertical-timeline-element-title" style={{color:"#000000", fontWeight:"bold"}}>{props.data && props.data.title}</h2>
		<h6 className="vertical-timeline-element-subtitle" style={{color:"#666666", fontWeight:"bold"}}>
		{props.data && props.data.dateTime}
		</h6>
		<p style={{color:"#666666", fontWeight:"normal"}}>
		{props.data && props.data.description}
		</p>
	</VerticalTimelineElement>
);

export default TimelineComponent;
