
import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import { TimelineComponent } from "../../components";
import "react-vertical-timeline-component/style.min.css";
import TimelineData from "../../data/Timeline.json";

const Timeline = () => (
	<div className="my-40" id = "timeline">
		<VerticalTimeline lineColor={"black"}>
			{TimelineData.data.map((singleTimelineDetails) => {
				return <TimelineComponent data={singleTimelineDetails}/>;
			})}
		</VerticalTimeline>
	</div>
);

export default Timeline;