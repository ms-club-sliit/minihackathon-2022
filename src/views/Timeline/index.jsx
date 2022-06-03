import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { TimelineComponent } from "../../components";
import "react-vertical-timeline-component/style.min.css";
import TimelineData from "../../data/Timeline.json";

const Timeline = () => (
	<div id="timeline">
		<h1 className="text-4xl md:text-5xl text-center mb-5 font-bold">
			Timeline
		</h1>
		<VerticalTimeline lineColor={"black"}>
			{TimelineData.data.map((singleTimelineDetails) => {
				return <TimelineComponent data={singleTimelineDetails} />;
			})}
		</VerticalTimeline>
	</div>
);

export default Timeline;
